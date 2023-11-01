/* eslint-disable promise/param-names */
import type { ReadStream } from 'node:fs'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { v2 } from 'cloudinary'
import sharp = require('sharp')
import toStream = require('buffer-to-stream')
import type { FileUpload } from 'graphql-upload-ts'
import type { CloudinaryResult } from './cloudinary.types'

@Injectable()
export class CloudinaryService {
  async uploadImage (
    { createReadStream }: FileUpload,
    quality: number = 70
  ): Promise<CloudinaryResult> {
    const stream: ReadStream = createReadStream()
    const chunks = []
    const buffer = await new Promise<Buffer>((res, rej) => {
      let buffer: Buffer

      stream.on('data', (chunck) => {
        chunks.push(chunck)
      })
      stream.on('end', () => {
        buffer = Buffer.concat(chunks)
        res(buffer)
      })
      stream.on('error', rej)
    })
    const optimizedImg = await sharp(buffer)
      .webp({ quality })
      .toBuffer()
      .catch((err) => {
        console.error(err)
        throw new InternalServerErrorException('Could not resolve buffer')
      })

    return await new Promise((res, rej) => {
      const upload = v2.uploader.upload_stream((err, result) => {
        if (err) return rej(err)
        res(result)
      })

      toStream(optimizedImg).pipe(upload)
    })
  }
}

import {
  descriptionRegex,
  emailRegex,
  firstNameRegex,
  lastNameRegex,
  maxApplicantsRegex,
  passwordRegex,
  titleRegex,
  usernameRegex
} from './regex.utils'

interface Pattern {
  value: RegExp
  message: string
}

export const firstNamePattern: Pattern = {
  value: firstNameRegex,
  message: 'First name must be at least 2 characters long'
}

export const lastNamePattern: Pattern = {
  value: lastNameRegex,
  message: 'Last name must be at least 2 characters long'
}

export const emailPattern: Pattern = {
  value: emailRegex,
  message: 'Please enter a valid email address'
}

export const passwordPattern: Pattern = {
  value: passwordRegex,
  message:
    'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
}

export const usernamePattern: Pattern = {
  value: usernameRegex,
  message: 'Username must be at least 2 characters long'
}

// ------------------------------ //

export const titlePattern: Pattern = {
  value: titleRegex,
  message:
    'Title must be only letters and numbers, and at least 2 characters long'
}

export const descriptionPattern: Pattern = {
  value: descriptionRegex,
  message:
    'Description must be only letters and numbers, and at least 2 characters long'
}

export const maxApplicantsPattern: Pattern = {
  value: maxApplicantsRegex,
  message: 'Max applicants must be a number and max 10 digits long'
}

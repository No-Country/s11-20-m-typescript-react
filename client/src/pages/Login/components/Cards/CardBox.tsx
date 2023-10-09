import {Card, CardHeader, CardBody, Avatar, Skeleton} from '@nextui-org/react'
import { CardBoxProps } from '../../../../interfaces/user'


export const CardBox =({user}:CardBoxProps) => {

  return (
    <Card className="py-4 mt-2 w-[200px] bg-slate-400" >
      <Skeleton/>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{user.lastName}</p>
        <small className="text-default-500">{user.firstName}</small>
        <h4 className="font-bold text-large">{user.username}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Avatar isBordered radius='full'    
          src={user.profileImage}
        />
      </CardBody>
    </Card>
  )
}


export interface User {
    username:string
    firstName:string  
    lastName:string
    profileImage:string
  }
  
export interface UserData {
    users: User[]
  }

export interface CardBoxProps {
    user: User;
  }
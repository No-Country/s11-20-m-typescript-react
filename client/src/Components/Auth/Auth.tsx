import { Button } from '@nextui-org/react';
import logo from '../../assets/logo.png';
import { Link } from '@nextui-org/react';
import close from '../../assets/close.png';
import login from '../../assets/login.png';
import register from '../../assets/register.png';
import './login.css';

interface LoginProps {
  children: React.ReactNode | JSX.Element;
}

export const Auth = ({ children }: LoginProps) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-image-container relative">

        <div className='flex flex-col'>

            <Link href='/login'>
              <Button className='w-[70px] h-[138px] bg-white rounded-tl-xl hover:bg-blue-200' radius='none' style={{display: "flex", flexDirection: "column"}}>
                <img src={login} alt="Starting menu link (login)"/>
                <span className='font-semibold'>Start</span>
              </Button>
            </Link>

            <Link href='/register'>
              <Button className='w-[70px] h-[138px] bg-white rounded-bl-xl hover:bg-blue-200' radius='none' style={{display: "flex", flexDirection: "column"}}>
                <img src={register} alt="Starting menu link (register)"/>
                <span className='font-semibold'>Register</span>
              </Button>
            </Link>

        </div>

        <div className="flex flex-row justify-center w-[830px] h-[630px] bg-white rounded-[24px] relative">

          <div className="flex flex-col justify-center items-start w-1/2">
            <img draggable="false" src={'https://placehold.co/367x585'} alt="image" style={{ borderRadius: '16px' }} />
          </div>

          <div className='flex flex-col justify-around h-auto w-max'>

            <div className="flex flex-col justify-center items-end w-auto">
              <Link href='/'>
                <img src={close} alt="Close user menu"/>
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center h-max">
              <img draggable="false" src={logo} alt="Logo" className="" width="40%" style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "50px", userSelect: "none"}} />
                {children}
            </div>

          </div>

        </div>

      </div>
      
    </>
  )
}
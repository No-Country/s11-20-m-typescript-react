import { FormLogin } from './components/FormLogin/FormLogin'


export const Login = () => { 
  return (
    <>

      <div className="flex justify-center items-center min-h-screen">
        <div className="w-[830px] h-[630px] bg-gray-200 rounded-[24px] p-6">
          <div className='flex flex-row'>

            <div className='flex w-1/2 justify-center align-middle text-center'>

            </div>

            <div className='flex flex-col w-1/2  align-middle text-center'>
              <FormLogin/>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}


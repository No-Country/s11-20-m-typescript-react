import { NavLink } from 'react-router-dom'
import ayuda from '@/assets/botones/ayuda.png'
import { UtilRoutes } from '@/utils/routes.utils'

const TopBar = (props: any) => (
  <header
    style={{
      height: '64px',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      backgroundColor: '#E5E5E5'
    }}
  >
    <div
      style={{
        marginLeft: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <NavLink to={props.ruta} className='font-inter fill-black'>
        Panel
      </NavLink>
    </div>

    <div
      style={{
        marginRight: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px'
      }}
    >
      <NavLink to={UtilRoutes.HELP}>
        <img title='Ayuda' src={ayuda} alt='Sidebark link (Ayuda)' />
      </NavLink>

      <NavLink to={UtilRoutes.DONATE}>
        {({ isActive }) => (
          <button
            className={
              isActive
                ? 'font-inter bg-teal-800 rounded-md hover:bg-teal-700'
                : 'font-inter bg-teal-800 hover:bg-teal-700'
            }
            style={{
              width: '78px',
              height: '40px',
              color: 'white',
              fontSize: '16px',
              borderRadius: '20px'
            }}
          >
            Donar
          </button>
        )}
      </NavLink>
    </div>
  </header>
)

export default TopBar

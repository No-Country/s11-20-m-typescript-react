import { NavLink } from 'react-router-dom'

const Bottom = (props: any) => (
  <NavLink to={props.ruta}>
    {({ isActive }) => (
      <button
        className={
          isActive
            ? 'bg-teal-800 hover:bg-teal-700'
            : 'bg-white hover:bg-teal-700 hover:text-white'
        }
        style={{
          width: '190px',
          height: '48px',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          alignItems: 'center',
          borderRadius: '20px'
        }}
      >
        <img
          src={isActive ? props.iconlight : props.icondark}
          alt='Sidebark link (Panel)'
        />
        <span
          className={
            isActive
              ? 'font-inter font-medium text-white'
              : 'font-inter font-medium text-gray-800 hover:text-white'
          }
          style={{ fontSize: '20px' }}
        >
          {props.texto}
        </span>
      </button>
    )}
  </NavLink>
)

export default Bottom

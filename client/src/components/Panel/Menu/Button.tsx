/* eslint-disable @typescript-eslint/indent */
import { NavLink } from 'react-router-dom'
import type { TopProps } from './topItems.lib'
import { useState } from 'react'

const MenuButton = (props: TopProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <NavLink to={props.ruta} className='w-full'>
      {({ isActive }) => {
        const iconSrc = isActive
          ? props.iconlight
          : isHovered
          ? props.iconlight
          : props.icondark
        return (
          <button
            className={`
          w-full h-auto text-base items-center flex rounded-3xl gap-2 py-3 px-6 font-inter font-medium
          ${
            isActive
              ? 'bg-teal-800  hover:bg-teal-700   text-white'
              : 'bg-white  hover:bg-teal-700   text-gray-800 hover:text-white'
          }`}
            onMouseEnter={() => {
              setIsHovered(true)
            }}
            onMouseLeave={() => {
              setIsHovered(false)
            }}
          >
            <img
              src={iconSrc}
              alt='Sidebark link (Panel)'
              className='aspect-square h-[20px] w-[20px] '
            />
            {props.texto}
          </button>
        )
      }}
    </NavLink>
  )
}

export default MenuButton

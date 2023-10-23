import { NavLink } from "react-router-dom"

function Top (props: any) {

  return (

    <NavLink
      to={props.ruta}>

      {({isActive}) => (

        <button className={isActive ? "bg-teal-800 rounded-md hover:bg-teal-700" : "bg-white rounded-lg hover:bg-teal-700"} style={{width: "170px", height: "48px", display: "flex", alignItems: "center", justifyContent: "start", gap: "20px"}}>
          <img style={{marginLeft: "20px"}} src={isActive ? props.iconlight: props.icondark} alt="Sidebark link (Panel)" />
          <span className={isActive ? "font-inter font-medium text-white" : "font-inter font-medium text-gray-800"} style={{fontSize: "20px"}}>{props.texto}</span>
    
        </button>

      )}

    </NavLink>

  )

}

export default Top
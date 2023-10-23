import { NavLink } from "react-router-dom"

function TopButton (props: any) {

  return (

    <NavLink
      to={props.ruta}
      style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "30px", justifyContent: "center"}}
      type="button"
    >

      {({isActive}) => (

        <button className={isActive ? "bg-teal-800 rounded-md hover:bg-teal-700" : "bg-white rounded-md hover:bg-teal-700"} style={{width: "190px", height: "48px", display: "flex", alignItems: "center", justifyContent: "start", gap: "40px"}}>
          <img style={{marginLeft: "20px"}} src={isActive ? props.iconlight: props.icondark} alt="Sidebark link (Panel)" />
          <span className={isActive ? "font-inter font-medium text-white" : "font-inter font-medium text-gray-800"} style={{fontSize: "20px"}}>{props.texto}</span>
    
        </button>

      )}

    </NavLink>

  )

}

export default TopButton
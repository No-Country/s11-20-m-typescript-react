import { NavLink } from "react-router-dom";
import ayuda from "../../../assets/botones/ayuda.png"

export default function TopBar (props:any) {

  return (

    <header style={{height: "64px", display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", backgroundColor: "#E5E5E5"}}>

      <div style={{marginLeft: "60px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <NavLink to={props.ruta} className="font-inter fill-black">Panel</NavLink>
      </div>


      <div style={{marginRight: "60px", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px"}}>

      <NavLink
      to="/help">
        <img title="Ayuda" src={ayuda} alt="Sidebark link (Ayuda)" />
      </NavLink>

      <NavLink
      to="/donate">

      {({isActive}) => (

        <button className={isActive ? "font-inter bg-teal-800 rounded-md hover:bg-teal-700" : "font-inter bg-teal-800 rounded-md hover:bg-teal-700"} style={{width: "78px", height: "40px", color: "white", fontSize: "16px"}}>Donar</button>

      )}

      </NavLink>


      </div>

    </header>

  );

}
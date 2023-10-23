import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom"
import TopButton from "./SidebarButtons/TopButton"
import BottomButton from "./SidebarButtons/BottomButton"
import panel_light from "../../../assets/botones/panel_light.png"
import panel_dark from "../../../assets/botones/panel_dark.png"
import logros_light from "../../../assets/botones/logros_light.png"
import logros_dark from "../../../assets/botones/logros_dark.png"
import eventos_light from "../../../assets/botones/eventos_light.png"
import eventos_dark from "../../../assets/botones/eventos_dark.png"
import beneficios_light from "../../../assets/botones/beneficios_light.png"
import beneficios_dark from "../../../assets/botones/beneficios_dark.png"
import configuracion_light from "../../../assets/botones/configuracion_light.png"
import configuracion_dark from "../../../assets/botones/configuracion_dark.png"
import cerrarsesion_light from "../../../assets/botones/cerrarsesion_light.png"
import cerrarsesion_dark from "../../../assets/botones/cerrarsesion_dark.png"


function Sidebar () {

  return (

    <section style={{backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "100vh",}}>

      <div style={{marginBottom: "70px", marginTop: "30px", display: "flex", justifyContent: "center", alignItems: "center", }}>
        <Link to="/" style={{userSelect: "none"}}>
          <img src={logo} alt="Logo" title="Logo" height="41px" width="95px" />
        </Link>
      </div>

      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "40px", gap: "20px", }}>

        <TopButton ruta={"/"} texto={"Panel"} iconlight={panel_light} icondark={panel_dark} />
        <TopButton ruta={"/logros"} texto={"Logros"} iconlight={logros_light} icondark={logros_dark} />
        <TopButton ruta={"/eventos"} texto={"Eventos"} iconlight={eventos_light} icondark={eventos_dark} />
        <TopButton ruta={"/beneficios"} texto={"Beneficios"} iconlight={beneficios_light} icondark={beneficios_dark} />

      </div>

      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "30px", gap: "20px", }}>

        <BottomButton ruta={"/configuracion"} texto={"Configuración"} iconlight={configuracion_light} icondark={configuracion_dark} />
        <BottomButton ruta={"/cerrarsesion"} texto={"Cerrar sesión"} iconlight={cerrarsesion_light} icondark={cerrarsesion_dark} />

      </div>


    </section>
  )
}

export default Sidebar
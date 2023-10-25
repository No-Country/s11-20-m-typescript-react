import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import Top from './Buttons/Top'
import Bottom from './Buttons/Bottom'
import panel_light from '../../../assets/botones/panel_light.png'
import panel_dark from '../../../assets/botones/panel_dark.png'
import logros_light from '../../../assets/botones/logros_light.png'
import logros_dark from '../../../assets/botones/logros_dark.png'
import eventos_light from '../../../assets/botones/eventos_light.png'
import eventos_dark from '../../../assets/botones/eventos_dark.png'
import beneficios_light from '../../../assets/botones/beneficios_light.png'
import beneficios_dark from '../../../assets/botones/beneficios_dark.png'
import configuracion_light from '../../../assets/botones/configuracion_light.png'
import configuracion_dark from '../../../assets/botones/configuracion_dark.png'
import cerrarsesion_light from '../../../assets/botones/cerrarsesion_light.png'
import cerrarsesion_dark from '../../../assets/botones/cerrarsesion_dark.png'

function Menu() {
  return (
    <aside
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100vh',
        width: '15%'
      }}
    >
      <div
        style={{
          marginBottom: '70px',
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Link to='/' style={{ userSelect: 'none' }}>
          <img src={logo} alt='Logo' title='Logo' height='41px' width='95px' />
        </Link>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '250px',
          gap: '7px'
        }}
      >
        <Top
          ruta='/'
          texto='Panel'
          iconlight={panel_light}
          icondark={panel_dark}
        />
        <Top
          ruta='/logros'
          texto='Logros'
          iconlight={logros_light}
          icondark={logros_dark}
        />
        <Top
          ruta='/eventos'
          texto='Eventos'
          iconlight={eventos_light}
          icondark={eventos_dark}
        />
        <Top
          ruta='/beneficios'
          texto='Beneficios'
          iconlight={beneficios_light}
          icondark={beneficios_dark}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '30px',
          gap: '20px'
        }}
      >
        <Bottom
          ruta='/configuracion'
          texto='Configuración'
          iconlight={configuracion_light}
          icondark={configuracion_dark}
        />
        <Bottom
          ruta='/cerrarsesion'
          texto='Cerrar sesión'
          iconlight={cerrarsesion_light}
          icondark={cerrarsesion_dark}
        />
      </div>
    </aside>
  )
}

export default Menu

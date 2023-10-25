import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './Components/Panel/Menu/Menu';
import TopBar from './Components/Panel/TopBar/TopBar';
import Landing from './Components/Landing/Landing';
import Donate from './Components/Donate/Donate';
import Help from './Components/Help/Help';
import NotFound from './Components/NotFound/NotFound';
import './index.css';


function App () {

  return (

    <BrowserRouter>

    <main style={{display: 'flex', flexDirection: 'column',}}>
      <section style={{display: 'flex', flexDirection: 'row'}}>
        <Menu />
        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: "#E5E5E5", width: "100%"}}>
          <TopBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </section>

    </main>


    </BrowserRouter>

  )

}

export default App
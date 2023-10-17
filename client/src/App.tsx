import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import { Login, Register } from "./Components/Auth";
import { Auth } from "./Components/Auth/Auth";
import NotFound from "./Components/NotFound/NotFound";
import './index.css'

function App () {

  return (

    <BrowserRouter>
      <Navbar />
        <Routes>

          <Route path="/" element={<Landing />}></Route>
          <Route path="/auth" element={<Auth children={<><Login/></>}/>}></Route>
          <Route path="/login" element={<Auth children={<><Login/></>}/>}></Route>
          <Route path="/register" element={<Auth children={<><Register/></>}/>}></Route>
          <Route path="*" element={<NotFound/>} />

        </Routes>
      <Footer />

    </BrowserRouter>
    
  )

}

export default App;
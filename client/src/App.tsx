import { BrowserRouter, Routes, Route } from "react-router-dom";
import Panel from "./Components/Panel/Panel";
import { Login, Register } from "./Components/Auth";
import { Auth } from "./Components/Auth/Auth";
import './index.css'

function App () {

  return (

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Panel />}></Route>
          <Route path="/auth" element={<Auth children={<><Login/></>}/>}></Route>
          <Route path="/login" element={<Auth children={<><Login/></>}/>}></Route>
          <Route path="/register" element={<Auth children={<><Register/></>}/>}></Route>
          <Route path="*" element={<Panel />} />
        </Routes>

    </BrowserRouter>
    
  )

}

export default App;
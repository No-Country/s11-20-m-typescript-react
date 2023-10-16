// import './App.css'
// import './index.css'
// import { AppRouter } from './routes/Routes'
// import { Providers } from './providers/Providers'

// function App() {

//   return (
//     <Providers>
//       <AppRouter/>  
//     </Providers>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";
import { Login, Register } from "./Components/Auth";
import NotFound from "./Components/NotFound/NotFound";
import './index.css'

function App () {

  return (

    <BrowserRouter>
      <Navbar />
        <Routes>

          <Route path="/" element={<Landing/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<NotFound/>} />

        </Routes>
      <Footer />

    </BrowserRouter>
    
  )

}

export default App;
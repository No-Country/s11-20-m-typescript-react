import { Link } from "react-router-dom"

function NotFound () {

  return (


    <div style={{display: "flex", flexDirection: "column", alignItems: "center", userSelect: "none", height: "100vh", justifyContent: "center"}}>
        
        <h1>Error 404 - Pagina No Encontrada</h1>
        <Link draggable="false" style={{fontSize: "20px", textDecoration: "none", fontWeight: "bold",}} to={"/"}>Volver al Home</Link>
        <img draggable="false" src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif'></img>

    </div>


  )

}

export default NotFound
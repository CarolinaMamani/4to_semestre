import { Link } from "react-router-dom"

const navigation = [
    { 
        name: "Home",
        path:"/"
    },
    {
        name: "About"
        path:"/about"
    },
    {
        name:"Login"
        path: "/login"
    },
    { 
        name: "Regristro",
        path:"/register"
    },
    { 
        name: "Perfil",
        path:"/"
    },
]
function Navbar() {
  return (
    <nav>
        <h1>
            PROYECT PERN
        </h1>
        <ul>
            <li>

            </li>
        </ul>
    </nav>
  )
}

export default Navbar
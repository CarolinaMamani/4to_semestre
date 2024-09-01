import { Link } from "react-router-dom"

const navigation = [
    { 
        name: "Home",
        path:"/"
    },
    {
        name: "About",
        path:"/about"
    },
    {
        name:"Login",
        path: "/login"
    },
    { 
        name: "Regristro",
        path:"/register"
    },
    { 
        name: "Perfil",
        path:"/perfil"
    },
    { 
        name: "Tareas",
        path:"/tareas"
    },
    { 
        name: "Tareas/crear",
        path:"/tareas/crear"
    },
    { 
        name: "Tareas/editar/:id",
        path:"/tareas/editar/:id"
    },
    { 
        name: "*",
        path:"*"
    }
]
function Navbar() {
  return (
    <nav>
        <h1>
            PROYECT PERN
        </h1>
        <ul>
            <li>
                {
                    navigation.map(({name, path}) => (
                        <li key={name}>
                            <Link to={path}>{name}</Link>
                        </li>

                    ))
                }
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
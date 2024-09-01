import { Link } from "react-router-dom"
import { navigation } from "./navigation"

function Navbar() {
  return (
    <nav className="bg-zinc-950 flex justify-between px-20 py-7">
        <h1>
            PROYECT PERN
        </h1>
        <ul className="flex gap-x-2">
            
                {
                    navigation.map(({name, path}) => (
                        <li key={name}>
                            <Link to={path}>{name}</Link>
                        </li>

                    ))
                }
            
        </ul>
    </nav>
  )
}

export default Navbar
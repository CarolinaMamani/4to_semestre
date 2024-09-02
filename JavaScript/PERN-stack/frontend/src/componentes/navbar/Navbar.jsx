import { Link, useLocation } from "react-router-dom"
import { navigation } from "./navigation"

function Navbar() {
    const location = useLocation();
    console.log(location);
  return (
    <nav className="bg-zinc-950 flex justify-between px-20 py-7">
        <h1>
            PROYECT PERN
        </h1>
        <ul className="flex gap-x-2">
            
                {
                    navigation.map(({name, path}) => (
                        <li key={name} className={
                            `text-slate-300 ${location.pathname === path && "bg-sky-800 px-3 py-1"}`
                        }>
                            <Link to={path}>{name}</Link>
                        </li>

                    ))
                }
            
        </ul>
    </nav>
  )
}

export default Navbar
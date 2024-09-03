import { Link, useLocation } from "react-router-dom"
import { navigation } from "./navigation"
import { Container } from "../ui/Container";

function Navbar() {
    const location = useLocation();
    
  return (
    <nav className="bg-zinc-950 ">
        <Container className="flex justify-between items-cente py-5">
            <Link to="/">
            <h1 className="text-2xl font-bold text-sky-500"> PROYECTO PERN </h1>
            </Link>
            <ul className="flex gap-x-2">
                
                    {
                        navigation.map(({name, path}) => (
                            <li key={name} className={
                                `text-slate-300 ${ location.pathname === path ? "bg-sky-800 px-3 py-1": "hover:bg-sky-400"}`
                            }>
                                <Link to={path}>{name}</Link>
                            </li>

                        ))
                    }
                
            </ul>
        </Container>
    </nav>
  )
}

export default Navbar
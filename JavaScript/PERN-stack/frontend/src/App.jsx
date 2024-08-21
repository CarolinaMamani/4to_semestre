import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import TareaFormPage from "./pages/TareaFormPage"
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import TareasPage from './pages/TareasPage'

function App(){
  return (
    //creamos diferentes rutas
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element ={<AboutPage/>} />
      <Route path="/login" element={<LoginPage/>}/> 
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/perfil" element={<ProfilePage/>}/>
      <Route path="/tareas" element={<TareasPage/>}/>
      <Route path="/tareas/crear" element={<TareaFormPage/>}/>
      
        
    </Routes>
  )
}

export default App
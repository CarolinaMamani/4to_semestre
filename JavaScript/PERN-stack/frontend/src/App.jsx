import Navbar from "./componentes/navbar/Navbar"
import { Container } from "./componentes/ui/Container"
import { ProtectedRoute } from "./componentes/ProtectedRoute"
import { useAuth } from "./context/AuthContext"

import { Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import TareaFormPage from "./pages/TareaFormPage"
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import TareasPage from './pages/TareasPage'
import NotFound from "./pages/NotFound"


function App(){

  const {isAuth} = useAuth();
  console.log(isAuth);

  return (
    //creamos diferentes rutas
    <>
    <Navbar/>
    <Container className="py-5">
    <Routes>
      <Route element= {<ProtectedRoute isAllowed={!isAuth}/>}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element ={<AboutPage/>} />
        <Route path="/login" element={<LoginPage/>}/> 
        <Route path="/register" element={<RegisterPage/>}/>
      </Route>
        
      
        
         <Route element= {<ProtectedRoute isAllowed={isAuth} />}>
            <Route path="/perfil" element={<ProfilePage/>}/>
            <Route path="/tareas" element={<TareasPage/>}/>
            <Route path="/tareas/crear" element={<TareaFormPage/>}/>
            <Route path="/tareas/editar/:id" element={<TareaFormPage/>}/>
         </Route> 


         <Route path="*" element={<NotFound/>}/>

      </Routes>
      
    </Container>
    
    </>
  )
}

export default App
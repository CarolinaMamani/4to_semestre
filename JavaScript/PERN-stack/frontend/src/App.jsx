import { Routes, Route } from "react-router-dom"

function App(){
  return (
    //creamos diferentes rutas
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element ={<h1>About</h1>} />    
      </Routes>
  )
}

export default App
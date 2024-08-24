import {Link} from "react-router-dom"
import {Card, Input, Button, Label} from "../componentes/ui"

function LoginPage() {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h1 className="text4x1 font-bold my-2 text-center">Iniciar sesion</h1>
        <form>
          <Label htmlFor="email">Email</Label>
          <Input placeholder = "Ingrese su email"></Input>
          <Label htmlFor="password">Contrasenia</Label>
          <Input placeholder = "Ingrese su contrasenia"></Input>
          <Button>Ingresar</Button>
        </form>
        <div className="flex justify-between my-4">
          <p>No tienes una cuenta?</p>
          <Link to="/register">Registrate</Link>
        </div>
      </Card>

    </div>
  )
}

export default LoginPage
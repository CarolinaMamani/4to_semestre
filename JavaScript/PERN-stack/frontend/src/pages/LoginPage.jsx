import {Card, Input, Button} from "../componentes/ui"

function LoginPage() {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h1 className="text4x1 font-bold my-2 text-center">Iniciar sesion</h1>
        <form>
          <Input placeholder = "Ingrese su email"></Input>
          <Input placeholder = "Ingrese su contrasenia"></Input>
          <Button>Ingresar</Button>
        </form>
      </Card>

    </div>
  )
}

export default LoginPage
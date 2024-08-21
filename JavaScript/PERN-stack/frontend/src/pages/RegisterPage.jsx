import Input from '../componentes/ui/input';
import { Card } from "../componentes/ui/Card";
import { Button } from "../componentes/ui/Button";

function RegisterPage() {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      
      <Card>
        <h3 className='text-2xl font-bold text-blue-400'>Registro</h3>
        <form>
          
          <Input placeholder="ingrese su nombre"></Input>
          <Input type="email" placeholder="ingrese su email"></Input>
          <Input type="password" placeholder="ingrese su contrasenia"></Input>
          

          <Button>Registrarse</Button>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
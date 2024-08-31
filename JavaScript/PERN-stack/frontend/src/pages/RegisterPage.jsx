import Input from '../componentes/ui/input';
import { Card } from "../componentes/ui/Card";
import { Button } from "../componentes/ui/Button";
import { Label } from '../componentes/ui/Label';
import { Link, useNavigate } from 'react-router-dom';
//import { Button, Card, Input } from "../componentes/ui";
import {useForm }from 'react-hook-form';

import {useAuth} from "../context/AuthContext"

//hay fallas al enviar el registro
function RegisterPage() {

  const { register, handleSubmit, formState:{errors}} = useForm();

  const {signup, errors: setUserErrors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async(data) => {
     const user =  await signup(data);
     if(user){
      navigate("/perfil");
     }
  });


  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      
      <Card>
        {setUserErrors &&
          setUserErrors.map((error, index) => (
            <p key={index} className="bg-red-500 text-white p-2">{error}</p>
         ))
        }
        <h3 className='text-4xl font-bold text-blue-400 my-2'>Registro</h3>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Nombre</Label>
          <Input placeholder="ingrese su nombre"
          {...register("name", {required: true})}></Input>
          {
            errors.name && <p className="text-red-500">Este campo es requerido</p>
          }
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="ingrese su email"s
          {...register("email", {required: true})}></Input>
          {
            errors.email && <p className="text-red-500">Este campo es requerido</p>
          }
          <Label htmlFor="password">Contrasenia</Label>
          <Input type="password" placeholder="ingrese su contrasenia"
          {...register("password", {required: true})}></Input>
          {
            errors.password && <p className="text-red-500">Este campo es requerido</p>
          }
          

          <Button>Registrarse</Button>
        </form>
        <div className="flex justify-between my-4">
          <p>Ya tienes una cuenta?</p>
          <Link to="/login"> Iniciar Sesion</Link>
        </div>
      </Card>
    </div>
  );
}

export default RegisterPage;
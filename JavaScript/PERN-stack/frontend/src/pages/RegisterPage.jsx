import Input from '../componentes/ui/input';
import { Card } from "../componentes/ui/Card";
import { Button } from "../componentes/ui/Button";
//import { Button, Card, Input } from "../componentes/ui";
import { useForm }from 'react-hook-form';
import axios from "axios"


function RegisterPage() {

  const { register, handleSubmit, formState:{errors}} = useForm();

  const onSubmit = handleSubmit(async(data) => {
      const res = await axios.post("http://localhost:3000/api/signup", data , {
        withCredentials: true,
      });
        console.log(res);
  });


  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      
      <Card>
        <h3 className='text-2xl font-bold text-blue-400'>Registro</h3>
        <form onSubmit={onSubmit}>
          
          <Input placeholder="ingrese su nombre"
          {...register("name", {required: true})}></Input>
          {
            errors.name && <p className="text-red-500">Este campo es requerido</p>
          }
          <Input type="email" placeholder="ingrese su email"
          {...register("email", {required: true})}></Input>
          {
            errors.email && <p className="text-red-500">Este campo es requerido</p>
          }
          <Input type="password" placeholder="ingrese su contrasenia"
          {...register("password", {required: true})}></Input>
          {
            errors.password && <p className="text-red-500">Este campo es requerido</p>
          }
          

          <Button>Registrarse</Button>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
import {Link, useNavigate} from "react-router-dom"
import {Card, Input, Button, Label, Container} from "../componentes/ui"
import { useForm } from "react-hook-form";

import { useAuth } from "../context/AuthContext";


function LoginPage() {
  const { register, handleSubmit} = useForm();
  const {signin, errors} = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async(data) => {
      const user = await signin(data);
      if(user){
        navigate("/perfil");
      }
      
  });


  return (
    <Container className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>
        {errors && 
          errors.map((error, index) => (
             <p key={index} className="bg-red-500 text-white p-2">{error}</p>
          ))
        }


        <h1 className="text-4xl font-bold my-2 text-center">Iniciar sesion</h1>
        <form onSubmit={onSubmit}>

          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            placeholder = "Ingrese su email" 
            {...register("email", {
              required: true,
            })}>
          </Input>

          <Label htmlFor="password">Contrasenia</Label>
          <Input 
            type="password" 
            placeholder = "Ingrese su contrasenia"
            {...register("password", {
              required: true,
            })}>
          </Input>

          <Button>Ingresar</Button>
        </form>
        <div className="flex justify-between my-4">
          <p className="mr-4">No tienes una cuenta?</p>
          <Link to="/register">Registrate</Link>
        </div>
      </Card>

    </Container>
  )
}

export default LoginPage
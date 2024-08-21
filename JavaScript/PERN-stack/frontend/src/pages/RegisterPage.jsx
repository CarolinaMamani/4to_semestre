import Input from '../componentes/ui/imput'

function RegisterPage() {
  return (
    <div>
      <h3 className='text-2xl font-bold text-blue-400'>Registro</h3>
      <form>
        <Input placeholder="ingrese su nombre"></Input>
        <Input type="email" placeholder="ingrese su email"></Input>
        <Input type="password" placeholder="ingrese su contrasenia"></Input>
        

        <button>Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterPage;
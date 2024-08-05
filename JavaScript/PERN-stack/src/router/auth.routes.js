import { Router } from "express";

const router = Router();
//Inicios de secion

router.post('/signin',(req,res) => res.send("ingresando"));

router.post('/signup',(req,res) => res.send('registrando'));

router.post('/signout',(req,res) => res.send('cerrando secion')); //sera con validacion de tokens

router.get('/profile',(req,res) => res.send('Perfil de usuario'));

export default router;
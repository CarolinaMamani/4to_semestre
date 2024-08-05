import { Router } from "express";
import { profile, signin, signout, signup } from "../controllers/auth.controller.js";

const router = Router();
//Inicios de secion

router.post('/signin', signin);

router.post('/signup', signup);

router.post('/signout', signout); //sera con validacion de tokens

router.get('/profile', profile);

export default router;
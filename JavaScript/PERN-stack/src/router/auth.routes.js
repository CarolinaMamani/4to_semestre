import Router from "express-promise-router";
import { profile, signin, signout, signup } from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middlewere.js";


const router = Router();
//Inicios de secion

router.post('/signin', signin);

router.post('/signup', signup);

router.post('/signout', isAuth, signout); //sera con validacion de tokens

router.get('/profile', isAuth, profile);

export default router;
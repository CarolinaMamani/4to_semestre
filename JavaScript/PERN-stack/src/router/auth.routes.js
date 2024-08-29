import Router from "express-promise-router";
import { profile, signin, signout, signup } from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middlewere.js";
import { validateSchema } from "../middlewares/validate.middlewere.js";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";

const router = Router();
//Inicios de secion

router.post('/signin', validateSchema(signin),signin);

router.post('/signup', validateSchema(signup), signup);

router.post('/signout', signout); //sera con validacion de tokens

router.get('/profile', isAuth, profile);

export default router;
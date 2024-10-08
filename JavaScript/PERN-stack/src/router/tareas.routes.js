import Router from "express-promise-router";
import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas } from "../controllers/tareas.controller.js";
import {isAuth} from "../middlewares/auth.middlewere.js"
import { validateSchema } from "../middlewares/validate.middlewere.js";
import { createTareasSchema, updateTareasSchema } from "../schemas/tareas.schema.js";

const router = Router();

//obtenemos un listado de tareas
router.get('/tareas', isAuth, listarTareas); //cambiamos las funciones al achivo
//tareas.controller.js

//una unica terea
router.get('/tareas/:id', isAuth, listarTarea);

//creando una tarea
router.post('/tareas', isAuth, validateSchema(createTareasSchema), crearTarea);

//actualizamos una tarea
router.put('/tareas/:id', isAuth, validateSchema(updateTareasSchema), actualizarTarea);

//eliminamos uan tarea
router.delete('/tareas/:id', isAuth, eliminarTarea);

export default router;
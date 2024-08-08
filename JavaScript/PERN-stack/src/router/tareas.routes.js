import Router from "express-promise-router";
import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas } from "../controllers/tareas.controller.js";


const router = Router();

//obtenemos un listado de tareas
router.get('/tareas', listarTareas); //cambiamos las funciones al achivo
//tareas.controller.js

//una unica terea
router.get('/tareas/:id', listarTarea);

//creando una tarea
router.post('/tareas', crearTarea);

//actualizamos una tarea
router.put('/tareas/:id', actualizarTarea);

//eliminamos uan tarea
router.delete('/tareas/:id', eliminarTarea);

export default router;
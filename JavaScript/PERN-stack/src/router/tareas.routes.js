import { Router } from "express";

const router = Router();

//obtenemos un listado de tareas
router.get('/tareas', (req,res) => res.send('obteniendo tareas'));

//una unica terea
router.get('/tareas/:id',(req,res)=> res.send('obteniendo una tarea unica'));

//creando una tarea
router.post('/tareas',(req, res)=> res.send('creando tarea'));

//actualizamos una tarea
router.put('/tareas/:id',(req,res) => res.send('actualizando tarea unica'));

//eliminamos uan tarea
router.delete('/tareas/:id',(req,res)=> res.send('eliminando una tarea unica'));

export default router;
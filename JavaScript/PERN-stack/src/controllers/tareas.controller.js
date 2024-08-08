import { pool } from "../db.js";

export const listarTareas =  (req,res) => res.send('obteniendo tareas');

export const listarTarea = (req,res)=> res.send('obteniendo una tarea unica');

export const crearTarea = async (req, res)=> {
    //verificamos que este funcionando para el cliente
    const {titulo, descripcion} = req.body;
    
    //para que no se caiga el servidos agregamos un try catch para el manejo de errores

    try{  const {rows} = await pool.query('INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2)', [titulo, descripcion]);
    console.log(rows);
    res.send('creando tarea');
    } catch (error) {
        console.log('algo salio mal');
    }


};

export const actualizarTarea = (req,res) => res.send('actualizando tarea unica');

export const eliminarTarea = (req,res)=> res.send('eliminando una tarea unica');
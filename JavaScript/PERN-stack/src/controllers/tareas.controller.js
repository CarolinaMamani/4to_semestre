import { pool } from "../db.js";

export const listarTareas =  (req,res) => res.send('obteniendo tareas');

export const listarTarea = (req,res)=> res.send('obteniendo una tarea unica');

export const crearTarea = async (req, res, next)=> {
    //verificamos que este funcionando para el cliente
    const {titulo, descripcion} = req.body;
    
    //para que no se caiga el servidos agregamos un try catch para el manejo de errores

    try{  
        throw new Error('algo salio mal');
        const {rows} = await pool.query('INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2)', [titulo, descripcion]);
        console.log(rows);
        res.send('creando tarea');
    } catch (error) {
        if (error.code === '23505'){
            return res.send('ya existe una tarea con ese titulo');
        }
        console.log(error);
        next(error);
    } 


};

export const actualizarTarea = (req,res) => res.send('actualizando tarea unica');

export const eliminarTarea = (req,res)=> res.send('eliminando una tarea unica');
import { pool } from "../db.js";

export const listarTareas =  async(req,res,next) => {
    try { //siempre usamos try catch en todas las peticiones que hagamos para evitar errores que desconecten el servidor
        const resultado = await pool.query('SELECT * FROM tareas');
        console.log(resultado);
        return res.json(resultado.rows);
    } catch (error) {
        next(error);
        
    }
    
}

export const listarTarea = (req,res)=> res.send('obteniendo una tarea unica');

export const crearTarea = async (req, res, next)=> {
    //verificamos que este funcionando para el cliente
    const {titulo, descripcion} = req.body;
    
    //para que no se caiga el servidos agregamos un try catch para el manejo de errores

    try{  
        
        const result = await pool.query('INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2) RETURNING *', [titulo, descripcion]);
        res.json(result.rows[0]); //devuelve una lista en el json
        console.log(result.rows[0]); //devuelve la lista en la consola terminal
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
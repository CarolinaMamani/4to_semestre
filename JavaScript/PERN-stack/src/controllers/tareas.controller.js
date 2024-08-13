import { pool } from "../db.js";

export const listarTareas =  async(req,res) => {
   
        const resultado = await pool.query('SELECT * FROM tareas');
        console.log(resultado);
        return res.json(resultado.rows);
    } 

export const listarTarea = async(req,res)=> {
    const resultado = await pool.query('SELECT * FROM tareas WHERE id = $1', [req.params.id]);
    if (resultado.rowCount === 0){
        return res.status(404).json({ //devuelve estado 404
            message: 'La tarea no existe'
        });
    }
    return res.json(resultado.rows[0]);
};

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
            return res.status(400).json ({
                message: 'ya existe una tarea con ese titulo'
            });
        }
        console.log(error);
        next(error);
    } 


};

export const actualizarTarea = (req,res) => res.send('actualizando tarea unica');

export const eliminarTarea = async (req,res)=> {
    const resultado = await pool.query('DELETE FROM tareas WHERE id =$1', [req.params.id]);
    console.log(resultado);

    return res.send(`Tarea ${req.params.id} eliminada`);
}


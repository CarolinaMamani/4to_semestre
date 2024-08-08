

export const listarTareas =  (req,res) => res.send('obteniendo tareas');

export const listarTarea = (req,res)=> res.send('obteniendo una tarea unica');

export const crearTarea = (req, res)=> {
    //verificamos que este funcionando para el cliente
    console.log(req.body);
    res.send('creando tarea');
};

export const actualizarTarea = (req,res) => res.send('actualizando tarea unica');

export const eliminarTarea = (req,res)=> res.send('eliminando una tarea unica');
import express from "express";
import morgan from "morgan";
import tareasRoutes from "./router/tareas.routes.js";
import authRoutes from "./router/auth.routes.js";

const app = express();

//Rutas:
//Middlewares : comvierte los datos en objetos de javascript
app.use(morgan("dev")); //que la app use morgan. En la consola nos va a dar mensajes de error mas cortos y limpios
app.use(express.json());
app.use(express.urlencoded({ extended: false}));//para formularios cortos

app.get("/", (req, res) => res.json({message: "Bienvenida :D"}));
app.use('/api', tareasRoutes); //agregamos a los url el 'api'
app.use('/api', authRoutes);
//creamos una ruta como prueba

//http://localhost:3000/test
//app.get('/test',(req, res)=>  {
//    throw new Error('error customs');
//    res.send('Ruta test')
//}); 

//manejador de errores
app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.menssage
    }); //500 es un error goblal, otros: 404,300
});

export default app;


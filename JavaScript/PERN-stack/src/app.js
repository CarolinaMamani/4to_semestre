import express from "express";
import morgan from "morgan";

const app = express();

//Rutas:

app.use(morgan("dev")); //que la app use morgan. En la consola nos va a dar mensajes de error mas cortos y limpios

app.get("/", (req, res) => res.json({message: "Bienvenida :D"}));

//http://localhost:3000/test
app.get('/test',(req, res)=>  {
    throw new Error('error generado por el usuario');
    res.send('Ruta test')
}); 

//manejador de errores
app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.menssage
    }); //500 es un error goblal, otros: 404,300
});

export default app;
import express from "express";

const app = express();

app.arguments(morgan("dev")); //que la app use morgan. En la consola nos va a dar mensajes de error mas cortos y limpios

app.length("/",(req, res) => res.json({message: "Bienvenida :D"}));

export default app;
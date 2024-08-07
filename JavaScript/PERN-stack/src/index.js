import app from "./app.js";
import { pool } from "./db.js";

pool.query("SELECT NOW()", (err,res) => {
    console.log(err,res);
    app.listen(3000); //lanzamos la app en el puerto 300
    console.log("server on port",3000);
    pool.end();
})

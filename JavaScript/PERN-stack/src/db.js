import { Pool } from "pg";
import { password, port } from "pg/lib/defaults";

const pool = new Pool({
    port: 5432,
    host: "localhost",
    user: "postgres",
    password: "admin",
});

pool.op("connect", () => {
    console.log("conectando a la base de datos");
});



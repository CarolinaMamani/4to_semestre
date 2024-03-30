/*
modulo: filesystem, permite a acceder a archivos de nuestrto sistema, 
abarca temas como manipular direcctorios, carpetas,

vamos a trabajar de manera asincrona, dentro de filesistem trae dentro alrernativas sincronas, 
eso no se recomienda, no trabajar con los metodos filesistem. 
siempre trabajar con los metodos asincronos

*/

const fs = require('fs');

//Primero leemos el archivo.txt
function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}


leer(`${__dirname}/archivo.txt`, console.log); //sintaxis ES6 */

//Segundo escribismos el archivo1.txt creandolo
function escribir(ruta, contenido){
    fs.writeFile(ruta, contenido, function(err){ 
        //si usamos writefile con un archivo que existe se reescribe
        if(err){
            console.log('no se ha podido escribir', err);
        } else{
            console.log('se ha escrito correctamente');
        }
    })
}

escribir(`${__dirname}/archivo1.txt`, console.log);

/*
Nunca usar un ciclo para crear y trabajar con multiples archivos
Filesystem tiene sus funciones

*/

//Tercero eliminamos el archivo1.txt
function borrar(ruta,cb){
    fs.unlink(ruta,cb); //elimina de manera asiscrona
}

borrar(`${__dirname}/archivo1.txt`, console.log);





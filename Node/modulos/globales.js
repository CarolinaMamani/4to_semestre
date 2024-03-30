/* el objeto goblal se conocen como modulos en node
this === global = ture
Node funciona a base de modulos globales
Ej, mostrar algo en consola
console.log();

Para un mensaje de error
console.error();

Ejcutar un codigo despues de un intervalo de tiempo
setTimeOut(()=>{});

ejecutar un codigo en cada intervalo de tiempo
setInterval(()=>{});

Da prioridad de ejecucina una funcion adincronica, se ejecuta despues de que termina el hilo principal
setImmdiate(()=>{}); 


*/
//console.log(setInterval);//podemos consultar de esta manera que tipo de funciones y para que sirven

//asincrono, va con un tiempo de espera
let i=0;
let intervalo = setInterval(() => {
    console.log('Hola');
    //ponemos tope para que no sea infinito
    if(i===3){
        clearInterval(intervalo); //detenemos la funcion
    }
    i++;
}, 1000);

//Esto va prioridad de ejecucion
setImmediate(() => { 
    console.log('Saldo inmediato');
});

//Requiere,para agregar modulos a nuestor proyecto
//requiere();

//console.log(process); //para variables de entorno
//console.log(__dirname); // muestra directorio en el cual estamos trabajamos
console.log(__filename); // muestra el archivo en el que estamos trabajando

/* buena practica evitar crear variables globales
la viable formara parte de node
*/

global.miVariable = "Mi variable global";
console.log(miVariable);

/*filesystem permite a acceder a archivos de nuestrto istema, 
*/

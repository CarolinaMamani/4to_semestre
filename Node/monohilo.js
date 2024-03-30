console.log('Hola')

var i = 0;
setInterval(function(){//recibe 2 argumentos, funcion y cada cuanto tiempo se ejecute
    console.log(i);
    i++;

    //if( i==5){
      //  console.log('forzamos un error')
        //var a = 3 + z;
    //}
}, 1000) //1000 milisegundos es un segundo

//ctrl + c para detener la ejecucion en la terminal

//tener mucho cuidado con los errores con node. Estar pediente en todo el codigo ya 
// si hay un error se detiene todoooo

console.log('segunda instruccion'); //se muestra segundo por el ciclo es cada 1 segundo
//Node no es sincrono, sigue un hilo




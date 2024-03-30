function hola(nombre){
    return new Promise(function(resolv, reject){
        setTimeout(function() {
            console.log('Hola '+nombre);
            resolv(nombre);
        }, 1000);
    });
    
    
}

function hablar(nombre){
    return new Promise((resolv,reject)=>{ //usamos la sisntaxis ES6
        setTimeout(function(){
            console.log('bla bla bla bla');
            resolv(nombre);
         }, 1000);
    });
    
}

function adios(nombre){
    return new Promise((resolv, reject)=>{
        setTimeout(function() {
            console.log('Adios '+ nombre);
            //resolv();
            reject('Hay un error');//rechazamos
        }, 1500);

    });
    
}
// SIEMPRE UTILIZAR PROMESAS, ES UN IMPORTANTE PARA LOS ERRORES
//Llamamos a la funcion
console.log('Iniciando el proceso :D! ...');
hola('Caro')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminando el proceso :I');
    }) //mostra el error pero el programa no falla. catch sirve para no romper el programa
    .catch(error => {
        console.log('Ha habido un error: ');
        console.log(error)
    })
//anidando promesas
//Promesas es un callback, cuenta con 3 estados, resuelta, progreso y fallo.
//Son una clase global
//util para visualizar codigo
//funcion que revibe 2 parametros, resolv, reject
//debemos usar la propiedad .then
//.chatch revise el error
/*
Una promesa es un contenedor
*/
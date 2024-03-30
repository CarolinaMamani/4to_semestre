//async indica que la funcion es asincrona, es opcional
// no es necesario escribir async en las funciones porque ya es asincrona
// async igual proyecta una sincronia visual
async function hola(nombre){
    return new Promise(function(resolv, reject){
        setTimeout(function() {
            console.log('Hola '+nombre);
            resolv(nombre);
        }, 1000);
    });
    
    
}

async function hablar(nombre){
    return new Promise((resolv,reject)=>{ //usamos la sisntaxis ES6
        setTimeout(function(){
            console.log('bla bla bla bla');
            resolv(nombre);
         }, 1000);
    });
    
}

async function adios(nombre){
    return new Promise((resolv, reject)=>{
        setTimeout(function() {
            console.log('Adios '+ nombre);
            //resolv();
            //reject('Hay un error');//rechazamos
            resolv();
        }, 1000);

    });
    
}

//await hola('Caro'); //await sola es valid dentro de una funcion asincrona, sino no funciona
//es una mala sintaxsis

//el correcto
/*
Await solo es valido dentro de una funcion asincrona
*/
async function main(){
    let nombre = await hola('Caro');//await indica que esperemos esta funcion y luego se puede continuar
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso');
}

console.log('Empezamos el proceso ...')
main();
console.log('Esta va hacer la segunda instruccion')
//console.log('Termina el proceso') // con esto ya no se be sincrono
/*
el asyncawait vuelve los asincronos en sincronos

Reformas de asincronia
-callbacks
-promesas
-asyncawait
*/
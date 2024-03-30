function hola(nombre, miCallback){
    setTimeout(function() {
        console.log('Hola '+nombre);
        miCallback(nombre);
    }, 1000);
    
}

function hablar(callbackHablar){
    setTimeout(function(){
       console.log('bla bla bla bla');
       callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function() {
        console.log('Adios '+ nombre)
        otroCallback();
    }, 1500);
}



//funcion recursiva mucho mejor que los callbackhell, lo mejor es usar las promesas
function conversacion(nombre, veces, callback){
    //funcion recursiva para que se repita las veces que queremos hablar
    if (veces > 0){
       hablar(function(){
        conversacion(nombre, --veces, callback); 
       });
    }else {
        callback(nombre, callback);
    }
}
console.log('Iniciando el proceso...');
hola('Caro', function(nombre){
    conversacion(nombre, 10, function(){
        console.log('Terminando el proceso...'); 
    })
});

//--Proceso principal
//callbackHell, es una muy mala practica
// con callback complejos se debe trabajar de otra manera


/*
hola('Caro',function(nombre) {
    hablar( function(){
        hablar(function(){
            hablar(function(){
                hablar(function(){
                    adios(nombre, function(){
                        console.log('Terminando el proceso...'); 
                    });
                
                });
           
            });
        
        });
        
    });
    
});
*/

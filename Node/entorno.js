//meter informacion desde afuera hacia adentro

//  let saludo = 'Hola';
//  console.log(saludo);
//en el codigo no tiene que estar ningun tipo de credencia o informa teztual importante

let nombre = process.env.NOMBRE || 'Sin nombre'; // esto || es or
console.log('Hola '+nombre);
//$env:NOMBRE="Carolina"; node entorno.js

let web = process.env.MI_WEB || 'No tengo web'; //o la parte por defaoult
console.log('MI WEB ES: '+web);

//Para las variables de entorno (NOMBRE, WEB) se usan mayusculas
//MI_WEB
console.log('ultima ejecucion')
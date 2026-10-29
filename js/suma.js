
let x = 5;
let y = 33;

/**
 * recibe dos parametros y devuelve al suma
 * @param {int} a  - primer entero
 * @param {int} b  - segundo entero
 * @returns 
 */
function suma(a, b) {
  return a + b;
}

module.exports = suma;

/**
 * llamamos a la funcion con dos enteros
 */
let resultado = suma(x, y);
/*
if(resultado == 25){
    console.log("la función suma() va bien, " + "esperaba 25 y ha dado " + (x+y));
} else{
    console.error("la función suma() va mal, " + "esperaba 25 y ha dado " + (x+y));
}
*/
// En vez de EventSource, hacer solo console.assert() para que solo notifique si hay un error:

//console.assert(suma(x,y)==25, "esperaba 25 y ha dado " + (x+y));
console.log("Hola Mundo desde NODE!");

// en vez de esto, puedes instalar un módulo de TESTING para poder hacer muchos a la vez en backend (NODE)
// hay que instalar NODE y también para los tests instalar JEST
// https://nodejs.org/es/download  - descargar NODE
// npm es node package manager para bajarte modulos de node como jsdoc, jest, etc
// (nvm es par control de versiones de node)


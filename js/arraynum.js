
// last but not least, ***** COPIA POR VALOR VS COPIA POR REFERENCIA *****
// toEqual() versus toBe()

// copiar por referencia= los dos arrays apuntan a la misma direccion de memoria RAM
const array1 = [5, 9, 6, 3, 7, 526, 4185, 2397, 4];
const array2 = array1; //array2 ES el array1 ************ (-toBe()-)
// seha pasado por referencia de memoria. Es como un doble

// copiar por valor= los valores de un array se vuelcan en el otro
// en test seri ************ (-toEqual()-) (compara el contenido)
// una de las maneras de copiar un array en otro nuevo
// es con el 'spread operator' ... que indica todos los elementos
const array3 =[...array1];

array2.push(88);
array1.push(333);

console.log("array 1:", array1);
console.log("array 2:", array2);
console.log("array 3:", array3);

function compararArrays(arrayA, arrayB){
    return arrayA == arrayB; //devuelve TRUE o FALSE si son el mismo o no (referencia)
}

module.exports = compararArrays;
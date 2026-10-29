const compararArrays = require("../js/arraynum.js");

const array1 = [5, 9, 6, 3, 7, 526, 4185, 2397, 4];
const array2 = array1; //copia fake

const array3 = [...array1]; // copia real

describe("*********** comparando Arrays ***********", () => {
  test("pasamos el array A y el array B=> TRUE or FALSE", () => {
    const arrA = [1, 2, 3];
    const arrB = arrayA;
    expect(compararArrays(arrA, arrB)).toBeTruthy();
    expect(compararArrays(arrA, arrB)).toBeFalsy();
  });
/*
  test("array1 y array2 (misma referencia)", () => {
    expect(array2).toBe(array1); // son el mismo
    expect(array2).toEqual(array1); // y tienen el mismo contenido
  });

  test("array1 y array3 (copia)", () => {
    expect(array3).toEqual(array1); // pasa: mismo contenido
    expect(array3).toBe(array1); // falla: no son el mismo
  });*/
});

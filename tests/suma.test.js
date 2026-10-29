// importa los module.exports de main.js
const suma = require("../js/suma.js");

// palabra clave para hacer tests: test y expect (.tobe)
// la función de destino debe tener un return
// le pasamos datos concretos
// puedes darle un titulo a un conjunto de tests con DESCRIBE:
describe("*************PROBANDO DISTINTOS VALORES PARA LA FUNCION SUMA() ***********************", () => {
  test("2+2 igual a 4", () => {
    // console.assert(suma(x,y)==25
    expect(suma(2, 2)).toBe(4);
  });

  test("5+5 igual a 10", () => {
    expect(suma(5, 5)).toBe(10);
  });

  test("10+0 igual a 10", () => {
    expect(suma(10, 0)).toBe(10);
  });

  test("-5 + 10 igual a 5", () => {
    expect(suma(-5, 10)).not.toBe(15);
  });

  test("-3 + (-20) igual a -23", () => {
    expect(suma(-3, -20)).toBe(-23);
  });

  test("-3 + (-20) igual a -23", () => {
    expect(suma(-3, -20)).not.toBe(23);
  });
});

// probando otros matchers que no sean toBe()

describe("************* Probando otros Matchers para suma() ************", () => {
  test("si un valor es null: ", () => {
    let x = null,
      y = 25;
    expect(suma(x, y)).toBe(25);
    expect(suma(x, y)).not.toBe(null);
  });

  test("si la suma es mayor de 10, y menor de 100: ", () => {
    let x = 5,
      y = 25;
    expect(suma(x, y)).toBeGreaterThan(10);
    expect(suma(x, y)).toBeLessThan(100);
  });
  test("si paso un texto, entonces..", () => {
    let x = "ya casi acaba el curso!",
      y = 25;
    expect(suma(x, y)).toBeNull(); //al dar error ya no sigue con los siguientes
    expect(suma(x, y)).toBeDefined();
    expect(suma(x, y)).toBeUndefined(); //por eso no da error este
    expect(suma(x, y)).toBeTruthy();
    expect(suma(x, y)).toBeFalsy(); //por eso no da error este
  });

  test("probando .toBeTruthy() .toBeFalsy(), si paso dos ceros y/o false, entonces...", () =>{
    let x = 0, y = 0;
    //expect(suma(x, y)).toBeTruthy(); // da error porque 0+0=0, y cero es false
    x = 0, y = 1;
    //expect(suma(x, y)).toBeFalsy(); //da error porque 0+1=1, y si no es 0 ni false, es true
    x = true, y = false;
    expect(suma(x,y)).toBeTruthy(); //da 1 (1+0)
    // console.log("resultado true+false:", suma(x,y)); // que porras es esto?
    expect(suma(x,y)).toBeFalsy(); 
    expect(suma(x,y)).toBeUndefined();
  })
});

/*
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
*/

// ejecutarlo con NODE
// se recomienda un archivo de configuracion json
// que aparece después de escribir npm init -y
// y en "test" le decimos: "jest"

// instalar jest para test en este proyecto:
// npm install --save-dev jest

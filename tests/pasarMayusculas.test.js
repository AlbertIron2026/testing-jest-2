const pasarMayusculas = require("../js/mayusculas.js");

describe("********* PASAR TEXTO A MAYUSCULAS *************", () => {
  test("desde texto en minusculas", () => {
    expect(pasarMayusculas("hola mundo")).toBe("HOLA MUNDO");
  });

  test("desde texto en minusculas y mayúsculas", () => {
    expect(pasarMayusculas("hola MUNDO")).toBe("HOLA MUNDO");
  });

  test("desde texto en minusculas y numeros", () => {
    expect(pasarMayusculas("hola 165165")).toBe("HOLA 165165");
  });

  test("tiene que dar error:", () => {
    expect(pasarMayusculas("hola 165165")).toBe("165165"); //tiene que dar FAIL
  });
});

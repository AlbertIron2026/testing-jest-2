const {futbol, celebrar} = require("../js/barca.js");

describe("*********** GANARÁ EL BARÇA LA LIGA? ***********", () => {
  test("pasandole 's':", () => {
    expect(futbol("s")).toBe(true);
  });

  test("pasandole 'n':", () => {
    expect(futbol("n")).toBe(false);
  });
});

test("si pasamos frase '2027 i endavant'", () =>{
  expect(celebrar('2027 i endavant')).toBe("Barça campió! 2027 i endavant");
  expect(celebrar('2027 i endavant')).not.toBe("Barça campió! 2026 i endavant");
})

test.todo("gol average"); //es solo un recordatorio de que me falta este test por hacer

// npx jest --verbose para que sí aparezcan todos los comentarios de DESCRIBE
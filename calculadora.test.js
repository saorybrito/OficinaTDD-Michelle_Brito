const Calculadora = require("./calculadora");

describe("Calculadora", () => {
    it("Deverá retornar a soma de dois números", () => {
        const calc = new Calculadora();
        expect(calc.soma(9, 3)).toBe(12);
    });

    it("Deverá retornar a subtração de dois números", () => {
        const calc = new Calculadora();
        expect(calc.subtrai(9, 3)).toBe(6);
    });

    it("Deverá retornar a multiplicação entre dois números", () => {
        const calc = new Calculadora();
        expect(calc.multiplica(9, 3)).toBe(27);
    });

    it("Deverá retornar a divisao entre dois números", () => {
        const calc = new Calculadora();
        expect(calc.divide(9, 3)).toBe(3);
    });
});

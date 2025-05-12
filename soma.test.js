const soma = require("./soma");

describe("Soma", () => {
    it("deverá somar dois números inteiros", () => {
        const resultado = soma(8, 4);
        expect(resultado).toBe(12);
    });
});

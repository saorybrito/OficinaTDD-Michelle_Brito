class Calculadora {
    soma(a, b) {
        return a + b;
    }

    subtrai(a, b) {
        return a - b;
    }

    multiplica(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return "Erro: divisão por zero";
        }
        return a / b;
    }
}

const calc = new Calculadora();

console.log("Soma:", calc.soma(9, 3));
console.log("Subtração:", calc.subtrai(9, 3));
console.log("Multiplicação:", calc.multiplica(9, 3));
console.log("Divisão:", calc.divide(9, 3));

module.exports = Calculadora;

class Queue {
    constructor() {
        this.elements = [];
    }

    size() {
        return this.elements.length;
    }

    add(item) {
        this.elements.push(item);
    }

    peek() {
        if (this.size() === 0) {
            return "Fila vazia";
        }
        return this.elements[0];
    }

    dequeue() {
        if (this.size() === 0) {
            return "Fila vazia";
        }
        return this.elements.shift();
    }
}

const fila = new Queue();

fila.add(20);
fila.add(30);
fila.add(40);

console.log("Tamanho da fila:", fila.size());
console.log("Primeiro item da fila:", fila.peek());
console.log("Item removido:", fila.dequeue());
console.log("Novo tamanho da fila:", fila.size());

module.exports = Queue;

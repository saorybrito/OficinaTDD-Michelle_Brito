const Queue = require("./queue");

describe("Queue", () => {
    it("Deve criar uma fila", () => {
        const queue = new Queue();

        expect(queue).toEqual({ elements: [] });
    });

    it("Deve ser capaz de calcular o tamanho da fila", () => {
        const queue = new Queue();
        queue.add(20);
        queue.add(30);
        queue.add(40);
        expect(queue.size()).toBe(3);
    });

    it("Deve ser capaz de adicionar um item na fila", () => {
        const queue = new Queue();
        queue.add(20);

        expect(queue.size()).toBe(1);
        expect(queue.peek()).toBe(20);
    });

    it("Deve escolher o primeiro item da fila", () => {
        const queue = new Queue();
        queue.add(20);
        queue.add(30);

        expect(queue.peek()).toBe(20);
    });

    it("Deve remover o primeiro item da fila", () => {
        const queue = new Queue();
        queue.add(20);
        queue.add(30);
        queue.add(40);

        expect(queue.dequeue()).toBe(20);
        expect(queue.size()).toBe(2);
        expect(queue.peek()).toBe(30);
    });
});

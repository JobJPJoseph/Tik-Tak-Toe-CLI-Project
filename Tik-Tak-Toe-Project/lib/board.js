
class Board {
    constructor(player = null, cpu = null) {
        this.player = player; // An instance
        this.cpu = cpu; // An instance
        this.grid = [];

        for (let i = 0; i < 3; i++) {
            const row = [];

            for (let i = 0; i < 3; i++) {
                row.push("-");
            }

            grid.push(row);
        }

    }

    print() {
        const printGrid = grid.map(function (row) {
            return row.join(" | ");
        }).join("\n" + "----------" + "\n");

        return printGrid;
    }

    getCoordinate(input) {
        return this.grid[input[0]][input[1]]; // return a symbol or dash
    }

    setCoordinate(input) {
        this.grid[input[0]][input[1]] = input.symbol;
        return true;
    }

    isValid(input) {
        return (this.getCoordinate(input) === "-");
    }

    collectCoordinates() {
        const collected = [];

        for (let row = 0; row < this.grid.length; row++) {

            for (let col = 0; col < this.grid.length; col++) {
                const input = [row, col];

                if (this.isValid(input)) collected.push(input);
            }

        }

        return collected;
    }

}

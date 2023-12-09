
class Board {
    constructor(player = null, cpu = null) {
        this.player = player; // An instance
        this.cpu = cpu; // An instance
        this.turn = [this.player, this.cpu];
        this.grid = [];

        for (let i = 0; i < 3; i++) {
            const row = [];

            for (let i = 0; i < 3; i++) {
                row.push("-");
            }

            this.grid.push(row);
        }

    }

    print() {
        const printGrid = this.grid.map(function (row) {
            return row.join(" | ");
        }).join("\n" + "----------" + "\n");

        return printGrid;
    }

    getCoordinate(input) {
        return this.grid[input[0]][input[1]]; // return a symbol or dash
    }

    setCoordinate(input, player) {
        this.grid[input[0]][input[1]] = player.symbol;
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

    stateOfGame() {
        if (this.isLose()) return console.log(`You Lose!!!`);
        if (this.isWin()) return console.log(`You Win!!!`);
        return false;
    }

    isLose() {
        const isStreak = [
            this.horizontalStreak(this.cpu.symbol),
            this.diagonalStreak(this.cpu.symbol),
            this.acrossTopLeft(this.cpu.symbol),
            this.acrossBottomLeft(this.cpu.symbol)
        ];

        return isStreak.some((streak) => streak === true);
    }

    isWin() {
        const isStreak = [
            this.horizontalStreak(this.player.symbol),
            this.diagonalStreak(this.player.symbol),
            this.acrossTopLeft(this.player.symbol),
            this.acrossBottomLeft(this.player.symbol)
        ];

        return isStreak.some((streak) => streak === true);
    }

    horizontalStreak(character) {

        for (let row = 0; row < this.grid.length; row++) {
            const checkForStreak = [];

            for (let col = 0; col < this.length; col++) {
                checkForStreak.push(this.getCoordinate([row, col]));
            }

            if (checkForStreak.length === this.grid.length) {
                const result = checkForStreak.every((symbol) => symbol === character);
                if (result) return true;
            }

        }

        return false;
    }

    diagonalStreak(character) {

        for (let row = 0; row < this.grid.length; row++) {
            const checkForStreak = [];

            for (let col = 0; col < this.grid.length; col++) {
                checkForStreak.push(this.getCoordinate([col, row]));
            }

            if (checkForStreak.length === this.grid.length) {
                const result = checkForStreak.every((symbol) => symbol === character);
                if (result) return true;
            }
        }

        return false;
    }

    acrossTopLeft(character) {
        let row = 0;
        let col = 0;

        const checkForStreak = [];

        while(row < this.grid.length && col < this.grid[row].length) {
            checkForStreak.push(this.getCoordinate([row, col]));

            row++;
            col++;
        }

        return checkForStreak.every((symbol) => symbol === character);
    }

    acrossBottomLeft(character) {
        let row = this.grid.length - 1;
        let col = 0;

        const checkForStreak = [];

        while(row >= 0 && col < this.grid[row].length) {
            checkForStreak.push(this.getCoordinate([row, col]));

            row--;
            col++;
        }

        return checkForStreak.every((symbol) => symbol === character);
    }

    rotateTurn() {
        [this.turn[1], this.turn[0]] = [this.turn[0], this.turn[1]];
        return true;
    }

    run() {}
}


module.exports = Board;

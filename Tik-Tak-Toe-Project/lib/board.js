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

        return console.log(printGrid);
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
        if (this.isLose()) {
            console.log(`You Lose!!!`);
            return true;
        }

        if (this.isWin()) {
            console.log(`You Win!!!`);
            return true;
        }

        return false;
    }

    isLose() {
        const isStreak = [
            this.horizontalStreak(this.cpu.symbol),
            this.verticalStreak(this.cpu.symbol),
            this.acrossTopLeft(this.cpu.symbol),
            this.acrossBottomLeft(this.cpu.symbol)
        ];

        return isStreak.some((streak) => streak === true);
    }

    isWin() {
        const isStreak = [
            this.horizontalStreak(this.player.symbol),
            this.verticalStreak(this.player.symbol),
            this.acrossTopLeft(this.player.symbol),
            this.acrossBottomLeft(this.player.symbol)
        ];

        return isStreak.some((streak) => streak === true);
    }

    horizontalStreak(character) {

        for (let row = 0; row < this.grid.length; row++) {
            const checkForStreak = [];

            for (let col = 0; col < this.grid.length; col++) {
                checkForStreak.push(this.getCoordinate([row, col]));
            }

            if (checkForStreak.length === this.grid.length) {
                const result = checkForStreak.every((symbol) => symbol === character);
                if (result) return true;
            }

        }

        return false;
    }

    verticalStreak(character) {

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

    current() {
        return this.turn[0];
    }

    async run() {
        let exit = false;
        this.print();
        while(!exit) {
            let availableCoordintates = this.collectCoordinates();
            let currentPlayer = this.current();
            let input = await currentPlayer.askCoordinate(availableCoordintates);
            this.setCoordinate(input, currentPlayer);
            this.print();
            console.log();
            console.log();
            console.log();
            if (this.stateOfGame()) {
                exit = true;
            } else {
                this.rotateTurn();
            }

        }

        return true;
    }
}


module.exports = Board;

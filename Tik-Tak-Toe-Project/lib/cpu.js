class Cpu {
    constructor(readline = null) {
        this.readline = readline;
        this.symbol = "O";
    }

    askCoordinate(availableCoordinate) {
        const maxRange = availableCoordinate.length;
        const index = Math.floor(Math.random() * maxRange);
        return availableCoordinate[index];
    }

}

module.exports = Cpu;

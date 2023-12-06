class Cpu {
    constructor(readline = null) {
        this.readline = readline;
    }

    getCoordinate(availableCoordinate) {
        const maxRange = availableCoordinate.length;
        const index = Math.floor(Math.random() * maxRange);
        return availableCoordinate[index];
    }

}

module.exports = Cpu;

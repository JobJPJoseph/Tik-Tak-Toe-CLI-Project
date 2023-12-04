const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Player {
    constructor() {}

    getCoordinate(availablePositions) {

    }

    validateCoordinates(input) {
        if (input.length > 3 || input.length < 3) return false;

    }
}

module.exports = Player;

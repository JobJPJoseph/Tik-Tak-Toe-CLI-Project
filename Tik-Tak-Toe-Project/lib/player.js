class Player {
    constructor(readline = null) {
        this.rl = readline;
    }

    getCoordinate(availablePositions) {

    }

    validateCoordinates(input) {
        if (input.length !== 3) return false;
        if (this.countSpaces(input) !== 1) return false;
        return this.formatInput(input);


    }

    countSpaces(input) {
        let count = 0;

        for (let i = 0; i < input.length; i++) {
            const isSpace = input[i];

            if (isSpace === " ") count++;
        }

        return count;
    }

    formatInput(input) {
        return input.split(" ").map(function(elem) {
            return Number(elem);
        });
    }

}

module.exports = Player;

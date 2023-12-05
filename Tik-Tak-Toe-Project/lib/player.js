class Player {
    constructor(readline = null) {
        this.rl = readline;
    }

    getCoordinate(availablePositions) {

    }

    validateCoordinates(input) {
        if (input.length > 3 || input.length < 3) return false;
        if (this.countSpaces(input) !== 1) return false;
        return this.formatInput(input);


    }

    countSpaces(input) {
        let count = 0;

        input.split("").forEach(function(elem) {
            if (elem === " ") count++;
        });

        return count;
    }

    formatInput(input) {
        input.split(" ").map(function(elem) {
            if (elem !== " ") {
                return Number(elem);
            } else {
                return elem;
            }
        })
    }

}

module.exports = Player;

class Player {
    constructor(readline = null) {
        this.readline = readline;
    }

    getCoordinate(availablePositions) {
        return new Promise((resolve) => {
            const rl = this.readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            const isInputIncluded = () => {

                rl.question("Enter your coordinate in this form: '0 0': ", (input) => {
                    const arrInput = this.formatCoordinates(input);

                    if (!arrInput) {
                        console.log('1: Enter a valid coordinate.');
                        return isInputIncluded();
                    } else if (!(this.validateCoordinates(availablePositions, arrInput))) {
                        console.log('2: Enter a valid coordinate.');
                        return isInputIncluded();
                    } else {
                        rl.close();
                        resolve(arrInput);
                    }

                });

            }

            isInputIncluded();
        });

    }

    validateCoordinates(availablePositions, input) {
        for (let i = 0; i < availablePositions.length; i++) {
            const position = availablePositions[i];

            if (JSON.stringify(position) === JSON.stringify(input)) return true;
        }

        return false;
    }

    formatCoordinates(input) {
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

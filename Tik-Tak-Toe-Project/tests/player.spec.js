const readline = require('readline');
const expect = require('chai').expect;



const Player = require('../lib/player');

describe('Player', function () {

    describe('Validate Coordinates', function() {

        it("it should check if the user's coordinate is in a valid length", function () {
            const player = new Player();
            const input1 = '';
            const result = player.formatCoordinates(input1);
            expect(result).to.equal(false);
        });

        it("it should check if the user's coordinate has only one space", function() {
            const player = new Player();
            const input = "1  ";
            const result = player.formatCoordinates(input);
            expect(result).to.equal(false);
        });

        it("it should format the user's coordinate into an array", function () {
            const player = new Player();
            const input = "0 0";
            const result = JSON.stringify(player.formatCoordinates(input));
            expect(result).to.equal('[0,0]');
        });

    });

    describe('Validate Coordinates', function () {
        it("the user's coordinates should be included i within availableCoordinates.", function () {
            const player = new Player();
            const availableCoordinates = [
                [0,0], [0,1], [0,2],
                [1,0], [1,1], [1,2],
                [2,0], [2,1], [2,2],
            ];
            const result = !player.validateCoordinates(availableCoordinates, [3,0]);
            expect(result).to.equal(true)
            const result1 = !player.validateCoordinates(availableCoordinates, [2,0]);
            expect(result1).to.equal(false)
        });
    })

});

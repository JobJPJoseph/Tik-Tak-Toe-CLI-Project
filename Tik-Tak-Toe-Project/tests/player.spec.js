const readline = require('readline');
const expect = require('chai').expect;



const Player = require('../lib/player');

describe('Player', function () {

    describe('Validate Coordinates', function() {

        it("it should check if the user's coordinate is in a valid length", function () {
            const player = new Player();
            const input1 = '';
            const result = player.validateCoordinates(input1);
            expect(result).to.equal(false);
        });

        it("it should check if the user's coordinate has only one space", function() {
            const player = new Player();
            const input = "1  ";
            const result = player.validateCoordinates(input);
            expect(result).to.equal(false);
        });

        it("it should format the user's coordinate into an array", function () {
            const player = new Player();
            const input = "0 0";
            const result = JSON.stringify(player.validateCoordinates(input));
            expect(result).to.equal('[0,0]');
        });

    });

});

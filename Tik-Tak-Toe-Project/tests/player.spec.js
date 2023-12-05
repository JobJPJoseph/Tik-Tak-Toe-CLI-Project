const readline = require('readline');
const expect = require('chai').expect;



const Player = require('../lib/player');

describe('Player', function () {

    describe('Validate Coordinates', function() {

        it("it should check if the user's coordinate is in a valid format", function () {
            const player = new Player();
            const input1 = '';
            const result = player.validateCoordinates(input1);
            expect(result).to.equal(false);
        });

    });

});

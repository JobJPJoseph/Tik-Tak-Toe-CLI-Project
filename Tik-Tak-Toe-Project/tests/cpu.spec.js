const expect = require('chai').expect;
const Cpu = require('../lib/cpu');

describe('Random CPU Coordinate', function () {
    describe('Get Coordinate', function () {
        it('it should get a random coordinate from the available coordinates', function () {
            const cpu = new Cpu();
            const availableCoordinates = [
                [0,0], [0,1], [0,2],
                [1,0], [1,1], [1,2],
                [2,0], [2,1], [2,2],
            ];
            const cpuCoordinate = cpu.askCoordinate(availableCoordinates);
            const result = availableCoordinates.includes(cpuCoordinate);
            expect(result).to.equal(true);
        })
    })
})

const Board = require('../lib/board');
const Cpu = require('../lib/cpu');
const Player = require('../lib/player');

const expect = require('chai').expect;

describe('Board class', function () {
    describe('Constructor', function () {
        it('should accept two argument: player, cpu', function () {
            const cpu = new Cpu();
            const player = new Player();
            const board = new Board(player, cpu);

            expect(board.player).to.equal(player);
            expect(board.cpu).to.equal(cpu);
        });

        it('should initialize four instances variables: player, cpu, turn, grid', function () {
            const cpu = new Cpu();
            const player = new Player();
            const board = new Board(player, cpu);

            expect(board.grid).to.be.an('array').that.has.lengthOf(3);
        });

        it('the grid instance needs to be 3-by-3 where the defualt value is a dash string', function () {
            const cpu = new Cpu();
            const player = new Player();
            const board = new Board(player, cpu);

            expect(board.grid).to.be.an('array').that.has.lengthOf(3);

            // Checking the default values in the grid
            for (const row of board.grid) {
                expect(row).to.be.an('array').that.deep.equals(['-', '-', '-']);
            }
        });
    });

    describe('print', function () {
        describe('print method', function () {
            it('should return a string representation of the board', function () {
                // Create a sample board with default values
                const player = new Player();
                const cpu = new Cpu();
                const board = new Board(player, cpu);

                const expectedOutput = "- | - | -\n----------\n- | - | -\n----------\n- | - | -";

                // Compare the output of the print method with the expected string
                expect(board.print()).to.equal(expectedOutput);
            });

            it('should display the correct symbols when the board is updated', function () {
                // Create a sample board and set some coordinates
                const player = new Player();
                const cpu = new Cpu();
                const board = new Board(player, cpu);

                expect(player.symbol).to.equal("X");
                expect(cpu.symbol).to.equal("O");
                // Assuming you have a setCoordinate method in your Board class
                board.setCoordinate([0, 0], player);
                board.setCoordinate([1, 1], cpu);

                const expectedOutput = `${player.symbol} | - | -\n----------\n- | ${cpu.symbol} | -\n----------\n- | - | -`;

                // Compare the output of the print method with the expected string
                expect(board.print()).to.equal(expectedOutput);
            });
        });
    });
})

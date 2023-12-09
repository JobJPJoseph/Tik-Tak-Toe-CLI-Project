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

    describe('setCoordinate', function () {
        it('should update the board with the player\'s symbol', function () {
            const player = new Player();
            const cpu = new Cpu();
            const board = new Board(player, cpu);

            // Assuming you have a setCoordinate method in your Board class
            board.setCoordinate([0, 0], player);
            board.setCoordinate([1, 1], cpu);

            // Verify that the board reflects the changes
            expect(board.getCoordinate([0, 0])).to.equal(player.symbol);
            expect(board.getCoordinate([1, 1])).to.equal(cpu.symbol);
        });
    });

    describe('getCoordinate', function () {
        it('should return the correct symbol or dash for the specified coordinate', function () {
            const player = new Player();
            const cpu = new Cpu();
            const board = new Board(player, cpu);

            // Assuming you have a setCoordinate method in your Board class
            board.setCoordinate([0, 0], player);
            board.setCoordinate([1, 1], cpu);

            // Check the symbols at the specified coordinates
            expect(board.getCoordinate([0, 0])).to.equal(player.symbol);
            expect(board.getCoordinate([1, 1])).to.equal(cpu.symbol);

            // Check an empty coordinate
            expect(board.getCoordinate([2, 2])).to.equal('-');
        });
    });

    describe('isValid', function () {
        it('should return true for a valid empty coordinate and false for an already filled coordinate', function () {
            const player = new Player();
            const cpu = new Cpu();
            const board = new Board(player, cpu);

            // Assuming you have a setCoordinate method in your Board class
            board.setCoordinate([0, 0], player);

            // Check the validity of coordinates
            expect(board.isValid([0, 0])).to.be.false; // Already filled
            expect(board.isValid([1, 1])).to.be.true; // Empty
            expect(board.isValid([2, 2])).to.be.true; // Empty
        });
    });

    describe('collectCoordinates', function () {
        it('should return an array of empty coordinates', function () {
            const player = new Player();
            const cpu = new Cpu();
            const board = new Board(player, cpu);

            // Assuming you have a setCoordinate method in your Board class
            board.setCoordinate([0, 0], player);
            board.setCoordinate([1, 1], cpu);

            // Collect empty coordinates
            const emptyCoordinates = board.collectCoordinates();

            // Check the length and content of the collected coordinates
            expect(emptyCoordinates).to.be.an('array').with.lengthOf(7);
            expect(emptyCoordinates).to.deep.include.members([[0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1], [2, 2]]);
        });
    });

    describe('horizontalStreak', function () {
        it('should return true for a horizontal streak and false otherwise', function () {
            const player = new Player();
            const cpu = new Cpu();
            const board = new Board(player, cpu);

            // Assuming you have a setCoordinate method in your Board class
            board.setCoordinate([0, 0], player);
            board.setCoordinate([0, 1], player);
            board.setCoordinate([0, 2], player);

            // Check for a horizontal streak
            const hasHorizontalStreak = board.horizontalStreak(player.symbol);

            // Expect true for a horizontal streak
            expect(hasHorizontalStreak).to.be.true;

            // Reset the board
            board.setCoordinate([0, 0], "-");
            board.setCoordinate([0, 1], "-");
            board.setCoordinate([0, 2], "-");

            // Check for no horizontal streak
            const noHorizontalStreak = board.horizontalStreak(player.symbol);

            // Expect false for no horizontal streak
            expect(noHorizontalStreak).to.be.false;
        });
    });

    describe('verticalStreak', function () {
        it('should return true for a vertical streak and false otherwise', function () {
            const player = new Player();
            const cpu = new Cpu();
            const board = new Board(player, cpu);

            // Assuming you have a setCoordinate method in your Board class
            board.setCoordinate([0, 0], player);
            board.setCoordinate([1, 0], player);
            board.setCoordinate([2, 0], player);

            // Check for a vertical streak
            const hasVerticalStreak = board.verticalStreak(player.symbol);

            // Expect true for a vertical streak
            expect(hasVerticalStreak).to.be.true;

            // Reset the board
            board.setCoordinate([0, 0], "-");
            board.setCoordinate([1, 0], "-");
            board.setCoordinate([2, 0], "-");

            // Check for no vertical streak
            const noVerticalStreak = board.verticalStreak(player.symbol);

            // Expect false for no vertical streak
            expect(noVerticalStreak).to.be.false;
        });
    });

    describe('acrossTopLeft', function() {
        it('should return true for a diagonal streak from top-left to bottom-right and false otherwise', function() {
            const player = new Player();
            const cpu = new Cpu();
            const board = new Board(player, cpu);

            // Assuming you have a setCoordinate method in your Board class
            board.setCoordinate([0, 0], player);
            board.setCoordinate([1, 1], player);
            board.setCoordinate([2, 2], player);

            // Check for a diagonal streak from top-left to bottom-right
            const hasDiagonalStreak = board.acrossTopLeft(player.symbol);

            // Expect true for a diagonal streak
            expect(hasDiagonalStreak).to.be.true;

            // Reset the board
            board.setCoordinate([0, 0], "-");
            board.setCoordinate([1, 1], "-");
            board.setCoordinate([2, 2], "-");

            // Check for no diagonal streak
            const noDiagonalStreak = board.acrossTopLeft(player.symbol);

            // Expect false for no diagonal streak
            expect(noDiagonalStreak).to.be.false;
        });
    });

    describe('acrossBottomLeft', function () {
        it('should return true for a diagonal streak from bottom-left to top-right and false otherwise', function () {
            const player = new Player();
            const cpu = new Cpu();
            const board = new Board(player, cpu);

            // Assuming you have a setCoordinate method in your Board class
            board.setCoordinate([2, 0], player);
            board.setCoordinate([1, 1], player);
            board.setCoordinate([0, 2], player);

            // Check for a diagonal streak from bottom-left to top-right
            const hasDiagonalStreak = board.acrossBottomLeft(player.symbol);

            // Expect true for a diagonal streak
            expect(hasDiagonalStreak).to.be.true;

            // Reset the board
            board.setCoordinate([2, 0], "-");
            board.setCoordinate([1, 1], "-");
            board.setCoordinate([0, 2], "-");

            // Check for no diagonal streak
            const noDiagonalStreak = board.acrossBottomLeft(player.symbol);

            // Expect false for no diagonal streak
            expect(noDiagonalStreak).to.be.false;
        });
    });
})

const readline = require('readline');
const Player = require("./player");
const Cpu = require("./cpu");
const Board = require("./board");

console.log('Welcome to my Tik-Tok-Tow Game!');

const player = new Player(readline);
const cpu = new Cpu(readline);
const board = new Board(player, cpu);

board.run();

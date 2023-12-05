const readline = require('readline');
const Player = require('./player');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const player = new Player(rl);

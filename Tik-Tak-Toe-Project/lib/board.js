
class Board {
    constructor(player = null, cpu = null) {
        this.player = player; // An instance
        this.cpu = cpu; // An instance
        this.grid = [];

        for (let i = 0; i < 3; i++) {
            const row = [];

            for (let i = 0; i < 3; i++) {
                row.push("-");
            }

            grid.push(row);
        }

    }

    print() {
        const printGrid = grid.map(function (row) {
            return row.join(" | ");
        }).join("\n" + "----------" + "\n");

        return printGrid;
    }




}

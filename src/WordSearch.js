export default class WordSearch {
    constructor(letterGrid) {
        this.letterGrid = letterGrid;
        this.R = letterGrid.length;
        this.C = letterGrid[0].length;
        this.x = [-1, -1, -1, 0, 0, 1, 1, 1];
        this.y = [-1, 0, 1, -1, 1, -1, 0, 1];
    }

    find(words) {
        // TO-DO: Implement searching for specific words in the letterGrid
        const returnObj = {};
        const search2D = (grid, row, col, word) => {
            let direction;
            if (grid[row][col] !== word[0]) {
                return false;
            }
            let wordLength = word.length;

            for (let dir = 0; dir < 8; dir++) {
                let k;
                let rd = row + this.x[dir];
                let cd = col + this.y[dir];

                for (k = 1; k < wordLength; k++) {
                    if (rd >= this.R || rd < 0 || cd >= this.C || cd < 0) {
                        break;
                    }
                    if (grid[rd][cd] !== word[k]) {
                        break;
                    }
                    rd += this.x[dir];
                    cd += this.y[dir];
                }
                if (k === wordLength) {
                    direction = dir;
                    return dir;
                }
            }
            return direction;
        }

        const patternSearch = (grid, word) => {
            for (let row = 0; row < this.R; row++) {
                for (let col = 0; col < this.C; col++) {
                    const dir = search2D(grid, row, col, word);
                    if (dir || dir === 0) {
                        const end = [0, 0];
                        if (dir <= 2) end[0] = row - word.length + 2;
                        else if (dir >= 5) end[0] = row + word.length;
                        else end[0] = row + 1;
                        if (dir === 0 || dir === 3 || dir === 5) end[1] = col - word.length + 2;
                        else if (dir === 1 || dir === 6) end[1] = col + 1;
                        else end[1] = col + word.length;
                        returnObj[word] = {start: [row + 1, col + 1], end: end}
                    } else if (!returnObj[word]) returnObj[word] = undefined;
                }
            }
        }
        words.forEach(word => patternSearch(this.letterGrid, word));
        return returnObj;
    }
}
export default class WordSearch {
    constructor(letterGrid) {
        this.letterGrid = letterGrid;
    }

    find(words) {
        // TO-DO: Implement searching for specific words in the letterGrid
        let returnObj = {};
        words.forEach(word => {
            const reversedWord = word.split('').reverse().join('');
            const objToAdd = {
                [word]: {
                    start: [],
                    end: []
                }
            }
            this.letterGrid.forEach((line, i) => {
                // word or reversedWord in given line
                if (line.includes(word)) {
                    const beginingOfWord = line.indexOf(word) + 1;
                    objToAdd[word].start = [i + 1, beginingOfWord];
                    objToAdd[word].end = [i + 1, beginingOfWord + word.length - 1];
                } else if (line.includes(reversedWord)) {
                    const beginingOfReversedWord = line.indexOf(reversedWord) + 1;
                    objToAdd[word].start = [i + 1, beginingOfReversedWord + word.length - 1];
                    objToAdd[word].end = [i + 1, beginingOfReversedWord];

                } else if (line.includes(word[0])) {
                    const verticalStart = line.indexOf(word[0]);
                    const verticalStartRevers = line.lastIndexOf(word[0]);
                    const checkDirections = (start) => {
                        let vertical = '';
                        let verticalReversed = '';
                        let diagonalForward = '';
                        let diagonalForwardReversed = '';
                        let diagonalBackward = '';
                        let diagonalBackwardReversed = '';
                        word.split('').forEach((letter, letterIndex) => {
                            if (i + letterIndex < this.letterGrid.length) {
                                vertical += this.letterGrid[i + letterIndex][start];
                                diagonalForward += this.letterGrid[i + letterIndex][start + letterIndex];
                                diagonalBackward += this.letterGrid[i + letterIndex][start - letterIndex];
                            }
                            if (i - letterIndex >= 0) {
                                verticalReversed += this.letterGrid[i - letterIndex][start];
                                diagonalForwardReversed += this.letterGrid[i - letterIndex][start + letterIndex];
                                diagonalBackwardReversed += this.letterGrid[i - letterIndex][start - letterIndex];
                            }
                        });
                        if (vertical === word) {
                            objToAdd[word].start = [i + 1, start + 1];
                            objToAdd[word].end = [i + word.length, start + 1];
                        } else if (verticalReversed === word) {
                            objToAdd[word].start = [i + 1, start + 1];
                            objToAdd[word].end = [i - word.length + 2, start + 1];
                        } else if (diagonalForward === word) {
                            objToAdd[word].start = [i + 1, start + 1];
                            objToAdd[word].end = [i + word.length, start + word.length];
                        } else if (diagonalForwardReversed === word) {
                            objToAdd[word].start = [i + 1, start + 1];
                            objToAdd[word].end = [i - word.length + 2, start + word.length];
                        } else if (diagonalBackwardReversed === word) {
                            objToAdd[word].start = [i + 1, start + 1];
                            objToAdd[word].end = [i - word.length + 2, start - word.length + 2];
                        } else if (diagonalBackward === word) {
                            if (!returnObj[word]) {
                                objToAdd[word].start = [i + 1, start + 1];
                                objToAdd[word].end = [i + word.length, start - 2];
                            }
                        }
                    }

                    checkDirections(verticalStart);
                    checkDirections(verticalStartRevers);
                }

                returnObj = {
                    ...returnObj,
                    ...objToAdd
                }

                if (returnObj[word].end.length === 0) {
                    returnObj = {
                        ...returnObj,
                        [word]: undefined
                    }
                }
            });
        })

        return returnObj;
    }
}
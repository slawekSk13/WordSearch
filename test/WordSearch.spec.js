import WordSearch from '../src/WordSearch.js';

describe('small letter grid', () => {
    it('can search left to right word in small grid', () => {
        const letterGrid = ['abcjavaabc'];
        const result = {
            java: {
                start: [1, 4],
                end: [1, 7],
            },
        };
        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['java'])).toEqual(result);
    });


    it('can search right to left word in a small grid', () => {
        const letterGrid = ['rsinnethrs'];
        const result = {
            tennis: {
                start: [1, 7],
                end: [1, 2],
            },
        };
        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['tennis'])).toEqual(result);
    });


    it('can search for unexisting word', () => {
        const letterGrid = ['abcdefghij'];
        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['word'])).toEqual({ word: undefined });
    });
});

describe('big letter grid', () => {
    it('can search left to right word in a big grid', () => {
        const letterGrid = [
            'abcdefghij',
            'saggsasagg',
            'qwopjrpqis',
            'mfaslkfmsa',
            'msflksmafl',
            'oqjrwqiwra',
            'ijqwrjifmm',
            'mafslkfasm',
            'koqwopwqrk',
            'ssjavaslfa',
        ];

        const result = {
            java: {
                start: [10, 3],
                end: [10, 6],
            },
        };
        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['java'])).toEqual(result);
    });

    it('can search right to left word in a big grid', () => {
        const letterGrid = [
            'abcdefghij',
            'saggsasagg',
            'qwopjrpqis',
            'mfaslkfmsa',
            'msflksmafl',
            'oqjrwqiwra',
            'ijqwrjifmm',
            'mafslkfasm',
            'koqwopwqrk',
            'ssavajslfa',
        ];

        const result = {
            java: {
                start: [10, 6],
                end: [10, 3],
            },
        };
        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['java'])).toEqual(result);
    });

    it('can search multiple words horizontally', () => {
        const letterGrid = [
            'abcdefghij',
            'saggsasagg',
            'qwopjrpqis',
            'mfaslkfmsa',
            'msflksmafl',
            'oqjrwqiwra',
            'ijqwrjifmm',
            'pythonaasm',
            'koqwopwqrk',
            'ssavajslfa',
        ];

        const result = {
            python: {
                start: [8, 1],
                end: [8, 6],
            },
            java: {
                start: [10, 6],
                end: [10, 3],
            },
        };

        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['python', 'java'])).toEqual(result);
    });

    it('can search word top to bottom', () => {
        const letterGrid = [
            'abcdefghij',
            'saggsasaga',
            'qwopjrpqiv',
            'mfaslkfmsa',
            'msflksmafl',
            'oqjrwqiwra',
            'ijqwrjifmm',
            'pythonaasm',
            'koqwopwqrk',
            'ssaaaaslfa',
        ];

        const result = {
            python: {
                start: [8, 1],
                end: [8, 6],
            },
            java: {
                start: [1, 10],
                end: [4, 10],
            },
        };
        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['java', 'python'])).toEqual(result);
    });

    it('can search word bottom to top', () => {
        const letterGrid = [
            'abcdefghia',
            'saggsasagv',
            'qwopjrpqia',
            'mfaslkfmsj',
            'msflksmafl',
            'oqjrwqiwra',
            'ijqwrjifmm',
            'pythonaasm',
            'koqwopwqrk',
            'ssaaaaslfa',
        ];

        const result = {
            python: {
                start: [8, 1],
                end: [8, 6],
            },
            java: {
                start: [4, 10],
                end: [1, 10],
            },
        };
        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['java', 'python'])).toEqual(result);
    });

    it('can search words top left to bottom right', () => {
        const letterGrid = [
            'jbcdefghis',
            'saggsasagv',
            'qwvpjrpqia',
            'mfaalkfmsj',
            'msflksmafl',
            'oqjrwqiwra',
            'ijqwrjifmm',
            'pythonaasm',
            'koqwopwqrk',
            'ssaaaaslfa',
        ];

        const result = {
            java: {
                start: [1, 1],
                end: [4, 4],
            },
            python: {
                start: [8, 1],
                end: [8, 6],
            },
        };
        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['java', 'python'])).toEqual(result);
    });

    it('can search words bottom right to top left', () => {
        const letterGrid = [
            'jbcdefghis',
            'saggsasagv',
            'qwvpjrpqia',
            'mfaslkfmsj',
            'msflksmafl',
            'oqjrwqiwra',
            'ijqwrjafmm',
            'pythonavsm',
            'koqwopwqak',
            'ssavacaraj',
        ];

        const result = {
            java: {
                start: [10, 10],
                end: [7, 7],
            },
            python: {
                start: [8, 1],
                end: [8, 6],
            },
        };
        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['java', 'python'])).toEqual(result);
    });


    it('can search words bottom left to top right', () => {
        const letterGrid = [
            'jbcdefghis',
            'saggsasagv',
            'qwapjrpqia',
            'mfaslkfmsj',
            'msflksmafl',
            'pythoniwra',
            'ijqarjsfmm',
            'pyvhonavsm',
            'kaqwopwqak',
            'jsavacaraj',
        ];

        const result = {
            java: {
                start: [10, 1],
                end: [7, 4],
            },
            python: {
                start: [6, 1],
                end: [6, 6],
            },
        };
        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['java', 'python'])).toEqual(result);
    });

    it('should search words top right to bottom left', () => {
        const letterGrid = [
            'jbcdefghij',
            'saggsasaav',
            'qwapjrpvia',
            'mfaslkamsj',
            'msflksmafl',
            'pythaniwra',
            'ijqarjsfmm',
            'pythonavsm',
            'kaqwopwqak',
            'jsavacaraj',
        ];

        const result = {
            java: {
                start: [1, 10],
                end: [4, 7],
            },
            python: {
                start: [8, 1],
                end: [8, 6],
            },
        };
        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['java', 'python'])).toEqual(result);
    });
});

describe('Readme Example', () => {
    it('should cover each case', () => {
        const letterGrid = [
            "_c____",
            "_s_a__",
            "_hd___",
            "basic_",
            "_r____",
            "_p____",
        ]

        const result = {
            ada: {
                start: [ 4, 2 ],
                end: [ 2, 4 ]
            },
            basic: {
                start: [ 4, 1 ],
                end: [ 4, 5 ]
            },
            csharp: {
                start: [ 1, 2 ],
                end: [ 6, 2 ]
            },
            haskell: undefined
        };
        const wordSearch = new WordSearch(letterGrid);

        expect(wordSearch.find(['basic', 'csharp', 'haskell', 'ada'])).toEqual(result);
    });
});

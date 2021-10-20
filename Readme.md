Word Search in JavaScript
You have a client that enjoys solving word search problems but he would like to know if he can beat a computer in it. Your task is to make a program that will solve word searching for any given letter grid and word list.

Setup
Follow the following steps if you are using a .zip/.git mode (i.e. not available inside Devskiller in-browser IDE):

npm install – install dependencies.
npm test – run all tests once (this will be used to evaluate your solutions).
npm run test:watch - run all tests in the watch mode (optionally, you can use it locally if you prefer).
Task
You are given a WordSearch class that has a letterGrid attribute which holds an array of strings that represent your letter grid.
This class also has a find(words) method that searches through the grid for given words in all directions. This method has a missing implementation.

You are expected to:

Initialize the WordSearch object to hold the letterGrid.
Implement the find method that will search a given grid in all directions.
Make sure the Searching Directions include: vertical, horizontal and diagonal.
The project contains unit tests and your goal is to make sure all tests are passed by filling in the missing code.

Output
The find method should return an object, with keys being words that are searched and values being the coordinates specifying where the words begin and end. For example, if we are looking for ada, basic, csharp and haskell words (wordSearch.find(['ada', 'basic', 'csharp', 'haskell'])), then the output should have the following structure:

{
"ada": <OCCURRENCE>,
"basic": <OCCURRENCE>,
"csharp": <OCCURRENCE>,
"haskell": <OCCURRENCE>
}
Each occurrence is an object defining the row and the column, in which the word starts and ends:

{
"start": [ROW, COLUMN],
"end": [ROW, COLUMN],
}
If the word has not been found, set the value of its key to undefined.

Edge Cases
Each word can only be found once (there is also no place for storing multiple occurrences in a single word result). Do not worry, the test examples will not include any case that a word may be found more than once.
Example
For the following letter grid:

[
"_c____",
"_s_a__",
"_hd___",
"basic_",
"_r____",
"_p____",
]
and searched words: 'ada', 'basic', 'csharp', 'haskell', the result is:

{
"ada": { // diagonal
"start": [ 4, 2 ],
"end": [ 2, 4 ]
},
"basic": { // horizontal
"start": [ 4, 1 ],
"end": [ 4, 5 ]
},
"csharp": { // vertical
"start": [ 1, 2 ],
"end": [ 6, 2 ]
},
"haskell": undefined // not found
}
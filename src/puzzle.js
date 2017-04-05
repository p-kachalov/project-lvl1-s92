export const newPuzzle = (puzzleQuestion, puzzleAnswer) => (message) => {
  switch (message) {
    case 'puzzleQuestion':
      return puzzleQuestion;
    case 'puzzleAnswer':
      return puzzleAnswer;
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};

export const puzzleQuestion = puzzle => puzzle('puzzleQuestion');
export const puzzleAnswer = puzzle => puzzle('puzzleAnswer');

/*
const myPuzzle = newPuzzle('2+2', '4');
console.log(puzzleQuestion(myPuzzle)); // 2+2
console.log(puzzleAnswer(myPuzzle)); // 4
*/

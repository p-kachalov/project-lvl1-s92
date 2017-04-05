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

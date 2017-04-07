export const cons = (car, cdr) => (message) => {
  switch (message) {
    case 'car':
      return car;
    case 'cdr':
      return cdr;
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};

export const car = puzzle => puzzle('car');
export const cdr = puzzle => puzzle('cdr');

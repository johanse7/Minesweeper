export const gameLevels = [
  {
    id: 1,
    text: 'Facil',
    mines: 10,
    width: 8,
    heigth: 8,
    flags: 10,
    sizeX: 45,
    sizeY: 45,
  },
  {
    id: 2,
    text: 'Intermedio',
    mines: 40,
    width: 16,
    heigth: 16,
    flags: 40,
    sizeX: 28,
    sizeY: 28,
  },
  {
    id: 3,
    text: 'Avanzado',
    mines: 99,
    width: 20,
    heigth: 20,
    flags: 99,
    sizeX: 20,
    sizeY: 20,
  },
];

export const generateRandomNumber = (dimension) => (
  Math.floor((Math.random() * 1000) + 1) % dimension
);

export const generateBoardMatrix = (width, heigth) => {
  const board = new Array(heigth).fill(new Array(width).fill({}));
  return board.map((heigth, i) => heigth.map((width, j) => ({
    heigth: i,
    width: j,
    isMine: false,
    mineNumber: 0,
    isSelection: false,
    isEmpty: false,
    isFlag: true,
  })));
};

///Private functions
const generateRandomNumber = (dimension) => (
  Math.floor((Math.random() * 1000) + 1) % dimension
);

const addMinesToBoard = (boardInit, heigth, width, mines) => {
  let radomHeigth,
    randomWidth,
    minesAdded = 0;

  while (minesAdded < mines) {
    randomWidth = generateRandomNumber(width);
    radomHeigth = generateRandomNumber(heigth);

    if (!boardInit[randomWidth][radomHeigth].isMine) {
      boardInit[randomWidth][radomHeigth].isMine = true;
      minesAdded++;
    }
  }

  return boardInit;
};
const getAroundCell = (postionHeigth, positionWidth, heigth, width, board) => {
  const aroundValues = [];
  // Up Position
  if (positionWidth > 0) {
    aroundValues.push(board[positionWidth - 1][postionHeigth]);
  }
  //position down
  if (positionWidth < (heigth - 1)) {
    aroundValues.push(board[positionWidth + 1][postionHeigth]);
  }

  //postition left
  if (postionHeigth > 0) {
    aroundValues.push(board[positionWidth][postionHeigth - 1]);
  }
  // postion right
  if (postionHeigth < (width - 1)) {
    aroundValues.push(board[positionWidth][postionHeigth + 1]);
  }
  // postion top left
  if (positionWidth > 0 && postionHeigth > 0) {
    aroundValues.push(board[positionWidth - 1][postionHeigth - 1]);
  }

  // postion top right
  if (positionWidth > 0 && postionHeigth < (width - 1)) {
    aroundValues.push(board[positionWidth - 1][postionHeigth + 1]);
  }

  //position bottom right
  if (positionWidth < (heigth - 1) && postionHeigth < (width - 1)) {
    aroundValues.push(board[positionWidth + 1][postionHeigth + 1]);
  }

  //postion bottom left
  if (positionWidth < heigth - 1 && postionHeigth > 0) {
    aroundValues.push(board[positionWidth + 1][postionHeigth - 1]);
  }

  return aroundValues;
};

const getNeighbours = (board, height, width) => {

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (!board[i][j].isMine) {
        const areaCell = getAroundCell(board[i][j].y, board[i][j].x, height, width, board);
        const mineNumber = areaCell.filter((area) => area.isMine).length;
        board[i][j].mineNumber = mineNumber;
      }
    };
  };
  return board;
};

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
    sizeX: 27,
    sizeY: 27,
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

export const generateBoardMatrix = (width, heigth, mines) => {
  let board = [];
  board = new Array(heigth).fill(new Array(width).fill({}));
  board = board.map((heigth, i) => heigth.map((width, j) => ({
    x: i,
    y: j,
    isMine: false,
    mineNumber: 0,
    isSelection: false,
    isFlag: false,
  })));

  board = addMinesToBoard(board, heigth, width, mines);
  board = getNeighbours(board, heigth, width);
  return board;
};

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
const getAroundCell = (x, y, height, width, board) => {
  const aroundValues = [];
  //up
  if (x > 0) {
    aroundValues.push(board[x - 1][y]);
  }

  //down
  if (x < height - 1) {
    aroundValues.push(board[x + 1][y]);
  }

  //left
  if (y > 0) {
    aroundValues.push(board[x][y - 1]);
  }

  //right
  if (y < width - 1) {
    aroundValues.push(board[x][y + 1]);
  }

  // top left
  if (x > 0 && y > 0) {
    aroundValues.push(board[x - 1][y - 1]);
  }

  // top right
  if (x > 0 && y < width - 1) {
    aroundValues.push(board[x - 1][y + 1]);
  }

  // bottom right
  if (x < height - 1 && y < width - 1) {
    aroundValues.push(board[x + 1][y + 1]);
  }

  // bottom left
  if (x < height - 1 && y > 0) {
    aroundValues.push(board[x + 1][y - 1]);
  }

  return aroundValues;
};

const getNeighbours = (board, height, width) => {

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (!board[i][j].isMine) {
        const areaCell = getAroundCell(board[i][j].x, board[i][j].y, height, width, board);
        const mineNumber = areaCell.filter((area) => area.isMine).length;
        board[i][j].mineNumber = mineNumber;
      }
    };
  };
  return board;
};

export const showBoarGameOver = (board) => {
  const tempBoard = board;
  board.forEach((row) => {
    row.forEach((item) => {
      item.isSelection = true;
    });
  });
  return tempBoard;
};

export const getMines = (board) => {
  const minesArray = [];
  board.forEach((row) => {
    row.forEach((item) => {
      if (item.isMine) {
        minesArray.push(item);
      }
    });
  });

  return minesArray;
};

export const getCellsIsNotSelected = (board) => {
  const minesArray = [];
  board.forEach((row) => {
    row.forEach((item) => {
      if (!item.isSelection) {
        minesArray.push(item);
      }
    });
  });

  return minesArray;
};

export const getFlags = (board) => {
  const flagsArray = [];
  board.forEach((row) => {
    row.forEach((item) => {
      if (item.isFlag) {
        flagsArray.push(item);
      }
    });
  });

  return flagsArray;
};

export const getEmptyCells = (x, y, heigth, width, board) => {
  const cells = getAroundCell(x, y, heigth, width, board);
  cells.forEach((item) => {

    if (!item.isSelection && !item.isFlag && (item.mineNumber === 0 || !item.isMine)) {
      board[item.x][item.y].isSelection = true;
      if (item.mineNumber === 0) {
        getEmptyCells(item.x, item.y, heigth, width, board);
      }
    }
  });

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

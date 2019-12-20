import { gameLevels } from '../config';

const initialState = {
  gameLevels,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEVEL_SELECTED':
      return {
        ...state,
        levelSelected: state.gameLevels.find((level) => level.id === action.payload),
      };
    case 'SET_BOARD_GAME':
      return {
        ...state,
        board: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

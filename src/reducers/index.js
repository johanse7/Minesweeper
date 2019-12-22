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
        board: null,
      };
    case 'SET_BOARD_GAME':
      debugger
      return {
        ...state,
        board: action.payload,
      };
    case 'UPDATE_NUMBER_FLAGS':
      debugger
      return {
        ...state,
        levelSelected: {
          ...state.levelSelected,
          flags: action.payload,
        },

      };
    default:
      return state;
  }
};

export default reducer;

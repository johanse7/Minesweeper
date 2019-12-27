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
        resultGame: null,
      };
    case 'SET_BOARD_GAME':
      return {
        ...state,
        board: action.payload,
      };
    case 'UPDATE_NUMBER_FLAGS':
      return {
        ...state,
        levelSelected: {
          ...state.levelSelected,
          flags: action.payload,
        },
      };
    case 'SET_INIT_TIMER':
      return {
        ...state,
        initTimer: action.payload,
        resetTimer: false,
      };
    case 'SET_RESET_TIMER':
      return {
        ...state,
        resetTimer: action.payload,
        initTimer: false,
      };
    case 'SET_RESULT_GAME':
      return {
        ...state,
        resultGame: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

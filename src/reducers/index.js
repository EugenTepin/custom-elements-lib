import { CHANGE_THEME } from 'actions';
import { CHANGE_COUNT } from 'actions';

const initialState = {
  theme: 'light',
  count: 1
};

function alienApp(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: action.theme };
    case CHANGE_COUNT:
      return { ...state, count: action.count };
    default:
      return state;
  }
}

export default alienApp;

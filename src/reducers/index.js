import { CHANGE_THEME } from 'actions'

const initialState = {
    theme: 'light'
};

function alienApp(state = initialState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, theme: action.theme};
        default:
            return state;
    }
}

export default alienApp;
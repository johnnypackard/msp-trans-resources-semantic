import { combineReducers } from 'redux';

const resources = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_RESOURCES':
            return [...action.payload]
        default:
            return state;
    }
};

export default combineReducers({
    resources,
});
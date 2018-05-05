import { combineReducers } from 'redux';

import initialState from '../constants/initialState';
import constants from '../constants/actionsType';

const convertedToNumber = (state: number = initialState.convertedToNumber, action: any) => {
    switch (action.type) {
        case constants.UPDATE_NUMBER:
            return action.payload;
        default:
            return state;
    }
};

const convertedToRoman = (state: string = initialState.convertedToRoman, action: any) => {
    switch (action.type) {
        case constants.UPDATE_ROMAN:
            return action.payload ? action.payload : initialState.convertedToRoman;
        default:
            return state;
    }
};

const appStore = combineReducers({
    convertedToNumber,
    convertedToRoman,
});

export default appStore;

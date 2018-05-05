import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appStore from './reducers';

const consoleMessages = (store: any) => (next: any) => (action: any) => {

    let result;

    console.groupCollapsed(`dispatching action => ${action.type}`);
    result = next(action);

    const { convertedToNumber, convertedToRoman } = store.getState();

    console.log(`

        convertedToNumber: ${convertedToNumber}
        convertedToRoman: ${convertedToRoman}

	`);

    console.groupEnd();

    return result;

};

export default (initialState = {}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(appStore, initialState);
};

import * as fetch from 'isomorphic-fetch';

import constants from '../constants/actionsType';

let BASE_PATH = '';

// Setup different BASE_PATHs for other environments
if (process.env.NODE_ENV === 'production') {
    BASE_PATH = 'http://localhost:3333';    // currently same as dev
} else {
    console.log('Looks like you\'re on development mode');
    BASE_PATH = 'http://localhost:3333';
}

export const convertNumber = (number: number) => (dispatch: any) => {
    fetch(`${BASE_PATH}/convertNumberToRoman?number=${number}`)
        .then((response: any) => response.json())
        .then((data: any) => {
            dispatch({
                type: constants.UPDATE_ROMAN,
                payload: data.roman
            });
        })
        .catch((error: any) => {
            console.log('Error fetching: ', error);
        });
};

export const convertRoman = (roman: string) => (dispatch: any) => {
    fetch(`${BASE_PATH}/convertRomanToNumber?roman=${roman}`)
        .then((response: any) => response.json())
        .then((data: any) => {
            dispatch({
                type: constants.UPDATE_NUMBER,
                payload: data.number
            });
        })
        .catch((error: any) => {
            console.log('Error fetching: ', error);
        });
};

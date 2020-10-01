import { nagivationConstants } from './nav.js';
import axios from 'axios';

export const categoryConstants = {
    CHANGE: 'CATEGORIES_CHANGE',
    GET: 'CATEGORIES_GET'
}

const initState = {
    list: [
        {
            normalizedName: 'books',
            displayName: 'Books',
            description: 'All books from all walks of life live here. There are so many to see and so many to read.'
        },
        {
            normalizedName: 'electronics',
            displayName: 'Electronics',
            description: 'There is a chip and a resistor and then there is 3.14159265358979323846... '
        },
        {
            normalizedName: 'garden',
            displayName: 'Garden',
            description: 'The grass is always greener on the other side. So they say, who are they?'
        },
        {
            normalizedName: 'sports',
            displayName: 'Sports',
            description: 'Run, jump, sprint, crawl, climb, swim, push, pull, swing, and I am tired.'
        }
    ],

    activeCategory: {}
};

export default (state = initState, action) => {

    let { type, payload } = action

    switch (type) {
        case categoryConstants.CHANGE:

            return {
                ...state,
                activeCategory: payload,
            };

        case nagivationConstants.GOHOME:

            return {
                ...state,
                activeCategory: {},
            };

        case categoryConstants.GET:

            return {
                ...state,
                list: payload
            }

        default:
            return state;
    };

};

export const changeActiveCategory = (category) => {
    return {
        type: categoryConstants.CHANGE,
        payload: category
    };
};

export function getCategories() {

    return async function (dispatch) {

        const response = await axios.get('https:/api-js401.herokuapp.com/api/v1/categories')

        dispatch({
            type: categoryConstants.GET,
            payload: response.data.results
        })

    }

}

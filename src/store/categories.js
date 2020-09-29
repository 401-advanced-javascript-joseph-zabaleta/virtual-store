import { nagivationConstants } from './nav.js';


export const categoryConstants = {
    CHANGE: 'CATEGORIES_CHANGE'
}

const initState = {
    list: [
        {
            normalizedName: 'books',
            diplayName: 'Books',
            description: 'Books Description...'
        },
        {
            normalizedName: 'electronics',
            diplayName: 'Electronics',
            description: 'Electronics Description...'
        },
        {
            normalizedName: 'garden',
            diplayName: 'Garden',
            description: 'Garden Description...'
        },
        {
            normalizedName: 'sports',
            diplayName: 'Sports',
            description: 'Sports Description...'
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

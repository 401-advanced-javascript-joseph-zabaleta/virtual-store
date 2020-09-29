import { nagivationConstants } from './nav.js';


export const categoryConstants = {
    CHANGE: 'CATEGORIES_CHANGE'
}

const initState = {
    list: [
        {
            normalizedName: 'books',
            displayName: 'Books Department',
            description: 'All books from all walks of life live here. There are so many to see and so many to read.'
        },
        {
            normalizedName: 'electronics',
            displayName: 'Electronics Department',
            description: 'There is a chip and then there is a resistor and then there is 3.14159265358979323846... '
        },
        {
            normalizedName: 'garden',
            displayName: 'Garden Department',
            description: 'The grass is always greener on the other side. So they say, who are they?'
        },
        {
            normalizedName: 'sports',
            displayName: 'Sports Department',
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

import _ from 'lodash';

import { categoryConstants } from './categories.js';
import { nagivationConstants } from './nav.js';

const initState = {
    list: [
        {
            category: 'books',
            name: 'Random Book new!',
            description: 'Some book description........',
            price: 20,
            count: 1,
        },
        {
            category: 'books',
            name: 'Blue Book',
            description: 'Special training Tactics Manual',
            price: 99,
            count: 10,
        },
        {
            category: 'electronics',
            name: 'Processor',
            description: 'Fastest processor known to you.',
            price: 750,
            count: 2,
        },
        {
            category: 'electronics',
            name: 'Power Supply',
            description: 'Gold standard powersupply: 1500W',
            price: 175,
            count: 5,
        },
        {
            category: 'electronics',
            name: 'Speedy Mouse',
            description: 'Computer mouse with the a speedy click response rate',
            price: 50,
            count: 12,
        },
        {
            category: 'garden',
            name: 'Golden Shovel',
            description: 'The perfect gift your lovely Gold Digger. There is a special gold digger out there that could really benefit from a tool of this power',
            price: 1500,
            count: 1,
        },
        {
            category: 'sports',
            name: 'FootBall',
            description: 'Top quality Football for recreational use',
            price: 15,
            count: 20,
        },
        {
            category: 'sports',
            name: 'BasketBall',
            description: 'Top quality BasketBall for recreational use',
            price: 15,
            count: 20,
        },
    ],

    activeList: []
};

initState.activeList = initState.list;

export default (state = initState, action) => {

    let { type, payload } = action

    switch (type) {
        case categoryConstants.CHANGE:

            let activeList = _.filter(state.list, (o) => {
                return o.category === payload.normalizedName
            });

            return {
                ...state,
                activeList,
            };

        case nagivationConstants.GOHOME:

            return {
                ...state,
                activeList: state.list,
            };

        default:
            return state;
    };

};

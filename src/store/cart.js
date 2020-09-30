import _ from 'lodash';

export const cartConstants = {

    INCREMENT: 'CART_INCREMENT',
    DECREMENT: 'CART_DECREMENT',

}


const initState = {
    cartList: [],
};

export default (state = initState, action) => {

    let { type, payload } = action

    switch (type) {

        case cartConstants.INCREMENT:

            let updatedList = [...state.cartList, payload]

            return {
                cartList: updatedList,
            }


        case cartConstants.DECREMENT:

            let cartList = _.filter(state.cartList, (o) => {

                return o.name !== payload.name

            });

            return {
                cartList
            };


        default:
            return state;

    };

};


export const incrementCart = (item) => {
    return {
        type: cartConstants.INCREMENT,
        payload: item,
    }
}

export const decrementCart = (item) => {
    return {
        type: cartConstants.DECREMENT,
        payload: item,
    }
}

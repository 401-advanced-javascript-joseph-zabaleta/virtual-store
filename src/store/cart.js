
const initState = {
    data: []
};

export default (state = initState, action) => {

    let { type } = action

    switch (type) {
        case 'SOMETHING':
            return {
                data: [...action.data]
            };
        default:
            return state;
    };

};

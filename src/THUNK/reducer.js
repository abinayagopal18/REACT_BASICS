const initalState = {
    counter: 0
};

const counterReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        default:
            return state;
    }
};

export default counterReducer;
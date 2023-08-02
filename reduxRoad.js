const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
};

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'gather': {
            return {
                ...state,
                supplies: state.supplies + 15,
                days: state.days + 1
            }
        }
        default: {
            return state;
        }
    }
}
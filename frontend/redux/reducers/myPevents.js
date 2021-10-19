

const myPevents = (state = [], action) => {
    switch (action.type) {
        case "SET_PEVENT":
            return action.payload;
        default: return state;
    }
}


export default myPevents;
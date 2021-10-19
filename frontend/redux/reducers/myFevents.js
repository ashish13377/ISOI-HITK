
const myFevents = (state = [], action) => {
    switch (action.type) {
        case "SET_FEVENT":
            return action.payload;
        default: return state;
    }
}


export default myFevents;
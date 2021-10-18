const memberReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_MEMBERS_DETAILS":
            return action.payload;
        default: return state;
    }
}


export default memberReducer;
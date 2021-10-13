const payReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_PAYMENT":
            return action.payload;
        default: return state;
    }
}


export default payReducer;
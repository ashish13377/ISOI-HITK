const paidEvents = (state = [], action) => {
    switch (action.type) {
        case "SET_PAID_EVENTS":
            return action.payload;
        default: return state;
    }
}


export default paidEvents;
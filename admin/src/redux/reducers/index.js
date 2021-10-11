import userReducer from "./userReducer";
import freeEventsReducer from "./freeEventsReducer"
import paidEvents from "./paidEvents"

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user : userReducer , freeEvents : freeEventsReducer , paidEvent : paidEvents
})

export default rootReducer;
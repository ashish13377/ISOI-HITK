import userDetails from "./userDetails";
import freeEventsReducer from "./freeEvents";
import paidEvents from "./paidEvents" ;

import { combineReducers } from "redux";

const rootReducer = combineReducers({
   user : userDetails , fEvents : freeEventsReducer , pEvents : paidEvents
})

export default rootReducer;
import userDetails from "./userDetails";
import freeEventsReducer from "./freeEvents";
import paidEvents from "./paidEvents" ;
import productsReducer from "./products"
import payReducer from "./payStat"

import { combineReducers } from "redux";

const rootReducer = combineReducers({
   user : userDetails , fEvents : freeEventsReducer , pEvents : paidEvents , products : productsReducer , payStat : payReducer
})

export default rootReducer;
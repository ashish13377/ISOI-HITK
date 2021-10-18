import userDetails from "./userDetails";
import freeEventsReducer from "./freeEvents";
import paidEvents from "./paidEvents" ;
import productsReducer from "./products"
import memberReducer from "./payStat"

import { combineReducers } from "redux";

const rootReducer = combineReducers({
   user : userDetails , fEvents : freeEventsReducer , pEvents : paidEvents , products : productsReducer , memberDetails : memberReducer
})

export default rootReducer;
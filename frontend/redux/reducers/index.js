import userDetails from "./userDetails";
import freeEventsReducer from "./freeEvents";
import paidEvents from "./paidEvents" ;
import productsReducer from "./products"
import memberReducer from "./payStat"
import myPevents from "./myPevents";
import myFevents from "./myFevents";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
   user : userDetails , fEvents : freeEventsReducer , pEvents : paidEvents , products : productsReducer , memberDetails : memberReducer , myfevents : myFevents , mypevents : myPevents
})

export default rootReducer;
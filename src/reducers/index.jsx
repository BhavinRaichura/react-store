import KartReducer from "./KartReducer";
import Counter from "./Counter";

import {combineReducers} from "redux"

const rootReducer = combineReducers({
    KartReducer,
    Counter
});

export default rootReducer;
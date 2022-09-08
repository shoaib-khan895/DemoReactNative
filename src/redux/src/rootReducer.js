import { combineReducers } from "redux";
import homeReducer from "./services/reducer";
export default combineReducers({
    home:homeReducer,
})
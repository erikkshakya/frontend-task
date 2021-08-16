import { combineReducers } from "redux";
import {serviceReducers} from "../reducers/serviceReducers"

export default combineReducers({
    services: serviceReducers
});

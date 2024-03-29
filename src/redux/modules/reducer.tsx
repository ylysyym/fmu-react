import { combineReducers } from "redux"

import configReducer from "./config"
import dataReducer from "./data"
import tabReducer from "./ui"

export default combineReducers({
    config: configReducer,
    data: dataReducer,
    ui: tabReducer
});
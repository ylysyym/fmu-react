import {
    SWITCH_TAB_TALLY,
    SWITCH_TAB_CONFIG,
    SWITCH_TAB_SETTINGS
} from "./types"
import {
    switchTallyTab,
    switchConfigTab,
    switchSettingsTab
} from "./actions"
import tabReducer from "./reducers"
import { getActiveTab } from "./selectors"

export default tabReducer;

export {
    SWITCH_TAB_TALLY,
    SWITCH_TAB_CONFIG,
    SWITCH_TAB_SETTINGS,
    switchTallyTab,
    switchConfigTab,
    switchSettingsTab,
    getActiveTab
};
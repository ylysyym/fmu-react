import {
    SWITCH_TAB_TALLY,
    SWITCH_TAB_CONFIG,
    SWITCH_TAB_SETTINGS
} from "./types"

const initialTabState = {
    tab: 2
}

export default function tabReducer(state: any = initialTabState, action: any) {
    switch (action.type) {
        case SWITCH_TAB_TALLY:
            return Object.assign({}, state, {
                ...state,
                tab: 1
            });

        case SWITCH_TAB_CONFIG:
            return Object.assign({}, state, {
                ...state,
                tab: 2
            });

        case SWITCH_TAB_SETTINGS:
            return Object.assign({}, state, {
                ...state,
                tab: 3
            });

        default:
            return state;
    }
}
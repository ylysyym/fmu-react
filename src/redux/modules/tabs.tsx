const SWITCH_TAB_TALLY = "fmu/tabs/SWITCH_TAB_TALLY";
const SWITCH_TAB_CONFIG = "fmu/tabs/SWITCH_TAB_CONFIG";
const SWITCH_TAB_SETTINGS = "fmu/tabs/SWITCH_TAB_SETTINGS";

export function switchTallyTab() {
    return {
        type: SWITCH_TAB_TALLY
    }
}

export function switchConfigTab() {
    return {
        type: SWITCH_TAB_CONFIG
    }
}

export function switchSettingsTab() {
    return {
        type: SWITCH_TAB_SETTINGS
    }
}

const initialTabState = {
    tab: 2
}

export function tabReducer(state: any = initialTabState, action: any) {
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

export function getActiveTab(state: any): number {
    return state.ui.tab;
}
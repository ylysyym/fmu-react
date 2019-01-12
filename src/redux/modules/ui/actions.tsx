import {
    SWITCH_TAB_TALLY,
    SWITCH_TAB_CONFIG,
    SWITCH_TAB_SETTINGS
} from "./types"

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
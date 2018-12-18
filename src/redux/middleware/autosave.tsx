import { START_GAME, STOP_GAME, SEND_PAGE_DATA } from "../modules/config"

/**
 * Saves store to localStorage after each action
 */

export const autosave = (uid: number) => {
    return (store: any) => (next: any) => (action: any) => {
        let result = next(action);
        if (action.type == START_GAME) {
            localStorage.setItem("config" + String(uid), JSON.stringify(store.getState().config));
        } else if (action.type == STOP_GAME) {
            try {
                localStorage.removeItem("config" + String(uid));
                localStorage.removeItem("data" + String(uid));
            } catch (err) {
                // Do nothing
            }
        } else if (action.type == SEND_PAGE_DATA) {
            localStorage.setItem("data" + String(uid), JSON.stringify(store.getState().data));
        }
        return result;
    }
}
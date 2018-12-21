import { START_GAME, STOP_GAME, ADD_MODERATOR, REMOVE_MODERATOR } from "../modules/config"
import { SEND_PAGE_DATA } from "../modules/data"

/**
 * Saves store to localStorage after each action
 */

export const autosave = (uid: number) => {
    return (store: any) => (next: any) => (action: any) => {
        let result = next(action);
        if (action.type == START_GAME || action.type == ADD_MODERATOR || action.type == REMOVE_MODERATOR) {
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
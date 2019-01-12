import {
    START_GAME,
    STOP_GAME,
    ADD_MODERATOR,
    REMOVE_MODERATOR,
    ADD_PLAYER,
    REMOVE_PLAYER
} from "~/redux/modules/config"
import { SEND_PAGE_DATA } from "~/redux/modules/data"

/**
 * Saves store to localStorage after each action
 */

export const autosave = (uid: number) => {
    return (store: any) => (next: any) => (action: any) => {
        let result = next(action);
        switch (action.type) {
            case START_GAME:
            case ADD_MODERATOR:
            case REMOVE_MODERATOR:
            case ADD_PLAYER:
            case REMOVE_PLAYER:
                localStorage.setItem("config" + String(uid), JSON.stringify(store.getState().config));
                break;
            case STOP_GAME:
                try {
                    localStorage.removeItem("config" + String(uid));
                    localStorage.removeItem("data" + String(uid));
                } catch (err) {
                    // Do nothing
                }
                break;
            case SEND_PAGE_DATA:
                localStorage.setItem("data" + String(uid), JSON.stringify(store.getState().data));
                break;
            default:
                break;
        }
        return result;
    }
}
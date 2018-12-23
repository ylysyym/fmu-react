import { SEND_PAGE_DATA } from "../modules/data"
import { addModerator } from "../modules/config"
import { getPageNumber } from "../../utils/threadinfo"

export const autoPopulateMod = (store: any) => (next: any) => (action: any) => {
    let result = next(action);
    if (action.type == SEND_PAGE_DATA) {
        if (store.getState().config.mods.length == 0 && getPageNumber() == 1) {
            // If no moderators are registered, and we are sending page 1 data, 
            // the first poster on this page is the thread creator
            // so automatically register them as a game moderator
            let originalPosterName = document.querySelector(".page .bigusername").textContent;
            store.dispatch(addModerator(originalPosterName));
        }
    }
    return result;
}

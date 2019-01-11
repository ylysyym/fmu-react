import { dataReducer } from "./reducers"
import { SEND_PAGE_DATA } from "./types"
import { sendPageData } from "./actions"
import { getTally } from "./selectors"

export default dataReducer;

export {
    SEND_PAGE_DATA,
    sendPageData,
    getTally
};
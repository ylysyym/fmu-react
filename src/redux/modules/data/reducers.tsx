import { SEND_PAGE_DATA } from "./types"

export function dataReducer(state: any = {}, action: any) {
    switch (action.type) {
        case SEND_PAGE_DATA:
            return Object.assign({}, state, {
                ...state,
                [action.page]: action.content
            });

        default:
            return state;
    }
}
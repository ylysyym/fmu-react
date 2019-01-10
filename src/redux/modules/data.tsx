import { getPageNumber } from "../../utils/threadinfo"

export const SEND_PAGE_DATA = "fmu/data/SEND_PAGE_DATA";

export interface PostData {
    postNumber: number,
    user: string,
    content: string,
    time: string,
    link: string
}

export function sendPageData() {
    let pageData: PostData[] = [];
    let posts = document.querySelectorAll(".page");
    posts.forEach((post) => {
        let boldTextNodes = post.querySelectorAll(".alt1 > div > b");
        boldTextNodes.forEach((boldText) => {
            const textContent: string = boldText.textContent;
            if (!textContent.toLowerCase().includes("vote")) {
                // Instance of bold text does not have keyword we are interested in
                return;
            }
            const username: string = post.querySelector(".bigusername").textContent;
            const postNumber: number = parseInt(post.querySelector("td > a > strong").textContent);
            pageData.push({
                postNumber: postNumber,
                user: username,
                content: textContent,
                time: "", // TODO: Implement
                link: "" // TODO: Implement
            });
        });
    });
    const pageNumber = getPageNumber();
    return {
        type: SEND_PAGE_DATA,
        page: pageNumber,
        content: pageData
    }
}

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
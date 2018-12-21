export const SEND_PAGE_DATA = "fmu/data/SEND_PAGE_DATA";

export function sendPageData() {
    let pageData: any = [];
    let posts = document.querySelectorAll(".page");
    posts.forEach((post) => {
        let boldTextNodes = post.querySelectorAll(".alt1 > div > b");
        boldTextNodes.forEach((boldText) => {
            let username: string = post.querySelector(".bigusername").textContent;
            let postNumber: number = parseInt(post.querySelector("td > a > strong").textContent);
            pageData.push({
                post: postNumber,
                user: username,
                content: boldText.textContent
            });
        });
    });
    return {
        type: SEND_PAGE_DATA,
        content: pageData
    }
}

export function dataReducer(state: any = {}, action: any) {
    switch (action.type) {
        case SEND_PAGE_DATA:
            return Object.assign({}, state, {
                ...state,
                1: action.content
            });

        default:
            return state;
    }
}
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
    const pageStr: string = document.querySelector(".pagenav td.vbmenu_control:first-child").textContent;
    const pageNum: number = pageStr ? parseInt(pageStr.split(" ")[1]) : 1;
    return {
        type: SEND_PAGE_DATA,
        page: pageNum,
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
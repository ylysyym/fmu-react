import { getPageNumber } from "../../../utils/threadinfo"
import { SEND_PAGE_DATA, PostData } from "./types"

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
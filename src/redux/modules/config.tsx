export const START_GAME = "fmu/config/START_GAME";
export const STOP_GAME = "fmu/config/STOP_GAME";
export const SEND_PAGE_DATA = "fmu/config/SEND_PAGE_DATA";

export function startGame() {
    return {
        type: START_GAME
    }
}

export function stopGame() {
    return {
        type: STOP_GAME
    }
}

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

const initialGameState = {
    config: {
        isActive: false
    }
};

export function reducer(state: any = initialGameState, action: any) {
    switch (action.type) {
        case START_GAME:
            return Object.assign({}, state, {
                ...state,
                config: {
                    isActive: true,
                    currentDay: 1
                }
            });
            break;
        case STOP_GAME:
            return Object.assign({}, state, {
                ...state,
                config: {
                    isActive: false
                }
            });
            break;
        case SEND_PAGE_DATA:
            return Object.assign({}, state, {
                ...state,
                data: {
                    1: action.content
                }
            });
            break;
        default:
            return state;
            break;
    }
}
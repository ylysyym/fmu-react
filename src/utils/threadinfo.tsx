export function getThreadId(): number {
    const url = new URL(window.location.href);
    const threadId = parseInt(url.searchParams.get("t"));
    return threadId;
}

export function getPageNumber(): number {
    const pageStr: string = document.querySelector(".pagenav td.vbmenu_control:first-child").textContent;
    const pageNumber: number = pageStr ? parseInt(pageStr.split(" ")[1]) : 1;
    return pageNumber;
}
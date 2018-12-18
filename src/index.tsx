import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"

import { ConnectedApp } from "./containers/App"
import { reducer, sendPageData } from "./redux/modules/config"
import { autosave } from "./redux/middleware/autosave"

let threadId = getThreadId();

function getThreadId(): number {
    let url = new URL(window.location.href);
    let threadId = parseInt(url.searchParams.get("t"));
    return threadId;
}

function getSavedData(): any {
    try {
        let savedConfig = localStorage.getItem("config" + String(threadId));
        if (savedConfig === null) {
            return undefined;
        }
        let savedData = localStorage.getItem("data" + String(threadId));
        return {
            config: JSON.parse(savedConfig),
            data: JSON.parse(savedData)
        };
    } catch (err) {
        return undefined;
    }
}

const store = createStore(reducer, getSavedData(), applyMiddleware(autosave(threadId)));

window.onload = function () {
    if (store.getState().config.isActive === true) {
        store.dispatch(sendPageData());
    }

    const insertionPoint = document.getElementById("qr_scroll");    
    const appRoot = document.createElement("div");
    insertionPoint.appendChild(appRoot);

    ReactDOM.render(
        <Provider store={store}>
            <ConnectedApp />
        </Provider>,
        appRoot);
};
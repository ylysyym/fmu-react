import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"

import { ConnectedApp } from "./containers/App"
import combineReducer from "./redux/modules/reducer"
import { sendPageData } from "./redux/modules/data"
import { autosave } from "./redux/middleware/autosave"
import { autoPopulateMod } from "./redux/middleware/autopopulate";
import { getThreadId } from "./utils/threadinfo"

function getSavedData(): any {
    const threadId = getThreadId();
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

const store = createStore(combineReducer, getSavedData(), applyMiddleware(autosave(getThreadId()), autoPopulateMod));

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
import App from "./app.jsx";
import React from "react";
import * as ReactDOM from "react-dom/client";
import store from "./Redux/redux_store.js"

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderTree = () => {
    root.render(
        <App state={store.getState()} />
    );
}

renderTree();

store.subscribe(renderTree);
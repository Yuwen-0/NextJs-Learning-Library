"use strict";
exports.__esModule = true;
var Button_1 = require("@/components/Button/Button");
var react_1 = require("react");
function Page() {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Products List"),
        React.createElement("h2", null, "Product 1"),
        React.createElement("h2", null, "Product 2"),
        React.createElement("h2", null, "Product 3"),
        React.createElement(react_1.Suspense, null,
            React.createElement(Button_1["default"], null, "Click"))));
}
exports["default"] = Page;

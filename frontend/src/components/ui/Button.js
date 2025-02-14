"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button = ({ onClick, children, className, }) => {
    return ((0, jsx_runtime_1.jsx)("button", { onClick: onClick, className: `px-2 py-2 text-2xl bg-green-500  text-white font-bold rounded ${className}`, children: children }));
};
exports.Button = Button;

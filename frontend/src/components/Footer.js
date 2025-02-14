"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const fa_1 = require("react-icons/fa");
const react_router_dom_1 = require("react-router-dom");
const Footer = () => {
    return ((0, jsx_runtime_1.jsx)("footer", { className: "border-t border-gray-600 py-12 text-white", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-[96%] max-w-screen-lg mx-auto flex flex-row justify-between", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "flex items-center space-x-3 rtl:space-x-reverse", children: (0, jsx_runtime_1.jsx)("span", { className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white", children: "Plinkoo.100x" }) }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: "space-y-2", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-center text-lg", children: "Follow On" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)("a", { href: "https://github.com/hkirat", target: "_blank", children: (0, jsx_runtime_1.jsx)(fa_1.FaGithub, { size: 30 }) }), (0, jsx_runtime_1.jsx)("a", { href: "https://www.youtube.com/@harkirat1", target: "_blank", children: (0, jsx_runtime_1.jsx)(fa_1.FaYoutube, { size: 30 }) }), (0, jsx_runtime_1.jsx)("a", { href: "https://twitter.com/kirat_tw", target: "_blank", children: (0, jsx_runtime_1.jsx)(fa_1.FaTwitter, { size: 30 }) })] })] }) })] }) }));
};
exports.Footer = Footer;

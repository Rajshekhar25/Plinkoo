"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const rx_1 = require("react-icons/rx");
const ui_1 = require("./ui");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsx)("nav", { className: "bg-white z-50 border-gray-200 dark:bg-[#262522] borbder-b shadow-lg", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "flex items-center space-x-3 rtl:space-x-reverse", children: (0, jsx_runtime_1.jsx)("span", { className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white", children: "Plinkoo.100x" }) }), (0, jsx_runtime_1.jsxs)(ui_1.Button, { "data-collapse-toggle": "navbar-default", className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-transparent", onClick: () => {
                        setIsMenuOpen(!isMenuOpen);
                    }, children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Open main menu" }), (0, jsx_runtime_1.jsx)(rx_1.RxHamburgerMenu, { size: 30 })] }), " ", (0, jsx_runtime_1.jsxs)("div", { className: `w-full lg:hidden flex flex-col md:w-auto items-center ${isMenuOpen ? "" : "hidden"}`, id: "navbar-default", children: [(0, jsx_runtime_1.jsx)(ui_1.Button, { className: "bg-transparent mx-4 hover:bg-black w-[50%]", onClick: () => navigate("/simulation"), children: "Simulation" }), (0, jsx_runtime_1.jsx)(ui_1.Button, { className: "bg-transparent mx-4 hover:bg-black w-[50%]", onClick: () => navigate("/game"), children: "Game" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "hidden w-full md:block md:w-auto", id: "navbar-default", children: [(0, jsx_runtime_1.jsx)(ui_1.Button, { className: "bg-transparent mx-4 hover:bg-black", onClick: () => navigate("/simulation"), children: "Simulation" }), (0, jsx_runtime_1.jsx)(ui_1.Button, { className: "bg-transparent mx-4 hover:bg-black", onClick: () => navigate("/game"), children: "Game" })] })] }) }));
};
exports.Navbar = Navbar;

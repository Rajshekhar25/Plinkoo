"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quotes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Button_1 = require("./ui/Button");
const Quotes = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex mx-16 flex-col justify-center pb-10 ", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-6xl font-bold", children: "Play Plinko, Earn More!" }), (0, jsx_runtime_1.jsx)("h3", { className: "mt-4 text-xl mb-4", children: "Plinko lets players drop a ball from the top of our triangular pin pyramid to find the winning route down to a corresponding multiplier. Inspired by the Japanese mechanical game known as Pachinko, Plinko provides players with the ability to customise your risk factor and multipliers ensuring this Stake Original game is suited for everyone at our online casino !" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { className: "hover:bg-green-600", onClick: () => navigate("/game"), children: "Play Plinko" })] }));
};
exports.Quotes = Quotes;

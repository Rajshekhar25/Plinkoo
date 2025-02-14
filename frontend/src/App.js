"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import "./App.css";
const react_router_dom_1 = require("react-router-dom");
const Simulation_1 = require("./pages/Simulation");
const Game_1 = require("./pages/Game");
const components_1 = require("./components");
const Home_1 = require("./pages/Home");
function App() {
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(components_1.Navbar, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.Home, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/simulation", element: (0, jsx_runtime_1.jsx)(Simulation_1.Simulation, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/game", element: (0, jsx_runtime_1.jsx)(Game_1.Game, {}) })] }), (0, jsx_runtime_1.jsx)(components_1.Footer, {})] }));
}
exports.default = App;

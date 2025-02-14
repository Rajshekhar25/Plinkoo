"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = Home;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const BallManager_1 = require("../game/classes/BallManager");
const constants_1 = require("../game/constants");
const padding_1 = require("../game/padding");
const react_router_dom_1 = require("react-router-dom");
const Simulate_1 = require("../components/Simulate");
const components_1 = require("../components");
function Home() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const canvasRef = (0, react_1.useRef)();
    let [outputs, setOutputs] = (0, react_1.useState)({
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [],
        16: [],
        17: [],
    });
    function simulate(ballManager) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            while (1) {
                i++;
                ballManager.addBall((0, padding_1.pad)(constants_1.WIDTH / 2 + 20 * (Math.random() - 0.5)));
                yield new Promise((resolve) => setTimeout(resolve, 1000));
            }
        });
    }
    (0, react_1.useEffect)(() => {
        if (canvasRef.current) {
            const ballManager = new BallManager_1.BallManager(canvasRef.current, (index, startX) => {
                setOutputs((outputs) => {
                    return Object.assign(Object.assign({}, outputs), { [index]: [...outputs[index], startX] });
                });
            });
            simulate(ballManager);
            return () => {
                ballManager.stop();
            };
        }
    }, [canvasRef]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col lg:flex-row  items-center justify-between ", children: [(0, jsx_runtime_1.jsx)(Simulate_1.Simulate, {}), (0, jsx_runtime_1.jsx)(components_1.Quotes, {})] }), (0, jsx_runtime_1.jsx)(components_1.FoundIssue, {})] }));
}

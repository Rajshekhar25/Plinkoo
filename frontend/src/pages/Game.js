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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = Game;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const BallManager_1 = require("../game/classes/BallManager");
const axios_1 = __importDefault(require("axios"));
const ui_1 = require("../components/ui");
const utils_1 = require("../utils");
function Game() {
    const [ballManager, setBallManager] = (0, react_1.useState)();
    const canvasRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        if (canvasRef.current) {
            const ballManager = new BallManager_1.BallManager(canvasRef.current);
            setBallManager(ballManager);
        }
    }, [canvasRef]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col lg:flex-row items-center justify-center", children: [(0, jsx_runtime_1.jsx)("canvas", { ref: canvasRef, width: "800", height: "800" }), (0, jsx_runtime_1.jsx)(ui_1.Button, { className: "px-10 mb-4", onClick: () => __awaiter(this, void 0, void 0, function* () {
                    const response = yield axios_1.default.post(`${utils_1.baseURL}/game`, {
                        data: 1,
                    });
                    if (ballManager) {
                        ballManager.addBall(response.data.point);
                    }
                }), children: "Add ball" })] }));
}

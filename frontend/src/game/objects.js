"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSinks = exports.createObstacles = void 0;
const constants_1 = require("./constants");
const padding_1 = require("./padding");
const MULTIPLIERS = {
    1: 16,
    2: 9,
    3: 2,
    4: 1.4,
    5: 1.4,
    6: 1.2,
    7: 1.1,
    8: 1,
    9: 0.5,
    10: 1,
    11: 1.1,
    12: 1.2,
    13: 1.4,
    14: 1.4,
    15: 2,
    16: 9,
    17: 16
};
const createObstacles = () => {
    const obstacles = [];
    const rows = 18;
    for (let row = 2; row < rows; row++) {
        const numObstacles = row + 1;
        const y = 0 + row * 35;
        const spacing = 36;
        for (let col = 0; col < numObstacles; col++) {
            const x = constants_1.WIDTH / 2 - spacing * (row / 2 - col);
            obstacles.push({ x: (0, padding_1.pad)(x), y: (0, padding_1.pad)(y), radius: constants_1.obstacleRadius });
        }
    }
    return obstacles;
};
exports.createObstacles = createObstacles;
const createSinks = () => {
    const sinks = [];
    const SPACING = constants_1.obstacleRadius * 2;
    for (let i = 0; i < constants_1.NUM_SINKS; i++) {
        const x = constants_1.WIDTH / 2 + constants_1.sinkWidth * (i - Math.floor(constants_1.NUM_SINKS / 2)) - SPACING * 1.5;
        const y = constants_1.HEIGHT - 170;
        const width = constants_1.sinkWidth;
        const height = width;
        sinks.push({ x, y, width, height, multiplier: MULTIPLIERS[i + 1] });
    }
    return sinks;
};
exports.createSinks = createSinks;

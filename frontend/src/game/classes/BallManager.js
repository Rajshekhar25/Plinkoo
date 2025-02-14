"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BallManager = void 0;
const constants_1 = require("../constants");
const objects_1 = require("../objects");
const padding_1 = require("../padding");
const Ball_1 = require("./Ball");
class BallManager {
    constructor(canvasRef, onFinish) {
        this.balls = [];
        this.canvasRef = canvasRef;
        this.ctx = this.canvasRef.getContext("2d");
        this.obstacles = (0, objects_1.createObstacles)();
        this.sinks = (0, objects_1.createSinks)();
        this.update();
        this.onFinish = onFinish;
    }
    addBall(startX) {
        const newBall = new Ball_1.Ball(startX || (0, padding_1.pad)(constants_1.WIDTH / 2 + 13), (0, padding_1.pad)(50), constants_1.ballRadius, 'red', this.ctx, this.obstacles, this.sinks, (index) => {
            var _a;
            this.balls = this.balls.filter(ball => ball !== newBall);
            (_a = this.onFinish) === null || _a === void 0 ? void 0 : _a.call(this, index, startX);
        });
        this.balls.push(newBall);
    }
    drawObstacles() {
        this.ctx.fillStyle = 'white';
        this.obstacles.forEach((obstacle) => {
            this.ctx.beginPath();
            this.ctx.arc((0, padding_1.unpad)(obstacle.x), (0, padding_1.unpad)(obstacle.y), obstacle.radius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.closePath();
        });
    }
    getColor(index) {
        if (index < 3 || index > this.sinks.length - 3) {
            return { background: '#ff003f', color: 'white' };
        }
        if (index < 6 || index > this.sinks.length - 6) {
            return { background: '#ff7f00', color: 'white' };
        }
        if (index < 9 || index > this.sinks.length - 9) {
            return { background: '#ffbf00', color: 'black' };
        }
        if (index < 12 || index > this.sinks.length - 12) {
            return { background: '#ffff00', color: 'black' };
        }
        if (index < 15 || index > this.sinks.length - 15) {
            return { background: '#bfff00', color: 'black' };
        }
        return { background: '#7fff00', color: 'black' };
    }
    drawSinks() {
        var _a;
        this.ctx.fillStyle = 'green';
        const SPACING = constants_1.obstacleRadius * 2;
        for (let i = 0; i < this.sinks.length; i++) {
            this.ctx.fillStyle = this.getColor(i).background;
            const sink = this.sinks[i];
            this.ctx.font = 'normal 13px Arial';
            this.ctx.fillRect(sink.x, sink.y - sink.height / 2, sink.width - SPACING, sink.height);
            this.ctx.fillStyle = this.getColor(i).color;
            this.ctx.fillText(((_a = (sink === null || sink === void 0 ? void 0 : sink.multiplier)) === null || _a === void 0 ? void 0 : _a.toString()) + "x", sink.x - 15 + constants_1.sinkWidth / 2, sink.y);
        }
        ;
    }
    draw() {
        this.ctx.clearRect(0, 0, constants_1.WIDTH, constants_1.HEIGHT);
        this.drawObstacles();
        this.drawSinks();
        this.balls.forEach(ball => {
            ball.draw();
            ball.update();
        });
    }
    update() {
        this.draw();
        this.requestId = requestAnimationFrame(this.update.bind(this));
    }
    stop() {
        if (this.requestId) {
            cancelAnimationFrame(this.requestId);
        }
    }
}
exports.BallManager = BallManager;

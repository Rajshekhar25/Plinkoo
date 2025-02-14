"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DECIMAL_MULTIPLIER = void 0;
exports.pad = pad;
exports.unpad = unpad;
exports.DECIMAL_MULTIPLIER = 10000;
function pad(n) {
    return n * exports.DECIMAL_MULTIPLIER;
}
function unpad(n) {
    return Math.floor(n / exports.DECIMAL_MULTIPLIER);
}

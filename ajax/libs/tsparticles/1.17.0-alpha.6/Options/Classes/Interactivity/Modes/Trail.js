"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trail = void 0;
const Utils_1 = require("../../../../Utils");
class Trail {
    constructor() {
        this.delay = 1;
        this.quantity = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.quantity !== undefined) {
            this.quantity = data.quantity;
        }
        if (data.particles !== undefined) {
            this.particles = Utils_1.Utils.deepExtend({}, data.particles);
        }
    }
}
exports.Trail = Trail;

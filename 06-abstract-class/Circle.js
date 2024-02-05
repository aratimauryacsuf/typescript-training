"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(theX, theY, _r) {
        super(theX, theY);
        this._r = _r;
    }
    calculateArea() {
        return Math.PI * Math.pow(this._r, 2);
    }
    get r() {
        return this._r;
    }
    set r(value) {
        this._r = value;
    }
    getInfo() {
        return super.getInfo() + `,r=${this._r}`;
    }
}
exports.Circle = Circle;

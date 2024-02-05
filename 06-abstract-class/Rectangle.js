"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, _w, _l) {
        super(theX, theY);
        this._w = _w;
        this._l = _l;
    }
    calculateArea() {
        return this._w * this._l;
    }
    get w() {
        return this._w;
    }
    set w(value) {
        this._w = value;
    }
    get l() {
        return this._l;
    }
    set l(value) {
        this._l = value;
    }
    getInfo() {
        return super.getInfo() + `,w=${this._w}, l=${this._l}`;
    }
}
exports.Rectangle = Rectangle;

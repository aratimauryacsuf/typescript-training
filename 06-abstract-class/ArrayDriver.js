"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
//let myShape =new Shape(10,20);
//console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(5, 10, 20);
//console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(5, 10, 5, 10);
//console.log(myRectangle.getInfo());
// declare array of shapes initially empty
let theShapes = [];
// add shapes to array
//theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let shape of theShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
}

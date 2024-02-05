import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

//let myShape =new Shape(10,20);
//console.log(myShape.getInfo());

let myCircle = new Circle(5,10,20);
//console.log(myCircle.getInfo());

let myRectangle = new Rectangle(5,10,5,10);
//console.log(myRectangle.getInfo());

// declare array of shapes initially empty
let theShapes: Shape[] =[];

// add shapes to array
//theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let shape of theShapes){
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
}
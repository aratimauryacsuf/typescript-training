import { Shape } from "./Shape";

export class Circle extends Shape{
    calculateArea(): number {
       return Math.PI * Math.pow(this._r,2);
    }

    constructor(theX:number, theY: number, private _r: number){
        super(theX,theY)

}
public get r(): number{
    return this._r;
}
public set r(value:number){
     this._r=value;
}

getInfo(): string{
    return super.getInfo()+`,r=${this._r}`;
}
}
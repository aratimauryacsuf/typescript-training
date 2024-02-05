import { Shape } from "./Shape";

export class Rectangle extends Shape{
    calculateArea(): number {
        return this._w * this._l;
    }
   
    constructor(theX:number, theY: number, private _w: number, private _l: number){
        super(theX,theY)
        
    }

    public get w(): number{
        return this._w;
    }
    public set w(value:number){
         this._w=value;
    }

    
    public get l(): number{
        return this._l;
    }
    public set l(value:number){
         this._l=value;
    }

    getInfo(): string{
        return super.getInfo()+ `,w=${this._w}, l=${this._l}`;
    }
}
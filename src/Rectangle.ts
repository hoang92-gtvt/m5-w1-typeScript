import {Shap} from "./shap";

// @ts-ignore
export class Rectangle extends Shap implements IArea{
   constructor(x:number, y: number, private _width:number, private _height:number) {
       super(x, y);
   }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    area(): number {
        return this._width*this._height;
    }
}
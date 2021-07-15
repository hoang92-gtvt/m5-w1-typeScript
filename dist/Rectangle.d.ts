import { Shap } from "./shap";
export declare class Rectangle extends Shap implements IArea {
    private _width;
    private _height;
    constructor(x: number, y: number, _width: number, _height: number);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    area(): number;
}

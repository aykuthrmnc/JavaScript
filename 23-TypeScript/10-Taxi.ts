import { Vehicle } from './10-Vehicle';
import { Point } from './10-Point';

export class Taxi implements Vehicle {

    constructor(private _location?: Point, private _color?: string) { }

    travelTo(point: Point): void {
        console.log(`Taksi X: ${this._location.x}, Y: ${this._location.y} dan X: ${point.x}, Y: ${point.y} konumuna gidiyor.`);
    }

    get location() {
        return this._location;
    }

    set location(value: Point) {
        if (value.x < 0 || value.y < 0) {
            throw new Error('Koordinat bilgileri negatif olamaz.');
        }
        this._location = value;
    }
}
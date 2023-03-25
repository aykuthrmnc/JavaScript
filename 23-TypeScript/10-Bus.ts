import { Vehicle } from './10-Vehicle';
import { Point } from './10-Point';

export class Bus implements Vehicle {
    travelTo(point: Point): void {
        throw new Error('Method not implemented.');
    }
}
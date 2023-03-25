import { Point } from './10-Point';

export interface Vehicle {
    travelTo(point: Point): void;
}

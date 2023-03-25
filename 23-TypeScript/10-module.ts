import { Taxi } from './10-Taxi';

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });

let currentLocation = taxi_1.location;
taxi_1.location = ({ x: 3, y: 4 });

interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Taksi X: ${point.x}, Y: ${point.y} konumuna gidiyor.`);
    }
}

class Bus implements Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Otobus X: ${point.x}, Y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 2, y: 5 };

let taxi_2: Taxi = new Taxi();
taxi_2.travelTo({ x: 5, y: 6 });
taxi_2.currentLocation = { x: 2, y: 5 };

let bus_1: Bus = new Bus();
bus_1.travelTo({ x: 5, y: 6 });
bus_1.currentLocation = { x: 2, y: 5 };

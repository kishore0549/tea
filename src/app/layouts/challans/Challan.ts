export class Vehicle {
    name: String;
    type: String;
    number: String;
    segment: String;
}


export class Challan {
    _id: number;
    name: string;
    address: string;
    vehicle: Vehicle;
    status: string;
    location: string;
    zone: string;
    offenceDate: Date;
}

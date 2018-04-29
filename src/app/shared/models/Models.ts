export class SiteLocation {
    _id: number;
    location: string;
    zone: number;
    zone_name: string;
}

export class Zone {
    _id: number;
    zone: string;
}

export class VehicleType {
    type: string;
    segment: string;
}


export class ChallanFile {
    _id: number;
    filename: string;
}

export interface CarInfo {
    registrationNumber: string | null;
    co2Emissions: number  | null;
    engineCapacity: number | null;
    markedForExport: boolean | null;
    fueltype: string | null;
    motStatus: string | null;
    colour: string | null;
    make: string | null;
    typeApproval: string | null;
    yearOfManufacture: number | null;
    taxDueDate: string | null;
    taxStatus: string | null;
    dateOfLastV5CIssued: string | null;
    motExpiryDate: string  | null;
    wheelplan: string | null;
    nonthOfFirstRegistration: string | null;
}

export enum Errors {
    NoApiKey = "[ERROR] Please provide an API key",
    NoRegistrationPlate = "[ERROR] Please provide a registration plate",
    NoCarInfoFound = "[404] No car info found",
    ServerError = "[500] Internal server Error",
    BadRequest = "[400] Bad request",
    ServiceUnavailable = "[503] Service unavailable"
}
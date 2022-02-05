import axios from "axios";
import { CarInfo, Errors } from "./interfaces";

export default class RequestHandler {
    apiKey: string;
    data: any;
    status: number;
    error: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async getCarInfo(registrationPlate: string) {
        let url = 
            `https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles`;

        try {
            const infoReturned = 
                await axios.post(url, 
                    { 
                        "registrationNumber": registrationPlate 
                    }, 
                    {
                        headers: {
                            "Content-Type": "application/json",
                            'x-api-key': this.apiKey
                    }
            });
            this.data = infoReturned.data;
            this.status = infoReturned.status;

        } catch(e) {
            this.status = (e as any).response.status
            this.error = (e as Error).message
        }

        if(this.status === 200)
            return this.data as CarInfo;
        else if (this.status === 404)
            return Errors.NoCarInfoFound;
        else if (this.status === 500)
            return Errors.ServerError;
        else if (this.status === 400)
            return Errors.BadRequest;
        else if (this.status === 503)
            return Errors.ServiceUnavailable;
        
    }
}
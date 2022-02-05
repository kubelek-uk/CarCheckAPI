import axios from "axios";

export default class RequestHandler {
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async getCarInfo(registrationPlate: string) {
        let url = `https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles`
        //`https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles`

        let data = await axios.post(url, {
            "registrationNumber": registrationPlate
        }, {
            headers: {
                "Content-Type": "application/json",
                'x-api-key': '0U5tTnzTZC7tb3CMwkSOt6SNNJlh963fhQ2wb8J4'
            }
        })

        if(data.status === 200) {
            return data.data;
        } else return data.statusText

        //.then(response => {
        //    return response.data;
        //}).catch(error => {
        //    return error.message;
        //})
    }
}
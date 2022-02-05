import RequestHandler from './requestHandler';

export default class carCheckAPI {
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async getCarInfo(registrationPlate: string) {
        if(!this.apiKey) 
            return `Please provide an API key`;

        let handler = new RequestHandler(this.apiKey);

        return handler.getCarInfo(registrationPlate);
    }
}
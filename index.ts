import RequestHandler from './src/requestHandler';
import { Errors } from './src/interfaces';

export default class carCheckAPI {
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async allInfo(registrationPlate: string) {
        if(!this.apiKey) 
            return Errors.NoApiKey;
        
        if(!registrationPlate) 
            return Errors.NoRegistrationPlate;

        const handler = new RequestHandler(this.apiKey);

        return handler.getCarInfo(registrationPlate);
    }
}
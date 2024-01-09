import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (): void => {
        console.log('Você pediu um empréstimo.');
    }
    
    deposit = (): number=> {
        return 1000;
    }
}
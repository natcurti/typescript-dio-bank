import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{

    constructor(name: string, accountNumber: number, balance: number){
        super(name, accountNumber, balance);
    }

    getLoan = (value: number): void => {
        if(this.validateStatus()){
            this.setBalance(this.getBalance() + value);
            console.log(`Você fez um empréstimo de ${value}. Saldo atual: ${this.getBalance()}`);
        }      
    }    

}
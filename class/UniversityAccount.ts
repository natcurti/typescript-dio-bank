import { DioAccount } from "./DioAccount";

export class UniversityAccount extends DioAccount{

    constructor(name: string, accountNumber: number, balance: number){
        super(name, accountNumber, balance);
    }

    specialDeposit = (value: number):void => {
        if(this.validateStatus()){
            value += 10;
            this.setBalance(this.getBalance() + value);
            console.log(`Você depositou ${value}. Saldo atual: ${this.getBalance()}`);
        }
    }
}
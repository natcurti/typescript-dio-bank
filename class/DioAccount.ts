export abstract class DioAccount{
    name: string
    accountNumber: number
    balance: number = 20

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = ():void => {
        console.log('Você fez um depósito.');
    }

    withdraw = ():void => {
        console.log('Você sacou dinheiro');
    }

    getBalance = ():void => {
        console.log(this.balance);
    }
}
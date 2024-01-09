export abstract class DioAccount{
    private name: string
    private accountNumber: number
    private balance: number
    private status: boolean = true;

    constructor(name: string, accountNumber: number, balance: number){
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    getBalance = ():number => {
        return this.balance;
    }

    setBalance = (value: number): void => {
        this.balance = value;
    }

    deposit = (value: number):void => {
        if(this.validateStatus()){
            this.setBalance(this.getBalance() + value);
            console.log(`Você depositou ${value}. Saldo atual: ${this.getBalance()}`);
        }        
    }

    withdraw = (value: number):void => {
        if(this.validateStatus()){
            if(this.getBalance() >= value){
                this.setBalance(this.getBalance() - value);
                console.log(`Você sacou ${value}. Saldo atual: ${this.getBalance()}`);
            } else {
                console.log('Você não tem saldo suficiente.');
            }
        }
    }

    readonly validateStatus = (): boolean => {
        if(this.status){
            return this.status;
        }

        throw new Error('Conta inválida');
    }
}
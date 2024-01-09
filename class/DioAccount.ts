export abstract class DioAccount{
    private name: string
    readonly accountNumber: number
    balance: number = 20
    private status: boolean = true;

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => {
        return this.name;
    }

    setName = (name: string): void => {
        this.name = name;
        console.log('Nome alterado com sucesso!');
    }

    deposit = ():void => {
        if(this.validateStatus()){
            console.log('Você fez um depósito.');
        }        
    }

    withdraw = ():void => {
        console.log('Você sacou dinheiro');
    }

    getBalance = ():void => {
        console.log(this.balance);
    }

    private validateStatus = (): boolean => {
        if(this.status){
            return this.status;
        }

        throw new Error('Conta inválida');
    }
}
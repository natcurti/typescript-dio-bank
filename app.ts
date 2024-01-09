import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const accountOne: PeopleAccount = new PeopleAccount(1, 'Natalia', 1);

const companyOne: CompanyAccount = new CompanyAccount('Itaú', 2);
console.log(companyOne.deposit());
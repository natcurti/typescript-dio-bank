import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { UniversityAccount } from "./class/UniversityAccount";

const accountOne: PeopleAccount = new PeopleAccount(1, 'Natalia', 1, 100);
accountOne.deposit(10);
accountOne.withdraw(500);

const accountTwo: UniversityAccount = new UniversityAccount('José', 2, 500);
accountTwo.specialDeposit(500);

const accountThree: CompanyAccount = new CompanyAccount('SchoolCompany', 3, 1000);
accountThree.getLoan(500);
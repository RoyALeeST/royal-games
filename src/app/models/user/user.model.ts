import { Account } from '../account/account.model';

export class User{
    _id?: string;
    name?: string;
    firstName?: string;
    lastName?: String;
    secondLastName?: String;
    reputation?: Number;
    dateOfBirth?: Date;
    address?: string;
    accounts?: Account;
    credits?: any;
}
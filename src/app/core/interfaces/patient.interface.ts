import { ICodeName } from './extandable.interface';

export interface IPatient {
    age: string,
    ids: Array<IPatientCodeNameValue>,
    sex: IPatientSex,
    code: number,
    isFavorite: boolean,
    address: IPatientAddress,
    fullName: string,
    inactive: boolean,
    lastName: string,
    birthDate: IPatientBirthDate,
    birthYear: number,
    defaultId: string,
    firstName: string,
    middleName: string,
    searchedBy: IPatientCodeNameValue,
    defaultIdType: ICodeName,
}

export interface IPatientAddress {
    fax: string,
    zip: string,
    email: string,
    phone1: string,
    phone2: string,
    street1: string,
    street2: string,
    street3: string,
    extension: number,
}

export interface IPatientBirthDate {
    dateTime: string,
    formattedDate: string,
}

export interface IPatientSex extends ICodeName {
    identifier: string,
}

export interface IPatientCodeNameValue extends ICodeName {
    value: string,
}

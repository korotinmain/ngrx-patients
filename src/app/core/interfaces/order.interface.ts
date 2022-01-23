import { IPatient } from './patient.interface';
import { ICodeName } from './extandable.interface';

export interface IOrder {
    stat: boolean,
    flags: string,
    onHold: boolean,
    isFavorite: boolean,
    status: IOrderStatus,
    creator: IOrderCreator,
    patient: IPatient,
    orderNum: 185042,
    orderName: string,
    physician: IOrderPhysician,
    estTypes: Array<ICodeName>,
    identifier: string,
    isRejected: boolean,
    hasComments: boolean,
    creationDate: ICreateDate,
}

export interface IOrderStatus {
    name: string,
    identifier: string, // "PENDING_ORDER"  Need to get all enum values
}

export interface IOrderCreator extends ICodeName {
    username: string,
}

export interface IOrderPhysician extends ICodeName {
    lastName: string,
    firstName: string,
}

export interface ICreateDate {
    dateTime: string,
    formattedDate: string,
    formattedTime: string,
}

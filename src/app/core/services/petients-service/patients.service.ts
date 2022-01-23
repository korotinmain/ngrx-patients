import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IPatient } from '../../interfaces/patient.interface';

interface PatientsResponse {
    count: number,
    patient: Array<IPatient>
}

@Injectable({
    providedIn: 'root',
})
export class PatientsService {

    constructor(private http: HttpClient) {
    }

    getPatientsList(): Observable<Array<IPatient>> {
        return this.http.get<PatientsResponse>('https://api.mocki.io/v2/51597ef3')
            .pipe(
                map(response => response.patient.map(patient => ({...patient, isFavorite: false}))),
            )
    }
}

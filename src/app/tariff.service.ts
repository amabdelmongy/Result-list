import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Tariff } from './Tariff';

@Injectable()
export class TariffService {
    constructor(private http: HttpClient) { }

    getTarifs(): Promise<any[]> {
        return this.http.get<any>('assets/data.json')
        .toPromise()
        .then(res => <Tariff[]>res.data)
        .then(data => { return data; });
    } 
}
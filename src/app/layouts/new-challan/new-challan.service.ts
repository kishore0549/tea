import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Challan} from '../challans/Challan';

@Injectable()
export class NewChallanService {

    private REST_API_URL = environment.API_URL;
  constructor(private httpClient: HttpClient ) { }



createChallan(challan: any): Observable<any> {
        return this.httpClient
            .post(this.REST_API_URL + '/challan', challan);
    }


    getOffences(): Observable<any> {
        return this.httpClient
            .get(this.REST_API_URL + '/offence');
    }

}

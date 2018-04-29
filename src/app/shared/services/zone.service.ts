import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';


@Injectable()
export class ZoneService {

  constructor(private httpClient: HttpClient) { }
    private REST_API_URL = environment.API_URL;

    public getZones(): Observable<Object> {
        return this.httpClient
            .get(this.REST_API_URL + '/zone');
    }


}

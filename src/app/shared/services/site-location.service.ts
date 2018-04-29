import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class SiteLocationService {

    constructor(private httpClient: HttpClient) { }
    private REST_API_URL = environment.API_URL;

    public getLocations(): Observable<Object> {
        return this.httpClient
            .get(this.REST_API_URL + '/location');
    }

    public getVehicleTypes(): Observable<Object> {
        return this.httpClient
            .get(this.REST_API_URL + '/vehicle-type');
    }

}

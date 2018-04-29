import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {DataTableParams} from 'angular5-data-table';

@Injectable()
export class ChallansService {

    constructor(private httpClient: HttpClient) { }
    private REST_API_URL = environment.API_URL;

    getChallans(): Observable<Object> {
        return this.httpClient
            .get(this.REST_API_URL + '/challan');

    }

/*    getCount(): Observable<Object> {
        return this.httpClient
            .get(this.REST_API_URL + '/challan');
    }*/

    findChallan(vehicle_number): Observable<Object> {
        return this.httpClient
            .get(this.REST_API_URL + '/challan/' + vehicle_number);
    }

    query(params: DataTableParams) {
        return this.httpClient.get(this.REST_API_URL + '/challan?' + this.paramsToQueryString(params)).toPromise()
            .then((resp: Response) => ({
                items: resp.json(),
                count: Number(resp.headers.get('X-Total-Count'))
            }));
    }


    paramsToQueryString(params: DataTableParams) {
        const result = [];

        if (params.offset != null) {
            result.push(['_start', params.offset]);
        }
        if (params.limit != null) {
            result.push(['_limit', params.limit]);
        }
        if (params.sortBy != null) {
            result.push(['_sort', params.sortBy]);
        }
        if (params.sortAsc != null) {
            result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
        }

        return result.map(param => param.join('=')).join('&');
    }

}

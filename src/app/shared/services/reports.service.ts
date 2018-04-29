import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class ReportsService {

  private REST_API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  reportsData(): Observable<any> {
     return this.httpClient.get(this.REST_API_URL + '/reports');
  }
}

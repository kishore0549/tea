import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

    private REST_API_URL = environment.API_URL;

    public postFiles(filesToUpload: File[]): Observable<any> {
        const formData: FormData = new FormData();
        filesToUpload.forEach(file => {
            const fileName = file.name.split('.')[0];
            formData.append(fileName, file, fileName);
        });

        return this.httpClient
            .post(this.REST_API_URL + '/file', formData);
    }

}

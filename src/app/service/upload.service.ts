import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Injectable({
providedIn: 'root'})
export class UploadService {
  constructor(private https: HttpClient) {

  }
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();

    data.append('cvPath', file);
    const newRequest = new HttpRequest('POST', 'http://10.10.32.82:8080/Person/register', data, {
    reportProgress: true,
    });
    return this.https.request(newRequest);
}}

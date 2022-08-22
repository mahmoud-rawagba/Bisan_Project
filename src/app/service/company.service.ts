import { Ilogin } from './../login';
import { Ijobs } from './../jobs';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private _url: string = "C:/Users/BisanTraining2/login_new_web/Bisan_Project/src/assets/data/jobs.json"

  constructor(private http: HttpClient){}
 
  getJobs(): Observable<Ijobs[]>{
    return this.http.get<Ijobs[]>(this._url);  
    //return this.http.get<Ijobs[]>(this._url);
    }

    postLogin(user): Observable<Ilogin>{
      return this.http.post<Ilogin>(this._url, user)
    }
  
}

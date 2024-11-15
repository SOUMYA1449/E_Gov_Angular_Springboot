import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyTendersService {

  apiurl='http://localhost:8080/applytenders';
  constructor(private http:HttpClient) { }

  applyTender(tender:any,uid:any):Observable<any>{

    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(`${this.apiurl}/apply/${uid}`,tender,{headers});
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowapplytenderService {
  
  apiurl="http://localhost:8080/applytenders"
  constructor(private http:HttpClient) { }

  getAppliedtenders():Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(`${this.apiurl}/showall`,{headers});
  }
  getAppliedtendersUser(uid:any):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(`${this.apiurl}/user/${uid}`,{headers});
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyschemeService {

  private url = 'http://localhost:8080/applied';

  constructor(private http:HttpClient) { }

  public apply(apply:any,uid:number):Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(`${this.url}/apply/${uid}`,apply,{headers});
  }
}

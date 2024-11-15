import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
 
private url='http://localhost:8080/notice'
  constructor(private http:HttpClient) { }

  getallNotice():Observable<any>{
    const headers=new HttpHeaders({'Content-Type':'application/json'})
    return this.http.get( `${this.url}/showNotice`,{headers:headers});
  }
}

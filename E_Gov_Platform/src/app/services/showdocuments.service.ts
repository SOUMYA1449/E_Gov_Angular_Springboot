import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowdocumentsService {

  private url="http://localhost:8080/document/getdocuments"

  constructor(private http:HttpClient) { }

  getDocument(uid:any):Observable<any>{
    const header=new HttpHeaders({'Content-Type':'application/json'})
    return this.http.get(`${this.url}/${uid}`,{headers:header})
  }
}

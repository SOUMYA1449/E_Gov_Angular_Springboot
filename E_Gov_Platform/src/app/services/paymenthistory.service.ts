import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymenthistoryService {
  private url="http://localhost:8080/payment/history"

  constructor(private http:HttpClient) { }

  getPayment(uid:any):Observable<any>{
    const header=new HttpHeaders({'Content-Type':'application/json'})
    return this.http.get(`${this.url}/${uid}`,{headers:header})
  }
}

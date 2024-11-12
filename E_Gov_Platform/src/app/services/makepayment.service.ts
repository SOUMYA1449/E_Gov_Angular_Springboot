import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MakepaymentService {

  private url = 'http://localhost:8080/payment';

  constructor(private http: HttpClient) {}

  public allPayment(pay: any, uid: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.url}/pay/${uid}`, pay, { headers });
  }
}

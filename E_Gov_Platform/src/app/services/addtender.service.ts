import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddtenderService {
  private apiUrl = 'http://localhost:8080/tender'; // Your API base URL
  constructor(private http: HttpClient) {}

  addTender(tender: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/addtender`, tender, { headers });
  }

  
}

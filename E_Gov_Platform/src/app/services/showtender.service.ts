import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowtenderService {
  private apiUrl = 'http://localhost:8080/tender';
  constructor(private http: HttpClient) {}
  showTender(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(`${this.apiUrl}/showTender`, { headers });
  }
}

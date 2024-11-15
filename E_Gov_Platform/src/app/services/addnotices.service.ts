import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddnoticesService {

  private apiUrl = 'http://localhost:8080/notice'; // Your API base URL
  constructor(private http: HttpClient) {}

  addNotice(notice: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/addnotice`, notice, { headers });
  }
}

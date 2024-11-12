import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddSchemeService {
  private apiUrl = 'http://localhost:8080/scheme'; 

  constructor(private http: HttpClient) {}

  addScheme(scheme: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/addscheme`, scheme, { headers });
  }

  
}

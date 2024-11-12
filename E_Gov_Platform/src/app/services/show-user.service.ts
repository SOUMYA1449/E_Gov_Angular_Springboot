import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowUserService {
  private apiUrl = 'http://localhost:8080/users';
  constructor(private http: HttpClient) {}
  showAllUser(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(`${this.apiUrl}/alluser`, { headers });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 // Import your User model if you have it

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  private apiUrl = 'http://localhost:8080/users/adduser'; 

  constructor(private http: HttpClient) {}

  addUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, user, { headers });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletetenderService {
  private baseUrl = 'http://localhost:8080/tender'; 

  constructor(private http: HttpClient) { }

  deleteScheme(trId: number): Observable<void> {
    const url = `${this.baseUrl}/delete/${trId}`;
    return this.http.delete<void>(url);
  }
}

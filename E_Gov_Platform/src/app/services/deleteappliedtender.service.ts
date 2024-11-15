import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteappliedtenderService {
  private baseUrl = 'http://localhost:8080/applytenders'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  // Method to delete a scheme by its ID
  deletetender(tenderId: number): Observable<void> {
    const url = `${this.baseUrl}/delete/${tenderId}`;
    return this.http.delete<void>(url);
  }
}

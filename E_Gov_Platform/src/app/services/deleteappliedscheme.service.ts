import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteappliedschemeService {
  private baseUrl = 'http://localhost:8080/applied'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  // Method to delete a scheme by its ID
  deleteScheme(schemeId: number): Observable<void> {
    const url = `${this.baseUrl}/delete/${schemeId}`;
    return this.http.delete<void>(url);
  }
}

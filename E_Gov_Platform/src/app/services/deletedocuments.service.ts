import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletedocumentsService {
  private baseUrl = 'http://localhost:8080/document'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  deleteDocument(dId: number): Observable<void> {
    const url = `${this.baseUrl}/delete/${dId}`;
    return this.http.delete<void>(url);
  }
}

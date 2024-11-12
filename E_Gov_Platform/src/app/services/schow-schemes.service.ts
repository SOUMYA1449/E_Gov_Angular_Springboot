import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchowSchemesService {
  private apiUrl = 'http://localhost:8080/scheme'; 

  constructor(private http: HttpClient) {}

  

  showAllScheme():Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(`${this.apiUrl}/showschemes`,{headers});
  }

}

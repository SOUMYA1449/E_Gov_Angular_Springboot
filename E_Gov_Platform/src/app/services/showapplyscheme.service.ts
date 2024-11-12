import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowapplyschemeService {
  private apiUrl = 'http://localhost:8080/applied'; 

  constructor(private http: HttpClient) {}

  

  getAppliedSchemes():Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(`${this.apiUrl}/allscap`,{headers});
  }

}

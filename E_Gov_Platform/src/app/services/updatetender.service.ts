import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatetenderService {
  private url='http://localhost:8080/applytenders'

  constructor(private http:HttpClient){}

  public updateTenderStatus(id: number, sts:any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
 
    return this.http.put(`${this.url}/updateStatus/${id}/${sts}`,null, {headers});
  }
}

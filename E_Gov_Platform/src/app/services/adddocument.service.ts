import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdddocumentService {


  private  url="http://localhost:8080/document"
  constructor(private http:HttpClient) { }

  // addTender(tender: any): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post<any>(`${this.apiUrl}/addtender`, tender, { headers });
  // }
  adddocument(uid:number,document:any){
    const headers=new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post<any>(`${this.url}/adddocument/${uid}`,document,{headers});
  }


}

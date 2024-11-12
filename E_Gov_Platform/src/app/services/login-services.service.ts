import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginServicesService {
  private apiUrl = 'http://localhost:8080/users/login';
  private userNameSubject = new BehaviorSubject<string | null>(null);
  private userType = new BehaviorSubject<string | null>(null);
  private userId = new BehaviorSubject<number>(0);

  private readonly jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (this.isBrowser()) {
      this.initializeUserData();
    }
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private initializeUserData(): void {
    this.userNameSubject.next(localStorage.getItem('userName'));
    this.userType.next(localStorage.getItem('userType'));
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId.next(Number(storedUserId));
    }
  }

  loginUser(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post<any>(this.apiUrl, payload, { headers: this.jsonHeaders }).pipe(
      tap((response) => {
        if (response && response.id) {
          this.setUserId(response.id);       // Store user ID
          this.setUserName(response.name);    // Store user name
          this.setUsertype(response.type);    // Store user type
        }
      })
    );
  }

  setUserName(name: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('userName', name);
      this.userNameSubject.next(name);
    }
  }

  getUserName(): Observable<string | null> {
    return this.userNameSubject.asObservable();
  }

  setUserId(id: number): void {
    if (this.isBrowser()) {
      localStorage.setItem('userId', id.toString());
      this.userId.next(id);
    }
  }

  getUserId(): Observable<number> {
    return this.userId.asObservable();
  }

  setUsertype(type: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('userType', type);
      this.userType.next(type);
    }
  }

  getUsertype(): Observable<string | null> {
    return this.userType.asObservable();
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('userName');
      localStorage.removeItem('userType');
      localStorage.removeItem('userId');
      this.userNameSubject.next(null);
      this.userType.next(null);
      this.userId.next(0); // Reset user ID when logging out
    }
  }
}

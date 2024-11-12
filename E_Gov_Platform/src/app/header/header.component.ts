import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { LoginServicesService } from '../services/login-services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], 
})
export class HeaderComponent {
  name: String | null = null;

  constructor(private loginService: LoginServicesService,public http:HttpClient) {}

  ngOnInit(): void {
    this.loginService.getUserName().subscribe(name => {
      this.name = name; 
    });
  }
  toggle(){
    this.name=null
    this.loginService.logout()
  }
}

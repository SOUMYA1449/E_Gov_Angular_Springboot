import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginServicesService } from '../services/login-services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(public loginservice: LoginServicesService) {}

  name: string | null = null;
  type: string | null = null;

  ngOnInit(): void {
    this.loginservice.getUserName().subscribe((name) => {
      this.name = name;
    });
    this.loginservice.getUsertype().subscribe((type) => {
      this.type = type;
    });
  }
  logout():void{
    this.loginservice.logout()
  }
}

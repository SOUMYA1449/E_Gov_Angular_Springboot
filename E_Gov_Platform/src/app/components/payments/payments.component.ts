import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginServicesService } from '../../services/login-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
  ],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']  // Corrected this line
})
export class PaymentsComponent implements OnInit {  // Added OnInit interface

  constructor(public loginservise: LoginServicesService) { }

  type1: string | null = null;

  ngOnInit(): void {
    this.loginservise.getUsertype().subscribe({
      next: (type) => {
        this.type1 =type;
      
      },
      error: (error) => {
        console.error("Failed to retrieve user type:", error);
      }
    });
  }
  
}

import { Component } from '@angular/core';
import { ShowtenderService } from '../../services/showtender.service';
import { LoginServicesService } from '../../services/login-services.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tenders',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './tenders.component.html',
  styleUrl: './tenders.component.css'
})
export class TendersComponent {
  constructor(
    private showtender: ShowtenderService,
    private loginsec: LoginServicesService
  ) {}
  allTender: any[] = [];

  user: string | null = null;
 

  ngOnInit(): void {
    this.loginsec.getUserName().subscribe((name) => {
      this.user = name;
    });

    this.showtender.showTender().subscribe({
      next: (schemes) => {
        this.allTender = schemes;
      },
      error: (error) => {
        console.error('Error retrieving schemes:', error);
      },
    });
  }
}

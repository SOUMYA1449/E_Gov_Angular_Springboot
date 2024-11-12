import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SchowSchemesService } from '../../services/schow-schemes.service';
import { CommonModule } from '@angular/common';
import { LoginServicesService } from '../../services/login-services.service';
import { ContentManagementComponent } from '../../admin/content-management/content-management.component';

@Component({
  selector: 'app-schemes',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './schemes.component.html',
  styleUrl: './schemes.component.css',
})
export class SchemesComponent {
  constructor(
    private showscheme: SchowSchemesService,
    private loginsec: LoginServicesService
  ) {}
  allScheme: any[] = [];

  user: string | null = null;
  links: string[] = ['/s1', '/s2', '/s3', '/s4', '/s5'];

  ngOnInit(): void {
    this.loginsec.getUserName().subscribe((name) => {
      this.user = name;
    });

    this.showscheme.showAllScheme().subscribe({
      next: (schemes) => {
        this.allScheme = schemes;
      },
      error: (error) => {
        console.error('Error retrieving schemes:', error);
      },
    });
  }
}

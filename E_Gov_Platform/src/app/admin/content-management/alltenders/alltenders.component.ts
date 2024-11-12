import { Component } from '@angular/core';

import { ShowtenderService } from '../../../services/showtender.service';
import { DeletetenderService } from '../../../services/deletetender.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alltenders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alltenders.component.html',
  styleUrl: './alltenders.component.css'
})
export class AlltendersComponent {
  constructor(
    private showtender: ShowtenderService,
    private deletetr: DeletetenderService,
    private router: Router
  ) {}
  alltender: any[] = [];
  tid: number = 0;

  success:string=''
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showtender.showTender().subscribe({
      next: (tenders) => {
        this.alltender = tenders;
      },
      error: (error) => {
        console.error('Error retrieving schemes:', error);
      },
    });
  }

  selectSchemeForDeletion(schemeId: number): void {
    this.tid = schemeId;
    this.success="Delete Successfull"
    setTimeout(() => {
      this.router.navigate(['/content-management']);
    }, 500);
  }

  onDelete(): void {
    if (this.tid) {
      this.deletetr.deleteScheme(this.tid).subscribe({
        next: (respose) => {
          console.log('Scheme deleted successfully', respose);
          this.alltender = this.alltender.filter(
            (scheme) => scheme.id !== this.tid
          );
        },
        error: (error) => {
          console.error('Error deleting scheme:', error);
        },
      });
    }
  }
}

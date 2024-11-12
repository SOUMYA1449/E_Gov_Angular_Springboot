import { Component } from '@angular/core';
import { SchowSchemesService } from '../../../services/schow-schemes.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DeleteschemeService } from '../../../services/deletescheme.service';

@Component({
  selector: 'app-allscheme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allscheme.component.html',
  styleUrl: './allscheme.component.css',
})
export class AllschemeComponent {
  constructor(
    private showscheme: SchowSchemesService,
    private deletesc: DeleteschemeService,
    private router: Router
  ) {}
  allScheme: any[] = [];
  scid: number = 0;

  success:string=''
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showscheme.showAllScheme().subscribe({
      next: (schemes) => {
        this.allScheme = schemes;
      },
      error: (error) => {
        console.error('Error retrieving schemes:', error);
      },
    });
  }

  selectSchemeForDeletion(schemeId: number): void {
    this.scid = schemeId;
    this.success="Delete Successfull"
    setTimeout(() => {
      this.router.navigate(['/content-management']);
    }, 500);
  }

  onDelete(): void {
    if (this.scid) {
      this.deletesc.deleteScheme(this.scid).subscribe({
        next: (respose) => {
          console.log('Scheme deleted successfully', respose);
          this.allScheme = this.allScheme.filter(
            (scheme) => scheme.id !== this.scid
          );
        },
        error: (error) => {
          console.error('Error deleting scheme:', error);
        },
      });
    }
  }
}

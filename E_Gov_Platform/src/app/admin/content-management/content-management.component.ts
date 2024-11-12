import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SchemesComponent } from '../../components/schemes/schemes.component';
import { SchowSchemesService } from '../../services/schow-schemes.service';
import { ShowtenderService } from '../../services/showtender.service';

@Component({
  selector: 'app-content-management',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content-management.component.html',
  styleUrl: './content-management.component.css',
})
export class ContentManagementComponent {
  constructor(private showscheme: SchowSchemesService,private tendersc:ShowtenderService) {}
  allScheme: any[] = [];
  allTender: any[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showscheme.showAllScheme().subscribe({
      next: (schemes) => {
        this.allScheme = schemes;
      },
    });

    this.tendersc.showTender().subscribe({
      next:(tenders)=>{
        this.allTender=tenders
      }
    })
  }
}

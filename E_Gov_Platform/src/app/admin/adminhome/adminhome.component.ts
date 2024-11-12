import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginServicesService } from '../../services/login-services.service';
import { SchowSchemesService } from '../../services/schow-schemes.service';
import { ShowtenderService } from '../../services/showtender.service';
import { ShowUserService } from '../../services/show-user.service';

@Component({
  selector: 'app-adminhome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css',
})
export class AdminhomeComponent {
  constructor(
    private logins: LoginServicesService,
    private showscheme: SchowSchemesService,
    private tendersc: ShowtenderService,
    private alluser: ShowUserService
  ) {}

  allusers : any[] = [];
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
    this.alluser.showAllUser().subscribe({
      next: (user) => {
        this.allusers = user;
      },
      error(error) {
        console.log('No User', error);
      },
    });

    this.tendersc.showTender().subscribe({
      next: (tenders) => {
        this.allTender = tenders;
      },
    });
  }
  toggle() {
    this.logins.logout();
  }
}

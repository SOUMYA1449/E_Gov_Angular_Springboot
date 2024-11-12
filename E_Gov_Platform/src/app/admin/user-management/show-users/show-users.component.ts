import { Component } from '@angular/core';
import { ShowUserService } from '../../../services/show-user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-users.component.html',
  styleUrl: './show-users.component.css',
})
export class ShowUsersComponent {
  allUser: any[] = [];
  
  constructor(private alluser: ShowUserService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.alluser.showAllUser().subscribe({
      next: (user) => {
        this.allUser = user;
      },
      error(error) {
        console.log('No User', error);
      },
    });
  }
}

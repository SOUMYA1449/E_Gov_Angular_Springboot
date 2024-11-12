import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShowUserService } from '../../services/show-user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
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

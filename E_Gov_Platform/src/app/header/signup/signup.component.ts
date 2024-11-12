import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserService } from '../../services/register-user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true, // Mark this as a standalone component
  imports: [ReactiveFormsModule, CommonModule], // Import ReactiveFormsModule here
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phno: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    type:new FormControl('',Validators.required)
  });

  constructor(
    private registerUserService: RegisterUserService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.signupForm.valid) {
      const user = this.signupForm.value;
      this.registerUserService.addUser(user).subscribe({
        next: (response) => {
          console.log('User registered successfully', response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error registering user', error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}

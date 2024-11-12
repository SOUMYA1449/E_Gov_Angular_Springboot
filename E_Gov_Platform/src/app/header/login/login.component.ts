import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginServicesService } from '../../services/login-services.service';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginError: string = '';
  userName: string = ''; 
  type:string='';
  success:string=''
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private router: Router, private loginService: LoginServicesService) {}

  onLogin() {

    if(this.loginForm.value.email=='admin@gmail.com'&&this.loginForm.value.password=='admin123'){
      this.success="Login Successfull"
      setTimeout(() => {
        this.router.navigate(['/adminhome']);
      }, 1000);
      this.loginService.setUserName('admin');
      
    }
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email || '';
      const password = this.loginForm.value.password || '';

      this.loginService.loginUser(email, password).subscribe({
        next: (response: any) => {
          if (response.message === 'Login Successful') {
            this.userName = response.name; 
            if (response.name) {
              this.loginService.setUserName(response.name);
            }
            this.type=response.type
            if(response.type){
              this.loginService.setUsertype(response.type)
            }
           this.success="Login Successfull"

           setTimeout(() => {
            this.router.navigate(['/home']);
           }, 1000);
            
          } else {
            this.loginError = 'Login failed';
          }
        },
        error: (error) => {
          console.log('Error logging in user:', error);
          this.loginError = 'Invalid email or password';
        }
      });
    } else {
      this.loginError = 'Form is invalid';
    }
  }
}

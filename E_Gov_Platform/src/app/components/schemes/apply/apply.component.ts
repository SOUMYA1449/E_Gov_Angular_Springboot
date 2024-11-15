import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { LoginServicesService } from '../../../services/login-services.service';
import { ApplyschemeService } from '../../../services/applyscheme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
})
export class ApplyComponent {
  uid: number = 0;
  success: string = '';

  constructor(
    private loginsc: LoginServicesService,
    private apply: ApplyschemeService,
    private router:Router
  ) {}

  applyForm = new FormGroup({
   
    sname: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    fname: new FormControl('', Validators.required),
    aadharno: new FormControl('', [Validators.required]),
    dob: new FormControl('', Validators.required),
    phno: new FormControl('', [Validators.required]),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    distric: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    pincode: new FormControl('', [Validators.required]),
    status:new FormControl('Pending')
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginsc.getUserId().subscribe((id) => {
      this.uid = id;
      console.log(this.uid);
    });
  }
  onSubmit(): void {
      const value = this.applyForm.value;
      this.apply.apply(value, this.uid).subscribe();
      setTimeout(() => {
        this.router.navigate(['/schemes'])
      }, 1000);
      this.success = 'Form Submitted Successfully!';
    } 
  }


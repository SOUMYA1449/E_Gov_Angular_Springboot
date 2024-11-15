import { Component } from '@angular/core';
import { SchowSchemesService } from '../../../services/schow-schemes.service';
import { LoginServicesService } from '../../../services/login-services.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApplyschemeService } from '../../../services/applyscheme.service';
import { Router } from '@angular/router';
import { ApplyTendersService } from '../../../services/apply-tenders.service';

@Component({
  selector: 'app-apply-tender',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './apply-tender.component.html',
  styleUrl: './apply-tender.component.css',
})
export class ApplyTenderComponent {
  uid: number = 0;
  success: string = '';

  constructor(
    private loginsc: LoginServicesService,
    private apply: ApplyTendersService,
    private router:Router
  ) {}

  applyForm = new FormGroup({
   
    tname: new FormControl('', Validators.required),
    cname: new FormControl('', Validators.required),  
    cid: new FormControl('', Validators.required),
    bidAmount: new FormControl('', [Validators.required]),
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
      console.log(value,this.uid);
      
      this.apply.applyTender(value, this.uid).subscribe();
      setTimeout(() => {
        this.router.navigate(['/tenders'])
      }, 1000);
      this.success = 'Form Submitted Successfully!';
    } 
  }

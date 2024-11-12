import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AddtenderService } from '../../../services/addtender.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-addtenders',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule,RouterLink],
  templateUrl: './addtenders.component.html',
  styleUrl: './addtenders.component.css',
})
export class AddtendersComponent {
  constructor(public addtender: AddtenderService, private router: Router) {}
  addTender = new FormGroup({
    bidamount: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+(\\.[0-9]+)?$'),
    ]),
    tname: new FormControl('', Validators.required),
    ttype: new FormControl('', Validators.required),
    
  });
  onSubmit() {
    if (this.addTender.valid) {
      const tender = this.addTender.value;
      this.addtender.addTender(tender).subscribe({
        next: (response) => {
          console.log('Addtender Successfull', response);
          this.router.navigate(['/adminhome'])
        },
        error: (error) => {
          console.log('error To add', error);
        },
      });
    }else{
      console.log("invalide Form");
      
    }
  }
}

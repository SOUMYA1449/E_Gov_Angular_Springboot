import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddSchemeService } from '../../../services/add-scheme.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-scheme',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './add-scheme.component.html',
  styleUrl: './add-scheme.component.css',
})
export class AddSchemeComponent {
  constructor(public addschemes:AddSchemeService,private router:Router) {}
  addscheme = new FormGroup({
    sname: new FormControl('', Validators.required),
    stype: new FormControl('', Validators.required),
  });
  onSubmit() {
    if (this.addscheme.valid) {
      const scheme = this.addscheme.value;      
      this.addschemes.addScheme(scheme).subscribe({
        next: (response) => {
          console.log('Add Scheme successfully', response);
          this.router.navigate(['/content-management']);
        },
        error: (error) => {
          console.error('Error add  scheme', error);

        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}

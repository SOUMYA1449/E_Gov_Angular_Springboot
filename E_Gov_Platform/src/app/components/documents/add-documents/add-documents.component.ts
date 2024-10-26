import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-documents',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './add-documents.component.html',
  styleUrl: './add-documents.component.css'
})
export class AddDocumentsComponent {
  
  myForm: FormGroup;
  success: string = '';

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      documentId: ['', Validators.required],
      documentType: ['', Validators.required],
      documentImage: [null, Validators.required],
      confirmation: [false, Validators.requiredTrue]
    });
  }

  successmsg() {
    if (this.myForm.valid) {
      this.success = 'Document Added Successfully';
    } else {
      this.success = 'Please fill all fields correctly';
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginServicesService } from '../../../services/login-services.service';
import { ShowUserService } from '../../../services/show-user.service';
import { AdddocumentService } from '../../../services/adddocument.service';
import { response } from 'express';

@Component({
  selector: 'app-add-documents',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-documents.component.html',
  styleUrl: './add-documents.component.css',
})
export class AddDocumentsComponent {
  success: string = '';
  uid: number = 0;
  constructor(
    private addducument:AdddocumentService,
    private loginsc: LoginServicesService,
    private router:Router

  ) {}
  documentform = new FormGroup({
    documentId: new FormControl('', Validators.required),
    documentType: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    
  });



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginsc.getUserId().subscribe((uid) => {
      this.uid = uid;
    });

  }
  onSubmit(){
    const value=this.documentform.value
    this.addducument.adddocument(this.uid,value).subscribe()
    setTimeout(() => {
      this.router.navigate(['/documents'])
    }, 500);
  }

  successmsg() {
    if (this.documentform.valid) {
      this.success = 'Document Added Successfully';
    } else {
      this.success = 'Please fill all fields correctly';
    }
  }
}

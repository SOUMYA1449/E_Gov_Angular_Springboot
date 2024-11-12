import { Component } from '@angular/core';
import { LoginServicesService } from '../../../services/login-services.service';
import { ShowdocumentsService } from '../../../services/showdocuments.service';
import { CommonModule } from '@angular/common';
import { DeletedocumentsService } from '../../../services/deletedocuments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-documents.component.html',
  styleUrl: './show-documents.component.css',
})
export class ShowDocumentsComponent {
  constructor(
    private loginsc: LoginServicesService,
    private showdcsc: ShowdocumentsService,
    private deletedc:DeletedocumentsService,
    private router:Router
  ) {}
  allDocument: any[] = [];
  uid: any;
  dId:any
  success:string=''

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginsc.getUserId().subscribe((id) => {
      this.uid = id;
      console.log(this.uid);
    });
    this.showdcsc.getDocument(this.uid).subscribe( {
      next:(document)=>{
        this.allDocument = document;
      }
    });
  }

  selectSchemeForDeletion(did: number): void {
    this.dId = did;
    this.success="Delete Successfull"
    setTimeout(() => {
      this.router.navigate(['/documents'])
    }, 1000);
  }
  ondelete(){
    this.deletedc.deleteDocument(this.dId).subscribe(response=>{
      (this.success="Delete Successfull",response)
      
    })

  }
}

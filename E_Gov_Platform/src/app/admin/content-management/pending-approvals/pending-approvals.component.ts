import { Component } from '@angular/core';
import { ShowapplyschemeService } from '../../../services/showapplyscheme.service';
import { CommonModule } from '@angular/common';
import { DeleteappliedschemeService } from '../../../services/deleteappliedscheme.service';
import { UpdatestatusdschemeService } from '../../../services/updatestatusdscheme.service';
import { Router } from '@angular/router';
import { ShowtenderService } from '../../../services/showtender.service';
import { ShowapplytenderService } from '../../../services/showapplytender.service';
import { DeleteappliedtenderService } from '../../../services/deleteappliedtender.service';
import { UpdatetenderService } from '../../../services/updatetender.service';

@Component({
  selector: 'app-pending-approvals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-approvals.component.html',
  styleUrl: './pending-approvals.component.css',
})
export class PendingApprovalsComponent {
  success: any;
  allApplied: any[] = [];
  allTender:any[]=[]
  sid: any;
  tid:any;
  sts = 'Approved';
  status:string|null=null
  status1:string|null=null
  constructor(
    private appliedsc: ShowapplyschemeService,
    private appliedtender:ShowapplytenderService,
    private dltsc: DeleteappliedschemeService,
    private dlttr:DeleteappliedtenderService,
    private updatesc: UpdatestatusdschemeService,
    private router:Router,
    private updatetender:UpdatetenderService
  ) {}

  show:boolean=true
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appliedsc.getAppliedSchemes().subscribe((data) => {
      this.allApplied = data;
    });

    this.appliedtender.getAppliedtenders().subscribe((value)=>{
      this.allTender=value
    })
    

    console.log(this.allTender);
    
    
  }
  updateStatus(): void {
    this.updatesc.updateSchemeStatus(this.sid, this.sts).subscribe();
    this.success = 'Update Successfull';
    setTimeout(() => {
      this.router.navigate(['/content-management'])
    }, 1000);
  }

  onDelete() {
    this.dltsc.deleteScheme(this.sid).subscribe(() => {
      this.success = 'Delete Successfull';
    });
  }

  onDeletetender(){
    this.dlttr.deletetender(this.tid).subscribe(() => {
      this.success = 'Delete Successfull';
      setTimeout(() => {
        this.router.navigate(['/content-management'])
      }, 1000);
    });
  }

  updateTenderStatus(): void {
    this.updatetender.updateTenderStatus(this.sid, this.sts).subscribe();
    this.success = 'Update Successfull';
    setTimeout(() => {
      this.router.navigate(['/content-management'])
    }, 1000);
  }


  selectSchemeForDeletion(id: any) {
    this.sid = id;
  }
 selectTenderForDelection(id:any){
  this.tid=id
 }

  scheme(){
    this.show=true
  }
  tender(){
    this.show=false
  }
}

import { Component } from '@angular/core';
import { ShowapplyschemeService } from '../../../services/showapplyscheme.service';
import { CommonModule } from '@angular/common';
import { DeleteappliedschemeService } from '../../../services/deleteappliedscheme.service';
import { UpdatestatusdschemeService } from '../../../services/updatestatusdscheme.service';
import { Router } from '@angular/router';

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
  sid: any;
  sts = 'Approved';
  status:string|null=null
  constructor(
    private appliedsc: ShowapplyschemeService,
    private dltsc: DeleteappliedschemeService,
    private updatesc: UpdatestatusdschemeService,
    private router:Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appliedsc.getAppliedSchemes().subscribe((data) => {
      this.allApplied = data;
    });
    this.setstatus(this.status)
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
  selectSchemeForDeletion(id: any) {
    this.sid = id;
  }
  setstatus(status:any){
    this.status=status
  }
}

import { Component } from '@angular/core';
import { LoginServicesService } from '../../../services/login-services.service';
import { ShowapplytenderService } from '../../../services/showapplytender.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showappliedtender',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showappliedtender.component.html',
  styleUrl: './showappliedtender.component.css'
})
export class ShowappliedtenderComponent {

  constructor(private loginsec:LoginServicesService,private showscheme:ShowapplytenderService){}
  allTender:any[]=[]
  uid:any|null=null


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginsec.getUserId().subscribe((id) => {
      this.uid = id;
      console.log(this.uid);
    });

    this.showscheme.getAppliedtendersUser(this.uid).subscribe((value)=>{
      this.allTender=value
    })
  }
}

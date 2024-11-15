import { Component } from '@angular/core';
import { LoginServicesService } from '../../../services/login-services.service';
import { SchowSchemesService } from '../../../services/schow-schemes.service';
import { ShowapplyschemeService } from '../../../services/showapplyscheme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showschemes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showschemes.component.html',
  styleUrl: './showschemes.component.css'
})
export class ShowschemesComponent {

  constructor(private loginsec:LoginServicesService,private showscheme:ShowapplyschemeService){}
  allScheme:any[]=[]
  uid:any|null=null


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginsec.getUserId().subscribe((id) => {
      this.uid = id;
      console.log(this.uid);
    });

    // this.showscheme.getSchemeByuser(this.uid).subscribe((value)=>{
    //   this.allScheme=value
    // })
  }

}

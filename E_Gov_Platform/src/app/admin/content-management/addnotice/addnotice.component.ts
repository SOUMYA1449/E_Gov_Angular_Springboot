import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AddnoticesService } from '../../../services/addnotices.service';

@Component({
  selector: 'app-addnotice',
  standalone: true,
  imports: [ CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './addnotice.component.html',
  styleUrl: './addnotice.component.css'
})
export class AddnoticeComponent {

  today:string=new Date().toLocaleDateString(); 
  constructor(private addnotice:AddnoticesService,private router:Router){}
  addNoticeForm=new FormGroup({
    noticename:new FormControl('',Validators.required),
    type:new FormControl('',Validators.required),
    date:new FormControl(this.today,Validators.required)
  })


  
  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  onSubmit(){
    const value=this.addNoticeForm.value

    this.addnotice.addNotice(value).subscribe(()=>{
      this.router.navigate(['/adminhome'])
    })
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NoticeService } from '../../services/notice.service';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.css'
})
export class NoticesComponent {

  allNotice:any[]=[]
  constructor(private show:NoticeService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.show.getallNotice().subscribe((data)=>
    {
      this.allNotice=data
    })
  }
}

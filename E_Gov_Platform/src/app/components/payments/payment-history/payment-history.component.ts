import { Component } from '@angular/core';
import { LoginServicesService } from '../../../services/login-services.service';
import { PaymenthistoryService } from '../../../services/paymenthistory.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.css'
})
export class PaymentHistoryComponent {

  constructor(private loginsec:LoginServicesService,private paymentsec:PaymenthistoryService){}
  allPayment:any[]=[]
  uid:number|null=null

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.loginsec.getUserId().subscribe((id) => {
      this.uid = id;
      console.log(this.uid);
    });

    this.paymentsec.getPayment(this.uid).subscribe({
      next:(payment)=>{
        this.allPayment=payment
      }
    
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MakepaymentService } from '../../../services/makepayment.service';
import { LoginServicesService } from '../../../services/login-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-make-payment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css'],
})
export class MakePaymentComponent implements OnInit {
  today: string = new Date().toLocaleDateString(); // Formatted today's date as MM/DD/YYYY
  isSenderBankTransfer = true;
  isReceiverBankTransfer = true;
  uid: any;

  transferForm = new FormGroup({
    amount: new FormControl('', [Validators.required]),
    date: new FormControl(this.today, [Validators.required]),
    sender_name: new FormControl('', [Validators.required]),
    sender_transfer_type: new FormControl('Bank', [Validators.required]),
    sender_accountno: new FormControl('', Validators.required),
    sender_ifsccode: new FormControl('', Validators.required),
    sender_bankname: new FormControl('', [Validators.required]),
    receiver_name: new FormControl('', [Validators.required]),
    reciver_transfer_type: new FormControl('Bank', [Validators.required]),
    reciver_acountno: new FormControl('', Validators.required),
    reciver_ifsccode: new FormControl('', Validators.required),
    reciver_bankname: new FormControl('', [Validators.required]),
  });

  constructor(
    private makepay: MakepaymentService,
    private loginsc: LoginServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginsc.getUserId().subscribe((id) => {
      this.uid = id;
      console.log(this.uid);
    });
  }

  submitTransfer() {
    const transferData = this.transferForm.getRawValue(); // Get all form values
    console.log(transferData);

    this.makepay.allPayment(transferData, this.uid).subscribe(() => {
      setTimeout(() => {
        this.router.navigate(['/history']);
      }, 1000);
    });
  }
}

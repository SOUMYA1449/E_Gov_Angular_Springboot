import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './header/login/login.component';
import { SignupComponent } from './header/signup/signup.component';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { NoticesComponent } from './components/notices/notices.component';
import { MediaComponent } from './components/media/media.component';
import { TendersComponent } from './components/tenders/tenders.component';
import { SchemesComponent } from './components/schemes/schemes.component';
import { ServicesComponent } from './components/services/services.component';
import { DocumentsComponent } from './components/documents/documents.component';

import { TermsComponent } from './components/terms/terms.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ShowDocumentsComponent } from './components/documents/show-documents/show-documents.component';
import { AddDocumentsComponent } from './components/documents/add-documents/add-documents.component';
import { MakePaymentComponent } from './components/payments/make-payment/make-payment.component';
import { PaymentHistoryComponent } from './components/payments/payment-history/payment-history.component';
import { BillsComponent } from './components/payments/bills/bills.component';


import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ContentManagementComponent } from './admin/content-management/content-management.component';
import { AddSchemeComponent } from './admin/content-management/add-scheme/add-scheme.component';
import { AddtendersComponent } from './admin/content-management/addtenders/addtenders.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { ShowUsersComponent } from './admin/user-management/show-users/show-users.component';
import { AllschemeComponent } from './admin/content-management/allscheme/allscheme.component';
import { AlltendersComponent } from './admin/content-management/alltenders/alltenders.component';
import { ApplyComponent } from './components/schemes/apply/apply.component';
import { PendingApprovalsComponent } from './admin/content-management/pending-approvals/pending-approvals.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    


    //All navbar components
    { path:'about',component:AboutUsComponent},
    { path:'home',component:HomeComponent},
    { path:'notices',component:NoticesComponent},
    { path:'media',component:MediaComponent},
    { path:'tenders',component:TendersComponent},
    { path:'schemes',component:SchemesComponent},
    { path:'services',component:ServicesComponent},
    { path:'documents',component:DocumentsComponent},
    { path:'terms',component:TermsComponent},
    
    { path:'payments',component:PaymentsComponent},
    {path:'show_all_documents',component:ShowDocumentsComponent},
    {path:'add_documents',component:AddDocumentsComponent},



    //payment
    {path:'make-payment',component:MakePaymentComponent},
    {path:'history',component:PaymentHistoryComponent},
    {path:'bills',component:BillsComponent},
    {path:'showuser',component:ShowUsersComponent},


    //schemes
    // {path:'s1',component:Scheme1Component},
    {path:'apply',component:ApplyComponent},



    //admin
    {path:'adminhome',component:AdminhomeComponent},
    {path:'content-management',component:ContentManagementComponent},
    {path:'addscheme',component:AddSchemeComponent},
    {path:'addtender',component:AddtendersComponent},
    {path:'user-management',component:UserManagementComponent},
    {path:'allscheme',component:AllschemeComponent},
    {path:'alltenders',component:AlltendersComponent},
    {path:'allapply',component:PendingApprovalsComponent},
   // Default route
    {
      path: '',redirectTo:'home',pathMatch:'full'
    },
    {
      path: '**',redirectTo:'login',pathMatch:'full'
    }
  ];
  
 
  
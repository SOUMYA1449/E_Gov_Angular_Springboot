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
import { ApplyTenderComponent } from './components/tenders/apply-tender/apply-tender.component';
import { AddnoticeComponent } from './admin/content-management/addnotice/addnotice.component';
import { PrivacyPolicyComponent } from './components/terms/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './components/terms/terms-of-use/terms-of-use.component';
import { CopyRightPolicyComponent } from './components/terms/copy-right-policy/copy-right-policy.component';
import { HyperlinkPolicyComponent } from './components/terms/hyperlink-policy/hyperlink-policy.component';
import { SecurityPolicyComponent } from './components/terms/security-policy/security-policy.component';
import { MonitoringPolicyComponent } from './components/terms/monitoring-policy/monitoring-policy.component';
import { ContingencyManagementComponent } from './components/terms/contingency-management/contingency-management.component';
import { ShowschemesComponent } from './components/schemes/showschemes/showschemes.component';
import { ShowappliedtenderComponent } from './components/tenders/showappliedtender/showappliedtender.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  //All navbar components
  { path: 'about', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'notices', component: NoticesComponent },
  { path: 'media', component: MediaComponent },
  { path: 'tenders', component: TendersComponent },
  { path: 'schemes', component: SchemesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'terms', component: TermsComponent },

  { path: 'payments', component: PaymentsComponent },
  { path: 'show_all_documents', component: ShowDocumentsComponent },
  { path: 'add_documents', component: AddDocumentsComponent },

  //payment
  { path: 'make-payment', component: MakePaymentComponent },
  { path: 'history', component: PaymentHistoryComponent },
  { path: 'bills', component: BillsComponent },
  { path: 'showuser', component: ShowUsersComponent },

  //terms
  { path: 'Privacy-Policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent },
  { path: 'copyright-policy', component: CopyRightPolicyComponent },
  { path: 'hyperlink-policy', component: HyperlinkPolicyComponent },
  { path: 'security-policy', component: SecurityPolicyComponent },
  { path: 'monitoring-policy', component: MonitoringPolicyComponent },
  { path: 'contingency-management', component: ContingencyManagementComponent },

  //schemes
  // {path:'s1',component:Scheme1Component},
  { path: 'apply', component: ApplyComponent },
  { path:'allscheme',component:ShowschemesComponent},

  //tender
  { path: 'applytender', component: ApplyTenderComponent },
  {path:'allapply',component:ShowappliedtenderComponent},

  //admin
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'content-management', component: ContentManagementComponent },
  { path: 'addscheme', component: AddSchemeComponent },
  { path: 'addtender', component: AddtendersComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'allscheme1', component: AllschemeComponent },
  { path: 'alltenders', component: AlltendersComponent },
  { path: 'allapply1', component: PendingApprovalsComponent },
  { path: 'addnotice', component: AddnoticeComponent },
  // Default route
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

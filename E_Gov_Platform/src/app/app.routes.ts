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
import { StatesSchemesComponent } from './components/schemes/states-schemes/states-schemes.component';
import { CentralSchemesComponent } from './components/schemes/central-schemes/central-schemes.component';
import { TermsComponent } from './components/terms/terms.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ShowDocumentsComponent } from './components/documents/show-documents/show-documents.component';
import { AddDocumentsComponent } from './components/documents/add-documents/add-documents.component';


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
    { path: 'central-schemes', component: CentralSchemesComponent },
    { path: 'states-schemes', component: StatesSchemesComponent },
    { path:'payments',component:PaymentsComponent},
    {path:'show_all_documents',component:ShowDocumentsComponent},
    {path:'add_documents',component:AddDocumentsComponent},

   // Default route
    {
      path: '',redirectTo:'home',pathMatch:'full'
    },
    {
      path: '**',redirectTo:'login',pathMatch:'full'
    }
  ];
  
 
  
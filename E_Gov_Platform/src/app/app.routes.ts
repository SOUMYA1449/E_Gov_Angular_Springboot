import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { NgModule } from '@angular/core';
// import { MainContentComponent } from './main-content/main-content.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { NoticesComponent } from './components/notices/notices.component';
import { MediaComponent } from './components/media/media.component';
import { ActComponent } from './components/act/act.component';
import { TendersComponent } from './components/tenders/tenders.component';
import { SchemesComponent } from './components/schemes/schemes.component';
import { ServicesComponent } from './components/services/services.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { GravianceComponent } from './components/graviance/graviance.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    


    //All navbar components
    {path:'about',component:AboutUsComponent},
    {path:'home',component:HomeComponent},
    {path:'notices',component:NoticesComponent},
    {path:'media',component:MediaComponent},
    {path:'act',component:ActComponent},
    {path:'tenders',component:TendersComponent},
    {path:'schemes',component:SchemesComponent},
    {path:'services',component:ServicesComponent},
    {path:'documents',component:DocumentsComponent},
    {path:'graviance',component:GravianceComponent},

   // Default route
    {
      path: '',redirectTo:'home',pathMatch:'full'
    },
    {
      path: '**',redirectTo:'login',pathMatch:'full'
    }
  ];
  
 
  
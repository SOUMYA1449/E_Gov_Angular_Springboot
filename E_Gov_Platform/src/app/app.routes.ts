import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { NgModule } from '@angular/core';
// import { MainContentComponent } from './main-content/main-content.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
  // Default route
    {
      path:'about',component:AboutUsComponent
    },
    {
      path:'home',component:HomeComponent
    },
    {
      path: '',redirectTo:'home',pathMatch:'full'
    }
  ];
  
 
  
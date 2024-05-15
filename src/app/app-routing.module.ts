import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostJobComponent } from './Component/post-job/post-job.component';
import { EditJobComponent } from './Component/edit-job/edit-job.component';
import { HomeCompanyComponent } from './Component/home-company/home-company.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { UpdateProfileComponent } from './Component/update-profile/update-profile.component';
import { HomeApplicantComponent } from './Component/home-applicant/home-applicant.component';
import { CompanyProfileComponent } from './Component/company-profile/company-profile.component';
import { ViewAppsComponent } from './Component/view-apps/view-apps.component';
import { SavedJobComponent } from './Component/saved-job/saved-job.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'company-profile/:id',component:CompanyProfileComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'job/:id',component:EditJobComponent},
  {path:'view-app-job/:id',component:ViewAppsComponent},
  {path:'home-company/:id',component:HomeCompanyComponent},
  {path:'post-job/:id',component:PostJobComponent},
  {path:'home-applicant/:id',component:HomeApplicantComponent},
  {path:'update-profile/:id',component:UpdateProfileComponent},
  {path:'saved-jobs/:id',component:SavedJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

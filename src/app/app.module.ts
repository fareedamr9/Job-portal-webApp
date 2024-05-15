import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCompanyComponent } from './Component/home-company/home-company.component';
import { MenuComponent } from './Component/menu/menu.component';
import { EditJobComponent } from './Component/edit-job/edit-job.component';
import { AngularFireModule} from '@angular/fire/compat';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { environment } from 'src/enviroments/enviroments';
import { PostJobComponent } from './Component/post-job/post-job.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';


import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



import { getAuth } from 'firebase/auth';
import { UpdateProfileComponent } from './Component/update-profile/update-profile.component';
import { HomeApplicantComponent } from './Component/home-applicant/home-applicant.component';
import { CompanyProfileComponent } from './Component/company-profile/company-profile.component';
import { ViewAppsComponent } from './Component/view-apps/view-apps.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from'@angular/fire/compat/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { SavedJobComponent } from './Component/saved-job/saved-job.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeCompanyComponent,
    MenuComponent,
    EditJobComponent,
    PostJobComponent,
    LoginComponent,
    SignupComponent,
    UpdateProfileComponent,
    HomeApplicantComponent,
    CompanyProfileComponent,
    ViewAppsComponent,
    SavedJobComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgMultiSelectDropDownModule.forRoot(),
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore()),
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

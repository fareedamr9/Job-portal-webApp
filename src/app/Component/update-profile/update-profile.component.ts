import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Applicant } from 'src/app/Classes/applicant';
import { Company } from 'src/app/Classes/company';
import { DataService } from 'src/app/Service/DataService';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  jobPreferences = ['Sales', 'HR', 'Web developer', 'Android developer'];
  appId: any;
  app: Observable<Applicant>;
  
  url:string='';
  preference:string='';
  
  job_pref:string[]=[];

  constructor(private auth:AuthService,private route:ActivatedRoute , private dataService: DataService, private router:Router, private storage:AngularFireStorage ){
  this.appId=this.route.snapshot.paramMap.get('id');
  this.app = this.dataService.getAppById(this.appId);
  
 

  }
  goToPage() {
    this.router.navigate(['/home-applicant',this.appId]);
  }
  async onFileChange(event:any)
  {
    const file=event.target.files[0];
    if(file)
      {
        const path='yt/${file.name}';
        const uploadFile=await this.storage.upload(path,file);
        this.url =await uploadFile.ref.getDownloadURL();
         console.log(this.url);
      }
  }
  Update(id:any,email:any,password:any,role:any,name:any,contact:any,pref:any,phone:any) {
    if (this.app) { 
    //  const appp=new Applicant(id.value,email.value,password.value,role.value,name.value,contact.value,phone.value,this.url,pref.value.join(', '))
      // const applicant=new Applicant(id.value,email.value,password.value,role.value,name.value,contact.value,this.url,pref.value.join(', '))
          //  this.dataService.updateAppFire(applicant.id,applicant.email,applicant.password,applicant.role,applicant.name,applicant.contact_email,applicant.phone,applicant.resume,applicant.job_preferences,this.appId); 

     this.dataService.updateAppFire(id.value,email.value,password.value,role.value,name.value,contact.value,phone.value,this.url,pref.value,this.appId); 
      this.router.navigate(['/home-applicant',this.appId]);
    }
}
logout()
  {
    this.auth.logout();
  }


goToHome() {
  this.router.navigate(['/home-applicant',this.appId]);
}

goToProfile() {
  this.router.navigate(['/update-profile',this.appId]);
}
goToSaved()
{
  this.router.navigate(['/saved-jobs',this.appId])
}
}

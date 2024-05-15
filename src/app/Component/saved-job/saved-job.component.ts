import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Applicant } from 'src/app/Classes/applicant';
import { JobApplicant } from 'src/app/Classes/job-applicant';
import { Saved } from 'src/app/Classes/saved';
import { DataService } from 'src/app/Service/DataService';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-saved-job',
  templateUrl: './saved-job.component.html',
  styleUrls: ['./saved-job.component.css']
})
export class SavedJobComponent {
  appId: any;
  savedJobs: Observable<Saved[]>;
apps:Observable<Applicant>
  // searchApplicantId: string;
  constructor(private auth:AuthService,private route:ActivatedRoute ,private router:Router, private dataService: DataService ){
    
  
    this.appId=this.route.snapshot.paramMap.get('id')!;
    this.savedJobs = this.dataService.getSavedByAppId(this.appId);
    this.apps=this.dataService.getAppById(this.appId);
    
  }
  
logout()
{
  this.auth.logout();
}

apply(jobId:string,appName:string,
  resume:string,
  contact:string,
  phone:string)
{
  this.dataService.apply(jobId,this.appId,appName,resume,contact,phone);
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

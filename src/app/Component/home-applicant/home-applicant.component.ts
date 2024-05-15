import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Applicant } from 'src/app/Classes/applicant';
import { Job } from 'src/app/Classes/job';
import { DataService } from 'src/app/Service/DataService';
import { AuthService } from 'src/app/Service/auth.service';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-home-applicant',
  templateUrl: './home-applicant.component.html',
  styleUrls: ['./home-applicant.component.css']
})
export class HomeApplicantComponent {
 
  jobsList: Observable<Job[]>;
 
  search:string='';
  appId:any;
  applicant:Observable<Applicant>;
  
  // housingService: HousingService = inject(HousingService);

  constructor(public data: DataService, private router: Router, private route:ActivatedRoute, private auth:AuthService){
    this.jobsList = this.data.getAllJobsFire();
    this.appId=this.route.snapshot.paramMap.get('id');
    this.applicant=this.data.getAppById(this.appId);
  }

  apply(jobId:string,appName:string,
    resume:string,
    contact:string,
    phone:string)
  {
    this.data.apply(jobId,this.appId,appName,resume,contact,phone);
  }
  save(jobTitle:string,jobId:string,companyName:string,location:string,description:string,responsibilities:string,benefits:string,qualifications:string,howToApply:string)
  {
    this.data.save(jobId,this.appId,jobTitle,companyName,location,description,responsibilities,benefits,qualifications,howToApply,this.appId);
    this.router.navigate(['/saved-jobs',this.appId]);
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

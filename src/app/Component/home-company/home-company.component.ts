import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

import { Job } from 'src/app/Classes/job';
import { DataService } from 'src/app/Service/DataService';
import { AuthService } from 'src/app/Service/auth.service';
import {JobService}from 'src/app/Service/job.service';
@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent {

  // for searchbar filteration  applicant instead of jobs
  //filteredjobsList: Job[] = [];
   jobsList: Observable<Job[]>;
  comId: any;
  // housingService: HousingService = inject(HousingService);



  constructor(private route:ActivatedRoute , private router: Router, private dataservice:DataService, private auth:AuthService){
   // this.jobsList = this.jobService.getAllJobs();
  //  this.jobsList=this.dataservice.getAllJobsFire();
   this.comId=this.route.snapshot.paramMap.get('id');
   this.jobsList=this.dataservice.getJobByComId(this.comId);

    //this.filteredjobsList = this.jobsList;
  }

deleteJobs(job:Job){
 // this.jobService.deleteJob(i);
 this.dataservice.deleteJobFire(job);

}

goToPage(job :Job) {
  this.router.navigate(['/job',job.id]);
}
logout()
  {
    this.auth.logout();
  }


goToHome() {
  this.router.navigate(['/home-company',this.comId]);
}

goToProfile() {
  this.router.navigate(['/company-profile',this.comId]);
}

goToPost() {
  this.router.navigate(['/post-job',this.comId]); 
}

goToView(job :Job) {
  this.router.navigate(['view-app-job',job.id]); 
}

// filterResults(text: string) {
//   if (!text) {
//     this.filteredjobsList = this.jobsList;
//     return;
//   }

//   this.filteredjobsList = this.jobsList.filter(
//     job => job?.jobTitle.toLowerCase().includes(text.toLowerCase())
//   );
// }
}

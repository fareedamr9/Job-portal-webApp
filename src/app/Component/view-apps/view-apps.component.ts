import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JobApplicant } from 'src/app/Classes/job-applicant';
import { DataService } from 'src/app/Service/DataService';

@Component({
  selector: 'app-view-apps',
  templateUrl: './view-apps.component.html',
  styleUrls: ['./view-apps.component.css']
})
export class ViewAppsComponent {
  jobId: any;
  myJob: Observable<JobApplicant[]>;
  searchApplicantId: string;
  constructor(private route:ActivatedRoute ,private router:Router, private dataService: DataService ){
    
  
    this.jobId=this.route.snapshot.paramMap.get('id')!;
    this.myJob = this.dataService.getJobApplicants();
    this.searchApplicantId = ''; 
    
  }
 
}

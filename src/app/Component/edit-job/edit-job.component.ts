import { Component } from '@angular/core';
import { JobService } from 'src/app/Service/job.service';
import { ActivatedRoute } from '@angular/router';
import{ Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/Service/DataService';
import { Observable } from 'rxjs';
import { Job } from 'src/app/Classes/job';
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent {
  jobId: any;
  myJob: Observable<Job>;
 

  constructor(private route:ActivatedRoute ,private router:Router, private dataService: DataService ){
    
  
    this.jobId=this.route.snapshot.paramMap.get('id')!;
    this.myJob = this.dataService.getJobById(this.jobId);
    
  }

    
goToPage(comId:any) {
  this.router.navigate(['/home-company',comId]);
}
     Update(jobId:any,companyId:any,title: any, Loc: any, ComName: any,Qualifications:any,Responsibilities:any,Description:any,Benefits:any,HowToApply:any) {
      if (this.myJob) { 
        const job=new Job(jobId.value,companyId.value,title.value,ComName.value,Loc.value,Description.value,Responsibilities.value,Qualifications.value,Benefits.value,HowToApply.value)
         this.dataService.updateJobFire(job,this.jobId); 
        this.router.navigate(['/home-company',companyId.value]);
      }
  }
}

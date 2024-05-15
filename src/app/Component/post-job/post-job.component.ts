import { Component } from '@angular/core';
import { JobService } from 'src/app/Service/job.service';
import {ActivatedRoute,Router} from '@angular/router';
import { Job } from 'src/app/Classes/job';
import { addDoc, Firestore,collection, collectionData } from '@angular/fire/firestore';
import { DataService } from 'src/app/Service/DataService';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent {

  comId: any;
  jobId:any;
  constructor(private auth:AuthService,private route:ActivatedRoute ,private fs:Firestore,private dataservice:DataService, private jobservice:JobService, private router:Router){
    this.comId=this.route.snapshot.paramMap.get('id');
  }
  saveJobs(title: any, Loc: any, ComName: any,Qualifications:any,Responsibilities:any,Description:any,Benefits:any,HowToApply:any): void {
    //const id = this.fs.createId(); 
     this.jobId=title.value+ComName.value;
  //  this.jobservice.saveJob(id,companyId.value,title.value,Loc.value,ComName.value,Qualifications.value,Responsibilities.value,Description.value,Benefits.value,HowToApply.value);
     this.dataservice.saveJobFire(new Job(this.jobId,this.comId,title.value,Loc.value,ComName.value,Qualifications.value,Responsibilities.value,Description.value,Benefits.value,HowToApply.value))
     this.router.navigate(['/home-company',this.comId]);
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
}
  // postjob()
  // {
  //   const id = this.fs.createId(); 
  //   this.jobservice.saveJob(new Job(id,'HR','2','zayed','valeo','senior','junior','hr','job','Hr','Valeo'));
  // }
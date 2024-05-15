import { Injectable } from '@angular/core';
import { Job } from '../Classes/job';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { addDoc, Firestore,collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class JobService {

  jobs: Job[]=[
    {
      id:'1',
      companyId:'2',
      jobTitle: 'HR',
      companyName:'Valeo',
      location:'6 October',
      description:'new job',
      responsibilities:'do interviews',
      qualifications:'2 year experience',
      benefits:'attractive package',
      howToApply:'upload your resume'
    }
    ]
  

  saveJob(id:any,jobTitle:any,companyId:any,companyName:any,location:any,description:any,responsibilities:any,qualifications:any,benefits:any,howToApply:any)
  {
    this.jobs.push({id,jobTitle,companyId,companyName,location,description,responsibilities,qualifications,benefits,howToApply});
  }
  getAllJobs() :Job[]{
    return this.jobs
  }
 

  deleteJob(i:number)
  {
    this.jobs.splice(i,1);
  }

  updateJob(jobId:any,item:any)
  {
    this.jobs[jobId]=item
  }

}
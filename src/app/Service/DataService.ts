import { Injectable, Query } from '@angular/core';
import { addDoc, Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Job } from '../Classes/job';
import { deleteDoc, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { User } from '../Classes/user';
import { JobApplicant } from '../Classes/job-applicant';
import { Company } from '../Classes/company';
import { Applicant } from '../Classes/applicant';

import { Saved } from '../Classes/saved';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fs: Firestore) { }

  saveJobFire(job: Job) {
    const jobsCollection = collection(this.fs, 'Job');
    setDoc(doc(jobsCollection,job.id),{...job});
  }
 
  apply(jobId:string,appId:string,appName:string,resume:string,contact:string,phone:string) {
    const jobsCollection = collection(this.fs, 'JobApplicant');
    addDoc(jobsCollection, { appID:appId,jobID:jobId,appName:appName,resume:resume,contact:contact,phone:phone });

    alert("applied successfully")
  }
  
  save(jobId:string,appId:string,jobTitle:string,companyName:string,location:string,
    description:string,
    responsibilities:string,
    benefits:string,
    qualifications:string,
    howToApply:string,appID:string) {
    const jobsCollection = collection(this.fs, 'Saved');
    addDoc(jobsCollection, { AppID:appID,JobID:jobId,jobTitle:jobTitle,companyName:companyName,location:location,description:description,responsibilities:responsibilities,benefits:benefits,qualifications:qualifications,howToApply:howToApply });

    alert("saved successfully")
  }
  getSavedByAppId(appId: string): Observable<Saved[]> {
    const jobsCollection = collection(this.fs, 'Saved');
    const jobQuery =query(jobsCollection,where('AppID','==',appId));
    return collectionData(jobQuery) as Observable<Saved[]>;

  }

  
  getComById(comId: string): Observable<Company> {
    const comCollection = collection(this.fs, 'Company');
    const comQuery =query(comCollection,where('id','==',comId));
    return collectionData(comQuery).pipe(map((companies)=>companies[0])) as Observable<Company>;

  }

  getAppById(appId: string): Observable<Applicant> {
    const appCollection = collection(this.fs, 'Applicant');
    const appQuery =query(appCollection,where('id','==',appId));
    return collectionData(appQuery).pipe(map((applicants)=>applicants[0])) as Observable<Applicant>;
  }
 
 

  getJobByComId(comId: string): Observable<Job[]> {
    const comCollection = collection(this.fs, 'Job');
    const jobQuery =query(comCollection,where('companyId','==',comId));
    return collectionData(jobQuery) as Observable<Job[]>;
  }


  signUp(e: any, id: any, p: any, r: any) {
    const userCollection = collection(this.fs, 'Company');
    addDoc(userCollection, { email: e, id: id, password: p, role: r });
  }



  getAllJobsFire(): Observable<Job[]> {
    const jobsCollection = collection(this.fs, 'Job');
    const jobs = collectionData(jobsCollection, { idField: 'id' });
    return jobs as Observable<Job[]>;
  }


  getJobApplicants(): Observable<JobApplicant[]> {
    const jobsAppsCollection = collection(this.fs, 'JobApplicant');
    const jobs = collectionData(jobsAppsCollection, { idField: 'id' });
    return jobs as Observable<JobApplicant[]>;
  }
  
  getSavedJobs(): Observable<Saved[]> {
    const savedCollection = collection(this.fs, 'Saved');
    const save = collectionData(savedCollection, { idField: 'id' });
    return save as Observable<Saved[]>;
  }
  

  deleteJobFire(job: Job) {
    const jobsCollection = collection(this.fs, 'Job');
    const document = doc(jobsCollection,job.id);
    deleteDoc(document);
  }

  async updateJobFire(job: Job, id: string) {
    const jobsCollection = collection(this.fs, 'Job');
    const document = doc(jobsCollection, id);
    // return updateDoc(document, { ...job });
    try {
      await updateDoc(document, { ...job });
      console.log('Job updated successfully');
    } catch (error) {
      console.error('Error updating job:', error);
      throw new Error('Failed to update job');
    }
  }

  async updateAppFire(id:string,e:string,p:string,r:string,n:string,c:string,phone:string,url:string,pref:string, appid: string) {
    const appCollection = collection(this.fs, 'Applicant');
    const document = doc(appCollection, appid);
    // return updateDoc(document, { ...job });
    try {
      await updateDoc(document,{ id: id, email: e, password: p, role: r,contact_email:c,phone:phone,resume:url,name:n,job_pref:pref});
      console.log('Applicant updated successfully');
    } catch (error) {
      console.error('Error updating applicant:', error);
      throw new Error('Failed to update applicant');
    }
  }
  async updateCom(e:string,p:string,r:string,n:string,desc:string,contact:string,logo:string,id: string) {
    const comCollection = collection(this.fs, 'Company');
    const document = doc(comCollection, id);
    // return updateDoc(document, { ...job });
    try {
      await updateDoc(document, { id: id, email: e, password: p, role: r,name:n,description:desc,contact_email:contact,logo:logo});
      console.log('Company updated successfully');
    } catch (error) {
      console.error('Error updating company:', error);
      throw new Error('Failed to update company');
    }
  }

  getJobById(id: string): Observable<Job> {
    const jobsCollection = collection(this.fs, 'Job');
    const document = doc(jobsCollection, id);
    return docData(document) as Observable<Job>;
  }

  getAllUsers(): Observable<User[]> {
    const usersCollection = collection(this.fs, 'User');
    const users = collectionData(usersCollection, { idField: 'id' });
    return users as Observable<User[]>;

  }
}

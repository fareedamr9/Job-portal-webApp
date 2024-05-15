import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { DataService } from './DataService';
import {  setDoc } from 'firebase/firestore';
import { doc,Firestore } from '@angular/fire/firestore';
import { updateProfile } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  CurrentUser: any;
  current: string | undefined;

  constructor( private auth:AngularFireAuth,private fs:Firestore, private router:Router ,private data:DataService) { }

  login(email:string, password:string,role:string)
  {
    this.auth.signInWithEmailAndPassword(email,password).then ((userCredential)=>{
      this.CurrentUser =userCredential.user?.uid;
      localStorage.setItem('token','true');

      if(role==='company')
        {
      this.router.navigate(['/home-company',this.CurrentUser]);
        }
        else if (role==='applicant')
          {
            this.router.navigate(['/home-applicant',this.CurrentUser]);
          }
    }, err=>{
    alert(err.message);
    this.router.navigate(['/login']);
    })
  }

  signup_com(email:string,password:string,role:string,name:string,contact_email:string,logo:string,description:string):Promise<boolean>
  {
    return this.auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      const user=userCredential.user;
      const uid=user?.uid;
     // this.current=userCredential.user?.uid;
     
      if (role === 'company' && uid) {
        // this.data.signUp(email,uid,password,role);
        // updateProfile(user,{displayName: uid})
        setDoc(doc(this.fs,"Company",uid),
        {
          id:uid,
          email:email,
          password:password,
          role:role,
          name:name,
          contact_email:contact_email,
          logo:logo,
          description:description


        });
      };
    
      alert('Successful signup!');
      this.router.navigate(['/login']);
      return true;

    }, err => {

      alert(err.message);
      this.router.navigate(['/signup']);
      return false;
    });
  
  
  }


  signup_app(email:string,password:string,role:string,name:string,contact_email:string,phone:string,url:string,job_pref:string):Promise<boolean>
  {
    return this.auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      const user=userCredential.user;
      const uid=user?.uid;
     // this.current=userCredential.user?.uid;
     
      if (role === 'applicant' && uid) {
        // this.data.signUp(email,uid,password,role);
        // updateProfile(user,{displayName: uid})
        setDoc(doc(this.fs,"Applicant",uid),
        {
          id:uid,
          email:email,
          password:password,
          role:role,
          name:name,
          contact_email:contact_email,
          phone:phone,
          resume:url,
          job_pref:job_pref
        });
      };
    
      alert('Successful signup!');
      this.router.navigate(['/login']);
      return true;

    }, err => {

      alert(err.message);
      this.router.navigate(['/signup']);
      return false;
    });
  
  
  }

  logout()
  {
    this.auth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);


    },err=>{
      alert(err.message);
    });

  }
}


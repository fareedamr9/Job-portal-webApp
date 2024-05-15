import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Company } from 'src/app/Classes/company';
import { AuthService } from 'src/app/Service/auth.service';
import { DataService } from 'src/app/Service/DataService';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
//   signupData = {
//     role: '',
//     email: '',
//     password: '',
//     Name: '',
//     contact_email: '',
//     phone: '',
//     jobPref:[],
//     company_name:'',
//     com_desc:'',
//     logo:'',
//     company_email:'',
//     resume: null
// };
// jobPreferences = ['Sales', 'HR', 'Web developer', 'Android developer'];
//   roles = ['Company', 'Applicant'];
//   users = [
//     { role: 'Company', email: 'company@example.com', password: 'company123' },
//     { role: 'Applicant', email: 'applicant@example.com', password: 'applicant123' }
//   ];
//   toggleInputs() {
//     // Reset the additional input fields when role changes
//     this.signupData.Name = '';
//     this.signupData.contact_email = '';
//     this.signupData.phone = '';
//     this.signupData.jobPref= [];
//     this.signupData.company_name= '';
//     this.signupData.com_desc= '';
//     this.signupData.logo= '';
//     this.signupData.company_email= '';
// }
// onFileSelected(event: any) {
//   if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       this.signupData.resume = file;
//   }
// }
//   signup() {
//     this.users.push({
//       role: this.signupData.role,
//       email: this.signupData.email,
//       password: this.signupData.password
//     });
//     alert('Signed up successfully');
//   }



//   dropdownList = [];
//   selectedItems = [];
//   dropdownSettings = {};
// }

jobPreferences = ['Sales', 'HR', 'Web developer', 'Android developer'];
  roles = ['Company', 'Applicant'];
 

  email:string='';
  password:string='';
  role:string='';
  name:string='';
  contact_email:string='';
  phone:string='';
  job_pref:string[]=[];

  com_name:string='';
  email_com:string='';
  logo:string='';
  description:string='';
  url:string='';

  constructor(private auth:AuthService , private data:DataService, private storage:AngularFireStorage){}
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
  async signup()
  {
    if(this.email.trim()===''){
      alert('Please enter email');
    return;
    }
    if(this.password.trim()===''){
      alert('Please enter password');
    return;
    }

    if(this.role==='company')
      {

    await this.auth.signup_com(this.email, this.password,this.role,this.com_name,this.email_com,this.logo,this.description)
    // if (this.role === 'company') {
    //   this.data.signUp(this.email,this.password,this.role)
    // }
    this.email='';
    this.password='';
    this.role='';
    this.com_name='';
    this.email_com='';
    this.logo='';
    this.description='';
      }

      if(this.role==='applicant')
        {
          
        
      await this.auth.signup_app(this.email, this.password,this.role,this.name,this.contact_email,this.phone,this.url,this.job_pref.join(', '))
      // if (this.role === 'company') {
      //   this.data.signUp(this.email,this.password,this.role)
      // }
      this.email='';
      this.password='';
      this.role='';
      this.name='';
      this.contact_email='';
      this.phone='';
      this.job_pref=[];
      this.url='';
        }

    
  }

 
}


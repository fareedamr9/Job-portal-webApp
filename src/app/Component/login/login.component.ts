import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  email:string='';
  password:string='';
  role:string='';

  constructor(private auth:AuthService, private router:Router){}

  login()
  {
    if(this.email==''){
      alert('Please enter email');
    return;
    }
    if(this.password==''){
      alert('Please enter password');
    return;
    }
    this.auth.login(this.email,this.password,this.role);
    this.email='';
    this.password='';
    this.role='';
    

    
  }

}

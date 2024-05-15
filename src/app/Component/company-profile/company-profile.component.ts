import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from 'src/app/Classes/company';
import { DataService } from 'src/app/Service/DataService';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent {
  comId: any;
  com: Observable<Company>;

  constructor(private route:ActivatedRoute , private dataService: DataService, private router:Router,private auth:AuthService ){
  this.comId=this.route.snapshot.paramMap.get('id');
  this.com = this.dataService.getComById(this.comId);

  }
  
  Update(id:any,email:any,password:any,role:any,comName:any,Comdesc:any,contactEmail:any,logo:any) {
    if (this.com) { 
      const company=new Company(id.value,email.value,password.value,role.value,comName.value,Comdesc.value,contactEmail.value,logo.value)
       this.dataService.updateCom(company.email,company.password,company.role,company.name,company.description,company.contact_email,company.logo,this.comId); 
      this.router.navigate(['/home-company',this.comId]);
    }
  }
    
logout()
{
  this.auth.logout();
}


goToHome() {
this.router.navigate(['/home-company',this.comId]);
}

goToProfile(){
this.router.navigate(['/company-profile',this.comId]);
}
}



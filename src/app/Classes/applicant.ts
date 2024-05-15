export class Applicant {
    id:string='';
    name : string='';
    email:string='';
    contact_email:string='';
    password:string= '';
    job_preferences:string[]=[];
    role:string='';
    resume:string='';
    phone:string='';
    // resume:File |null= null;
    public Applicant(id:string,email:string,password:string,role:string,name:string,contact_email:string,resume:string,job_preferences:string[],phone:string)
{  
     this.id=id;
    this.name=name;
    this.email=email;
    this.contact_email=contact_email;
    this.password=password;
    this.role=role;
    this.job_preferences=job_preferences;
    this.resume=resume;
    this.phone=phone;
}
}

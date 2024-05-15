
export class Company {
    id:string;
    role:string;
    email:string;
    password:string;
    name:string;
    contact_email:string;
    description:string;
    logo:string;
    // jobs:any[];

    //,comName:any,contactEmail:any,comDescription:any,logo:any,jobs:any[]

constructor(id:string,email:string,password:string,role:string,name:any,comDescription:any,contactEmail:any,logo:any)
{
    this.id=id;
    this.role=role;
    this.email=email;
    this.password=password;
    this.name=name;
    this.description=comDescription;
    this.contact_email=contactEmail;
    this.logo=logo;
    // this.jobs=jobs;
}
}
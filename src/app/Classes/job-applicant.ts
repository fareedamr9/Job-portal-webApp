export class JobApplicant {
    jobID:string;
    appID:string;
    appName:string;
    resume:string;
    contact:string;
    phone:string;
    constructor(jobID:string,appID:string,appName:string,
        resume:string,
        contact:string,
        phone:string)
    {
        this.appID=appID;
        this.jobID=jobID;
        this.appName=appName;
        this.resume=resume;
        this.contact=contact;
        this.phone=phone;
        
    }
}

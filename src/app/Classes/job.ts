export class Job {
    id:string;
    companyId:string;
    jobTitle:string;
    companyName:string;
    location:string;
    description:string;
    responsibilities:string;
    qualifications:string;
    benefits:string;
    howToApply:string;
    // applicants:any[];


    constructor(id:any,companyId:any,jobTitle:any,companyName:any,location:any,description:any,responsibilities:any,qualifications:any,benefits:any,howToApply:any)
    {

        this.id=id;
        this.companyId=companyId;
        this.jobTitle=jobTitle;
        this.companyName=companyName;
        this.description=description;
        this.location=location;
        this.responsibilities=responsibilities;
        this.qualifications=qualifications;
        this.benefits=benefits;
        this.howToApply=howToApply;
        // this.applicants=applicants;

    }

}

export class User {
    username:string;
    password:string;
    role:string;

    constructor(role:string,username:string,password:string)
{
    this.role=role;
    this.username=username;
    this.password=password;
}
}

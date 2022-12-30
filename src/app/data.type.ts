export interface signupCredentials{
    fullname: string,
    email: string,
    password: string,
    confirmPassword: string,
    market:string,
    role:string
}

export interface loginCredentials{
    email:string,
    password:string
}


export interface RolesGroup {
    disabled?: boolean;
    name: string;
    roles: roles[];
  }


 export interface roles {
    value: string;
    viewValue: string;
  }
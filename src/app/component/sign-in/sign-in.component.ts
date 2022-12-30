import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { SignInSignUpService } from 'src/app/_services/sign-in-sign-up.service';
import { JwtHelperService } from "@auth0/angular-jwt";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

  helper = new JwtHelperService();

  login: FormGroup = new FormGroup({
    
    email: new FormControl(''),
    password: new FormControl(''),
  
  });
  submitted = false;
  loginValid = true;
  showPassword =false;

  rootservice: any
  BASEURL: string;
  constructor(private formBuilder: FormBuilder,
    private signInService: SignInSignUpService,
    private http: HttpClient, private router: Router,
    private rootService: AppService
  ) {
    this.rootservice = AppService
    this.BASEURL = AppService.BASEURL
  }


  ngOnInit(): void {
    this.login = this.formBuilder.group(
      {
        email: ['yadavajay900500@gmail.com', [Validators.required, Validators.email]],
        password: [
          '123456',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],

       
      },

    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.login.controls;
  }

  OnSubmit(body: any): void {
    this.submitted = true;
    if (this.login.invalid) {
      return;
    }
    this.signInService.userSignIn(body)
      .subscribe({
        next: (res: any) => {
          this.rootservice.setToken(res.userData.TOKEN)
          this.rootservice.setRefrshToken(res.userData.refreshToken)
          const data = this.helper.decodeToken(res.userData.TOKEN);
          const  {roles} = data.data

          if (roles[1] === "admin") {
            this.router.navigateByUrl("/admin")
          } else {
            this.router.navigateByUrl("/profile")
          }
        },
        error: (e) => {
          this.router.navigateByUrl('/signIn');
        }
      })
  }

  onReset(): void {
    this.submitted = false;
    this.login.reset();
  }
  
  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }

}

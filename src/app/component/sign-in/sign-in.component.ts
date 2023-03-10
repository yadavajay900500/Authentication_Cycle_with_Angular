import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { SignInSignUpService } from 'src/app/_services/sign-in-sign-up.service';
import Validation from '../../utility/validation'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  rootservice: any
  BASEURL: string;
  constructor(private formBuilder: FormBuilder,
    private signInService: SignInSignUpService,
    private http: HttpClient, private router: Router
  ) { 
    this.rootservice = AppService
    this.BASEURL = AppService.BASEURL
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['yadavajay900500@gmail.com', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],

        acceptTerms: [false, Validators.requiredTrue]
      },

    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(body: any): void {
    this.submitted = true;
    console.log("@@@@@@@@@@@", body)
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    this.signInService.userSignIn(body)
    .subscribe({
      next: (res: any) => {
        console.log("Successfull Login !", res.userData)
        const id=res.userData._id
        // alert("Successfull Login !")
        this.rootservice.setToken(res.userData)
        this.router.navigateByUrl("/admin")
      },
      error: (e) => {
        console.log("Something Wrong !", e)
        this.router.navigateByUrl('/logIn');
      }
    })
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


}

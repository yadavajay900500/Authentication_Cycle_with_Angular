import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators ,Form} from '@angular/forms';
import { SignInSignUpService } from 'src/app/_services/sign-in-sign-up.service';
import Validation from "../../utility/validation"
import {MatSnackBar} from '@angular/material/snack-bar';

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    market:new FormControl(''),
    role:new FormControl('')
  });
  submitted = false;
  showPassword= false;
  passwordIsValid=false;

  constructor(private formBuilder: FormBuilder,
    private signUpService:SignInSignUpService,
    private _snackBar: MatSnackBar
    ) { }

    roleGropus: PokemonGroup[] = [
      {
        name: 'Advert',
        pokemon: [
          { value: 'A', viewValue: 'A' },
          { value: 'B', viewValue: 'B' },
          { value: 'C', viewValue: 'C' },
        ],
      },
      {
        name: 'Publisher',
        pokemon: [
          { value: 'D', viewValue: 'D' },
          { value: 'E', viewValue: 'E' },
          { value: 'F', viewValue: 'F' },
        ],
      },
    ];

    marketList = ["india","US","UK","EU","EU-UK","Global"];

 
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        // username: [
        //   '',
        //   [
        //     Validators.required,
        //     Validators.minLength(6),
        //     Validators.maxLength(20)
        //   ]
        // ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        market: ['', [Validators.required]],
        role: ['', [Validators.required]],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(body:any): void {
    this.submitted = true;
    console.log("+++++++++++",body)
    
    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    this.signUpService.userSignUp(body)
    .subscribe({
      next: (result: any) => {
        console.log("Successfull Signup")
        console.log(result)
        const data=result.msg
          // this._snackBar.open(data);
          this.onReset()
      },
      error: (e) => {
        console.log("SignUp Failes!", e)
      }
    })
    
    
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  
  togglePasswordVisibility() {
    console.log("offfffffffffffffff")
    this.showPassword = !this.showPassword;
  }

  

  passwordValid(event: any) {
    this.passwordIsValid = event;
  }
  

}

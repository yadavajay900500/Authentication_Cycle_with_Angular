import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm,FormGroup, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import Validation from 'src/app/utility/validation';





@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.scss']
})
export class SignUpUserComponent implements OnInit {
  

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    
  });
  submitted = false;
  
    result:any = []
    res:any ;
    // nonSpin:boolean = true
    // spin:boolean = false
    
    constructor(private http:HttpClient ,private router:Router,private formBuilder : FormBuilder) { }
  
    ngOnInit(): void {
      this.form = this.formBuilder.group(
        {
          fullname: ['', Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z]+')],
        
          email: ['', [Validators.required, Validators.email,
            Validators.pattern(
                  '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',)
          ]],
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(6),
              // Validators.maxLength(12),
              // Validators.pattern(
              //         '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,12}$'
              //       )
            ]
          ],
          confirmPassword: ['', Validators.required],
         
        },
        {
          validators: [Validation.match('password', 'confirmPassword')]
        }
      );
    }
  
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    
    onSubmit(e:any){
     this.submitted = true ;
      if (this.form.invalid) {
        return;
      }


  

  

  

  

  
   
  }

   
    


}

import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-password-strength-custom',
  templateUrl: './password-strength-custom.component.html',
  styleUrls: ['./password-strength-custom.component.scss']
})
export class PasswordStrengthCustomComponent implements OnInit {

   
  bar0:String = "";
  bar1: String = "";
  bar2: String = "";
  bar3: String = "";
 
  bar:object = {
    bar0:"",
    bar1: "",
    bar2:  "",
    bar3: ""
  }

msg:string= '';
msgColor: string = "";


  @Input() public passwordToCheck!: string;
  @Output() passwordStrength = new EventEmitter<boolean>()
  col: String = "";
  constructor() { }
  ngOnInit(): void { }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes['passwordToCheck'].currentValue;
    this.setBarColors(4, '#DDD');
    if (password) {
      const c = this.getColor(this.checkStrength(password));
      this.setBarColors(c.index, c.color);
      const pwdStrength = this.checkStrength(password);
        pwdStrength === 40 ? this.passwordStrength.emit(true) : this.passwordStrength.emit(false);
        switch (pwdStrength) {
          case 10:
            this.msg = 'weak';
            break;
          case 20:
            this.msg = 'Average';
            break;
          case 30:
            this.msg = 'strong';
            break;
          case 40:
            this.msg = 'too strong';
            break;
        }
    }
    else{
      this.msg = '';
    }
  }

  private colors = ['darkred', 'orangered', 'green', 'yellowgreen'];



  checkStrength(p: any) {
    // 1
    let force = 0;

    // 2
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const lowerLetters = /[a-z]+/.test(p);
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);

    // 3
    const flags = [lowerLetters, upperLetters, numbers, symbols];

    // 4
    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;
    }

    // 5
    force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
    force += passedMatches * 10;

    // 6
    force = (p.length <= 6) ? Math.min(force, 10) : force;

    // 7
    force = (passedMatches === 1) ? Math.min(force, 10) : force;
    force = (passedMatches === 2) ? Math.min(force, 20) : force;
    force = (passedMatches === 3) ? Math.min(force, 30) : force;
    force = (passedMatches === 4) ? Math.min(force, 40) : force;

    return force;

  }




  private getColor(s: any) {
    let index = 0;
    if (s === 10) {
      index = 0;
    } else if (s === 20) {
      index = 1;
    } else if (s === 30) {
      index = 2;
    } else if (s === 40) {
      index = 3;
    } else {
      index = 4;
    }
    this.msgColor = this.colors[index];
    return {
      index: index + 1,
      color: this.colors[index]
    };
  }

  private setBarColors(count: any, col: any) {
  
    for (let n = 0; n < count; n++) {
      if(n == 0){
        this.bar0 = col
      }
      if(n == 1){
        this.bar1 = col
      }
      if(n == 2){
        this.bar2 = col
      }
      if(n == 3){
        this.bar3 = col
      }
    
    }
  }

}

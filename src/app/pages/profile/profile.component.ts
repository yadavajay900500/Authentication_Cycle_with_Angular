import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EventEmitter, Input, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInSignUpService } from 'src/app/_services/sign-in-sign-up.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/_services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  
  isLoading: Subject<boolean> = this.loader.isLoading
   
  constructor(private loader:LoaderService) { }

  ngOnInit(): void {
  }

}

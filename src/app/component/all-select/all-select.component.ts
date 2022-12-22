import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-all-select',
  templateUrl: './all-select.component.html',
  styleUrls: ['./all-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllSelectComponent implements OnInit {
  @Input() model: any
  @Input() values : String[] = [];
  @Input() text = 'Select All'; 
  constructor() { }

  ngOnInit(): void {
  }

 

  isChecked(): any {
    if(this.model.value && this.values.length && this.model.value.length){
    return this.model.value && this.values.length && this.model.value.length === this.values.length;}
  }

 

  toggleSelection(change: MatCheckboxChange): void {
    if (change.checked) {
      this.model.setValue(this.values);
    } else {
      this.model.setValue([]);
    }
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaMapChartComponent } from './india-map-chart.component';

describe('IndiaMapChartComponent', () => {
  let component: IndiaMapChartComponent;
  let fixture: ComponentFixture<IndiaMapChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiaMapChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiaMapChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

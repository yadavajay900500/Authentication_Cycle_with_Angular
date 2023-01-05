import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsFilesComponent } from './uploads-files.component';

describe('UploadsFilesComponent', () => {
  let component: UploadsFilesComponent;
  let fixture: ComponentFixture<UploadsFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadsFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadsFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

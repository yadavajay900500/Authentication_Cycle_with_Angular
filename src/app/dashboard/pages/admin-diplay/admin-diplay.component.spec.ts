import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDiplayComponent } from './admin-diplay.component';

describe('AdminDiplayComponent', () => {
  let component: AdminDiplayComponent;
  let fixture: ComponentFixture<AdminDiplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDiplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

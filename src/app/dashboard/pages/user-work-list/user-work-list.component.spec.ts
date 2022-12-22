import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkListComponent } from './user-work-list.component';

describe('UserWorkListComponent', () => {
  let component: UserWorkListComponent;
  let fixture: ComponentFixture<UserWorkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWorkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

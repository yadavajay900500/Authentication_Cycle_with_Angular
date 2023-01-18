import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRightSidebarComponent } from './admin-right-sidebar.component';

describe('AdminRightSidebarComponent', () => {
  let component: AdminRightSidebarComponent;
  let fixture: ComponentFixture<AdminRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRightSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

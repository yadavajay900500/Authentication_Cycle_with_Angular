import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthCustomComponent } from './password-strength-custom.component';

describe('PasswordStrengthCustomComponent', () => {
  let component: PasswordStrengthCustomComponent;
  let fixture: ComponentFixture<PasswordStrengthCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordStrengthCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSucessComponent } from './admin-sucess.component';

describe('AdminSucessComponent', () => {
  let component: AdminSucessComponent;
  let fixture: ComponentFixture<AdminSucessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSucessComponent]
    });
    fixture = TestBed.createComponent(AdminSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

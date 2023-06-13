import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentActivityComponent } from './student-activity.component';

describe('StudentActivityComponent', () => {
  let component: StudentActivityComponent;
  let fixture: ComponentFixture<StudentActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentActivityComponent]
    });
    fixture = TestBed.createComponent(StudentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

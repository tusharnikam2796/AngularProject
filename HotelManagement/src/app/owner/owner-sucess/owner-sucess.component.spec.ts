import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSucessComponent } from './owner-sucess.component';

describe('OwnerSucessComponent', () => {
  let component: OwnerSucessComponent;
  let fixture: ComponentFixture<OwnerSucessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerSucessComponent]
    });
    fixture = TestBed.createComponent(OwnerSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

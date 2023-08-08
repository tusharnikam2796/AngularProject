import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDialogComponent } from './owner-dialog.component';

describe('OwnerDialogComponent', () => {
  let component: OwnerDialogComponent;
  let fixture: ComponentFixture<OwnerDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerDialogComponent]
    });
    fixture = TestBed.createComponent(OwnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

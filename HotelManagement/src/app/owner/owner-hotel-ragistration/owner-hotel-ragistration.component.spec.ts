import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerHotelRagistrationComponent } from './owner-hotel-ragistration.component';

describe('OwnerHotelRagistrationComponent', () => {
  let component: OwnerHotelRagistrationComponent;
  let fixture: ComponentFixture<OwnerHotelRagistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerHotelRagistrationComponent]
    });
    fixture = TestBed.createComponent(OwnerHotelRagistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

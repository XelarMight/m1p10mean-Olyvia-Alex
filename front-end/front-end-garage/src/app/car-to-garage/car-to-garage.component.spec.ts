import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarToGarageComponent } from './car-to-garage.component';

describe('CarToGarageComponent', () => {
  let component: CarToGarageComponent;
  let fixture: ComponentFixture<CarToGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarToGarageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarToGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

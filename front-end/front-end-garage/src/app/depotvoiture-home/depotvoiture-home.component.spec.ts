import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotvoitureHomeComponent } from './depotvoiture-home.component';

describe('DepotvoitureHomeComponent', () => {
  let component: DepotvoitureHomeComponent;
  let fixture: ComponentFixture<DepotvoitureHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotvoitureHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepotvoitureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

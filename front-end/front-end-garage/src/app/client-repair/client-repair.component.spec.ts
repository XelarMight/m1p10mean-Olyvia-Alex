import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRepairComponent } from './client-repair.component';

describe('ClientRepairComponent', () => {
  let component: ClientRepairComponent;
  let fixture: ComponentFixture<ClientRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

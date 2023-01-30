import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHistoComponent } from './client-histo.component';

describe('ClientHistoComponent', () => {
  let component: ClientHistoComponent;
  let fixture: ComponentFixture<ClientHistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHistoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientHistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

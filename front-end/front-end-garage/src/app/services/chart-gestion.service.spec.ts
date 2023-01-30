import { TestBed } from '@angular/core/testing';

import { ChartGestionService } from './chart-gestion.service';

describe('ChartGestionService', () => {
  let service: ChartGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

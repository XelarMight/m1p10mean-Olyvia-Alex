import { TestBed } from '@angular/core/testing';

import { AllqueryService } from './allquery.service';

describe('AllqueryService', () => {
  let service: AllqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

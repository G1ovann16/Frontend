import { TestBed } from '@angular/core/testing';

import { StadService } from './stad.service';

describe('StadService', () => {
  let service: StadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

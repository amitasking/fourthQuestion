import { TestBed } from '@angular/core/testing';

import { MidService } from './mid.service';

describe('MidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MidService = TestBed.get(MidService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HardwareApiService } from './hardware-api.service';

describe('HardwareApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardwareApiService = TestBed.get(HardwareApiService);
    expect(service).toBeTruthy();
  });
});

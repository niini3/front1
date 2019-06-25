import { TestBed } from '@angular/core/testing';

import { Web1Service } from './web1.service';

describe('Web1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Web1Service = TestBed.get(Web1Service);
    expect(service).toBeTruthy();
  });
});

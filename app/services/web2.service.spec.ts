import { TestBed } from '@angular/core/testing';

import { Web2Service } from './web2.service';

describe('Web2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Web2Service = TestBed.get(Web2Service);
    expect(service).toBeTruthy();
  });
});

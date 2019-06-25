import { TestBed } from '@angular/core/testing';

import { CreditDocumentSet2013Service } from './credit-document-set-2013.service';

describe('CreditDocumentSet2013Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditDocumentSet2013Service = TestBed.get(CreditDocumentSet2013Service);
    expect(service).toBeTruthy();
  });
});

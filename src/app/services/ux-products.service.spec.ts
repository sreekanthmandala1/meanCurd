import { TestBed } from '@angular/core/testing';

import { UxProductsService } from './ux-products.service';

describe('UxProductsService', () => {
  let service: UxProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UxProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Emp1Service } from './emp1.service';

describe('Emp1Service', () => {
  let service: Emp1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Emp1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

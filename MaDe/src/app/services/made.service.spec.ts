import { TestBed } from '@angular/core/testing';

import { MadeService } from './made.service';

describe('MadeService', () => {
  let service: MadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

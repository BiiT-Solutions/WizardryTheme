import { TestBed } from '@angular/core/testing';

import { BiitIconService } from './biit-icon.service';

describe('BiitIconService', () => {
  let service: BiitIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiitIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

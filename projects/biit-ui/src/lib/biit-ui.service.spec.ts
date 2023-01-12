import { TestBed } from '@angular/core/testing';

import { BiitUiService } from './biit-ui.service';

describe('BiitUiService', () => {
  let service: BiitUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiitUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import {TestBed} from '@angular/core/testing';
import {DomSanitizer} from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('create an instance', () => {
    const pipe = new SafeHtmlPipe(TestBed.inject(DomSanitizer));
    expect(pipe).toBeTruthy();
  });

  it('sanitizes the element outer html', () => {
    const pipe = new SafeHtmlPipe(TestBed.inject(DomSanitizer));
    const element = document.createElement('div');
    element.innerHTML = '<span>safe</span>';

    const result = pipe.transform(element);

    expect(result).toBeTruthy();
  });
});

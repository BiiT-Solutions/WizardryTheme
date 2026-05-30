import {IterableDiffers} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {ArrayChangeDetectorPipe} from './array-change-detector.pipe';
describe('ArrayChangeDetectorPipe', () => {
  it('returns a cloned array when it detects changes', () => {
    TestBed.configureTestingModule({});
    const pipe = new ArrayChangeDetectorPipe(TestBed.inject(IterableDiffers));
    const value = [1, 2];
    const result = pipe.transform(value);
    expect(result).toEqual([1, 2]);
    expect(result).not.toBe(value);
  });
  it('returns the same array reference when there are no changes', () => {
    TestBed.configureTestingModule({});
    const pipe = new ArrayChangeDetectorPipe(TestBed.inject(IterableDiffers));
    const value = [1, 2];
    pipe.transform(value);
    const result = pipe.transform(value);
    expect(result).toBe(value);
  });
});

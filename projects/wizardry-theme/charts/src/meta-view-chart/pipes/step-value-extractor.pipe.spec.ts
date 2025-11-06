import { StepValueExtractorPipe } from './step-value-extractor.pipe';

describe('DecimalExtractorPipe', () => {
  it('create an instance', () => {
    const pipe = new StepValueExtractorPipe();
    expect(pipe).toBeTruthy();
  });
});

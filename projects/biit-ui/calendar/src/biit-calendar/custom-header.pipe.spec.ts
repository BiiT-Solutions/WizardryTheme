import { CustomHeaderPipe } from './custom-header.pipe';

describe('CustomHeaderPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomHeaderPipe();
    expect(pipe).toBeTruthy();
  });
});

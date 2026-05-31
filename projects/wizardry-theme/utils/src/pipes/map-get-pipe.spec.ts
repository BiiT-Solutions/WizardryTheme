import {MapGetPipe} from './map-get-pipe';

describe('MapGetPipe', () => {
  it('returns value for a direct key', () => {
    const pipe = new MapGetPipe();
    const map = new Map<string, number>([['a', 1], ['b', 2]]);

    expect(pipe.transform(map, 'b')).toBe(2);
  });

  it('returns first matching value from key list', () => {
    const pipe = new MapGetPipe();
    const map = new Map<string, string>([['id', '10'], ['name', 'Dwight']]);

    expect(pipe.transform(map, ['missing', 'name'])).toBe('Dwight');
  });

  it('returns undefined when no key matches', () => {
    const pipe = new MapGetPipe();
    const map = new Map<string, string>([['name', 'Pam']]);

    expect(pipe.transform(map, ['x', 'y'])).toBeUndefined();
  });
});


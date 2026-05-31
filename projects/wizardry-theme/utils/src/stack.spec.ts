import {Stack} from './stack';

describe('Stack', () => {
  it('pushes and pops values in LIFO order', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('returns undefined for peek and pop on empty stack', () => {
    const stack = new Stack<string>();

    expect(stack.peek()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
  });

  it('throws when pushing over configured capacity', () => {
    const stack = new Stack<number>(1);
    stack.push(10);

    expect(() => stack.push(20)).toThrowError('Stack has reached max capacity, you cannot add more items');
    expect(stack.size()).toBe(1);
  });
});


import { describe, it, expect } from 'vitest';
import { sum } from '../src/sum.js';
import { res } from '../src/resta.js';
import { mul } from '../src/multiplicacion.js';
import { div } from '../src/division.js';

describe('sum', () => {

  it('suma dos números', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('suma mas cero', () => {
    expect(sum(4, 0)).toBe(4);
  });
});
describe('res', () => {

  it('resta dos números', () => {
    expect(res(7, 5)).toBe(2);
  });

  it('resta menos cero', () => {
    expect(res(2, 0)).toBe(2);
  });
});
describe('mul', () => {

  it('multiplica dos números', () => {
    expect(mul(6, 3)).toBe(18);
  });

  it('multiplica por  cero', () => {
    expect(mul(9, 0)).toBe(0);
  });
});
describe('div', () => {

  it('divide dos números', () => {
    expect(div(8, 2)).toBe(4);
  });

  it('divide entre cero', () => {
    expect(div(4, 0)).toBe(Infinity);
  });
});

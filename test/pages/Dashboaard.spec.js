/**
 * @jest-environment jsdom
 */
import Dashboard from '../../src/pages/Dashboard.js';

describe('Dashboard', () => {
  it('Debería ser una función', () => {
    expect(typeof Dashboard).toBe('function');
  });
});

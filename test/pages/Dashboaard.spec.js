/**
 * @jest-environment jsdom
 */
import Dashboard from '../../src/pages/Dashboard.js';

describe('Dashboard', () => {
  it('Debería ser una función', () => {
    expect(typeof Dashboard).toBe('function');
  });
  it('Have a buttom', () => {
    const DOM = document.createElement('div');
    DOM.append(Dashboard());
    const haveAbutton = DOM.querySelector('#button-signOut');
    expect(haveAbutton).not.toBe(undefined);
  });
  // test.skip('After click button signOut return call function navigateTo', () => {
  //   const DOM = document.createElement('div');
  //   const navigateTo = jest.fn();
  //   DOM.append(Dashboard(navigateTo));
  //   const buttonSignOut = DOM.querySelector('#button-signOut');
  //   buttonSignOut.click();
  //   // expect(navigateTo).toHaveBeenCalledTimes(1);
  //   expect(navigateTo).toHaveBeenLastCalledWith('/');
  // });
  // test('snapshot of Dashboard', () => {
  //   const DOM = document.createElement('div');
  //   DOM.append(Dashboard());
  //   expect(DOM).toMatchSnapshot();
  // });
});

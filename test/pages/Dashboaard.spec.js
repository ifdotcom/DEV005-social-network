/**
 * @jest-environment jsdom
 */
import * as FIREBASE from 'firebase/auth';
import Dashboard from '../../src/pages/Dashboard.js';

jest.mock('firebase/auth');

describe('Dashboard', () => {
  it('Debería ser una función', () => {
    expect(typeof Dashboard).toBe('function');
  });
  it('Have a buttom', () => {
    FIREBASE.onAuthStateChanged.mockImplementation(() => {

    });
    const DOM = document.createElement('div');
    DOM.append(Dashboard());
    const haveAbutton = DOM.querySelector('#button-signOut');
    expect(haveAbutton).not.toBe(undefined);
  });
  test('After click button signOut return call function navigateTo', (done) => {
    FIREBASE.signOut.mockImplementation(() => Promise.resolve());

    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(Dashboard(navigateTo));
    const buttonSignOut = DOM.querySelector('#button-signOut');
    buttonSignOut.click();
    // expect(navigateTo).toHaveBeenCalledTimes(1);
    setTimeout(() => {
      expect(navigateTo).toHaveBeenLastCalledWith('/');
      done();
    }, 0);
  });
  test('snapshot of Dashboard', () => {
    const DOM = document.createElement('div');
    DOM.append(Dashboard());
    expect(DOM).toMatchSnapshot();
  });
});

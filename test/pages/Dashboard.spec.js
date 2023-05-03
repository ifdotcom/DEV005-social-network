/**
 * @jest-environment jsdom
 */
import * as FIREBASE from 'firebase/auth';
import Dashboard from '../../src/pages/Dashboard.js';
// import * as emailCutter from '../../src/pages/Dashboard.js';
// import { savePostFire } from '../../src/lib/Posts.js';

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
  test('After click "NO" Modal display change to none', () => {
    const DOM = document.createElement('div');
    DOM.append(Dashboard());
    const not = DOM.querySelector('#not');
    const myModal = DOM.querySelector('#myModal');
    not.click();
    expect(myModal.style.display).toBe('none');
  });
  /* test.skip('Should cut the user email to be shown as the username', () => {
    emailCutter;
  }); */
  test('button de pub..', (done) => {
    const DOM = document.createElement('div');
    DOM.append(Dashboard());
    const savePostFire = jest.fn();
    const btnPost = DOM.querySelector('#button-post');
    const postText = DOM.querySelector('#post-text');
    // const editStatus = true;
    btnPost.click();

    expect(savePostFire).toHaveBeenCalledWith(postText);
    done();
  });
});

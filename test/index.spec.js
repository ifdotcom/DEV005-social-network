/**
 * @jest-environment jsdom
 */
import Home from '../src/pages/Home.js';
// import Login from '../src/pages/Login.js';

const navigateToMock = jest.fn();
// matchers

/* navigateToMock('/login'); */

describe('Home', () => {
  it('debería ser una función', () => {
    expect(typeof Home).toBe('function');
  });
  it('debería de navegar al dar clic en login', () => {
    const mainContainer = Home(navigateToMock);
    mainContainer.querySelector('#btn-login').click();
    console.log('pathname', window.location.pathname); //eslint-disable-line
    expect(navigateToMock).toHaveBeenCalledWith('/login');
  });
  // it('debería tener', () => {
  //   const mainContainer = Home(navigateTo);
  //   mainContainer.querySelector('btn-login').click();
  //   expect(navigateTo).haveToBeenCalledWith('/login');
  // });
});
// describe('Login')

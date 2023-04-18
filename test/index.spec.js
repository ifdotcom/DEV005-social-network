/**
 * @jest-environment jsdom
 */
// importamos la funcion que vamos a testear
/* import '@testing-library/jest-dom'; */
import Home from '../src/pages/Home.js';
import { navigateToMock } from './indexMock.js';
// import Login from '../src/pages/Login.js';

// const navigateToMock = jest.fn();
// matchers
/* console.log(navigateTo); */

/* navigateToMock('/login'); */

describe('Home', () => {
  it('debería ser una función', () => {
    expect(typeof Home).toBe('function');
  });
  it('debería de navegar al dar clic en login', () => {
    const mainContainer = Home(navigateToMock);
    mainContainer.querySelector('#btn-login').click();
    console.log('pathname', window.location.pathname);
    expect(navigateToMock).toHaveBeenCalledWith('/login');
  });
  // it('debería tener', () => {
  //   const mainContainer = Home(navigateTo);
  //   mainContainer.querySelector('btn-login').click();
  //   expect(navigateTo).haveToBeenCalledWith('/login');
  // });
});
// describe('Login')

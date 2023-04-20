/**
 * @jest-environment jsdom
 */
import Home from '../../src/pages/Home.js';

const navigateToMock = jest.fn();
// matchers

/* navigateToMock('/login'); */

describe('Home', () => {
  it('debería ser una función', () => {
    expect(typeof Home).toBe('function');
  });
  // Test del coach regional
  it('debería de navegar al dar clic en login', () => {
    const mainContainer = Home(navigateToMock);
    mainContainer.querySelector('#btn-login').click();
    expect(navigateToMock).toHaveBeenCalledWith('/login');
  });
  // Teste---end
  it('debería de navegar al dar clic en Register', () => {
    const DOM = document.createElement('div');
    DOM.append(Home(navigateToMock));
    DOM.querySelector('#btn-register').click();
    expect(navigateToMock).toHaveBeenCalledWith('/register');
  });
});
// describe('Login')

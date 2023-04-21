/**
 * @jest-environment jsdom
 */
import Login from '../../src/pages/Login.js';
import * as lgnGoogle from '../../src/lib/LoginGoogle.js';

describe('Login', () => {
  it('Debería ser una función', () => {
    expect(typeof Login).toBe('function');
  });

  it('Debería ser un botón', () => {
    const DOM = document.createElement('div');
    DOM.append(Login());
    const haveAButton = DOM.querySelector('#button-google');
    expect(haveAButton).not.toBe(undefined);
  });

  it('Debería existir una etiqueta i', () => {
    const DOM = document.createElement('div');
    DOM.append(Login());
    const haveAtagI = DOM.querySelector('i');
    expect(haveAtagI).not.toBe(undefined);
  });

  it('Icon debería cambiar de clase al dar click', (done) => {
    const DOM = document.createElement('div');
    DOM.append(Login());
    const iconEye = DOM.querySelector('.icon-eye');
    const icon = DOM.querySelector('i');
    iconEye.click();
    setTimeout(() => {
      expect(icon.classList.contains('fa-eye')).toBe(true);
      done();
    }, 0);
  });

  it('Función de login con google, debería ser llamado con 2 argumentos', () => {
    const DOM = document.createElement('div');
    // const navigateTo = jest.fn();
    jest.spyOn(lgnGoogle, 'buttonLoginG');
    const navigateTo = () => {

    };
    DOM.append(Login(navigateTo));
    const btnGoogle = DOM.querySelector('#button-google');
    // btnGoogle.click();
    expect(lgnGoogle.buttonLoginG).toHaveBeenCalledWith(btnGoogle, navigateTo);
    // expect(lgnGoogle.buttonLoginG).toHaveBeenCalled();
  });
});

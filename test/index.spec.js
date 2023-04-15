/**
 * @jest-environment jsdom
 */
// importamos la funcion que vamos a testear
import '@testing-library/jest-dom';
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

// import validator from '../src/validator';

// describe('validator', () => {
//   it('debería ser un objeto', () => {
//     expect(typeof validator).toBe('object');
//   });

//   describe('validator.isValid', () => {
//     it('debería ser una función', () => {
//       expect(typeof validator.isValid).toBe('function');
//     });

//     it('debería retornar true para "4083952015263"', () => {
//       expect(validator.isValid('4083952015263')).toBe(true);
//     });

//     it('debería retornar true para "79927398713"', () => {
//       expect(validator.isValid('79927398713')).toBe(true);
//     });

//     it('debería retornar false para "1234567890"', () => {
//       expect(validator.isValid('1234567890')).toBe(false);
//     });
//   });

//   describe('validator.maskify', () => {
//     it('debería ser una función', () => {
//       expect(typeof validator.maskify).toBe('function');
//     });

//     it('Debería retornar "############5616" para "4556364607935616"', () => {
//       expect(validator.maskify('4556364607935616')).toBe('############5616');
//     });

//     it('Debería retornar "1" para "1"', () => {
//       expect(validator.maskify('1')).toBe('1');
//     });

//     it('Debería retornar "######orld" para "helloworld"', () => {
//       expect(validator.maskify('helloworld')).toBe('######orld');
//     });
//   });
// });

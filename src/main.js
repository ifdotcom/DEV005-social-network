import { app } from './lib/firebase.js';  //eslint-disable-line 
import './lib/LoginGoogle';
import router from './routes';

// Este es el punto de entrada de tu aplicacion
window.addEventListener('load', router);

// Detectamos cambio del hash

// window.addEventListener("DOMContentLoaded", router);

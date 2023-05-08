import { catGitHub } from '../images';

const Footer = () => {
  const viewFooter = `
    <img src="${catGitHub}" alt="Logo de Github"/>
    <a href="https://github.com/LadyDi3103" target="_blank">Diana Quispe</a> & 
    <img src="${catGitHub}" alt="Logo de Github"/>
    <a href="https://github.com/ifdotcom" target="_blank">Fernanda Vidal</a> 
    & <img src="${catGitHub}" alt="Logo de Github"/>
    <a href="https://github.com/IndiraPe" target="_blank">Indira Pérez </a>  ©Derechos Reservados
    `;
  return viewFooter;
};
export default Footer;

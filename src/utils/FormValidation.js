const validationForm = () => {
  document.addEventListener('keyup', (e) => {
    if (e.target.matches('#mail')) {
      const input = e.target;
      console.log(input.value);

      const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

      if (regex.test(input.value)) {
        console.log('valido');
      } else {
        console.log('inválido');
      }
    }
  });
};

export default validationForm;

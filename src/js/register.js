// loader animation view#
function loadAnimation() {
  const wrapperLoader = document.querySelector('.loader');
  wrapperLoader.className += ' hidden';
  console.log(wrapperLoader);
}

const btnSignin = document.querySelector('.sign-in');
const btnSignup = document.querySelector('.sign-up');

function createModal(_user, _password) {
  const dialog = document.createElement('dialog');
  dialog.className = 'dialog-register';
  const html = document.querySelector('html');
  const submit = document.createElement('input');
  const cancel = document.createElement('button');
  cancel.innerHTML = 'cancel';
  submit.type = 'submit';
  submit.value = 'entrar';
  html.appendChild(dialog);
  dialog.appendChild(cancel);
  dialog.appendChild(_user);
  dialog.appendChild(_password);
  dialog.appendChild(submit);
  dialog.show();
  submit.addEventListener('click', () => {
    dialog.close();
    // esperar la logica del fetch
  });
  cancel.addEventListener('click', () => {
    dialog.close();
    // esperar la logica del fetch
  });
}

function modalComponents(event) {
  console.log(event.target);
  const userInput = document.createElement('input');
  userInput.type = 'text';
  userInput.placeholder = 'user';
  const password = document.createElement('input');
  password.type = 'text';
  password.placeholder = 'password';
  createModal(userInput, password);
}

window.addEventListener('load', loadAnimation);
btnSignin.addEventListener('click', modalComponents);
btnSignup.addEventListener('click', modalComponents);

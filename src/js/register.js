// loader animation
function loadAnimation() {
  const wrapperLoader = document.querySelector('.loader');
  wrapperLoader.className += ' hidden';
  console.log(wrapperLoader);
}

window.addEventListener('load', loadAnimation);

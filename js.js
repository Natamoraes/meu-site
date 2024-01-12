const containerba = document.querySelector('.container-ba');
document.querySelector('.slider').addEventListener('input', (e) => {
  containerba.style.setProperty('--position', `${e.target.value}%`);
})
const containerba2 = document.querySelector('.container-ba2');
document.querySelector('.slider2').addEventListener('input', (e) => {
  containerba2.style.setProperty('--position2', `${e.target.value}%`);
})
const containerba3 = document.querySelector('.container-ba3');
document.querySelector('.slider3').addEventListener('input', (e) => {
  containerba3.style.setProperty('--position3', `${e.target.value}%`);
})
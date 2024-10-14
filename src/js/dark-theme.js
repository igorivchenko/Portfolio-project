const button = document.getElementById('btn-header');
const span = document.getElementById('header-mob-span');
let toggled = false;

button.addEventListener('click', () => {
  toggled = !toggled;

  const root = document.documentElement;

  if (toggled) {
    root.style.setProperty('--white', '#494949');
    root.style.setProperty('--light-grey', '#2A2D32');
    root.style.setProperty('--black', '#F0F0F0');
    button.classList.add('right');


  } else {
    button.classList.remove('right');

    root.style.setProperty('--white', '#F0F0F0');
    root.style.setProperty('--light-grey', '#e4e5e6');
    root.style.setProperty('--black', '#2A2D32');


  }
});




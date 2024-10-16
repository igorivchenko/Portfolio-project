const button = document.getElementById('btn-header');
const span = document.getElementById('header-mob-span');
let toggled = false;

button.addEventListener('click', () => {
  toggled = !toggled;

  const root = document.documentElement;
  const heroBtn = document.querySelector('.rectangle');
  const faqEl = document.querySelectorAll('.ac');
  console.log(faqEl);
  console.log(typeof faqEl);

  if (toggled) {
    faqEl.forEach(element => {
      element.classList.add('ac-dt');
    });
    heroBtn.classList.add('rectangle-dt');
    button.classList.add('right');
    root.style.setProperty('--white', '#1E2023');
    root.style.setProperty('--black', '#F0F0F0');
    root.style.setProperty('--accent-green', '#14C57C');
    root.style.setProperty('--light-grey', '#2A2D32');
    root.style.setProperty('--light-accent', '#204136');
    root.style.setProperty('--hover-grey', '#3B3F45');
  } else {
    faqEl.forEach(element => {
      element.classList.remove('ac-dt');
    });
    heroBtn.classList.remove('rectangle-dt');
    button.classList.remove('right');
    root.style.setProperty('--white', '#F0F0F0');
    root.style.setProperty('--black', '#292929');
    root.style.setProperty('--accent-green', '#00B068');
    root.style.setProperty('--light-grey', '#E4E5E6');
    root.style.setProperty('--light-accent', '#BCDFD1');
    root.style.setProperty('--hover-grey', '#BBBBBB');
  }
});

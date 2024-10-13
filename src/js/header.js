const button = document.getElementById('btn-header');
const span = document.getElementById('header-mob-span');
let toggled = false;

button.addEventListener('click', () => {
  toggled = !toggled;
  

  if (toggled) {
    button.classList.add('right');
    document.body.style.backgroundColor = '#494949'; 
    document.body.style.color = '#f0f0f0'; 
  
}else{
    button.classList.remove('right');
    
    document.body.style.backgroundColor = '#f0f0f0'; 
    document.body.style.color = '#292929'; 
   
     
  }
});



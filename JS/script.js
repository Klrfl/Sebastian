//an empty js file
let openSidebar = document.getElementById('openSidebar');
let sidebar = document.getElementById('sidebar');
let burgerSpan = document.getElementsByClassName('span');


openSidebar.addEventListener('click', ()=>{
  sidebar.classList.toggle('slide');
  burgerSpan.classList.toggle('slide');
});
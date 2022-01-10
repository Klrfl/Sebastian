//an empty js file
let openSidebar = document.getElementById('openSidebar');
let sidebar = document.getElementById('sidebar');

openSidebar.addEventListener('click', ()=>{
  sidebar.classList.toggle('slide');
})
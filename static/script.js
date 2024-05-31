const hamburger = document.getElementById('hamburger');
const menus = document.getElementById('menus');


hamburger.addEventListener('click',() => {
    menus.classList.toggle('show');
    
});

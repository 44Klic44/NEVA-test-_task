const clock = document.querySelector('.menu');
document.addEventListener('click', menu);

function menu(event) {
    if (event.target.closest('.menu')){
        clock.classList.toggle('_active');
        
    }
if (!event.target.closest('.menu')) {
clock.classList.remove('_active')

}

}
   



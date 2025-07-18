let ul = document.querySelector('ul');

ul.addEventListener('click',function(eve){
    eve.target.classList.toggle("lt")
})
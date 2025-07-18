let h1 = document.querySelector('h1');

window.addEventListener("keydown",function(para){
    if(para.key == ' '){
        h1.textContent = "Space";
    }
    else{
        h1.textContent = para.key
    }
})
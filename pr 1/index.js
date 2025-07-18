let sel = document.querySelector('select')
let heading = document.querySelector('.heading')

sel.addEventListener("change",function(dets){
    heading.textContent = `${dets.target.value} is selected`;
})
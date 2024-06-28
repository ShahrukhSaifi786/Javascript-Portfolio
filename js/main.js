let obj=document.getElementById("menu")
obj.addEventListener('click',()=>{
    obj.classList.toggle('fa-times')
    document.querySelector('header').classList.toggle('toggler')
})
window.addEventListener('scroll',()=>{
    obj.classList.remove('fa-times')
    document.querySelector('header').classList.remove('toggler')
})

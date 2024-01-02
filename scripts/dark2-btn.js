let background1 = document.getElementById('about')
let body = document.querySelector("body")
let CheckBoxMoon = document.getElementById("check")

CheckBoxMoon.addEventListener('click', ()=>{
    CheckBoxMoon.classList.toggle('dark')
    background1.classList.toggle('dark')
    body.classList.toggle('dark')
})
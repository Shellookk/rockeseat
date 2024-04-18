import { Router } from './router.js'


const buttonLogo = document.querySelector('#logo')
const buttonHome = document.querySelector('#home')
const buttonUniverse = document.querySelector('universe')
const buttonExplorer = document .querySelector('explorer')
const buttonMoreInfo = document.querySelector('#moreInfo')

// Botão saiba mais
buttonMoreInfo.addEventListener("click", function(){
    window.location.href ="/universe"
})


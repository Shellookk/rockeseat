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

// rotas chamadas
const router = new Router()
router.add('/', "/pages/home.html")
router.add('/home' , "/pages/home.html")
router.add('/the-universe', "/pages/universe.html")
router.add('/explorer', "/pages/explorer.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
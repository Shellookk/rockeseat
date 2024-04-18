import { Router } from "./router.js";

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/o-universo", "/pages/universe.html")
router.add("/exploracao", "/pages/explorer.html")
router.add("/error", "/pages/error.html")

router.handle()

window.onpopstate = () => router.handle()
window.Route = () => router.Route()
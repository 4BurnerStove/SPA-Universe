import { Router } from "./router.js"

const router = new Router()
router.add('/', './pages/Home.html')
router.add('/Universe', './pages/Exploration.html')
router.add('/Exploration', './pages/Universe.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
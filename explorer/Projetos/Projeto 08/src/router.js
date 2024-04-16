const routes = {
    "/" : "./pages/home.html",
    "/about" : "./pages/about.html",
    "/contact" : "./pages/contact.html",
    404 : "./pages/404.html",
}

function route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target)

    handle()
}

function handle(){
    const {pathname} = window.location //primeira maneira de fazer o pathname, a segunda seria:  const {pathname} = window.location //maneira mais viavel para grandes quantidades exemplo: {pathname, port....}

    const route = routes[pathname] || routes[404]

    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })
}
handle()

window.onpopstate = ()=> handle()

window.route = () => route()
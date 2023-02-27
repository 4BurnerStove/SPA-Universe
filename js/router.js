export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    
    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes['/']
    const Home = document.querySelector('#Home')
    const Universe = document.querySelector('#Universe')
    const Exploration = document.querySelector('#Exploration')


    fetch(route)
      .then(data => data.text())
      .then(html => (document.querySelector('#page').innerHTML = html))

    if (pathname == '/') {
      document.body.style.backgroundImage = "url('./BackgroundIMG/mountains-universe-1.png')"
      this.toogleClass(Home, Universe, Exploration)
    } else if (pathname == '/Universe') {
      document.body.style.backgroundImage = "url('./BackgroundIMG/mountains-universe-2.png')"
      this.toogleClass(Universe, Home, Exploration)
    } else {
      document.body.style.backgroundImage = "url('./BackgroundIMG/mountains-universe-3.png')"
      this.toogleClass(Exploration, Universe, Home)
    }
  }

  toogleClass(one, two, tree) {
    one.classList.add('click')
    two.classList.remove('click')
    tree.classList.remove('click')
  }
}
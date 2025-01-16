export class Router{

    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    //retirar o comportamento padrão dos links
    route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({},"", event.target.href)

    this.handle()
    }

    handle(){
    //const pathname = window.location.pathname
    const {pathname} = window.location //aqui ocorre uma dessetruturação
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
    .then(data => data.text())
    .then(html => {
        console.log(html)
        document.querySelector('#app').innerHTML = html
    })
    
    }

}
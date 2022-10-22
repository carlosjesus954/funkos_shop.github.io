// Variables
const carrito__icon = document.getElementById('carrito__icon')
const items__carrito = document.getElementById('items__carrito')
const añadir__Carrito = document.querySelector('#main__section')
const compra__añadir = document.querySelector('.compra__añadir')
const vaciar__carrito = document.querySelector('.compra__vaciar')

const nav__ul = document.querySelector('.nav__ul')

let listaCarrito = [];
// Eventos

carrito__icon.addEventListener('click', mostrarTienda);
añadir__Carrito.addEventListener('click', añadirCarrito)
vaciar__carrito.addEventListener('click', borrarCarrito)
items__carrito.addEventListener('click', eliminarFunko)

nav__ul.addEventListener('click', mostrarFunkos)
// Funciones

function mostrarTienda (){
    items__carrito.classList.toggle("items__carrito-activo")
}
function añadirCarrito(e){
    console.log(e.target);
    e.preventDefault()

    if (e.target.classList.contains('cards__agregar-carrito')) {
        const funkoSeleccionado = e.target.parentElement;

        funkoContenido(funkoSeleccionado)
        console.log(funkoSeleccionado);
    }
    
}

function funkoContenido (funko){
    const funkoInfo = {
        imagen: funko.querySelector("img").src,
        nombre: funko.querySelector("h3").textContent,
        precio: funko.querySelector("h4").textContent,
        id: funko.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    };

    const existe = listaCarrito.some((funko) => funko.id === funkoInfo.id)
    if (existe) {
        const funkos = listaCarrito.map((funkos)=>{
            if (funkos.id === funkoInfo.id) {
                funkos.cantidad++
                return funkos
            }else{
                return funkos
            }
        });
        listaCarrito = [...funkos]
    }else{
        listaCarrito = [...listaCarrito, funkoInfo]
    }
    console.log(listaCarrito);
    insertarFunko()
}

function insertarFunko (){
    limpiarCarrito()
    listaCarrito.forEach((funkos) =>{
        const container = document.createElement('div')
        container.classList.add('añadir__contenido')
        container.innerHTML= `
            <img src="${funkos.imagen}">
            <h3>${funkos.nombre}</h3>
            <h3>${funkos.precio}</h3>
            <h3>${funkos.cantidad}</h3>
            <a href="#" class="borrar-funko" data-id="${funkos.id}"> Eliminar
        `
        compra__añadir.appendChild(container)
    })
}

function eliminarFunko(funko){
    if (funko.target.classList.contains('borrar-funko')) {
        const funkoId = funko.target.getAttribute('data-id');
        listaCarrito= listaCarrito.filter((funko) => funko.id !== funkoId)
        console.log(funkoId);
        console.log(listaCarrito);
    }
    insertarFunko()
}

function borrarCarrito(){
    listaCarrito=[];
    limpiarCarrito()
    console.log(listaCarrito);
}

function limpiarCarrito() {
    while (compra__añadir.firstChild) {
      compra__añadir.removeChild(compra__añadir.firstChild);
    }
  }

function mostrarFunkos(funko){
    const articleOnepiece = document.querySelector('.main-section-article__onePiece')
    const articleNaruto = document.querySelector('.main-section-article__naruto')

    if (funko.target.classList.contains('naruto')) {
        articleOnepiece.classList.toggle('hidden')
        console.log('hola mundo');
        if ("click") {
            articleNaruto.classList.remove('hidden')
        }
        
    }
    if (funko.target.classList.contains('onePiece')) {
        articleNaruto.classList.toggle('hidden')
        console.log('hola mundo');
        if ("click") {
            articleOnepiece.classList.remove('hidden')
        }
    }
}

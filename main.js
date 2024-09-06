import ciudadesEuropeas from "./data.js"

//obtenemos elementos del DOM

let links = document.querySelectorAll('a')
let titulo = document.querySelector('.titulo')
let imagen = document.querySelector('.img')
let subtitulo = document.querySelector('.subtitulo')
let txt = document.querySelector('.txt')
let input = document.getElementById('search')
let btn = document.querySelector('.btn')
let cabecera = document.querySelector('.cabecera')
let imgFondo = document.querySelector('.img-fondo')

//capturamos el evento del input

input.addEventListener('input', (e)=> {
    links.forEach(link =>{
        link.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? link.classList.remove('filtro')
        : link.classList.add('filtro')
    })
})

// resetear la página
btn.addEventListener('click', ()=>{
    location.reload()
})

//iteramos por los enlaces

links.forEach(link => {
    link.addEventListener('click', ()=> {
        //console.log(link.textContent)

        //quitamos el título para seccionar un destino y la imagen de fondo
        cabecera.innerHTML = ''
        imgFondo.src = ''
        // recorremos para quitar la clase activa
        links.forEach(link => {
            link.classList.remove('active')
        })

        // añadimos la clase activa al clickar
        link.classList.add('active')
        //llamamos a la información
        let info = obtenerDatos(link.textContent)

        //mostrar la info en el DOM
        titulo.innerHTML = info.titulo
        imagen.src = info.src
        subtitulo.innerHTML = info.subtitulo
        txt.innerHTML = info.texto
    })
    
});
    
//función para obtener los datos

const obtenerDatos = (link) => {
    let data = {
        'París': ciudadesEuropeas.paris,
        'Roma': ciudadesEuropeas.roma,
        'Londres': ciudadesEuropeas.londres,
        'Amsterdam': ciudadesEuropeas.amsterdam,
        'Barcelona': ciudadesEuropeas.barcelona,
        'Viena': ciudadesEuropeas.viena,
        'Praga': ciudadesEuropeas.praga,
        'Lisboa': ciudadesEuropeas.lisboa,
        'Budapest': ciudadesEuropeas.budapest,
        'Estocolmo': ciudadesEuropeas.estocolmo,
        'Madrid': ciudadesEuropeas.madrid,
        'Dublín': ciudadesEuropeas.dublin,
        'Bruselas': ciudadesEuropeas.bruselas,
        'Oslo': ciudadesEuropeas.oslo,
        'Copenhague': ciudadesEuropeas.copenhague,
        'Edimburgo': ciudadesEuropeas.edimburgo,
        'Helsinki': ciudadesEuropeas.helsinki,
        'Bratislava': ciudadesEuropeas.bratislava,
        'Vilna': ciudadesEuropeas.vilna,
        'Tallin': ciudadesEuropeas.tallin,
    }
    return data[link]
}
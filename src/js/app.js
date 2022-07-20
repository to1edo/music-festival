document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});


function iniciarApp(){
    crearGaleria();
    scrollNav();
    navegacionFija();

};

function navegacionFija() {

    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');


    window.addEventListener('scroll', function() {
        if( sobreFestival.getBoundingClientRect().bottom < 0  ) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i=1;i<=12;i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
        `
        imagen.onclick = function(){
            mostrarimagen(i);
        };

        galeria.appendChild(imagen);
    }

};


function mostrarimagen(i){
    const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/grande/${i}.avif" type="image/avif">
            <source srcset="build/img/grande/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/grande/${i}.jpg" alt="imagen galeria">`

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlayImagen');

    const botonCerrar = document.createElement('div');
    botonCerrar.classList.add('botonCerrar');
    botonCerrar.textContent = 'X';
    overlay.appendChild(botonCerrar);

    const body =  document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar');


    botonCerrar.onclick = function(){
        borrarOverlay(overlay);
        body.classList.remove('fijar');
    }

    overlay.onclick = function(){
        borrarOverlay(overlay);
        body.classList.remove('fijar');
        
    }

};


function borrarOverlay(a){
    a.remove();
};

function scrollNav(){

    const enlaces = document.querySelectorAll('.header_navegacion a');

    enlaces.forEach( enlace =>{
        enlace.addEventListener('click', function(enlace){
            enlace.preventDefault();

            const seccionScroll = enlace.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: 'smooth'});
        })
    });
}
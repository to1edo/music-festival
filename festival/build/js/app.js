function iniciarApp(){crearGaleria(),scrollNav(),navegacionFija()}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival"),n=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),n.classList.add("body-scroll")):(e.classList.remove("fijo"),n.classList.remove("body-scroll"))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("picture");n.innerHTML=`\n            <source srcset="build/img/thumb/${t}.avif" type="image/avif">\n            <source srcset="build/img/thumb/${t}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/thumb/${t}.jpg" alt="imagen galeria">\n        `,n.onclick=function(){mostrarimagen(t)},e.appendChild(n)}}function mostrarimagen(e){const t=document.createElement("picture");t.innerHTML=`\n            <source srcset="build/img/grande/${e}.avif" type="image/avif">\n            <source srcset="build/img/grande/${e}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen galeria">`;const n=document.createElement("DIV");n.appendChild(t),n.classList.add("overlayImagen");const i=document.createElement("div");i.classList.add("botonCerrar"),i.textContent="X",n.appendChild(i);const a=document.querySelector("body");a.appendChild(n),a.classList.add("fijar"),i.onclick=function(){borrarOverlay(n),a.classList.remove("fijar")},n.onclick=function(){borrarOverlay(n),a.classList.remove("fijar")}}function borrarOverlay(e){e.remove()}function scrollNav(){document.querySelectorAll(".header_navegacion a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
//** VARIABLES*/
let linea1=document.getElementById("line1");
let linea2=document.getElementById("line2");
let linea3=document.getElementById("line3");

let img1 = document.getElementById("img-sec1");
let img2 = document.getElementById("img-sec2");
let img3 = document.getElementById("img-sec3");
let img4 = document.getElementById("img-sec4");
let img5 = document.getElementById("img-sec5");

let texto = document.getElementById("texto-galeria");
let enlace = document.getElementById("enlace-galeria")

let galeria 

window.onload =function () {formulario()}
//** FIN VARIABLES*/

///*** lazy loading   de imagenes */
img1.setAttribute("loading","lazy");
img2.setAttribute("loading","lazy");
img2.setAttribute("loading","lazy");
img4.setAttribute("loading","lazy");
img5.setAttribute("loading","lazy");
///*** FIN  lazy loading   de imagenes */


//**GALERIA DE IMAGENES*/
function abrirGaleria(id){
    let titulo=document.getElementById("tit-galeria");
    
    document.getElementById("bg-galeria").style.display="block";
        if (id==1) {
            titulo.innerText="ARQUITECTURA";
            texto.innerHTML=" Personalizá tu espacio con una estética única y armónica. Portones, cerramientos y barandas cortados con plasma a la medida de tu necesidad.<br>Asesoramiento profesional. "
            enlace.innerText="¡Contáctanos!";
            enlace.setAttribute('href','link');
            galeria=1;
            img1.style.backgroundImage="url(../img/pergolas/pergola5.webp)";
            img2.style.backgroundImage="url(../img/pergolas/pergola5.webp)";
            img2.style.backgroundPosition= "50% 20%"
            img3.style.backgroundImage="url(../img/pergolas/pergola4.webp)";
            img4.style.backgroundImage="url(../img/frentes/frentee.webp)";
            img5.style.backgroundImage="url(../img/barandas/baranda1.webp)";


        }
        if (id==2) {
            titulo.innerText="DISEÑO";
            texto.innerHTML = "Conocé nuestra moderna línea de productos especializados en chapa.<br>Decoración, mobiliario, ornamentos para el jardín y mucho más.  "
            let link= document.createElement("a")
            link.setAttribute("href", "https://tienda.plasmartcba.com");
            link.innerText="¡Visitá nuestro e-shop!";
            enlace.innerText="";
            enlace.appendChild(link);
            galeria=2;
            img1.style.backgroundImage="url(../img/disenos/di2.webp)";
            img2.style.backgroundImage="url(../img/disenos/di1.webp)";
            img2.style.backgroundPosition= "50% 78%";
            img3.style.backgroundImage="url(../img/panos/planoblanco.webp)";
            img4.style.backgroundImage="url(../img/carteleria/tigre.webp)";
            img5.style.backgroundImage="url(../img/disenos/diseno.webp)";
       
        }
        if (id==3) {
            titulo.innerText="METALÚRGICA";
            texto.innerHTML = "Servicios de corte y plegado de chapa para aplicaciónes estructurales e industriales.<br> Atención personalizada."
            enlace.innerText="¡Contáctese ahora!";
            galeria=3;
            img1.style.backgroundImage="url(../img/chapa-gruesa/chapa3.webp)";
            img2.style.backgroundImage="url(../img/chapa-gruesa/chapa1.webp)";
            img2.style.backgroundPosition= "50% 25%";
            img3.style.backgroundImage="url(../img/chapa-gruesa/chapa2.webp)";
            img4.style.backgroundImage="url(../img/otros/Trabajoartesanal.webp)";
            img5.style.backgroundImage="url(../img/chapa-gruesa/chapa.webp)";

        }
}
function cerrarGaleria() {
    document.getElementById("bg-galeria").style.display="none"
    document.getElementById("iconos-c").style.display="none";
    document.getElementById("cont-t").style.paddingBottom="20px"
}
function cambiarImagen(id) {
    if (id==2) {
        if (galeria==1) {
            img1.style.backgroundImage="url(../img/pergolas/pergola5.webp)";
        };
        if (galeria==2) {
            img1.style.backgroundImage="url(../img/disenos/di1.webp)";


        }
        if (galeria==3) {
            img1.style.backgroundImage="url(../img/chapa-gruesa/chapa1.webp)";

        }
    }
    if (id==3) {
        if (galeria==1) {
            img1.style.backgroundImage="url(../img/pergolas/pergola4.webp)";
        };
        if (galeria==2) {
            img1.style.backgroundImage="url(../img/panos/planoblanco.webp)";
        }
        if (galeria==3) {
            img1.style.backgroundImage="url(../img/chapa-gruesa/chapa2.webp)";
        }
    }
    if (id==4) {
        if (galeria==1) {
            img1.style.backgroundImage="url(../img/frentes/frentee.webp)";
        };
        if (galeria==2) {
            img1.style.backgroundImage="url(../img/carteleria/tigre.webp)";
            
        }
        if (galeria==3) {
            img1.style.backgroundImage='url(../img/otros/Trabajoartesanal.webp)'
        }
    }
    if (id==5) {
        if (galeria==1) {
            img1.style.backgroundImage="url(../img/barandas/baranda1.webp)";
        };
        if (galeria==2) {
            
            img1.style.backgroundImage="url(../img/disenos/diseno.webp)";

        }
        if (galeria==3) {
            img1.style.backgroundImage="url(../img/chapa-gruesa/chapa.webp)";

        }
    }
    
}

function mostrarContacto(){
    document.getElementById("iconos-c").style.display="block";
    document.getElementById("cont-t").style.paddingBottom="9px"
}
//**FIN GALERIA DE IMAGENES */



//**EFECTO HOVER NAV BAR  */
function efectoSubrayado(id) {
   
    if (id==1) {
       linea1.style.visibility="visible";
       linea1.style.animationName="underline";
       linea1.style.animationDuration="220ms";

    }
    if (id==2) {
        linea2.style.visibility="visible";
        linea2.style.animationName="underline";
        linea2.style.animationDuration="220ms"

    }
    if (id==3) {
        linea3.style.visibility="visible";
        linea3.style.animationName="underline";
        linea3.style.animationDuration="220ms"

    }
}
function quitarSubrayado(id) {
    if (id==1) {
        linea1.style.visibility="hidden";
        linea1.style.animationName="none";
    }
    if (id==2) {
        linea2.style.visibility="hidden";
        linea2.style.animationName="none";
    }
    if (id==3) {
        linea3.style.visibility="hidden";
        linea3.style.animationName="none";
    }
}
//** FIN HOVER NAV BAR */

//** MENU HAMBURGUESA */
function abrirMenu() {
    document.getElementById("contenido-menu").style.display="block";
    document.getElementById("menu").style.display="none";
    document.getElementById("close").style.display="block"
}
function cerrarMenu() {
    document.getElementById("contenido-menu").style.display="none";
    document.getElementById("menu").style.display="block";
    document.getElementById("close").style.display="none"
}


     ///////// EFECTO LABELS FORMULARIO CONTACTO
     function formulario(){
        let label1 = document.getElementById("label-c-1");
        let label2 = document.getElementById("label-c-2");
        let label3 = document.getElementById("label-c-3");
        let label4 = document.getElementById("label-c-4");
        let campo1=document.getElementById("nombre");
        let campo2=document.getElementById("tel");
        let campo3=document.getElementById("email");
        let campo4=document.getElementById("msj");
        campo1.addEventListener("focus",function(){ 
            label1.style.color="rgb(43, 42,42)";
            label1.style.fontSize="80%";
            label1.style.transform="translate3d(0, -110% , 0)"
        });
        campo2.addEventListener("focus",function(){ 
            label2.style.color="rgb(43, 42,42)";
            label2.style.fontSize="80%";
            label2.style.transform="translate3d(0, -110% , 0)"
        });
        campo3.addEventListener("focus",function(){ 
            label3.style.color="rgb(43, 42,42)";
            label3.style.fontSize="80%";
            label3.style.transform="translate3d(0, -110% , 0)"
        });
        campo4.addEventListener("focus",function(){ 
            label4.style.color="rgb(43, 42,42)";
            label4.style.fontSize="80%";
            label4.style.transform="translate3d(0, -110% , 0)"
        });
        

    } 
    ////////FIN EFECTO LABELS
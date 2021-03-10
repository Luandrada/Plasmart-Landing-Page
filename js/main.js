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



//**GALERIA DE IMAGENES*/
function abrirGaleria(id){
    let titulo=document.getElementById("tit-galeria");
    
    document.getElementById("bg-galeria").style.display="block";
        if (id==1) {
            titulo.innerText="ARQUITECTURA";
            texto.innerText="Personalizá tu espacio con una estética única, funcional y armónica. "
            enlace.innerText="¡Contáctanos!";
            enlace.setAttribute('href','link');
            galeria=1;
            img1.style.backgroundImage="url(../img/pergolas/pergola3.jpg)";
            img2.style.backgroundImage="url(../img/pergolas/pergola3.jpg)";
            img3.style.backgroundImage="url(../img/cerramientos-aberturas/aberturas3.jpg)";
            img4.style.backgroundImage="url(../img/frentes/frentee.jpg)";
            img5.style.backgroundImage="url(../img/barandas/baranda1.jpg)";


        }
        if (id==2) {
            titulo.innerText="DISEÑO";
            texto.innerText = "Conocé nuestra moderna linea de productos espacializados en chapa. Decoración, mobiliario. "
            enlace.innerText="¡Visitá nuestro e-shop!";
            enlace.setAttribute('href','link');
            galeria=2;
            img1.style.backgroundImage="url(../img/disenos/20200908_093325.jpg)";
            img2.style.backgroundImage="url(../img/disenos/20200908_093325.jpg)";
            img3.style.backgroundImage="url(../img/panos/planoblanco.jpg)";
            img4.style.backgroundImage="url(../img/carteleria/tigre.jpg)";
            img5.style.backgroundImage="url(../img/disenos/diseno.jpg)";
       
        }
        if (id==3) {
            titulo.innerText="METALÚRGICA";
            texto.innerText = " Servicios de corte y plegado de chapa para aplicación industrial. Atención personalizada."
            enlace.innerText="¡Contáctese ahora!";
            galeria=3;
            img1.style.backgroundImage="url(../img/otros/oxi.jpg)";
            img2.style.backgroundImage="url(../img/otros/oxi.jpg)";
            img3.style.backgroundImage="url(../img/chapa-gruesa/2.png)";
            img4.style.backgroundImage="url(../img/otros/Trabajoartesanal.jpg)";
            img5.style.backgroundImage="url(../img/chapa-gruesa/chapa.jpg)";

        }
}
function cerrarGaleria() {
    document.getElementById("bg-galeria").style.display="none"

}
function cambiarImagen(id) {
    if (id==2) {
        if (galeria==1) {
            img1.style.backgroundImage="url(../img/pergolas/pergola3.jpg)";
        };
        if (galeria==2) {
            img1.style.backgroundImage="url(../img/disenos/20200908_093325.jpg)";


        }
        if (galeria==3) {
            img1.style.backgroundImage="url(../img/otros/oxi.jpg)";

        }
    }
    if (id==3) {
        if (galeria==1) {
            img1.style.backgroundImage="url(../img/cerramientos-aberturas/aberturas3.jpg)";
        };
        if (galeria==2) {
            img1.style.backgroundImage="url(../img/panos/planoblanco.jpg)";
        }
        if (galeria==3) {
            img1.style.backgroundImage="url(../img/chapa-gruesa/2.png)";
        }
    }
    if (id==4) {
        if (galeria==1) {
            img1.style.backgroundImage="url(../img/frentes/frentee.jpg)";
        };
        if (galeria==2) {
            img1.style.backgroundImage="url(../img/carteleria/tigre.jpg)";
            
        }
        if (galeria==3) {
            img1.style.backgroundImage='url(../img/otros/Trabajoartesanal.jpg)'
        }
    }
    if (id==5) {
        if (galeria==1) {
            img1.style.backgroundImage="url(../img/barandas/baranda1.jpg)";
        };
        if (galeria==2) {
            
            img1.style.backgroundImage="url(../img/disenos/diseno.jpg)";

        }
        if (galeria==3) {
            img1.style.backgroundImage="url(../img/chapa-gruesa/chapa.jpg)";

        }
    }
    
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
     
        let campo1=document.getElementById("nombre");
        let campo2=document.getElementById("email");
        let campo3=document.getElementById("msj");
        
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
        

    } 
    ////////FIN EFECTO LABELS
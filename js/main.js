//** VARIABLES*/
let linea1=document.getElementById("line1");
let linea2=document.getElementById("line2");
let linea3=document.getElementById("line3");

let img1 = document.getElementById("img-sec1");
let img2 = document.getElementById("img-sec2");
let img3 = document.getElementById("img-sec3");
let img4 = document.getElementById("img-sec4");
let img5 = document.getElementById("img-sec5");

let galeria 
//** FIN VARIABLES*/



//**GALERIA DE IMAGENES*/
function abrirGaleria(id){
    let titulo=document.getElementById("tit-galeria");
    
    document.getElementById("bg-galeria").style.display="block";
        if (id==1) {
            titulo.innerText="DISEÑO";
            galeria=1;
            img1.style.backgroundImage="url(../img/disenos/20200908_093325.jpg)";
            img2.style.backgroundImage="url(../img/disenos/20200908_093325.jpg)";
            img3.style.backgroundImage="url(../img/panos/planoblanco.jpg)";
            img4.style.backgroundImage="url(../img/carteleria/tigre.jpg)";
            img5.style.backgroundImage="url(../img/disenos/diseno.jpg)";

        }
        if (id==2) {
            titulo.innerText="CHAPA GRUESA";
            galeria=2;
            img1.style.backgroundImage="url(../img/chapa-gruesa/chapa.jpg)";
            img2.style.backgroundImage="url(../img/chapa-gruesa/chapa.jpg)";
            img3.style.backgroundImage="url(../img/chapa-gruesa/2.png)";
            img4.style.backgroundImage="url(../img/chapa-gruesa/chapa3.jpg)";
            img5.style.backgroundImage="url(../img/chapa-gruesa/chapa-gruesa.jpg)";
        }
        if (id==3) {
            titulo.innerText="OTROS";
            galeria=3;
            img1.style.backgroundImage="url(../img/otros/flame-cutting-process-by-oxygen-acetylene-cutting-machine_73899-1185.jpg)";
            img2.style.backgroundImage="url(../img/otros/flame-cutting-process-by-oxygen-acetylene-cutting-machine_73899-1185.jpg)";
            img3.style.backgroundImage="url(../img/otros/oxi.jpg)";
            img4.style.backgroundImage="url(../img/otros/Trabajoartesanal.jpg)";
            img5.style.backgroundImage="url()";
        }
        if (id==4) {
            titulo.innerText="ARQUITECTURA";
            galeria=4;
            img1.style.backgroundImage="url(../img/barandas/baranda1.jpg)";
            img2.style.backgroundImage="url(../img/barandas/baranda1.jpg)";
            img3.style.backgroundImage="url(../img/pergolas/pergola1.jpg)";
            img4.style.backgroundImage="url(../img/cerramientos-aberturas/abertura1.jpg)";
            img5.style.backgroundImage="url(../img/frentes/frente3.jpg)";
        }
}
function cerrarGaleria() {
    document.getElementById("bg-galeria").style.display="none"

}
function cambiarImagen(id) {
    if (id==2) {
        if (galeria==1) {
            img1.style.backgroundImage="url(../img/disenos/20200908_093325.jpg)";
        };
        if (galeria==2) {
            img1.style.backgroundImage="url(../img/chapa-gruesa/chapa.jpg)";

        }
        if (galeria==3) {
            img1.style.backgroundImage="url(../img/otros/flame-cutting-process-by-oxygen-acetylene-cutting-machine_73899-1185.jpg)";

        }
        if (galeria==4) {
            img1.style.backgroundImage="url(../img/barandas/baranda1.jpg)";
        }
    }
    if (id==3) {
        if (galeria==1) {
            img1.style.backgroundImage="url(../img/panos/planoblanco.jpg)";
        };
        if (galeria==2) {
            img1.style.backgroundImage="url(../img/chapa-gruesa/2.png)";
        }
        if (galeria==3) {
            img1.style.backgroundImage="url(../img/otros/oxi.jpg)";
        }
        if (galeria==4) {
            img1.style.backgroundImage="url(../img/pergolas/pergola1.jpg)";

        }
    }
    if (id==4) {
        if (galeria==1) {
            img1.style.backgroundImage="url(../img/carteleria/tigre.jpg)";
        };
        if (galeria==2) {
            img1.style.backgroundImage="url(../img/chapa-gruesa/chapa3.jpg)";
        }
        if (galeria==3) {
            img1.style.backgroundImage="url(../img/otros/Trabajoartesanal.jpg)";
        }
        if (galeria==4) {
            img1.style.backgroundImage="url(../img/cerramientos-aberturas/abertura1.jpg)";
        }
    }
    if (id==5) {
        if (galeria==1) {
            img1.style.backgroundImage="url(../img/disenos/diseno.jpg)";
        };
        if (galeria==2) {
            img1.style.backgroundImage="url(../img/chapa-gruesa/chapa-gruesa.jpg)";

        }
        if (galeria==3) {
            
        }
        if (galeria==4) {
            img1.style.backgroundImage="url(../img/frentes/frente3.jpg)";

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
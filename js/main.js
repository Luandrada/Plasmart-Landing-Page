//** VARIABLES*/
let linea1=document.getElementById("line1");
let linea2=document.getElementById("line2");
let linea3=document.getElementById("line3");
//** FIN VARIABLES*/



//**GALERIA DE IMAGENES*/
function abrirGaleria(){
document.getElementById("bg-galeria").style.display="block"
}
function cerrarGaleria() {
    document.getElementById("bg-galeria").style.display="none"

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
const tamañoEscoger=document.getElementById('tamaño');
const saborEscoger=document.getElementById('sabor');
const botonComprar=document.querySelector('.boton-comprar');

let precioCalcular=document.getElementById('precio');


cerrarPedido.addEventListener('click',()=>{
    mainPedido.classList.remove('abrir');
    fondo.classList.remove('cerrarfondo');
    precioCalcular.textContent="s/00.00";
    tamañoEscoger.value="no";
    saborEscoger.value="no";
});
seleccion();

let tamañoSeleccionado="no";
let saborSeleccionado="no";
let precio=0;
let cantidad=1;

function seleccion(){

    tamañoEscoger.addEventListener('change',()=>{
        tamañoSeleccionado=tamañoEscoger.value;
        /*console.log(tamañoSeleccionado);*/

        /*alert(tituloPedir.textContent)*/

        if(tituloPedir.textContent==="Glass Cake"){
            if(tamañoSeleccionado==="pequeño"){
                precio=15;
            }
            else{
                precio=20
            }
            precioCalcular.textContent=`s/${precio}.00`;

        }

        if(tituloPedir.textContent==="Glass Cake x2"){
            if(tamañoSeleccionado==="pequeño"){
                precio=20;
            }
            else{
                precio=30
            }
            precioCalcular.textContent=`s/${precio}.00`;
        }

        if(tituloPedir.textContent==="Glass Cake x4"){
            if(tamañoSeleccionado==="pequeño"){
                precio=40;
            }
            else{
                precio=60
            }
            precioCalcular.textContent=`s/${precio}.00`;
        }
    });

    saborEscoger.addEventListener('change',()=>{
        saborSeleccionado=saborEscoger.value;
        /*console.log(saborSeleccionado);*/
    });



}


botonComprar.addEventListener('click',()=>{
    console.log(tamañoSeleccionado);
    console.log(saborSeleccionado);
    console.log(precio)

    if(tamañoSeleccionado=="no"){
        alert("Escoger un tamaño");
    }
    if(saborSeleccionado=="no"){
        alert("Escoger un sabor");
    }

    if(tamañoSeleccionado!="no" && saborSeleccionado!="no"){
        mainPedido.classList.remove('abrir');
        fondo.classList.remove('cerrarfondo');
        precioCalcular.textContent="s/00.00";
        tamañoEscoger.value="no";
        saborEscoger.value="no";

    }


});
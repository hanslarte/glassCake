const mainImg=document.getElementById('mainImg');

let principalImg=document.querySelector('.principalImg');

let cambioImg=document.querySelectorAll('.cambioImg');

let mainPedido=document.querySelector('.main-pedido');

const cerrarPedido=document.getElementById('cerrarPedido');

let imgPedir=document.getElementById('imgPedir');

let tituloPedir=document.getElementById('tituloPedir');

let pedir =document.querySelectorAll('.pedir');

const fondo = document.querySelector('.fondo');

for(let i=0;cambioImg.length>i;i++){
    cambioImg[i].addEventListener('click',(e)=>{
        let imagen=cambioImg[i].src;
        principalImg.src=imagen;
    });
}

function pedido(){
    for(let i=0;pedir.length>i;i++){
        pedir[i].addEventListener('click',(e)=>{
    
            let imgDelPedido=e.target.parentElement.firstElementChild.src;
            let tituloDelPedido=e.target.previousElementSibling.textContent;
    
            tituloPedir.textContent=`${tituloDelPedido}`;
    
            imgPedir.src=imgDelPedido;
    
            mainPedido.classList.add('abrir');
            fondo.classList.add('cerrarfondo');
        });
    }
}
pedido();




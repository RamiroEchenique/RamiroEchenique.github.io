var imagenes = ['imagenes/imag1.jpeg','imagenes/imag2.jpeg','imagenes/imag3.jpeg','imagenes/imag4.jpeg'],
    cont = 0;

function carrousel (contenedor){
    contenedor.addEventListener('click',e =>{
        let atras = contenedor.querySelector('.atras'),
            adelante=contenedor.querySelector('.adelante'),
            img=contenedor.querySelector('img'),
            tgt = e.target;

       if(tgt == atras){
            if(cont>0){
                img.src=imagenes[cont-1];
                cont--;
            }else{
                img.src = imagenes[imagenes.length-1]; /* es para que sea circular y coloca la ultima imagen*/ 
                cont = imagenes.length-1;
            }
       }else if(tgt == adelante){
            if(cont<imagenes.length-1){
                img.src=imagenes[cont+1];
                cont++;
            }else{
                img.src = imagenes[0]; /* vuelve a la posicion cero*/ 
                cont = 0;
            }
       }     
    });

}

document.addEventListener("DOMContentLoaded",() =>{
    let contenedor = document.querySelector('.contenedor');
    carrousel(contenedor);
});
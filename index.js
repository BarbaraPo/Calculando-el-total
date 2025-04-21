 let precio = 400000;
 let cantidad = 0


 const valorSpan =document.querySelector ('.valor-total');
 const cantidadSpan= document.querySelector ('.cantidad');

 const precioSpan = document.querySelector(".precio-inicial");
 precioSpan.innerHTML = precio

 function actualizarVista() {
    cantidadSpan.innerHTML = cantidad
    valorSpan.innerHTML = precio * cantidad
 }

 function aumentar () {
    cantidad++;
    actualizarVista ();
 }

 function disminuir () {
    cantidad --; 
    actualizarVista ();
 }

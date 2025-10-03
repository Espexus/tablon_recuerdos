let boton = document.getElementById("botonAbrir");
let formulario = document.getElementById("formulario")
boton.addEventListener("click", ()=> {
    if(formulario.classList.contains("oculto")){
        formulario.classList.remove("oculto");
    } else {
        formulario.classList.add("oculto");
    }
})
(function(){

    let formulario = document.getElementById("formulario");
    
    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
        if(!formulario.titulo.value || !formulario.descripcion.value){
            alert("llena todos los campos");
            return;
        }
    
        let publicaciones = JSON.parse(localStorage.getItem("publicaciones")) || [];
        let date = new Date();
        let dia = date.getDate();
        let mes = date.getMonth() +1;
        let year = date.getFullYear();
        let fechaObtenida = `${dia}-${mes}-${year}`
    
        const publicacion = {
            titulo: formulario.titulo.value,
            descripcion: formulario.descripcion.value,
            fecha: fechaObtenida
        }
    
        publicaciones.push(publicacion);
        localStorage.setItem("publicaciones", JSON.stringify(publicaciones))
        console.log(publicaciones);
        formulario.reset();
        window.location.reload();
    });
    
})()
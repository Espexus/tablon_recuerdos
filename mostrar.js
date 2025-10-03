(function(){
    document.addEventListener("DOMContentLoaded", ()=> {
        let publicaciones = JSON.parse(localStorage.getItem("publicaciones")) || [];
        
        if(publicaciones.length === 0) {
            alert("actualmente no hay publicaciones")
        } else {
            const contenedor = document.getElementById("contenedor");
            publicaciones.forEach(publicacion => {
                let tarjeta = document.createElement("div");
                tarjeta.classList.add("tarjeta");

                let encabezado = document.createElement("div");
                encabezado.classList.add("encabezado");
                tarjeta.appendChild(encabezado);

                let foto = document.createElement("img");
                foto.src = "naruto.jpg";
                foto.classList.add("foto");
                encabezado.appendChild(foto)
    
                let fecha = document.createElement("p")
                fecha.classList.add("fecha");
                fecha.textContent = publicacion.fecha
                encabezado.appendChild(fecha);

                let titulo = document.createElement("p")
                titulo.classList.add("titulo");
                titulo.textContent = publicacion.titulo
                tarjeta.appendChild(titulo);

                let descripcion = document.createElement("p")
                descripcion.classList.add("descripcion");
                descripcion.textContent = publicacion.descripcion
                tarjeta.appendChild(descripcion);

                contenedor.appendChild(tarjeta);
                
            });
            
        }
    })
})();
// Funtion para cambiar la luz

function cambiarLuz(color){

    // Apagar todas las luces
    document.getElementById("rojo").className = "luz bg-secondary";
    document.getElementById("amarillo").className = "luz bg-secondary";
    document.getElementById("verde").className = "luz bg-secondary";

    // prender la luz seleccionada

    if(color === "rojo"){
        document.getElementById("rojo").className = "luz bg-danger";
    }

    if(color === "amarillo"){
        document.getElementById("amarillo").className = "luz bg-warning";
    }

    if(color === "verde"){
        document.getElementById("verde").className = "luz bg-success";
    }

}


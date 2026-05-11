
// DOBLE DE UN NUMERO

function calcularDoble() {

    // Obtener valor del input
    let numero = document.getElementById("numero").value;

    // Calcular doble
    let doble = numero * 2;

    // Mostrando resultado
    document.getElementById("resultadoDoble").textContent =  "El doble es: " + doble;

}

// NuMERO PALNDROMO

function verificarPalindromo() {

    let numero = document.getElementById("palindromo").value;

    // Invertir numero
    let invertido = numero.split("").reverse().join("");

    // Comparar

    if (numero === invertido) {

        document.getElementById("resultadoPalindromo").textContent =" Es palindromo ";

    } else {

        document.getElementById("resultadoPalindromo").textContent = " No es palindromo";

    }

}


// CONTADOR

// Variable global
let contador = 0;

function incrementarContador() {

    contador++;

    document.getElementById("contador").textContent = contador;

}

// LISTA DE TAREAS


function agregarTarea() {

    // Obtener texto
    let tarea = document.getElementById("tarea").value;

    // Eliminar espacios
    tarea = tarea.trim();

    // Validar que no ste vacio
    if (tarea === "") {

        alert("Ingrese una tarea");

        return;

    }

    // Crear elemento li
    let li = document.createElement("li");

    // Agregar texto
    li.textContent = tarea;

    // Agregar a la lista

    document.getElementById("listaTareas").appendChild(li);

    // Limpiar input

    document.getElementById("tarea").value = "";

}
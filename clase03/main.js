// Modificacion de atributos y propiedades.

const input = document.querySelector("input");
console.log(input.value) // Nombre

input.value = "Apellido";
console.log(input.value) // Apellido

/* 
Nota: Los atributos del documento HTML no cambian luego de modificarse a traves de javascript.
Esto es porque los atributos reflejan el estado inicial del documento, aunque el objeto dentro del 
DOM ya no sea la misma que se modifico.
*/

// Modificando texto

const title = document.querySelector("#app-title");

title.textContent = "Nuevo texto"; // Forma 1

title.innerText = "Este es otro text"; // Forma 2
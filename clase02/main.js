/* 

Formas de manipular los elementos del DOM.

    * Por su ID.
    * Por su clase.
    * Por su etiqueta.
    * Por un atributo en particulas.

Las consultas realizadas por los metodos 'getElement' son mas rapidas en comparacion con las
consultas realizadas con 'querySelector'.

*/

document.getElementById("app-title");

document.querySelector("#app-title"); // Siempre retorna el primer elemento que encuentre que cumpla con la condicion.

document.getElementsByClassName("menu-items"); // Retorna los elementos HTML que compartan la clase especificada.

document.getElementsByTagName("p"); // Retonar los elementos HTML que cumplan con lo especificado.

document.querySelectorAll(".menu-items"); // Retorna una lista de nodos que cumplan con la condicion.

/* 

Traversing the DOM

Formas de navegar a traves del DOM, desde un componente hijo hasta su componente padre y viceversa.

*/

// Desde elementos Padre a sus hijos.

const parent = document.getElementById("parent");
console.log(parent); // Elemento padre.

const childrens = parent.children;
console.log(childrens) // Coleccion de los hijos que contiene el padre.

const firstChild = parent.firstElementChild;
console.log(firstChild); // Primer elemento hijo del elemento Padre.

const lastChild = parent.lastElementChild;
console.log(lastChild); // Ultimo elemento hijo del elemento Padre.

const previousSibling = parent.previousElementSibling;
console.log(previousSibling); // El elemento previo en la estructura del HTML.

const nextSibling = parent.nestElementSibling;
console.log(nextSibling); // El siguiente elemento en la estructura del HTML.


// Desde elementos Hijos a su Padre

const children = document.querySelector("li");
console.log(children);

const parentNode = children.parentNode; // Retorna el nodo padre.

const grandParent = children.parentElement; // Retorna el nodo padre.

const lastParent = children.closest("menu"); // Retorna el primer elemento antecesor que consida con la condicion.
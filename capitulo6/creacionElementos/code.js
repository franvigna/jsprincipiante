const contenedor = document.querySelector(".contenedor");

//crear elementos

/* const fragmento = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
    const item = document.createElement("LI");
    item.textContent = "Este es un item de la lista";
    // const textoDelItem = document.createTextNode("Este es un item de la lista")
    // item.appendChild(textoDelItem);
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento); */

// chills
/* const primerHijo = contenedor.firstElementChild;
const ultimoHijo = contenedor.lastElementChild;
const nodos = contenedor.childNodes;
const hijos = contenedor.children;

console.log(primerHijo);
console.log(ultimoHijo);
console.log(nodos);
console.log(hijos);

for (const hijo of hijos) {
    console.log(hijo);
} */

// Metodos chills

const parrafo = document.createElement("P");
const h2_nuevo = document.createElement("H2");

h2_nuevo.textContent = "Título nuevo";
parrafo.textContent = "párrafo";

const h2_antiguo = document.querySelector(".h2");

// contenedor.replaceChild(h2_nuevo,h2_antiguo);
// contenedor.removeChild(h2_antiguo);

// let respuesta = contenedor.hasChildNodes();
/* if (respuesta){
    document.write('El elemento tiene hijos');
}else{
    document.write('El elemento no tiene hijos');

} */

/* let respuesta = h2_antiguo.parentElement;

console.log(respuesta); */


// Sibling (hermanos)
console.log(h2_antiguo.nextElementSibling);
console.log(h2_antiguo.previousElementSibling);
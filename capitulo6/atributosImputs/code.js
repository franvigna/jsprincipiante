const titulo = document.querySelector('.titulo');

// document.write(input.className);
// document.write(input.value);
// input.type = 'range';
// input.minLength = "4";
// input.placeholder = "hola pa";

//Atributos Style
titulo.style.color = "#999";
titulo.style.backgroundColor = "#ffff99";
titulo.style.textAlign = "center";
titulo.style.padding = "22px 10px";
titulo.style.border = "10px solid #d29";
//Atributos Class
titulo.classList.add('hidden');
titulo.classList.remove('hidden');
let valor = titulo.classList.item(0 );

// document.write(valor);
let nombreClase = "grande";
let contiene = titulo.classList.contains(nombreClase);

// if(contiene) {
//     document.write("La clase "+nombreClase+" existe");
//     titulo.classList.remove(nombreClase);
// }else{
//     document.write("La clase "+nombreClase+" no existe");
//     titulo.classList.add(nombreClase);
// }

titulo.classList.toggle(nombreClase);
titulo.classList.replace(nombreClase, "chico");

let resultado = titulo.textContent;
let resultado2 = titulo.innerHTML;

document.write(resultado+"<br>");
alert(resultado2+"<br>");
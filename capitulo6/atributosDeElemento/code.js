const rangoEtario = document.querySelector(".rangoEtario");

let valorDelAtributo = rangoEtario.setAttribute('type', 'text');

let atributoEliminado = rangoEtario.removeAttribute('type', 'range');

document.write("<br>" + valorDelAtributo);
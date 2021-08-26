// const boton = document.querySelector(".send-button");
// let valorAntiguo = boton.value;
// boton.value = valorAntiguo.toUpperCase();




const contenedor = document.querySelector(".flex-container");

let contador = 0;
function crearLlave(nombre,modelo,precio){
    contador++;
    img = "<img class='imagen-llave' src='llave.png'>"
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id="${modelo}">${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    
    return[img,nombre,modelo,precio];
}


let documentFragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.random()*10+30;
    const llave = crearLlave(`Llave ${i}`,`Modelo: ${modeloRandom}`, precioRandom.toFixed(2));
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
            document.querySelector(".key-data").value = modeloRandom;
    });
    div.tabIndex = i;
    div.classList.add(`flex-item`, `item-${i}`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
    
}

contenedor.appendChild(documentFragment);
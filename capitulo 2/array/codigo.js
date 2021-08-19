pc = {
    nombre: 'PCfran',
    procesador: 'Intel Core I5',
    ram: "16GB",
    espacio: "1TB"
}

let nombre = pc['nombre'];
let procesador = pc['procesador'];
let ram = pc['ram'];
let espacio = pc['espacio'];


frase = `El nombre de mi PC es: ${nombre} <br>
        el procesador es: ${procesador} <br>
        la memoria ram es: ${ram} <br>
        el espacio en el disco es de ${espacio}`;

document.write(frase);
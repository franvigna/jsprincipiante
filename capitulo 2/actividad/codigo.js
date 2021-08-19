let free = false;

const validarCliente = (time) =>{
    let edad = prompt('¿Cúal es tu edad?');
    if(edad >= 18) {
        if (time >= 2 && time < 7 && !free) {
            alert('Podes pasar gratis');
            free = true;
        }else{
            alert('podes pasar, pero tenes que pagar la entrada porque son las '+ time);
        }
    
    }else{
        alert('mira papu, sos menor de edad anda a tomar la lechita');
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(1);
validarCliente(2);
validarCliente(4);
validarCliente(5);
validarCliente(7);
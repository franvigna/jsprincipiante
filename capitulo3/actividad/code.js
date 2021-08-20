class Celular{
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    prenderApagar() {
        if(this.encendido == false){
            alert('Celular Prendido');
            encendido = true;
        }else{
            alert('El celular se esta apagando');
            encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true ) {
            alert('reiniciando el Celular');
        }else{
            alert('El celular esta apagado');
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolucion de cámara: <b>${this.resolucionDeCamara}</b><br>
        Memoria RAM: <b>${this.memoriaRam}</b><br>
        `;
    }
}

class CelularAltaGama extends Celular {
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert('Estas grabando en camara lenta');
    }
    reconocimientoFacial(){
        alert('Vamos a iniciar un reconocimiento facial');
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de segunda cámara: <b>${this.resolucionDeCamaraExtra}</b><br></br>`;

    }
}


// const celular1 = new Celular('negro', '150g', '5"', 'hd', '1GB');
// const celular2 = new Celular('rojo', '200g', '5.4"', 'full hd', '2GB');
// const celular3 = new Celular('blanco', '170g', '6"', 'full hd', '2GB');

// celular1.prenderApagar();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.apagar();

const celular1 = new CelularAltaGama('negro', '150g', '6"', '4k', '3GB', 'full hd');
const celular2 = new CelularAltaGama('rojo', '200g', '6.4"', '4k', '4GB', 'hd' );
 

document.write(`
    ${celular1.infoAltaGama()} <br>
    ${celular2.infoAltaGama()} <br>
`)



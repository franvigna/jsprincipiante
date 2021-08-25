class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir(){
        if(this.iniciada == false && this.instalada == true ){
            this.iniciada = true;
            alert('App encendida');
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true ){
            this.iniciada = false;
            alert('App apagada');
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert('App instalada correctamente');
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert('App desinstalada correctamente');
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }

}

const app1 = new App('16000', '4 estrellas', '900MB');
const app2 = new App('1000', '4.5 estrellas', '400MB');
const app3 = new App('6000', '4.8 estrellas', '100MB');
const app4 = new App('23000', '5 estrellas', '1GB');
const app5 = new App('900', '3.7 estrellas', '250MB');
const app6 = new App('180', '5 estrellas', '522MB');
const app7 = new App('42981', '2.9 estrellas', '723MB');

// app1.instalar();
// app1.abrir();
// app1.cerrar();
// app1.desinstalar();

document.write(app1.appInfo() + '<br>');
document.write(app2.appInfo() + '<br>');
document.write(app3.appInfo() + '<br>');
document.write(app4.appInfo() + '<br>');
document.write(app5.appInfo() + '<br>');
document.write(app6.appInfo() + '<br>');
document.write(app7.appInfo() + '<br>');



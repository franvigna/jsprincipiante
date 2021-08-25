class Calculadora{
    sumar(n1,n2){
        return parseInt(n1) + parseInt(n2);
        }
    restar(n1,n2){
        return parseInt(n1) - parseInt(n2);
        }
    multiplicar(n1,n2){
        return parseInt(n1) * parseInt(n2);
        }
    dividir(n1,n2){
        return parseInt(n1) / parseInt(n2);
        }
    potenciar(n1,exp){
        return n1**exp
    }
    raizCuadrada(n1){
        return Math.sqrt(n1);
    }
    raizCubica(n1){
        return Math.cbrt(n1);
    }

}

const calculadora = new Calculadora();

alert("¿Qué operacion desea realizar?");
let operacion = prompt("1: suma, 2: resta, 3: multiplicación, 4: división, 5: potenciar, 6:Raíz cuadrada, 7:Raíz cúbica");

if(operacion == 1 ){
    let num1 = prompt("Primer número para sumar");
    let num2 = prompt("Segundo número para sumar");
    resultado = calculadora.sumar(num1,num2);
    alert("Tu resultado es " + resultado);
}else if(operacion == 2 ){
    let num1 = prompt("Primer número para restar");
    let num2 = prompt("Segundo número para restar");
    resultado = calculadora.restar(num1,num2);
    alert("Tu resultado es " + resultado);
}else if(operacion == 3 ){
    let num1 = prompt("Primer número para multiplicar");
    let num2 = prompt("Segundo número para multiplicar");
    resultado = calculadora.multiplicar(num1,num2);
    alert("Tu resultado es " + resultado);
}else if(operacion == 4 ){
    let num1 = prompt("Primer número para dividir");
    let num2 = prompt("Segundo número para dividir");
    resultado = calculadora.dividir(num1,num2);
    alert("Tu resultado es " + resultado);
}else if(operacion == 5 ){
    let num1 = prompt("Número a potenciar");
    let num2 = prompt("Exponente");
    resultado = calculadora.potenciar(num1,num2);
    alert("Tu resultado es " + resultado);
}else if(operacion == 6 ){
    let num1 = prompt("Raíz cuadrada de:");
    resultado = calculadora.raizCuadrada(num1);
    alert("Tu resultado es " + resultado);
}else if(operacion == 7 ){
    let num1 = prompt("Raiz cúbica de:");
    resultado = calculadora.raizCubica(num1);
    alert("Tu resultado es " + resultado);
}else{
    alert("no se ha encontrado la operacion");
}



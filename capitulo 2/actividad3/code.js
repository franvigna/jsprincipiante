const sumar = (n1,n2) => {
    return parseInt(n1) + parseInt(n2);
}
const restar = (n1,n2) => {
    return parseInt(n1) - parseInt(n2);
}
const multiplicar = (n1,n2) => {
    return parseInt(n1) * parseInt(n2);
}
const dividir = (n1,n2) => {
    return parseInt(n1) / parseInt(n2);
}

alert("¿Qué operacion desea realizar?");
let operacion = prompt("1: suma, 2: resta, 3: multiplicación , 4: división");

if(operacion == 1 ){
    let num1 = prompt("Primer número para sumar");
    let num2 = prompt("Segundo número para sumar");
    resultado = sumar(num1,num2);
    alert("Tu resultado es " + resultado);
}else if(operacion == 2 ){
    let num1 = prompt("Primer número para restar");
    let num2 = prompt("Segundo número para restar");
    resultado = restar(num1,num2);
    alert("Tu resultado es " + resultado);
}else if(operacion == 3 ){
    let num1 = prompt("Primer número para multiplicar");
    let num2 = prompt("Segundo número para multiplicar");
    resultado = multiplicar(num1,num2);
    alert("Tu resultado es " + resultado);
}else if(operacion == 4 ){
    let num1 = prompt("Primer número para dividir");
    let num2 = prompt("Segundo número para dividir");
    resultado = dividir(num1,num2);
    alert("Tu resultado es " + resultado);
}else{
    alert("no se ha encontrado la operacion");
}



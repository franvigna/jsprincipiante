let trabajo = 240;
let estudio = 100;
let trabajosPracticos = 100;
let tareasDomesticas = 30;
let descanso = 30;

console.log("TAREAS");

for (let i = 1; i <= 14; i++) {
    if(i==1){
        console.group("Semana 1")
    }
    console.groupCollapsed("día "+ i);
    console.log(trabajo + " minutos de trabajo");
    console.log(descanso + " minutos de descanso");
    console.log(estudio + " minutos de estudio");
    console.log(trabajosPracticos + " minutos para hacer trabajos prácticos");
    console.log(tareasDomesticas + " minutos de tareas domesticas");
    console.groupEnd();
    if(i==7){
        console.groupEnd()
        console.groupCollapsed("Semana 2")
    }
}
console.groupEnd();
console.groupEnd();
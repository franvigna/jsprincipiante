const materias = {
    fisica: [90,6,3],
    matematica: [84,8,2],
    logica: [92,8,4],
    quimica: [96,8,4],
    calculo: [91,6,3],
    programacion: [79,7,4],
    biologia: [75,9,2],
    bbdd: [98,9,6],
    algebra: [100,10,4],
}

const aprobo = ()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(`${materia}`);

        if(asistencias >= 90 && promedio >= 7 && trabajos >=3){
            console.log("%cAprobado", "background-color:green;color:white;padding:5px 10px;border-radius:20px");
        }else{
            console.log("%cDesaprobado", "background-color:red;color:white;padding:5px 10px;border-radius:20px");
        }
    }
}

aprobo();
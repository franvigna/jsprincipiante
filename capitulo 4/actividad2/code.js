const obtenerInformacion = (materia) => {
    materias = {
        fisica: ['perez', 'pedro','pepito','cofla','maria'],
        programacion:['Rodriguez', 'pedro','juan','pepito'],
        logica:['Lopez', 'pedro','juan','pepito','cofla','maria'],
        quimica:['Dalto', 'pedro','juan','pepito','cofla','maria']
    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    }else{
        return materias;
    }
}

const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if(informacion !== false){
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
    
        document.write(`El profesor de ${informacion[1]} es: <b>${profesor}</b><br>
        Los alumnos son: <b> ${alumnos} </b> <br><br>
        `);
    }
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(' ' +info );
        }
    }
    return `<b> ${alumno} </b> esta en ${cantidadTotal} clases <b>${clasesPresentes}</b>
    `;
}

mostrarInformacion('fisica');
mostrarInformacion('quimica');
mostrarInformacion('programacion');
mostrarInformacion('logica');

document.write(cantidadDeClases('cofla'));
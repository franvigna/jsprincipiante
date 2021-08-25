
let materias = {
    fisica: ['perez', 'pedro','pepito','cofla','maria'],
    programacion:['Rodriguez', 'pedro','juan','pepito'],
    logica:['Lopez', 'pedro','juan','pepito','cofla','maria'],
    quimica:['Dalto', 'pedro','juan','pepito','cofla','maria']
}

const inscribir = (alumno, materia)=>{
    personas = materias[materia];
    if(personas.length >= 21 ){
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas <br>`);
    }else{
        personas.push(alumno);
        if(materia == 'fisica'){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica'],
            }
        }
        else if(materia == 'programacion'){
            materias = {
                fisica: materia['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica'],
            }
        }
        else if(materia == 'logica'){
            materias = {
                fisica: materia['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica'],
            }
        }
        else if(materia == 'quimica'){
            materias = {
                fisica: materia['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas,
            }
        }
        document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} <br>`);
    }
}
document.write(materias['fisica'] + '<br>');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
document.write(materias['fisica'] + '<br>');
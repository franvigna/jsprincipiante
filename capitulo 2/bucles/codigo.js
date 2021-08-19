array1 = ['maria', 'josefa', 'roberta'];
array2 = ['pedro', 'marcelo', array1, 'josefina'];

forCurso:
for(let array in array2){
    if(array == 2){
        for(let array of array1){
            
            if(array == 'maria'){
                continue;
            }
            document.write(array + '<br>'); 
        }
    }else{
        document.write(array2[array] + '<br>');
    }

}
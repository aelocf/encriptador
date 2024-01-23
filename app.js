let palabra="hola a todos";
//convertir un string en array
let arreglo= palabra.split('');

let palabraSecreta=arreglo;
//convertimos un array en string
let desencriptado= palabraSecreta.toString(arreglo).replace(/,/g, '');
console.log(arreglo);
console.log(desencriptado);

//recorrer el array para crear encriptar
for (let i = 0; i < arreglo.length; i++) {
    if(arreglo[i]=="a"){
        arreglo[i]="ai";
        console.log(arreglo);
    }
    if(arreglo[i]=="e"){
        arreglo[i]="enter";
    }
    if(arreglo[i]=="i"){
        arreglo[i]="imes";
        console.log(arreglo);
    }
    if(arreglo[i]=="o"){
        arreglo[i]="ober";
        console.log(arreglo);
    }
    if(arreglo[i]=="u"){
        arreglo[i]="ufat";
        console.log(arreglo);
    }

}

//recorrer el array para crear desencriptar
for (let i = 0; i < arreglo.length; i++) {
    if(arreglo[i]=="ai"){
        arreglo[i]="a";
        console.log(arreglo);
    }
    if(arreglo[i]=="enter"){
        arreglo[i]="e";
    }
    if(arreglo[i]=="imes"){
        arreglo[i]="i";
        console.log(arreglo);
    }
    if(arreglo[i]=="ober"){
        arreglo[i]="o";
        console.log(arreglo);
    }
    if(arreglo[i]=="ufta"){
        arreglo[i]="u";
        console.log(arreglo);
    }

}
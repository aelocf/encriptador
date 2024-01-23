let palabra="";
//convertir un string en array
let arreglo= palabra.split('');

//convertimos un array en string
console.log(arreglo);


//recorrer el array para crear encriptar
for (let i = 0; i < arreglo.length; i++) {
    if(arreglo[i]=="a"){
        arreglo[i]="ai";
        console.log(arreglo);
    }
    if(arreglo[i]=="e"){
        arreglo[i]="enter";
        console.log(arreglo)
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

let textoEncriptado= "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober";
console.log(textoEncriptado);

arreglo=textoEncriptado.split('');

//recorrer el array para crear desencriptar
for (let i = 0; i < textoEncriptado.length; i++) {
    if(arreglo[i]=="a"){
        if(arreglo[i+1]=="i"){
            arreglo.splice(i+1, 1);
            console.log(arreglo);
        }
        console.log(arreglo)
    }
    if(arreglo[i]=="e"){
        if(arreglo[i+1]=="n"){
            if(arreglo[i+2]=="t"){
                if(arreglo[i+3]=="e"){
                    if(arreglo[i+4]=="r"){
                        arreglo.splice(i+1, 4);
                        console.log(arreglo)
                    }
                }
            } 
        }
        console.log(arreglo);
    } 
    
        
    if(arreglo[i]=="i"){
        if(arreglo[i+1]=="m"){
            if(arreglo[i+2]=="e"){
                if(arreglo[i+3]=="s"){
                    arreglo.splice(i+1, 3);
                    console.log(arreglo)
                }
            }
        } 
        
        console.log(arreglo);
    }
    if(arreglo[i]=="o"){
        if(arreglo[i+1]=="b"){
            if(arreglo[i+2]=="e"){
                if(arreglo[i+3]=="r"){
                    arreglo.splice(i+1, 3);
                    console.log(arreglo)
                }
            }
        } 
        
        console.log(arreglo);
    }
    if(arreglo[i]=="u"){
        if(arreglo[i+1]=="f"){
            if(arreglo[i+2]=="a"){
                if(arreglo[i+3]=="t"){
                    arreglo.splice(i+1, 3);
                    console.log(arreglo)
                }
            }
        } 
        
        console.log(arreglo);
    }
}
let textoDesncriptado= arreglo.toString().replace(/,/g, '');
console.log(textoDesncriptado);
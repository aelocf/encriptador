

function encriptarTexto(){
    let arreglo= document.getElementById("texto").value.split('');
    let textEncript;
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
    textoDesncriptado= arreglo.toString().replace(/,/g, '');
    console.log("Texto encriptado exitosamente");
    return textEncript;
};

function desencriptarTexto(){
    let textoEncriptado= document.getElementById("texto").value.split('');
    let textoDesncriptado;
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
                    if(arreglo[i+3]==""){
                        arreglo.splice(i+1, 3);
                        console.log(arreglo)
                    }
                }
            } 
            
            console.log(arreglo);
        }
    }
    textoDesncriptado= arreglo.toString().replace(/,/g, '');
    console.log("Texto desncriptado exitosamente");
    return textoDesncriptado;

}

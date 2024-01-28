

function encriptarTexto(){
    let arreglo= document.getElementById("texto").value.split('');
    let textEncript;
    if(arreglo.length!=0){
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
        textEncript= arreglo.toString().replace(/,/g, '');

        console.log("Texto encriptado exitosamente: " + textEncript);
        etiquetasActualizadas();
        document.getElementById("respuesta").textContent=textEncript;
        
    }else{
        alert("No hay un mensaje que encriptar");
        document.getElementById("imagendinamica").src="./#";
    }
};

function desencriptarTexto(){
    let textoEncriptado= document.getElementById("texto").value.split('');
    let textoDesncriptado;
    if(textoEncriptado.length!=0){
        for (let i = 0; i < textoEncriptado.length; i++) {
            if(textoEncriptado[i]=="a"){
                if(textoEncriptado[i+1]=="i"){
                    textoEncriptado.splice(i+1, 1);
                    console.log(textoEncriptado);
                }
                console.log(textoEncriptado)
            }
            if(textoEncriptado[i]=="e"){
                if(textoEncriptado[i+1]=="n"){
                    if(textoEncriptado[i+2]=="t"){
                        if(textoEncriptado[i+3]=="e"){
                            if(textoEncriptado[i+4]=="r"){
                                textoEncriptado.splice(i+1, 4);
                                console.log(textoEncriptado)
                            }
                        }
                    } 
                }
                console.log(textoEncriptado);
            } 
            
                
            if(textoEncriptado[i]=="i"){
                if(textoEncriptado[i+1]=="m"){
                    if(textoEncriptado[i+2]=="e"){
                        if(textoEncriptado[i+3]=="s"){
                            textoEncriptado.splice(i+1, 3);
                            console.log(textoEncriptado)
                        }
                    }
                } 
                
                console.log(textoEncriptado);
            }
            if(textoEncriptado[i]=="o"){
                if(textoEncriptado[i+1]=="b"){
                    if(textoEncriptado[i+2]=="e"){
                        if(textoEncriptado[i+3]=="r"){
                            textoEncriptado.splice(i+1, 3);
                            console.log(textoEncriptado)
                        }
                    }
                } 
                
                console.log(textoEncriptado);
            }
            if(textoEncriptado[i]=="u"){
                if(textoEncriptado[i+1]=="f"){
                    if(textoEncriptado[i+2]=="a"){
                        if(textoEncriptado[i+3]=="t"){
                            textoEncriptado.splice(i+1, 3);
                            console.log(textoEncriptado)
                        }
                    }
                } 
                
                console.log(textoEncriptado);
            }
        }
        textoDesncriptado= textoEncriptado.toString().replace(/,/g, '');
        console.log("Texto desncriptado exitosamente" + textoDesncriptado);
        etiquetasActualizadas();
        document.getElementById("respuesta").textContent=textoDesncriptado;
        
        return textoDesncriptado;
    }else{
        alert("No hay mensaje para desencriptar");
    }

};

function etiquetasActualizadas(){
    document.getElementById("texto").value="";
    document.getElementById("imagendinamica").hidden=true;
    document.getElementById("titulo-resultado").hidden=true;
    document.getElementById("parrafo").textContent="";
    document.getElementById("btn-copiar").removeAttribute("hidden");
}

function copiarTexto(){
    const button = document.getElementById("btn-copiar");
    const quote = document.getElementById("respuesta");

    const copyToClipboard = async str => {
    try {
        await navigator.clipboard.writeText(str);
        console.log("texto copiado");
    } catch (error) {
        console.log(error);
    }
    };

    button.addEventListener("click", () => {
    copyToClipboard(quote.textContent);
    });
}




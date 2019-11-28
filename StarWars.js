let mensaje = ["g","l","e","e","g","v","e","e","k","s","e","e","g","c","h","a","a","a","b","o","n","t","g","r","a","k","s","t","o","t","o","h","u","t","a","r"];
let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
let nuemerosHex = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","10","11","12","13","14","15","16","17","18","19","1A","1B"];
let mensajeCod = [];
let mensajeCod2 = [];
let aux = [];
let m = 0;
let n = 0;

while(mensaje.length%8!=0){
    mensaje.push("ñ");
}

for(let i = 0; i<mensaje.length; i++){
    mensajeCod[i]=abc.indexOf(mensaje[i]);
}

for(let i = mensajeCod.length-1;i>=0;i--){
    mensajeCod2[m]=nuemerosHex[mensajeCod[i]];
    m++;
}

for(let i = 0; i<mensajeCod2.length;i+=8){
    for(let k = 0; k<4;k++){
        aux[k+i]=mensajeCod2[k+i];
    }
    for(let l= 4; l<8;l++){
        mensajeCod2[n+i]=mensajeCod2[l+i];
        n++;
    }
    n=0;
    for(let o = 4; o<8;o++){
        mensajeCod2[i+o]=aux[i+n];
        n++;
    }
    n=0;
}
console.log(mensajeCod2);
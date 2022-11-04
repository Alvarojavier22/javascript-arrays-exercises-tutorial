let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

let sinEspacios = par.toLowerCase().replace(/\s/g, '');
let arrayLetras = sinEspacios.split("");

for( let i=0; i<arrayLetras.length; i++){
    const letras = arrayLetras[i];
    if(counts[letras] == undefined) counts[letras] = 1;
    else counts[letras] = counts[letras] + 1;
}

console.log(counts);
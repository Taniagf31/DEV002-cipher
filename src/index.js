import cipher from './cipher.js';

let desplazamiento = document.getElementById("box1");
let mensaje = document.getElementById("box2");
let btncifrar = document.getElementById("btn2");
let decodificar = document.getElementById("btn3");
let msjcifrado = document.getElementById("box3")

btncifrar.addEventListener("click", function () {

    let text = mensaje.value;
    let offset = parseInt(desplazamiento.value);
    const encodeText = cipher.encode(offset, text);
    msjcifrado.value = encodeText;
    mensaje.value = "";

})
decodificar.addEventListener("click", function () {

    let text = msjcifrado.value;
    let offset = parseInt(desplazamiento.value);
    const decodeText = cipher.decode(offset, text); 
    mensaje.value = decodeText;
    // mensaje.value = "";

})

















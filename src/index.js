import cipher from './cipher.js';
console.log(cipher);

let desplazamiento = document.getElementById("box1");
let mensaje = document.getElementById("box2");
let btncifrar = document.getElementById("btn2");
let decodificar = document.getElementById("btn3");
let msjcifrado = document.getElementById("box3")


//console.log("afuera" + offset)
btncifrar.addEventListener("click", function () {

    let text = mensaje.value;
    let offset = parseInt(desplazamiento.value);
    const encodeText = cipher.encode(text, offset);
    console.log(encodeText);
    console.log(text, offset);
    msjcifrado.value = encodeText;
    mensaje.value = "";

})

decodificar.addEventListener("click", function () {
    cipher.textDecode(offset, text)
    let textDecode = mensaje.value;
    const decodeText = cipher.decode(textDecode);
    console.log(decodeText);
    console.log(textdecode);
    msjcifrado.value = "";


})



import cipher from './cipher.js';
console.log(cipher);

let desplazamiento = document.getElementById("box1");
let mensaje = document.getElementById("box2");
let btncifrar = document.getElementById("btn2");
let decodificar = document.getElementById("btn3");
let msjcifrado = document.getElementById("box3")
//let mensaje = document.getElementById ("mensaje").value= btncifrar(cajadetexto, desplazamiento);

let offset;

console.log("afuera" + offset)
btncifrar.addEventListener("click", function () {

    let text = mensaje.value;
    offset = parseInt(desplazamiento.value);
    const encodeText = cipher.encode(text, offset);
    console.log(encodeText)
    console.log(text, offset);
    msjcifrado.value = encodeText;
    mensaje.value = "";

})

decodificar.addEventListener("click", function (){ 
    
})

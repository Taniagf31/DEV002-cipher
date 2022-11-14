const cipher = {
  //Esto servirá para cifrar un mensaje
  encode(text, offset) {
    let btncifrar = [];
  console.log(text, offset)

 for(let i=0; i<text.length; i++) {
    console.log(i)
    let codeAscii = text.charCodeAt(i); //formula de codigo ASCII
    console.log(codeAscii)
    let textCode = codeAscii + offset
    console.log(textCode)
    if(codeAscii > 0){
      btncifrar.push(String.fromCharCode(textCode));
     // btncifrar.push(String.fromCharCode(codeAscii));
      }
    }
    return btncifrar.join("")

     console.log(btncifrar) 
      //let number = (codeAscii - 65 + offset) % 26 + 65; //generar desplazamiento
     //console.log(number);
     //let text = String.fromCharCode(number); //Pasa el numero de desplazamiento a la letra mostrada
     console.log(text);
     
}
}
export default cipher;

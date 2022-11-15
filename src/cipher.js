const cipher = {
  //Esto servirá para cifrar un mensaje
  encode: function (text, offset) {
    let textoAscii = [];
    let codeTextoAscii = [];
    let ciphertext = [];
    console.log(text, offset)

    for (let i = 0; i < text.length; i++) {
      let codificar = text.charCodeAt(i);
      textoAscii.push(codificar);
      if (textoAscii[i] === 32) {
        let x1 = 32;
        codeTextoAscii.push(x1)
        String.fromCharCode(codeTextoAscii[i]);
        let respuesta = String.fromCharCode(codeTextoAscii[i]);
        ciphertext.push(respuesta)


      } else {
        let x1 = ((textoAscii[i] - 65 + offset) % 26) + 65;
        codeTextoAscii.push(x1);
        let respuesta = String.fromCharCode(codeTextoAscii[i]);
        console.log(respuesta);
        ciphertext.push(respuesta);
      }
    }

    return ciphertext.join("")
  },
  decode: function (offset, text) {

    let textoAscii = [];
    let decodeTextoAscii = [];
    let cipherdecode = [];
    console.log(offset, text);

    for (let i = 0; i < text.length; i++) {
      let decodificar = mensaje.charCodeAt(i); //estoy sacando el codigo ASCII
      textoAscii.push(decodificar);
      if (textoAscii[i] === 32) {
        let x1 = 32;
        decodeTextoAscii.push(x1)
      } else {
        let x1 = ((textoAscii[i] - 65 + offset) % 26) + 65;
        decodeTextoAscii.push(x1);

      }

      let respuesta = String.fromCharCode(decodeTextoAscii[i]);
      ciphertext.push(respuesta)









      // } else {
      //   let x1 = ((textoAscii[i] - 65 + offset) % 26) + 65;
      //   decodeTextoAscii.push(x1);
      //   let respuesta = String.fromCharCode(decodeTextoAscii[i]);
      //   console.log(respuesta);
      //   ciphertext.push(respuesta);
      // }
    }














    // let decodificar = text.charCodeAt(i);
    // console.log(decodoficar);
    // textAscii.push(decodificar);
    // if (textAscii[i] === 32) {
    //   let y = 32;
    //   decodeTextoAscii.push(y);
    //   String.fromCharCode(decodeTextoAscii[i]);
    //   //let retorno = 



  }
}









  // console.log(i);
  // console.log(codeAscii);
  //let textCode = codeAscii + offset
  //console.log(textCode)
  // if (codeAscii > 0) {
  // textoAscii.push(String.fromCharCode(textCode));
  //btncifrar.push(String.fromCharCode(codeAscii));




export default cipher;
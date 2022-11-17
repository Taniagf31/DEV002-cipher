const cipher = {
  //Esto servirá para cifrar un mensaje
  encode: function (offset, text) {
    let textoAscii = [];
    let codeTextoAscii = [];
    let ciphertext = [];

    if (offset === undefined || text === undefined) {
      throw new TypeError("valores invalidos")
    } else if (offset === 0 || text === typeof 0) {
      throw new TypeError("valor incorrecto")
    } else if (offset === null || text === [])
      throw new TypeError("valores invalidos")
    else {

      for (let i = 0; i < text.length; i++) {
        let codificar = text.charCodeAt(i);
        textoAscii.push(codificar); //Devuelve valor codificado
        if (textoAscii[i] === 32) { //32 es el espacio en ASCII
          let x1 = 32;
          codeTextoAscii.push(x1)
          String.fromCharCode(codeTextoAscii[i]);
          let respuesta = String.fromCharCode(codeTextoAscii[i]);
          ciphertext.push(respuesta)

        } else {
          let x1 = ((textoAscii[i] - 65 + offset) % 26) + 65;
          codeTextoAscii.push(x1);
          let respuesta = String.fromCharCode(codeTextoAscii[i]); //convierte el codigo ASCII en string
          ciphertext.push(respuesta);
        }
      }
    }
    
    return ciphertext.join("")
  },
  //Esto servirá para decifrar el mensaje de manera inversa al encode
  decode: function (offset, text) {

    let textoAscii = [];
    let codeTextoAscii = [];
    let ciphertext = [];

    if (offset === undefined || text === undefined) {
      throw new TypeError("valores invalidos")
    } else if (offset === 0 || text === typeof 0) {
      throw new TypeError("valor incorrecto")
    } else if (offset === null || text === [])
      throw new TypeError("valores invalidos")
    else {

      for (let i = 0; i < text.length; i++) {
        let decodificar = text.charCodeAt(i); //la comente por el error que sale en el test
        textoAscii.push(decodificar);
        if (textoAscii[i] === 32) {
          let x1 = 32;
          codeTextoAscii.push(x1)
          String.fromCharCode(codeTextoAscii[i]);
          let respuesta = String.fromCharCode(codeTextoAscii[i]);
          ciphertext.push(respuesta)


        } else {
          let x1 = ((textoAscii[i] - 90 - offset) % 26) + 90; //del noventa empieza a retroceder
          codeTextoAscii.push(x1);
          let respuesta = String.fromCharCode(codeTextoAscii[i]);
          ciphertext.push(respuesta);

        }

      }
    }
    return ciphertext.join("")
  }
}
export default cipher;






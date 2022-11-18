# Comunidad de adolescentes

## Índice

* [1. Resumen del proyecto](#1-Comunidad-de-adolescentes)
* [2. HTML](#2-HTML)
* [3. Cipher.js](#3-Uso-de-cipher.js)
* [4. CSS](#4-Uso-de-selectores-CSS)



***

## 1. Resumen del proyecto

*Esta comunidad trata de mantener la información segura proporcionada por las usuarias, Este programa se basa en la fórmula de encripción llamada Cifrado Cesar (cont. Razonamiento). Está pensado en aquellas niñas adolescentes que atraviesan situaciones complicadas y de vulnerabilidad en calles o su propio hogar y funcionamos como red de apoyo. en esta comunidad brindamos información útil y pertinente para todas aquellas mujeres adolescentes que requieran información o en su defecto apoyo psicológico. Para ello se toma en cuenta su proceso de sanación y recuperación.

*En este programa podrás darle un número de desplazamiento para que el mensaje escrito se cifre con el botón "CODIFICAR", posteriormente desaparecerá el mensaje escrito para que ahora solo se obtenga el mensaje cifrado
y entonces poder enviarlo presionando el botón "ENVIAR" de forma segura, si se tiene alguna duda del mensaje, 
se puede regresar con el botón "DECODIFICAR". 

***

## 2. Uso de HTML

*Se realiza la estructura HTML para dar forma a la página, uso de flexbox.

***
### 3. Cipher.js

*Primero, obtener funcionalidad de encripción. Para esto, cree una función que tome el número de desplazamiento, luego, cree una función que tome la posición de cada una de las letras; esto se consigue mediante un for, osease un bucle. Cada que una letra pase por este bucle, se buscará su código ASCII mediante charCodeAt(). Ya teniendo el còdigo, podemos aplicar la fórmula de Cifrado Cesar.

*(x - 65 + n)%26 + 65

*Esto nos devolverá un código ASCII que ha sido desplazado la cantidad de veces que el usuario haya indicado (Offset). Añadí estos resultados a un arreglo. Se Creó una nueva función para poder deshacer dicha encripción. Se modifica la fórmula

*(x + 65 - 90)%26 + 90

*De esta forma revertimos el cifrado. Guardamos este valor en un nuevo arreglo.
Manejo de eventos del DOM (listeners, propagación, delegación)
valores primitivos

### 4. Uso de selectores CSS

*CSS funciona como complemento a la información que forma parte del sitio web. se utilizan varios selectores CSS (tipo de letra, color, background, flexbox) y tenga una mejor presentación visualmente a través de un navegador.






  



 



  












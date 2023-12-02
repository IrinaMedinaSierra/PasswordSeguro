  // Funcion que muestra el resultada del algoritmo para crear contraseña segura
  function escribe(texto) {

    document.getElementById("cuadro_texto").value = texto;

}
// funcion que realiza la transformación de los datos introducidos para generar la contraseña segura

function creardomWord() {
    //Array que guardan las vocales y consonantes para la codificacion
    let consonantes = new Array;
    let vocales = new Array;
    vocales = ["a ", "e ", "i ", "o ", "u "];
    //lectura de los datos introducidos por el usuario
    let dominio = document.getElementById("dominio").value;
    let nombre = document.getElementById("nombre").value;
    let caracter = document.getElementById("caracter").value;
    //Se pasa el nombre del dominio a mayuscula
    dominio = dominio.toLowerCase();
    //Se pasa el nombre a minúscula
    nombre = nombre.toLowerCase();
    //se declara dom, para almacenar la transformacion
    let dom = "";
    //bucle que forma las vocales del dominio en numeros asignados (Se pueden cambiar los numeros)

    for (i = 0; i < dominio.length; i++) {
        ch = dominio.charAt(i);
        if (ch == "a") {
            dom = dom + "9";
        }
        if (ch == "e") {
            dom = dom + "2";
        }
        if (ch == "i") {
            dom = dom + "7";
        }
        if (ch == "o") {
            dom = dom + "3";
        }
        if (ch == "u") {
            dom = dom + "5";
        }
    }
    let nom = "";
    let iniNom = "";
    //bucle que forma las vocales del nombre en numeros asignados (Se pueden cambiar los numeros)
    for (i = 0; i < nombre.length; i++) {
        ch = nombre.charAt(i);
        if (ch == "a") {
            nom = nom + "2";
        }
        if (ch == "e") {
            nom = nom + "6";
        }
        if (ch == "i") {
            nom = nom + "1";
        }
        if (ch == "o") {
            nom = nom + "4";
        }
        if (ch == "u") {
            nom = nom + "5";
        }

    }
    //del nombre generado, se pone la primera en mayuscula y el resto en minúscula
    for (i = 0; i < 4; i++) {
        if (i == 0) {
            iniNom = iniNom + nombre.charAt(i).toUpperCase();
        } else {
            iniNom = iniNom + nombre.charAt(i);
        }

    }
    //en caso que el nombre tenga menos de 4 letras se generan numeros aleatorios
    while (nom.length < 4) {
        nom = nom + Math.floor(Math.random() * 10);
    }
    //en caso que el dominio tenga menos de 4 letras se generan numeros aleatorios
    while (dom.length <4) {
        dom = dom + Math.floor(Math.random() * 10);

    }
    
    //genera la contraseña final
    let enviar = dom.slice(0,4) + iniNom + caracter + nom;
    console.log(enviar);
    escribe(enviar);
}
//funcion que copia la contraseña generada en el portatapeles
function copiarContenido(){
    let texto = document.getElementById('cuadro_texto').value;
    console.log("LA contrsela a copiar es"+texto)
    navigator.clipboard.writeText(texto)


}
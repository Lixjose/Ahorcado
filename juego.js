document.getElementById("inputText").style.visibility = "hidden";
document.getElementById("agregarPalabra").style.visibility = "hidden";
document.getElementById("canva").style.visibility = "hidden";
document.getElementById("perder").style.display = "none"
document.getElementById("ganar").style.visibility = "hidden";
document.getElementById("aviso").style.display = "none";
document.getElementById("return").style.visibility = "hidden";
var canvas = document.getElementById("canva").getContext("2d");
let errores = 8;

let inputText = document.getElementById("inputText")

var palabras = ["css", "html", "javascript", "alura", "oracle", "casa", "arbol", "luz", "maquina", "puerta", "internet", "rojo", "control", "libro"];
var letrasOprimidas = [];
var letrasSeparadas;
var letra;
let letrasCorrectas = []; 

function botonAgregar()
{
    document.getElementById("Jugar").style.display = "none";
    document.getElementById("Agregar").style.display = "none";
    document.getElementById("aviso").style.display = "none";
    document.getElementById("canva").style.visibility = "hidden";
    document.getElementById("ganar").style.visibility = "hidden";
    document.getElementById("inputText").style.visibility = "visible"
    document.getElementById("agregarPalabra").style.visibility = "visible"
    inputText.value = "";
    inputText.focus();
}

function retornarHome()
{
    document.getElementById("Jugar").style.display = "block";
    document.getElementById("Agregar").style.display = "block";
    document.getElementById("aviso").style.display = "none";
    document.getElementById("inputText").style.visibility = "hidden";
    document.getElementById("agregarPalabra").style.visibility = "hidden";
    document.getElementById("canva").style.visibility = "hidden";
    document.getElementById("perder").style.visibility = "hidden"
    document.getElementById("ganar").style.visibility = "hidden";
    document.getElementById("return").style.visibility = "hidden";

    location.reload();
    letrasOprimidas = [];
    letrasSeparadas = 0;
}

function agregarPalabra()
{
    if(inputText.value != "")
    {
        palabras.push(inputText.value);
        aviso();
        inputText.focus();
        inputText.value = "";
        console.log(palabras);
    }
    else
    {
        alert(inputText.value + "No es una palabra")
    }
}

function aviso()
{
    document.getElementById("aviso").style.display = "block";
    document.getElementById("inputText").style.visibility = "hidden";
    document.getElementById("agregarPalabra").style.visibility = "hidden";
    document.getElementById("textAviso").value = inputText.value;
}

function play()
{
    document.getElementById("Jugar").style.display = "none";
    document.getElementById("Agregar").style.display = "none";
    document.getElementById("aviso").style.display = "none";
    document.getElementById("ganar").style.visibility = "hidden";
    document.getElementById("canva").style.visibility = "visible";
    document.getElementById("return").style.visibility = "visible";

    var palabra = Math.floor(Math.random() * palabras.length);
    let palabraRamdon = palabras[palabra].toUpperCase();
    letrasSeparadas = palabraRamdon.split("");
    console.log(letrasSeparadas);
    canva();
    linea();
        
    document.onkeydown = (e) => 
    {
        letra = e.key.toUpperCase();

        if(letrasEspeciales(letra))
        {
            if (palabraRamdon.includes(letra))
            {
                for(var i = 0; i < palabraRamdon.length; i++)
                {
                    if(palabraRamdon[i] === letra)
                    {
                        letras(i);
                        letrasCorrectas.push(letra);
                        ganador();
                    }
                }
            }
            else
            {
                //console.log("incorrecto");
                erroresCometidos(letra);
                letrasIncorrectas(letra, errores)
                dibujarAhorcado(errores)
            }
            //comprobarLetra(letra)
        }
        else
        {
            console.log("hola");
        }
        if(errores === 0)
        {
            perder()
        }
    }
}

function letrasEspeciales(key)
{
    let sinLetrasEspeciales = true;
    if(key.charCodeAt() >= 65 && key.charCodeAt() <=90)
    {
        sinLetrasEspeciales = true;
        return sinLetrasEspeciales
    }
    else
    {
        sinLetrasEspeciales = false;
        return sinLetrasEspeciales
    }
}

function erroresCometidos()
{
    errores -= 1
    console.log(errores);
}

function perder()
{
    //console.log("has perdido");
    document.getElementById("perder").style.visibility = "visible";
    document.getElementById("perder").style.display = "block";
}

function ganar()
{
    document.getElementById("ganar").style.visibility = "visible";
}

function ganador()
{
    letrasOprimidas.push(letra.toUpperCase());
    console.log(letrasOprimidas);
    if(letrasOprimidas.length == letrasSeparadas.length)
    {
        ganar();
        console.log(letrasCorrectas);
    }
    if(letrasCorrectas == letrasSeparadas)
    {
        console.log("ganaste");
    }
}
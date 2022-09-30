

function canva()
{
    canvas.lineWidth = 6;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.fillStyle = "white";
    canvas.strokeStyle = "#8A3871"

    canvas.fillRect(0,0,500,720);
    canvas.beginPath();
    canvas.moveTo(50, 500);
    canvas.lineTo(400, 500);
    canvas.stroke();
    canvas.closePath();
}

function linea()
{
    canvas.lineWidth = 2;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.fillStyle = "#F3F5F6";
    canvas.strokeStyle = "#0A3871"

    let anchura = 300/letrasSeparadas.length;
    for(let i = 0; i < letrasSeparadas.length; i++)
    {
        canvas.moveTo(75 + (anchura * i), 640)
        canvas.lineTo(100 + (anchura * i), 640)
    }

    canvas.stroke();
    canvas.closePath();
}

function letras(index)
{
    canvas.font = "bold 33px Inter";
    canvas.lineWidth = 4;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.fillStyle = "#0A3871";

    let anchura = 300/letrasSeparadas.length;
    canvas.fillText(letrasSeparadas[index], 75 + (anchura * index), 620);
    canvas.stroke();
}

function letrasIncorrectas(letra, errorLeft)
{
    canvas.font = "bold 24px Inter";
    canvas.lineWidth = 2;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.fillStyle = "#0A3871";

    canvas.fillText(letra, 5+(25 * (10-errorLeft)), 710, 20)
}

function dibujarAhorcado(puntaje) 
{
    canvas.lineWidth = 6
    canvas.lineCap = "round"
    canvas.lineJoin = "round"
    canvas.strokeStyle = "#0A3871"
    if(puntaje === 7)
    {
    //poste lateral
        canvas.moveTo(70,50)
        canvas.lineTo(70,500)
    }
    if(puntaje === 6)
    {//teto 
        canvas.moveTo(70,50)
        canvas.lineTo(250,50)
    }
    if(puntaje === 5)
    {//corda
        canvas.moveTo(250,50)
        canvas.lineTo(250,150)
    }
    if(puntaje === 4)
    {//para cara
        canvas.moveTo(300,200)
        canvas.arc( 250, 200, 50, 0, Math.PI*2)
    }
    if(puntaje === 3)
    {//para corpo
        canvas.moveTo(250,250)
        canvas.lineTo(250,425)
    }
    if(puntaje === 2)
    {//para perna izquerda
        canvas.moveTo(250,425)
        canvas.lineTo(200,450)
    }
    if(puntaje === 1)
    {//para perna direita
        canvas.moveTo(250,425)
        canvas.lineTo(300,450)
    }
    if(puntaje === 0)
    {//para mano izquerda
        canvas.moveTo(250,300)
        canvas.lineTo(200,325)
    }
    if(puntaje === 0)
    {//para mão direita
        canvas.moveTo(250,300)
        canvas.lineTo(300,325)
    }
    canvas.stroke()
    canvas.closePath()
}
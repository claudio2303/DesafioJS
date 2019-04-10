var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var jogador =true;
var x= 0;
var y = 0;
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 450, 450);

pincel.moveTo(150, 0);
pincel.lineTo(150, 450);
pincel.stroke();
pincel.moveTo(300, 0);
pincel.lineTo(300, 450);
pincel.stroke();
pincel.moveTo(0, 150);
pincel.lineTo(450, 150);
pincel.stroke();
pincel.moveTo(0, 300);
pincel.lineTo(450, 300);
pincel.stroke();


function desenhaCirculo(x,y) {
    pincel.strokeStyle = "black"; // o padrão é blue
    pincel.beginPath();
    pincel.arc(x, y, 60, 0, 2 * 3.14);
    pincel.stroke();

}



function desenhaX(x,y) {

    pincel.strokeStyle = "black";
    pincel.moveTo(x, y);
    pincel.lineTo(x+75, y+75);
    pincel.stroke();
    pincel.moveTo(x, y);
    pincel.lineTo(x+75, y-75);
    pincel.stroke();
    pincel.moveTo(x, y);
    pincel.lineTo(x-75, y+75);
    pincel.stroke();
    pincel.moveTo(x, y);
    pincel.lineTo(x-75, y-75);
    pincel.stroke();


}
function Vez(){
    if(jogador) {
        desenhaX(x,y);
    } else {
        desenhaCirculo(x,y);
    }
    jogador = !jogador;
    
    
}
function desenhaForma(evento){
     x = evento.pageX - tela.offsetLeft;
     y = evento.pageY - tela.offsetTop;
    if (x > 0 && x < 150 && y >0 && y<150){
        x=75;
        y=75;
        Vez(x,y);     
    }
    if (x > 0 && x < 150 && y >150 && y<300){
        x=75;
        y=225;
        Vez(x,y);
    }
    if (x > 0 && x < 150 && y >300 && y<450){
        x=75;
        y=375;
        Vez(x,y);
    }
    if (x > 150 && x < 300 && y >0 && y<150){
        x=225;
        y=75;
        Vez(x,y);
    }
    if (x > 150 && x < 300 && y >150 && y<300){
        x=225;
        y=225;
        Vez(x,y);
    }
    if (x > 150 && x < 300 && y >300 && y<450){
        x=225;
        y=375;
        Vez(x,y);
    }
    if (x > 300 && x < 450 && y >0 && y<150){
        x=375;
        y=75;
        Vez(x,y);
    }
    if (x > 300 && x < 450 && y >150 && y<300){
        x=375;
        y=225;
        Vez(x,y);;
    }
    if (x > 300 && x < 450 && y >300 && y<450){
        x=375;
        y=375;
        Vez(x,y);
    }
}


tela.onclick = desenhaForma;


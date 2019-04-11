var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var jogador =true;
var x= 0;
var y = 0;
var Player=1;
var aux= true;
var Ganhei = false;
var Casa1=[0,0,0,0,0,0,0,0,0];
var Casa=[0,0,0,0,0,0,0,0,0];
var jogadas =1;
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
    pincel.lineTo(x+65, y+65);
    pincel.stroke();
    pincel.moveTo(x, y);
    pincel.lineTo(x+65, y-65);
    pincel.stroke();
    pincel.moveTo(x, y);
    pincel.lineTo(x-65, y+65);
    pincel.stroke();
    pincel.moveTo(x, y);
    pincel.lineTo(x-65, y-65);
    pincel.stroke();


}
function Reseta(){
    location.reload();
}
function Vez(){
    if(jogador) {
        desenhaX(x,y);
        Player =2;
    } else {
        desenhaCirculo(x,y);
        Player =1;
    }
    jogador = !jogador;
    jogadas++;   
}
function Verifica(){
    if ((Casa1[0] !=0 && Casa1[1] !=0  && Casa1[2] !=0) &&(Casa1[0] == Casa1[1] && Casa1[1] == Casa1[2]) 
    || (Casa1[6] !=0 && Casa1[7] !=0  && Casa1[8] !=0) &&(Casa1[6] == Casa1[7] && Casa1[7] == Casa1[8])
     ||(Casa1[3] !=0 && Casa1[4] !=0  && Casa1[5] !=0) &&(Casa1[3] == Casa1[4] && Casa1[4] == Casa1[5])
      || (Casa1[0] !=0 && Casa1[3] !=0  && Casa1[6] !=0) && (Casa1[0] == Casa1[3] && Casa1[3] == Casa1[6])
       ||(Casa1[1] !=0 && Casa1[4] !=0  && Casa1[7] !=0) &&(Casa1[1] == Casa1[4] && Casa1[4] == Casa1[7])
        || (Casa1[2] !=0 && Casa1[5] !=0  && Casa1[8] !=0) && (Casa1[2] == Casa1[5] && Casa1[5] == Casa1[8])
         ||(Casa1[0] !=0 && Casa1[4] !=0  && Casa1[8] !=0) &&(Casa1[0] == Casa1[4] && Casa1[4] == Casa1[8])
          ||(Casa1[2] !=0 && Casa1[4] !=0  && Casa1[6] !=0) && (Casa1[2] == Casa1[4] && Casa1[4] == Casa1[6])){
        Ganhei = true;
        aux = false;
        
    }

    if (Ganhei == true){
        if(Player ==2 ){
            alert("O X Ganhou");
            
        }
        if(Player ==1 ){
            alert("O Bolinha Ganhou");
            
        }
      
    }
   if(jogadas > 9 && Ganhei ==false){
       alert("Deu Velha, Começando Novo Jogo");
       location.reload();
   }
}
function desenhaForma(evento){
     x = evento.pageX - tela.offsetLeft;
     y = evento.pageY - tela.offsetTop;
    if(aux == true){

 
     if (x > 0 && x < 150 && y >0 && y<150 && Casa[0] == 0){
        x=75;
        y=75;
        Vez(x,y);   
        Casa[0]=1;
        Casa1[0]= Player;
        Verifica();
    }
    if (x > 0 && x < 150 && y >150 && y<300 && Casa[1] == 0){
        x=75;
        y=225;
        Vez(x,y);
        Casa[1]=1;
        Casa1[1]= Player;
        Verifica();
    }
    if (x > 0 && x < 150 && y >300 && y<450 && Casa[2] == 0){
        x=75;
        y=375;
        Vez(x,y);
        Casa[2]=1;
        Casa1[2]=Player;
        Verifica();
    }
    if (x > 150 && x < 300 && y >0 && y<150 && Casa[3] == 0){
        x=225;
        y=75;
        Vez(x,y);
        Casa[3]=1;
        Casa1[3]=Player;
        Verifica();
    }
    if (x > 150 && x < 300 && y >150 && y<300 && Casa[4] == 0){
        x=225;
        y=225;
        Vez(x,y);
        Casa[4]=1;
        Casa1[4]=Player;
        Verifica();
    }
    if (x > 150 && x < 300 && y >300 && y<450 && Casa[5] == 0){
        x=225;
        y=375;
        Vez(x,y);
        Casa[5]=1;
        Casa1[5]=Player;
        Verifica();
    }
    if (x > 300 && x < 450 && y >0 && y<150 && Casa[6] == 0){
        x=375;
        y=75;
        Vez(x,y);
        Casa[6]=1;
        Casa1[6]=Player;
        Verifica();
    }
    if (x > 300 && x < 450 && y >150 && y<300 && Casa[7] == 0){
        x=375;
        y=225;
        Vez(x,y);
        Casa[7]=1;
        Casa1[7]=Player;
        Verifica();
    }
    if (x > 300 && x < 450 && y >300 && y<450 && Casa[8] == 0){
        x=375;
        y=375;
        Vez(x,y);
        Casa[8]=1;
        Casa1[8]=Player;
        Verifica();
        
    }
}
    else{
        alert("Jogo Finalizado, Começando novo Jogo");
        location.reload();
    }
}


tela.onclick = desenhaForma;





let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro /2; 

let velocidadexBolinha = 5;
let velocidadeyBolinha= 5;

//variaveis da requete 
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;

let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  
  function mostraBolinha (){
  circle(xBolinha, yBolinha, diametro)
  }
    
function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}
  function verificaColisaoBorda() {
  if (xBolinha + raio >width || xBolinha - raio < 0 )
    { velocidadexBolinha *= -1;
    }
  if (yBolinha>height || yBolinha - raio < 0 ) {
    velocidadeyBolinha *= -1;
  }
}

  function mostraRaquete (){
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
  }
  function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;}
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;}
}

function verificaColisaoRaquete () {
  if (xBolinha -raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio + raquete) 
    {velocidadexBolinha *= -1}
}
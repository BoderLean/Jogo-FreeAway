//  IMAGENS E SONS DO JOGO
let imageRoad;
let imageActor;
let imageCar1;
let imageCar2;
let imageCar3;
let i = 0;

let songTrail;
let songCollision;
let songScore;

function preload(){
  imageRoad = loadImage ("imagens/estrada.png");
  imageActor = loadImage ("imagens/ator-1.png");
  imageCar1 = loadImage ("imagens/carro-1.png");
  imageCar2 = loadImage ("imagens/carro-2.png");
  imageCar3 = loadImage ("imagens/carro-3.png");
  
  imageCars = [imageCar1, imageCar2, imageCar3, imageCar1, imageCar2, imageCar3]
  
  songTrail = loadSound ("sons/trilha.mp3");
  songCollision = loadSound ("sons/colidiu.mp3");
  songScore = loadSound ("sons/pontos.wav");
}

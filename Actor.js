// VARIAVEIS DO ATOR
let xActor = 90;
let yActor = 366;
let widthActor = 30;
let heightActor = 30;
let collision = false;
let myScore = 0;

function showActor (){
image(imageActor,xActor,yActor, widthActor,heightActor)
}
function moveActor (){
  if (keyIsDown(UP_ARROW)){
    yActor -= 3;
}
   if (keyIsDown(DOWN_ARROW)){
     if(canMove()){
      yActor += 3; 
     }     
}
}
function collisionActor (){
  for (let i=0; i< imageCars.length; i = i + 1){
    collision = collideRectCircle(xCars[i],yCars[i], widthCar, heightCar, xActor, yActor, 15)
    if (collision){
      backActorToInitial();
      songCollision.play();
      if (myScore > 0){
         myScore -= 1;
      }
    }
  }
}
function backActorToInitial(){
  yActor = 366
}
function score(){
  fill(color(255, 240, 60))
  textAlign(CENTER);
  textSize(25);
  text(myScore,width / 5, 27);
}
function scorePoints(){
  if (yActor < 15){
    myScore += 1;
    backActorToInitial();
    songScore.play();
  }
}
function canMove(){
  return yActor < 366;
}

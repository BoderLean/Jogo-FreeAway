// VARIAVEIS DO CARRO
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40,96,150,210, 270, 318];
let velocityxCars = [3, 3.5, 3.2, 3.5, 3.3, 2];
let widthCar = 50;
let heightCar = 40;

function showCar(){
    for(let i = 0; i < imageCars.length; i = i + 1){
  image(imageCars[i], xCars[i], yCars[i], widthCar, heightCar);
    }
}
function moveCar(){
  for(let i = 0; i < imageCars.length; i = i + 1){
    xCars[i] -= velocityxCars[i];
  }
}
function loopCar(){
  for (let i = 0; i < imageCars.length; i = i+1){
      if (passedAllScreen(xCars[i])){
    xCars[i] = 600;
  }
}
}
function passedAllScreen(xCars){
  return xCars < - 40;
}

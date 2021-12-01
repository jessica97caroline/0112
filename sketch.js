 var input, heading; 

 function setup (){ 
   createCanvas (300,200);
   background("lightblue");

   input = createInput ();
   input.position (5,60);

   heading = createElement ("h4", "insira qualquer letra do alfabeto: ");
   heading.position (5,20);

   textAlign (CENTER);
   textSize(50);
   
 }

 function draw (){

  const value = input.value();
  switch (value){
    case "a":
      console.log("Vogal");
      break;

    case 'e':
      console.log("Vogal");
      break;

    case 'i':
      console.log("Vogal");
      break;    
    
    case 'o':
      console.log("Vogal");
      break;
    
    case 'u':
      console.log("Vogal");
      break;    
      
    default:
    console.log("Por favor, insira qualquer caractere");  
  }

 }
















































/*var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background("white");
  
  
  
  if(keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();
  
  drawSprites();
}

function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    //ajuste a profundidade
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}*/


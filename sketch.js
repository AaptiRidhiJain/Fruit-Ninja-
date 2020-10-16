var swordImage, sword;
var fruit, fruit1, fruit2, fruit3, fruit4;
var gameOverImage;
var alien, alienImage, alienImage2;
var fruitGroup, alienGroup;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload(){
  swordImage = loadImage("sword.png"); 
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  alienImage = loadAnimation("alien1.png", "alien2.png");
  gameOverImage = loadImage("gameover.png"); 
  cutSound = loadSound("knifeSwooshSound.mp3");
  gameOverSound=loadSound("gameover.mp3");
}

function setup() {
  createCanvas(400, 400);

  sword = createSprite(200, 200);
  sword.addImage(swordImage);
  //sword.debug = true;
  sword.setCollider("rectangle" ,00, 00, 40, 40);
  
  fruitGroup = new Group();
  alienGroup = new Group();
}

function draw(){
  background("lightbrown");

  if(gameState === 1){
    
    fruits();
    aliens();
    
    sword.x = World.mouseX;
    sword.y = World.mouseY;
    
    if(sword.isTouching(fruitGroup)){
      fruitGroup.destroyEach();
      score = score + 1;
    }
    else
    {
      if(sword.isTouching(alienGroup)){
      fruitGroup.destroyEach();
      alienGroup.destroyEach();
      fruitGroup.setVelocityXEach(0);
      alienGroup.setVelocityXEach(0);
      gameState = 0;
      sword.addImage(gameOverImage);
      sword.x = 200;
      sword.y = 200;
      }
      }
      }
  
  drawSprites()
  
  text("score: " + score, 150, 50);
      }

function fruits() { 
 if(frameCount % 80 === 0){
   fruit = createSprite(400, 200, 20, 20);
   fruit.scale = 0.2
   rand = Math.round(random(1,4));
  
   if(rand == 1){
     fruit.addImage(fruit1);
      }
  else if(rand == 2){
    fruit.addImage(fruit2);
  }
   
   else if(rand == 3){
     fruit.addImage(fruit3);
   }
     
   else if(rand == 4){
     fruit.addImage(fruit4);
   }
   
  fruit.y = Math.round(random(50, 340));
  fruit.velocityX = -7;
  fruit.setLifetime = 100;
  
  fruitGroup.add(fruit);
 }
 }

function aliens(){
  if(frameCount % 200 === 0){
    alien = createSprite(400, 200, 20, 20);
    alien.addAnimation("enemy", alienImage);
    alien.y = Math.round(random(100, 300));
    alien.setLifetime = 50;
    alien.velocityX = -(8 + (score/10));
    alienGroup.add(alien);
  }
  }

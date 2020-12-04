
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

var bananaGroup;





function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey= createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1
  

ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x)
  
score = 0;
  
FoodGroup = new Group();
  
obstaclesGroup = new Group();
  
}


function draw() {
background(225);
text("Survival Time: "+ score, 225,50);
  
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  
  score = score + Math.round(getFrameRate()/62);
  
  if(keyDown("space") ){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
foodbanana();
spawnObstacles();
  
if(obstaclesGroup.isTouching(monkey)){
ground.velocityX = 0
 monkey.velocityY = 0
  obstaclesGroup.setVelocityXEach(0);
  //FoodGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1);
 FoodGroup.setLifetimeEach(-1);
}

  
drawSprites();
  

  

  
}

function foodbanana(){

 if (frameCount % 60 === 0) {
     banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
    FoodGroup.add(banana);
  }
}








function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,300,10,40);
   obstacle.velocityX = -6
   obstacle.addImage(obstacleImage);
   
  // var rand = Math.round(random(1,6));
    
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2  ;
    obstacle.lifetime = 100;
   
   obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}







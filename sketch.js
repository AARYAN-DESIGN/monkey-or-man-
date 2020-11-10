
var monkey , monkey_running
var bananaImage,obstacleImage, road
var FoodGroup, obstacleGroup
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  
  monkey=createSprite(100,430,40,40);
  monkey.addAnimation("run",monkey_running);
  monkey.scale=0.2;
 
  road=createSprite(300,500,1000,20);
  road.velocityX=-3;
  
 FoodGroup = createGroup();
 obstacleGroup = createGroup();
}


function draw() {
background("maroon");
  
  score = score + Math.round(getFrameRate()/60);
  textSize=500;
  text("survival time "+score,250,10)
  
   monkey.collide(road);
  
  if (road.x < 100){
      road.x = road.width/2;
    }
  
   if(keyWentDown("space")&& monkey.y >= 428) {
        monkey.velocityY = -20;
        
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(frameCount%80===0){
    
    var banana;
    banana=createSprite(600,500,40,40);
    banana.y=Math.round(random(100,400));
    banana.addImage("a",bananaImage);
    banana.scale=0.2;
    banana.velocityX=-5;
    banana.lifeTime=300;
    FoodGroup.add(banana);
  }
  
  if(frameCount%300===0){
    
    var obstacle;
    obstacle=createSprite(600,460,40,40);
    
    obstacle.addImage("a",obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-5;
    obstacle.lifeTime=300;
    obstacleGroup.add(obstacle);
  }
  
  
  
  
  drawSprites();
}







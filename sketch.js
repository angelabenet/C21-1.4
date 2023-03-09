var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var   spookySound;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);

  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();

  // new Group | CreateGroup ***
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

  
}

function draw(){
  
        background(0);
        
        if (gameState === "play") {
          if(keyDown("left_arrow")){
            ghost.x = ghost.x - 3;
          }
          
          if(keyDown("right_arrow")){
            ghost.x = ghost.x + 3;
          }
          
          if(keyDown("space")){
            ghost.velocityY = -10;
          }
          
          ghost.velocityY = ghost.velocityY + 0.8
          
          if(tower.y > 400){
            tower.y = 200
          }
          spawnDoors();

          
          //climbersGroup.collide(ghost);
          if(climbersGroup.isTouching(ghost)){
            ghost.velocityY = 0;
          }
          if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
            ghost.destroy();
            gameState = "end";
          }
          
          drawSprites();
          
        }  
        
        if (gameState === "end"){
          stroke("yellow");
          fill("yellow");
          textSize(30);
          text("Fim de Jogo", 230,250)
        }

} // isso gera erro 





function spawnDoors() {
  
  // adicionar as estruturas aqui
   
   
    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;

    
    
    doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);

    
  }
}



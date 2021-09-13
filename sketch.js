var player;
var target; 
var edge;
var wormGroup;

function preload(){
  playerimage=loadImage("./images/bunnyImg.png");
  targetimage=loadImage("./images/carrot.png");
  
  wormimage=loadImage("./images/snake.png");
  bgimage=loadImage("./images/bg.png");
}

function setup() {
  createCanvas(750,750);
  edge=createEdgeSprites();
 
 
 bg= createSprite(300,300);
bg.scale= 2.5;
bg.addImage(bgimage);
player=createSprite(50,650,30,30);
player.scale=0.4;
player.addImage(playerimage);


 target=createSprite(650,50,80,80);
 target.scale=0.8;
target.addImage(targetimage);
 obs1=createSprite(0,150,250,10);
 obs2=createSprite(200,150,100,10);
 obs3=createSprite(550,150,400,10);
 obs4=createSprite(50,250,175,10);
 obs5=createSprite(300,250,175,10);
 obs6=createSprite(550,250,250,10);
 obs7=createSprite(100,400,250,10);
 obs8=createSprite(400,400,175,10);
 obs9=createSprite(750,400,150,10);

 wormGroup=new Group();
}



function draw() {
  background("black"); 
  stroke("orange");
  noFill();
  ellipse(600,500,60,50);
  player.bounceOff(edge[0]);
  player.bounceOff(edge[1]);
  player.bounceOff(edge[2]);
  player.bounceOff(edge[3]); 
  if(keyDown("up")){
    player.y=player.y-3
  }
  if(keyDown("down")){
    player.y=player.y+3
  }
  if(keyDown("right")){
    player.x=player.x+3
  }
  if(keyDown("left")){
    player.x=player.x-3
  }
  if(player.isTouching(target)){
   
    player.x=300;
    player.y=650;}
    if(player.isTouching(obs1)){
      
       player.x=50;
      player.y=650;}
      if(player.isTouching(obs2)){
       
        player.x=50;
        player.y=650;
      }
        if(player.isTouching(obs3)){
         
          player.x=50;
          player.y=650;}
          if(player.isTouching(obs4)){
      
            player.x=50;
            player.y=650;}
            if(player.isTouching(obs5)){
             
              player.x=50;
              player.y=650;}
              if(player.isTouching(obs6)){
                
                player.x=50;
                player.y=650;}
                if(player.isTouching(obs7)){
                
                  player.x=50;
                  player.y=650;}
                  if(player.isTouching(obs8)){
                  
                    player.x=50;
                    player.y=650;}
    if(player.isTouching(obs9)){
                    
   player.x=50;
 player.y=650;}
    
    

    generateWorms();
  for(var i = 0 ; i< (wormGroup).length ;i++){   
    var temp = (wormGroup).get(i) ;   
    if (player.isTouching(temp)) 
    {    
      player.x=50;
      player.y=650;
       }     
   drawSprites();
   }
  }

    function generateWorms() { 
      if(frameCount%30==0){
     var worm;
     worm=createSprite(600,500,35,5); 
     worm.shapeColor="salmon";
     worm.velocityY=random(5,-5);
     worm.velocityX=random(-5,5);
     worm.addImage(wormimage);
     worm.scale=0.2;
     
     wormGroup.add(worm);
      }
    }
  


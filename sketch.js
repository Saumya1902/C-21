var bullet,wall,speed,weight,thicknes;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor="80,80,80";
}

function draw() {
  background("lightBlue");

  function hasCollided();

    if(hasCollided(bullet,wall))
    {
       bullet.velocityX=0;
      var damage=0.5*weight*speed*speed(thickness*thickness*thickness)
        if(damage>10)
       {
         bullet.shapeColor=Red(225,0,0);
       }

       if(damage<10)
       {
         bullet.shapeColor=Green(0,225,0);
       }
    }
    
  drawSprites();
}

  function hasCollided(Lbullet,Lwall){
   bulletRightEdge=Lbullet.x+Lbullet.width;
   wallLeftEdge=Lwall.x;
     if(bulletRightEdge=>wallLeftEdge)
        {           
         return true;
      }
        return false;
  }
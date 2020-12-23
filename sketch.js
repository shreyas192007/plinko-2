const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,row1,row2,row3,row4,row5,row6,row7,row8,row9,obstacle1,particle;
var score=0;
var turn=0;
var  gameState="start"

var particles=[]
var plinko=[]
var division=[]

var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(240,799,600,20);
  
   
  for(var i=0;i<=width;i=i+80){
      division.push(new Division(i,height-divisionHeight/2,10,divisionHeight))


  }

  for(var j=40;j<=width;j=j+50){

  plinko.push(new Plinko(j,75,15))

  }

  for(var j=15;j<=width-10;j=j+50){

    plinko.push(new Plinko(j,175,15))
  
    }

    for(var j=40;j<=width;j=j+50){

      plinko.push(new Plinko(j,275,15))
    
      }

      for(var j=15;j<=width-10;j=j+50){

        plinko.push(new Plinko(j,375,15))
      
        }

 //Engine.run(engine)






}



function draw() {

 

  background(0);

 
  text("Score : "+score,20,40);
   fill("white"); 
   textSize(35)

    text(" 500 ", 5, 550);
    text(" 500 ", 80, 550);
    text(" 500 ", 160, 550);
    text(" 500 ", 240, 550); 
    text(" 100 ", 320, 550);
    text(" 100 ", 400, 550);
    text(" 100 ", 480, 550);
    text(" 200 ", 560, 550);
    text(" 200 ", 640, 550);
    text(" 200 ", 720, 550);
    Engine.update(engine);

     ground.display();

     if(gameState==="end"){

      textSize(18);
      text("Game Over",150,250);


     }
 
 for(var j=0;j<plinko.length;j++){

      plinko[j].display();
    
      }

      for(var j=0;j<division.length;j++){

        division[j].display();
      
        }

    if(particle!=null){

     particle.display();

     if(particle.body.position.y>760){

     if(particle.body.position.x<300){
      score=score+500;
      particle=null;

      if(turn>=5){gameState="end"}
      }
     else if(particle.body.position.x<600 && particle.body.position.x>301){
    
      score=score+100;
      particle=null;

      if(turn>=5){gameState="end"}

     }
     
     else if(particle.body.position.x<900 && particle.body.position.x>601){
    
      score=score+200;
      particle=null;

      if(turn>=5){gameState="end"}

     }

     }


    }



 //drawSprites();

  

  //ground.display();
  
}

function mousePressed(){
console.log("hello")

  if(gameState!=="end"){

  turn++
  particle=new Particle(mouseX,10,10,10);

  }




}
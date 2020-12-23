class Plinko {
    constructor(x,y,r) {
      var options = {
        restitution:0.4,
          isStatic: true
      }
     
      this.r = r;
      this.body = Bodies.circle(x,y,this.r, options); 
      World.add(world, this.body);
    }
    display() { 
      var pos = this.body.position; 
      var angle = this.body.angle; 
      //push(); 
      //translate(pos.x, pos.y); 
      //rotate (angle); 
      ellipseMode(RADIUS); 
      fill("white");
       ellipse(pos.x,pos.y,this.r,this.r); 
       //pop(); 
      } 
    }
  
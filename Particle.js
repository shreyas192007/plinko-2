class Particle {
    constructor(x,y,r) {
      var options = {
        restitution:0.4
          //isStatic: true
      }
     
      this.r = r;

      this.color=color(random(0,255), random(0,255), random(0,255));
      this.body = Bodies.circle(x,y,this.r/2, options); 
      World.add(world, this.body);
    }
    display() { 
      
      var pos = this.body.position; 
      var angle = this.body.angle; 
      push(); 
      translate(pos.x, pos.y); 
      rotate (angle); 
      ellipseMode(RADIUS); 
      fill(this.color);
       ellipse(0,0,this.r,this.r); 
       pop(); 
      
      } 
    
    }
  
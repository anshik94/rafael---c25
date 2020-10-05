class Paper {
    constructor(x, y) {
      var options = {
           isStatic:false,
          'restitution':0.3,
          'friction':1.0,
          'density':1.07
      }
      this.body = Matter.Bodies.circle(x, y, 20, options);
      this.radius = 20;
      this.x = x;
      this.y = y;
      this.image = loadImage("paper.png");

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(255);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius*2, this.radius*2);
      pop();
    }
  }
  
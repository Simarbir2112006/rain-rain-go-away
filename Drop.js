class Drop {
    constructor() {
      this.len = random(10,20);
      this.body= Bodies.rectangle(random(0,1200), 0,1,this.len);
      World.add(world,this.body);
  
     // if (this.y > height) {
     //   this.y = random(-20, 0);
     // }
    }
  
    display() {
      var pos=this.body.position;
      strokeWeight(1);
      stroke("white");
      line(pos.x,pos.y,pos.x,pos.y + this.len);
    
    }
    
  }
class Slingshot {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
      
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
   
    fly() {
       this.slingshot.bodyA = null;
    }
        display() {
   
           if (this.slingshot.bodyA) {
            
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
   
            strokeWeight(5);
            stroke("lightblue");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
           }
        }
   }
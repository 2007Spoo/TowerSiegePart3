class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 225
        }

        
        this.pointB = pointB;
        this.bodyA= bodyA.x;
        this.bodyA= bodyA.y;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        

    }
    attach(body)
    {
       this.sling.bodyA= body;
    }

    fly()
    {
        this.sling.bodyA= null;
    }

    display(){
        if(this.sling.bodyA)
        {
            var pointA= this.sling.bodyA.position
            var pointB= this.pointB;
            push();
            strokeWeight(3.5);
            stroke("orange");
            line(pointB.x,pointB.y, pointA.x, pointA.y);
            pop();
        }
    }
    
}
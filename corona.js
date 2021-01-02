class Corona {
    constructor(x, y,r) {
        var options = {
           // restitution: 0.8,
            friction: 0.3,
            density:0.5,
            isStatic:true
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r/2, options);
        this.image=loadImage("corona.1.png");
        World.add(world, this.body);
        this.visibility=255;
    }
    destroy(body){
        World.remove(world,body);
     // this.visibility=this.visibility-20;  
    }
    
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

};
class Vaccine{
    constructor(x,y,r){
        var option={
            friction:0.2,
            density:1,
            isStatic:false,
           restitution:0.3

        }
       this.body=Bodies.circle(x,y,r/2,option);
       World.add(world,this.body);
        this.r=r;
        this.image=loadImage("3.png");
        
        

    }
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push()
    translate (pos.x,pos.y);
    rotate (angle);
    fill(255);
    imageMode( CENTER);
    image(this.image,0,0,this.r);
    pop();
}
}
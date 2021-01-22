class Particles{
    constructor(x,y,r){
        var options={
            restitution:0.4,
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)

    }
    display(){
        var Pos=this.body.position;

        push()
        translate(Pos.x,Pos.y)
        ellipseMode(RADIUS)
        fill(rgb(random(0,255), random(0,255), random(0,255)));
        ellipse(0,0,10,10)
        pop()
    }
}
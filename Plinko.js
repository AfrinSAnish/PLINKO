class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;

        this.body=Bodies.circle(x,y,10,options)
        World.add(world,this.body)
    }

    display(){
        var Pos=this.body.position;

        push()
        translate(Pos.x,Pos.y)
        ellipseMode(RADIUS)
        fill(255)
        ellipse(0,0,5,5)
        pop()
    }
}

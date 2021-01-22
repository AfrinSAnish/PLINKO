class Division{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5
        }
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
    }

    display(){
        var Pos=this.body.position;

        push();
        translate(Pos.x,Pos.y)
        fill(128,128,128)
        rect(0,0,this.width,this.height)
        pop();
    }
}
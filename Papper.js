class Papper{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0
        }

        this.body = Bodies.ellipse(x,y,10,options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        ellipse(x,y,10);
        fill ("red");
    }
}
class Box{
    constructor(x,y,width,height){
        var options ={
            'friction':3
          

        }
      
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        fill ("red");
        push();
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}
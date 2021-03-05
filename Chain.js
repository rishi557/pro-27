class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
    /*We want the ropes to come from different x positions on the roof so we give the offset distances*/    
        this.offsetX=offsetX
		this.offsetY=offsetY
        var  options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            //stiffness:0.1,
            //length:100,
    }

    this.chain=Constraint.create(options);
    World.add(world,this.chain);

}

display(){

 var pointA=this.chain.bodyA.position;
 var pointB=this.chain.bodyB.position;

 strokeWeight(1);
//the point of the line on roof is done by calculating the offset distance too
 line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
}

}
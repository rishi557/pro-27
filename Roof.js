class Roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
	
 		World.add(world, this.body);

	}
	display()
	{
			
			var roofPos=this.body.position;		
		/*We don't want the roof to move so we don't give push, pop and translate functions*/
			//push();
			//translate(roofPos.x, roofPos.y)
			rectMode(CENTER)
			strokeWeight(4);
			fill(0)
			rect(roofPos.x, roofPos.y,this.w, this.h);
			//pop();
			
	}

}
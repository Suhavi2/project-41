class Drops{
constructor(x,y){
    var options={
        isStatic:false,
        friction:0.1,
         restitution:0.2,
         density:1.5
    }
    this.body=Bodies.circle(x,y,this.r,options)
   this.r=20
   World.add(world,this.body)

};

  display(){
     var pos=this.body.position;
     ellipse(pos.x,pos)
     ellipseMode(CENTER)   
     fill ("blue")
  }


  update(){
      //to reposition the drops
      if(this.body.position.y>height){
          Matter.body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
      }
  }





}
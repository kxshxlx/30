class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity=255;
  }
display()
{
  if(this.body.speed<2){
    super.display();
  }
 // console.log(this.body.speed);
  else
  {
    push();
    this.visiblity=this.visiblity-5;
    World.remove(world,this.body);
    tint(255,this.visiblity);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
  }
}
};
class Player{
constructor(x,y){
this.x=x;
this.y=y;
this.spt=createSprite(this.x,this.y,50,50);
this.spt.shapeColor="orange"

move(xdir,ydir) {
this.spt.x+=xdir*grid
this.spt.x+=ydir*grid
}
function keyPressed(){
if (keyCode==UP_ARROW){
player.move(0,-2)
}
if (keyCode==DOWN_ARROW){
player.move(0,2)
}
if (keyCode==LEFT_ARROW){
player.move(-2,0)
}
if(keyCode==RIGHT_ARROW){
player.move(2,0)
}

translate(0,-player.spt.y+height-150)
}
}
}
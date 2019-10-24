let canvas=document.getElementById("myCanvas");
let context=canvas.getContext("2d");
function Rectangle(x,y,width,height,color) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.color=color;

    this.render=function () {
        context.beginPath();
        context.rect(this.x,this.y,this.width,this.height);
        context.fillStyle=this.color;
        context.fill();
        context.closePath();
    }
}
let rect=new  Rectangle(10,10,200,100,"#000000");
rect.render();
class kakashi{
  constructor(){
  //atributos
  this.x = 0;
  this.y = 0;
  this.img = []; //Arrey
  this.frame = 0;
    
  for(var i = 0; i < 5; i++){
  this.img[i] = loadImage("kakashider_"+ i +".gif");
  }
  }
    
  mostrar(){
   imageMode(CENTER);
   push();
   translate(this.x,this.y)
   scale(0.5)
   image(this.img[this.frame],0,0);
   pop();
    
  }
  
  girar(){
    translate(this.x,this.y)
    push();
    rotateY(PI);
    scale(0.5);
    image(this.img[this.frame],0,0)
    pop();
  }
  
  
  moverIzq(){
   this.frame++;
   this.x = this.x - 10;
   if(this.frame  > 3){
   this.frame = 0;
  } 
  }
  
  moverDer(){
   this.frame++;
   this.x = this.x + 10;
   if(this.frame  > 3){
   this.frame = 0;
  } 
  }
  }

//Create variables here
var dog , database ,happyDog ;
var foodS , foodStock,dogI,happyDogI;

function preload()
{
	//load images here
dogI = loadImage("images/dogImg.png");
happyDogI = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
database = firebase.database();
foodStock = database.ref("Food")
foodStock.on("value",readStock)


  dog = createSprite(250,250,30,30);
  dog.addImage(dogI)
  dog.scale = 0.1;
  
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(Food5);
  dog.addImage(happyDogI)
}

  drawSprites();
  //add styles here
  textSize(20)
  fill("black")
  text("Note: Press UP_ARROW key to feed drago milk",50,150);

  
}

function readStock(data){
foodS = data.val();

}

function writeStock(x){

  if(x<=0){
    x= 0;
  }
  else{x= x-1}

database.ref('/').update({
  Food:x
})
}






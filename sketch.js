var dog,happyDog;
var foodS,database;

function preload(){
  happyDog = loadImage("images/happydog.png");
  dogImg = loadImage("images/Dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale=0.2;
  var foodStock = database.ref('Food');
  foodStock.on('value',readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
    dog.scale=0.2;
    
  }
  
  drawSprites();
  fill(0);
  stroke(0);
  text("Note: Press UP Arrow Key To Feed Drago Milk!",150,100);
  text("Food Remaining:"+foodS,200,150);
  
  

}

function writeStock(x){
  if(x<=0){
    x=20;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function readStock(data){
  foodS=data.val();
}




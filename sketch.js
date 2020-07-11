var dog,happydog,dogImg,dogImg2;
var database;
var foods,foodstock;

function preload()
{
  dog = loadImage("images/doglmg.png");
  doghappy = loadImage("images/doglmg1.png")
  
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodstock=database.ref(foods);
  foodstock.on("value",readStock);

  var dog = createSprite(250,250,10,10);
  
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(doghappy);  
  }

}

function readStock(data){
  foods=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

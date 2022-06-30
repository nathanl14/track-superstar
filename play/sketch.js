
var score=0;

function preload(){
  backgroundImg = loadImage("background.png");
  choosecountryImg = loadImage("chosecountry.png");
  tracksuperstarlogoImg = loadImage("tracksuperstarlogo.png");
  sprintsImg = loadImage("sprints.png");
  startImg = loadImage("start.png");


  //flags Image
  selusflagImg= loadImage("selusflag.png")
  seldeuflagImg= loadImage("seldeuflag.png")
  selukflagImg= loadImage("selukflag.png")

  selectrunner1Img = loadImage("selectrunner1.png")
  selectrunner2Img = loadImage("selectrunner2.png")
  chooserunnerImg = loadImage("chooserunner.png")

  racebackgroundImg = loadImage("racebackground.jpg")

}



function setup() {
  createCanvas(1960,990);

 




  //tracksuperstar logo
  tracksuperstarlogo=createSprite(1015,360)
  tracksuperstarlogo.addImage(tracksuperstarlogoImg)
  tracksuperstarlogo.scale=2

  //start button
  startbutton=createSprite(971,601)
  startbutton.addImage(startImg)
  startbutton.scale=0.5

  //sprints button
  sprints=createSprite(984,807)
  sprints.addImage(sprintsImg)
  sprints.scale=0.5
sprints.visible=false

//choosecountry text
choosecountry=createSprite(950,35)
choosecountry.addImage(choosecountryImg)
choosecountry.scale=0.9
choosecountry.visible=false

//flag selection creation
selusflag=createSprite(742,196)
selusflag.addImage(selusflagImg)
selusflag.scale=1.3
selusflag.visible=false

seldeuflag=createSprite(949,196)
seldeuflag.addImage(seldeuflagImg)
seldeuflag.scale=0.7
seldeuflag.visible=false

selukflag=createSprite(1160,196)
selukflag.addImage(selukflagImg)
selukflag.scale=0.8
selukflag.visible=false

//flag display in left corner
usflagdisplay=createSprite(63,59)
usflagdisplay.addImage(selusflagImg)
usflagdisplay.scale=1
usflagdisplay.visible=false

deuflagdisplay=createSprite(63,59)
deuflagdisplay.addImage(seldeuflagImg)
deuflagdisplay.scale=0.4
deuflagdisplay.visible=false

ukflagdisplay=createSprite(63,59)
ukflagdisplay.addImage(selukflagImg)
ukflagdisplay.scale=0.5
ukflagdisplay.visible=false

//select runner
selectrunner1=createSprite(633,470)
selectrunner1.addImage(selectrunner1Img)
selectrunner1.scale=1.6
selectrunner1.visible=false
//selectrunner1.debug=true
selectrunner1.setCollider("rectangle", 7, 0, 70, 170, 0);


selectrunner2=createSprite(1155,476)
selectrunner2.addImage(selectrunner2Img)
selectrunner2.scale=1.5
selectrunner2.visible=false
//selectrunner2.debug=true
selectrunner2.setCollider("rectangle", 7, 0, 70, 170, 0);



//choose runner Text
chooserunner=createSprite(950,140)
chooserunner.addImage(chooserunnerImg)
chooserunner.scale=2.5
chooserunner.visible=false

}

function draw() {
  background(backgroundImg);
  if (mousePressedOver(startbutton)){
 
 //image(backgroundImg,0,0,width,height);
  }
 background.visible=false
 
 //text(mouseX + "," +mouseY , mouseX, mouseY)

 console.log(mouseWentDown("leftButton"))
if(mouseWentDown("leftButton")) background("racebackgroundImg")

 //if (mousePressedOver(selectrunner1)){
//background(racebackgroundImg)

 
 //}
 

afterstart()
aftersprints()
aftercountry()
changeBackground()

 drawSprites();
  }  
    
  
  





 function afterstart() {
  if (mousePressedOver(startbutton)){
startbutton.visible=false
tracksuperstarlogo.visible=false
sprints.visible=true
  }
 }



function aftersprints() {
  if (mousePressedOver(sprints)){
    sprints.visible=false
    choosecountry.visible=true
    selusflag.visible=true
    seldeuflag.visible=true
    selukflag.visible=true
  }
}

function aftercountry() {
  if (mousePressedOver(selusflag)){
    selusflag.visible=false
    seldeuflag.visible=false
    selukflag.visible=false
    
usflagdisplay.visible=true

    choosecountry.visible=false
    selectrunner1.visible=true
    selectrunner2.visible=true
    chooserunner.visible=true
  }
    if (mousePressedOver(seldeuflag)){
      seldeuflag.visible=false
      selusflag.visible=false
      selukflag.visible=false
  
deuflagdisplay.visible=true

      choosecountry.visible=false
      selectrunner1.visible=true
      selectrunner2.visible=true
      chooserunner.visible=true
    }

    if (mousePressedOver(selukflag)){
      selukflag.visible=false
      selusflag.visible=false
      seldeuflag.visible=false
    
ukflagdisplay.visible=true

      choosecountry.visible=false
      selectrunner1.visible=true
      selectrunner2.visible=true
      chooserunner.visible=true
    }
  
  }


function changeBackground() {
  
}

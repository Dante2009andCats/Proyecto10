var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Crear al jugador Sofía
var Sofia = createSprite(15, 15,25,25);


//Crear las paredes del laberinto (wall1 - wall2)
var wall1 = createSprite(65, 300, 30, 100);
var wall2 = createSprite(327, 310, 30, 100);
var wall3 = createSprite(362, 270, 100, 30);
var wall4 = createSprite(240, 110, 30, 80);
var wall5 = createSprite(220, 335, 50, 30);
var wall6 = createSprite(350, 142, 100, 10);
var wall7 = createSprite(65, 205, 30, 100);
var wall8 = createSprite(100, 240, 100, 30);
var wall9 = createSprite(249, 270, 30, 160);
var wall10 = createSprite(210, 200, 150, 30);
var wall11 = createSprite(150, 175, 30, 220);
var wall12 = createSprite(40, 95, 100, 30);
var wall13 = createSprite(250, 80, 200, 30);
var wall14 = createSprite(200, 25, 30, 100);

//Crear la copa.
var cup = createSprite(245, -100, 20, 300);

  
function draw() {
  //Coloca el fondo de color rosa.
  background("pink");
  cup.shapeColor="yellow"
  
  if(keyDown("LEFT_ARROW")){
    Sofia.x= Sofia.x -2;
    Sofia.y= Sofia.y +0;
  }
  if(keyDown("RIGHT_ARROW")){
    Sofia.x= Sofia.x +2;
    Sofia.y= Sofia.y -0;
  }
  if(keyDown("DOWN_ARROW")){
    Sofia.x= Sofia.x -0;
    Sofia.y= Sofia.y +2;
  }
  if(keyDown("UP_ARROW")){
    Sofia.x= Sofia.x +0;
    Sofia.y= Sofia.y -2;
  }
Sofia.shapeColor="orange"
createEdgeSprites();
  Sofia.bounceOff(leftEdge);
  Sofia.bounceOff(rightEdge);
  Sofia.bounceOff(topEdge);
  Sofia.bounceOff(bottomEdge);
//Texto Ganadorrr                                                                                                    
if (Sofia.isTouching(cup)) {
  Sofia.bounceOff(cup)
  fill("yellow")
  textSize(30)
text("Ganaste", 26, 45);

}


Sofia.bounceOff(topEdge);
Sofia.bounceOff(bottomEdge);

resetSofia()
drawSprites();
  

}
function resetSofia()
{
  
Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);

}







function checkwin()
{
  
  
  
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,150, 0, 0);
  }
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

var app = function(){
  var canvas = document.getElementById("main-canvas");
  var context = canvas.getContext("2d");

  canvas.addEventListener("mousedown", getPosition, false);

  var x = 300;
  var y = 250;

  canvas.addEventListener("mousedown", getPosition, false);
  function getPosition(event){
    x = event.x;
    y = event.y;
    context.beginPath();
  }

  context.beginPath();
  context.moveTo(x,y);
  function moveSelection(evt) {
    switch (evt.keyCode) {
      case 37: //console.log("left");
        x -= 5;
        context.lineTo(x, y);
        context.stroke();
        break;
      case 39: //console.log("right");
        x += 5;
        context.lineTo(x, y);
        context.stroke();
        break;
      case 38: //console.log("up");
        y -= 5;
        context.lineTo(x, y);
        context.stroke();
        break;
      case 40: //console.log("down");
        y += 5;
        context.lineTo(x, y);
        context.stroke();
        break;
      case 32: console.log("clear");
        context.clearRect(0,0,600,500);
        context.beginPath();
        context.moveTo(250,250);
        x = 250;
        y = 250;
        break;
    }
  };

  var changeColour = function(){
    context.strokeStyle = this.value;
    context.beginPath();
  }

  var colourPicker = document.getElementById("input");
  colourPicker.addEventListener("change", changeColour);

  window.addEventListener('keydown', moveSelection);
}

window.addEventListener("load", app);

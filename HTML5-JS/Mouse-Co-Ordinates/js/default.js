var mie = (navigator.appName == "Microsoft Internet Explorer") ? true : false;

if(!mie){
    document.captureEvents(Event.MOUSEMOVE);
}

document.onmousemove = mousePos;

var mouseX = 0;
var mouseY = 0;

function mousePos(e){
    if(!mie){
      mouseX = e.pageX;
      mouseY = e.pageY;
    }
    else{
      mouseX = e.clientX + document.body.scrollLeft;
      mouseY = e.clientY + document.body.scrollRight;
    }

    /*document.write clears the document and all the event handlers inside it*/
    document.body.innerHTML += "<ul class='mouse-coorinate-list'><li><strong>X: </strong>" + mouseX + ";</li><li><strong>Y: </strong>" + mouseY + "; </li><li><strong>Time: </strong>" + new Date() + "</li></ul>";	
    return true;
}
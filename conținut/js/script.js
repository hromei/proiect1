function myFunction() {
  var d = new Date();
  document.getElementById("data").innerHTML = d;
  document.getElementById("adresa").innerHTML = "Adresa URL este:<br>" + window.location.href;
  document.getElementById("browser").innerHTML = "Browser-ul este: " + window.navigator.appName +"     versiunea "+window.navigator.appVersion;
  document.getElementById("os").innerHTML = "Sistemul de operare este: " + navigator.oscpuS;
}

function randomNumbers() {
  /* for(var i=0;i<8;i++)S
    {
    var randomN =Math.floor(Math.random()* 0xFF).toString(16).toUpperCase();
    }
  
  //var randoms=Array(8).fill(0).map(randsomNum);
  document.getElementById("numbers").innerHTML=randomN.join(" ");   */
  var randomNum = function () {
    return Math.floor(Math.random() * 0xFF).toString(16).toUpperCase();
  }
  var randoms = Array(8).fill(0).map(randomNum);
  document.getElementById("numbers").innerHTML = randoms.join(" ");

}

function canva() {
  var canvas = document.getElementById('canvas');
  var  ctx = canvas.getContext('2d');
  var rect = {};
  var drag = false;
      ctx.fillStyle = "#c4ca81";
      ctx.strokeStyle= "#FF0000";
      ctx.lineWidth=5;
  
    function init() {
      canvas.addEventListener('mousedown', mouseDown, false);
      canvas.addEventListener('mouseup', mouseUp, false);
      canvas.addEventListener('mousemove', mouseMove, false);
    }
    function mouseDown(e) {
      rect.startX = e.pageX - this.offsetLeft;
      rect.startY = e.pageY - this.offsetTop;
      drag = true;
    }
    function mouseUp() {
      drag = false;
    }
    function mouseMove(e) {
      if (drag) {
        rect.w = (e.pageX - this.offsetLeft) - rect.startX;
        rect.h = (e.pageY - this.offsetTop) - rect.startY ;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        draw();
      }
    }
    function draw() {
      ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
      ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
    }
    init();
}

function schimbaContinut(resursa=String){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("continut").innerHTML =
      this.responseText;
      if (jsFisier) {
        var elementScript = document.createElement('script');
        elementScript.onload = function () {
          console.log("hello");
          if (jsFunctie) {
            window[jsFunctie]();
          }
        };
        elementScript.src = jsFisier;
        document.head.appendChild(elementScript);
      } else {
        if (jsFunctie) {
          window[jsFunctie]();
        }
      }
    }
  };
  xhttp.open("GET", resursa+".html", true);
  xhttp.setRequestHeader("Content-type","application/json");
  xhttp.setRequestHeader("Content-type","application/xml");
  xhttp.send();

}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
addLoadEvent(myFunction());
addLoadEvent(randomNumbers());
addLoadEvent(canva());


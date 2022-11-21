function start() {
   document.getElementById('twórcy').style.visibility = 'hidden';
} 
function Play() {
  /*music*!*/
  
      var audioFile = new Audio('/AsslepAtom.mp3');
      audioFile.play()
      

} 

var hidden = false;

/*function action() {
  hidden = !hidden;
  if (hidden) {
    document.getElementById('hide').style.visibility = 'hidden';
  } else {
    document.getElementById('playbtn').style.visibility = 'visible';
  }
}*/
function action() {
  document.getElementById('hide').style.visibility = 'hidden';
  document.getElementById('hide2').style.visibility = 'hidden';
  document.getElementById('hide3').style.visibility = 'hidden';
   document.getElementById('texthide').style.visibility = 'hidden';
      document.getElementById('texthide2').style.visibility = 'hidden';
}
function Play_game () {
  document.getElementById('TEXT1').style.visibility = 'hidden';
}
function showtwórcy (){
     document.getElementById('twórcy').style.visibility = 'visible';
}
function startgame() {
  document.getElementById("text2").innerHTML = "część witaj w Laser Wolf dotknij ekranu aby to wyłączyć gdyż znajdujesz się w trybie kieszeni. Będziesz mugł go ponownie włączyć dotykając górną część ekranu";

  
}





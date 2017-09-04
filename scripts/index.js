var ocean = document.getElementsByClassName("ocean"),
    waveWidth = 8,
    waveCount = Math.floor(window.innerWidth / waveWidth) + 5,
    docFrag = document.createDocumentFragment();


for (var i = 0; i < waveCount; i++) {
    var wave = document.createElement("div");
    wave.className += "wave";
    docFrag.appendChild(wave);
    wave.style.left = i * waveWidth + "px";
    wave.style.webkitAnimationDelay = (i / 100) + "s";
}
ocean[0].appendChild(docFrag);

docFrag2 = document.createDocumentFragment();


for (var i = 0; i < waveCount; i++) {
    var wave = document.createElement("div");
    wave.className += "wave";
    docFrag2.appendChild(wave);
    wave.style.left = i * waveWidth + "px";
    wave.style.webkitAnimationDelay = ((i / 100) - 1.75) + "s";
}

ocean[1].appendChild(docFrag2);

var countDownDate = new Date("Oct 13, 2017 08:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("timer").innerHTML ="<span class='timer-text'> " + days +" Days \n"+ "</span><span class='timer-text'>  " + hours + "</span><span class='timer-text'>"+":"+ minutes + "</span><span class='timer-text'>" +":"+ seconds + "</span> ";
if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
 }
}, 1000);
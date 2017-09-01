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
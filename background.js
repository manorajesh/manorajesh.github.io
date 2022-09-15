const density = "Ñ@#W$9876543210?!abc;:+=-,._ "

function setup() {
    asciiDiv = document.querySelector('.ascii-background');

    rand = random(-10, 10);
    offset = 0;
    offset_inc = 0.0001;

    lineHeight = 20;
    asciiDiv.style.lineHeight = lineHeight + "px";
    cWidth = window.innerWidth/12-2;
    cHeight = window.innerHeight/21-2;
    noCanvas();
}


function draw() {
    let asciiImage = "";
    for (j = 0; j < cHeight; j++) {
        for (i = 0; i < cWidth; i++) {
            offset += offset_inc;

            const noiseVal = offset * noise(0.1 * i, 0.1 * j, rand);
            const len = density.length;
            const charIndex = floor(map(noiseVal, 0, 255, len, 0));

            if (offset > 1300) {offset_inc = -offset_inc;}
            else if (offset < 0) {offset_inc = -offset_inc;}
            c = density.charAt(charIndex);
            asciiImage += c;
        }
        asciiImage += "<br/>";
    }
    asciiDiv.innerHTML = asciiImage;
}

function windowResized() {
    setup();
}
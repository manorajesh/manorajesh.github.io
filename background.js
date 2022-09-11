const density = "Ñ@#W$9876543210?!abc;:+=-,._ "

function setup() {
    noCanvas();
    asciiDiv = document.getElementById('ascii-background');

    rand = random(-10, 10);
    offset = 0;
    offset_inc = 0.0001;
    font_size = textWidth(" ", "bold 10px monospace")
    cWidth = window.innerWidth/font_size*0.91;
    cHeight = window.innerHeight/font_size*0.13;
}


function draw() {
    asciiDiv.innerHTML = "";
    let asciiImage = "";
    for (j = 0; j < cHeight; j++) {
        for (i = 0; i < cWidth; i++) {
            offset += offset_inc;

            const noiseVal = offset * noise(0.1 * i, 0.1 * j, rand);
            const len = density.length;
            const charIndex = floor(map(noiseVal, 0, 255, len, 0));

            if (offset > 2000) {offset_inc = -offset_inc;}
            else if (offset < -1) {offset_inc = -offset_inc;}
            c = density.charAt(charIndex);
            asciiImage += c;
            //console.log(offset);
        }
        asciiImage += "<br/>";
    }
    asciiDiv.innerHTML = asciiImage;
}

function textWidth(text, fontProp) {
    var tag = document.createElement("div");
    tag.style.position = "absolute";
    tag.style.left = "-999em";
    tag.style.whiteSpace = "nowrap";
    tag.style.font = fontProp;
    tag.innerHTML = text;

    document.body.appendChild(tag);

    var result = tag.clientWidth;

    document.body.removeChild(tag);

    return result;
}
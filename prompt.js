function keyListener() {
    var prompt = document.getElementById("prompt");
    document.addEventListener('keydown', function(e) {
        e.preventDefault();
        let isPrintableKey = e.key.length === 1;
        if (isPrintableKey) {
            prompt.innerHTML += e.key;
        } else if (e.key === "Backspace") {
            prompt.innerHTML = prompt.innerHTML.slice(0, -1);
        } else if (e.key === "Space") {
            prompt.innerHTML += " ";
        }
    }, true);
}

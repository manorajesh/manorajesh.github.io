async function keyListener() {
    document.addEventListener('keydown', function(event) {
        let prompt = document.getElementById("prompt");
        event.preventDefault();
        if (event.keyCode == 8) {
            prompt.innerHTML = prompt.innerHTML.slice(0, -1);
        } else if (event.keyCode == 32) {
            prompt.innerHTML += " ";
        } else if (48 < event.keyCode && event.keyCode < 90 || event.keyCode <= 186 && event.keyCode >= 222) {
            prompt.innerHTML += event.key;
        }
    }, true);
}
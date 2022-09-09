let prompt = document.getElementById("prompt");

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "ArrowDown":
        this.prompt.innerHTML = "Down";
        break;
      case "ArrowUp":
        // code for "up arrow" key press.
        break;
      case "ArrowLeft":
        // code for "left arrow" key press.
        break;
      case "ArrowRight":
        // code for "right arrow" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  // the last option dispatches the event to the listener first,
  // then dispatches event to window
  
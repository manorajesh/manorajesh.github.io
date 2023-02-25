function keyListener() {
  var prompt = document.getElementById("prompt");
  document.addEventListener('keydown', function(e) {
      e.preventDefault();
      let isPrintableKey = e.key.length === 1;
      if (document.activeElement !== document.document.querySelectorAll('input')) {
          if (isPrintableKey) {
              prompt.innerHTML += e.key;
          } else if (e.key === "Backspace") {
              prompt.innerHTML = prompt.innerHTML.slice(0, -1);
          } else if (e.key === "Space") {
              prompt.innerHTML += " ";
          } else if (e.key === "Enter") {
              let entry = prompt.innerHTML.toLocaleLowerCase();
              if (entry === "solver") {
                  window.location.href = "/solver/solver.html";
              } else if (entry === "home") {
                  window.location.href = "/index.html";
              }
          }
      }
  }, true);
}

window.onload = function () {
    var numeral = document.getElementById("numeral");
    var result = document.getElementById("result");
    var numerals = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

    numeral.innerHTML = choice(numerals);
    var number = numerals.indexOf(numeral.innerHTML);
    eventHandler = function (e){
        if (e.key == number) {
            result.innerHTML = "Correct!";
        } else {
            result.innerHTML = "Incorrect! " + "number" + " is " + number + ".";
            console.log(e.key)
        }
    }
  window.addEventListener('keydown', eventHandler, false);
}

function choice (list) {
    return list[Math.floor((Math.random()*list.length))];
  }
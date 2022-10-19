

function solve_it() {
    let y = document.getElementById("y").value;
    let x = document.getElementById("x").value;
    let h = document.getElementById("h").value;
    let k = document.getElementById("k").value;

    var radios = document.getElementsByName('equation_type');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var equation_type = radios[i].value;
            break;
        }
    }
    
    if (equation_type == "quadratic") {
        var exponent = 2;
    } else if (equation_type == "cubic") {
        var exponent = 3;
    } else if (equation_type == "square_root") {
        var exponent = 0.5;
    } else if (equation_type == "linear") {
        var exponent = 1;
    }

    let equation = algebra.parse(`${y} = a * (${x} - ${h})^${exponent} + ${k}`);
    document.getElementById("solution").innerHTML = "a = " + equation.solveFor("a").toString();
}
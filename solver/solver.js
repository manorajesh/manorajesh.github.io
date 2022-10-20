function clear_it() {
    document.getElementById("y").value = "";
    document.getElementById("x").value = "";
    document.getElementById("h").value = "";
    document.getElementById("k").value = "";
}

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
    
    switch (equation_type) {
        case "linear":
            var exponent = 1;
            break;
        case "quadratic":
            var exponent = 2;
            break;
        case "cubic":
            var exponent = 3;
            break;
        case "square_root":
            var exponent = 0.5;
            break;
        case "absolute_value":
            var exponent = -1; // absolute value doesn't have an exponent
            break;
    }

    let answer = String(get_a(y, x, h, k, exponent));
    console.log(typeof answer);
    if (answer.includes("NaN")) {
        document.getElementById("solution").innerHTML = "No solution (Check your Numbers)";
    } else {
        document.getElementById("solution").innerHTML = "a = " + answer;
    }
}

function get_a(y, x, h, k, exponent) {
    parseFloat(y);
    parseFloat(x);
    parseFloat(h);
    parseFloat(k);
    parseFloat(exponent);

    if (exponent == -1) {
        let numorator = y - k;
        let denominator = Math.abs(x - h);
        return new Fraction(numorator, denominator).toString();
        //return (y - k) / Math.abs(x - h);
    } else if (exponent == 0.5) {
        return (y - k) / Math.sqrt(x - h);
        
    }
    return new Fraction((y - k), Math.pow(x - h, exponent)).toString();
}
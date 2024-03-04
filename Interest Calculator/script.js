var btn = document.getElementById("btn");
var body = document.querySelector("body");

function calculate() {

    var I = 0;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("annual-interest-rate").value;
    var nYear = document.getElementById("number-of-year").value;
    var nTimes = document.getElementById("number-of-times-in-year").value;

    if ( principal >0 && rate > 0 && nYear > 0 && nTimes > 0)
    {
        I = (principal * Math.pow((1+ (rate/(nTimes*100))),(nTimes*nYear)));
        I = I.toFixed(2);
        document.getElementById("res").innerText=I;
    }
    else {
        alert("Please Enter Valid Values");
    }
}

btn.addEventListener("click",calculate);
body.addEventListener("keypress", function check(event) {
    if (event.keycode === 13) {
        calculate();
    }
})
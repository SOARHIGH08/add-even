let numberInput = document.getElementById("numberInput");
let checkBtn = document.getElementById("checkBtn");
let result = document.getElementById("result");
let txt = "";

function checkNumber() {
    let num = parseFloat(numberInput.value);

    if (num % 1 == 0) { 
        if (num % 2 == 0) {
            txt = "even";
        } else if (num % 2 == 1) {
            txt = "odd";
        }
        result.innerHTML = num + " is an " + txt + " number";    
    } else {
        result.innerHTML = "Enter a valid number";
    }
}

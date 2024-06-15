function calculate(operation) {
    var inputA = parseFloat(document.getElementById("inputA").value);
    var inputB = parseFloat(document.getElementById("inputB").value);
    var resultElement = document.getElementById("result");

    if (isNaN(inputA) || isNaN(inputB)) {
        resultElement.innerText = "Please enter valid numbers!";
    } else {
        var result;
        switch (operation) {
            case "sum":
                result = inputA + inputB;
                break;
            case "subtract":
                result = inputA - inputB;
                break;
            case "multiply":
                result = inputA * inputB;
                break;
            case "divide":
                if (inputB === 0) {
                    resultElement.innerText = "Cannot divide by zero!";
                    return;
                }
                result = inputA / inputB;
                break;
            default:
                result = "Invalid operation";
        }
        resultElement.innerText = "RESULT: " + result;
    }
}

function resetInputs() {
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("result").innerText = "";
}

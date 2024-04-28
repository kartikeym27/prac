var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b == 0) {
            throw new Error("Number is not Divisble");
        }
        return a / b;
    };
    return Calculator;
}());
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('calculator-form');
    var resultDiv = document.getElementById('result');
    if (resultDiv) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var num1Input = document.getElementById('num1');
            var num2Input = document.getElementById('num2');
            var operationSelect = document.getElementById('operation');
            var num1 = parseFloat(num1Input.value);
            var num2 = parseFloat(num2Input.value);
            var operation = operationSelect.value;
            var result;
            var calculator = new Calculator();
            try {
                switch (operation) {
                    case 'add':
                        result = calculator.add(num1, num2);
                        break;
                    case 'subtract':
                        result = calculator.subtract(num1, num2);
                        break;
                    case 'multiply':
                        result = calculator.multiply(num1, num2);
                    case 'divide':
                        result = calculator.divide(num1, num2);
                        break;
                    default:
                        result = 'invalid operation';
                }
                if (resultDiv) {
                    resultDiv.textContent = "Result:".concat(result);
                }
            }
            catch (error) {
                if (resultDiv) {
                    resultDiv.textContent = "Error:".concat(error.message);
                }
            }
        });
    }
    else {
        console.log("result not found");
    }
});

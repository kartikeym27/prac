// Define a function to perform arithmetic operations
function calculate(operator: string, num1: number, num2: number): number {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return NaN; // division by zero
            }
        default:
            return NaN; // invalid operator
    }
}

// Main function to run the calculator
function main() {
    let num1Input: string = '';
    let operatorInput: string = '';
    let num2Input: string = '';

    // Function to read input from the console
    function readInput(message: string): Promise<string> {
        process.stdout.write(message);
        return new Promise<string>((resolve, reject) => {
            process.stdin.once('data', (data) => {
                resolve(data.toString().trim());
            });
        });
    }

    // Read the first number
    readInput("Enter the first number: ")
        .then((input) => {
            num1Input = input;
            return readInput("Enter the operator (+, -, *, /): ");
        })
        .then((input) => {
            operatorInput = input;
            return readInput("Enter the second number: ");
        })
        .then((input) => {
            num2Input = input;

            // Parse input values to numbers
            const num1: number = parseFloat(num1Input);
            const num2: number = parseFloat(num2Input);

            // Check if parsed values are valid numbers
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Invalid input! Please enter valid numbers.");
                return;
            }

            const operator: string = operatorInput;

            const result = calculate(operator, num1, num2);
            if (isNaN(result)) {
                console.log("Invalid operation!");
            } else {
                console.log(`Result: ${result}`);
            }
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        });
}

// Run the main function
main();

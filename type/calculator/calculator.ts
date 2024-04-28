class Calculator{
    add(a:number, b:number):number{
        return a+b ;
    }
    subtract(a:number,b:number): number{
        return a-b;
    }
    multiply(a:number,b:number): number{
        return a*b;
    }
    divide(a:number,b:number): number{
        if(b==0){
            throw new Error("Number is not Divisble")
        }
        return a/b;
    }

}

document.addEventListener('DOMContentLoaded',()=>{
const form = document.getElementById('calculator-form') as HTMLFormElement;
const resultDiv = document.getElementById('result');

if(resultDiv){
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
    const num1Input = document.getElementById('num1') as HTMLInputElement
    const num2Input = document.getElementById('num2') as HTMLInputElement
    const operationSelect = document.getElementById('operation') as HTMLSelectElement

    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value)
    const operation = operationSelect.value

    let result:any;
    const calculator = new Calculator();
    try{
        switch(operation){
            case 'add':
                result = calculator.add(num1,num2);
                break;
            case 'subtract':
                result = calculator.subtract(num1,num2);
                break;
            case 'multiply':
                result = calculator.multiply(num1,num2);
            case 'divide':
                result = calculator.divide(num1,num2);
                break;
            default:
                result = 'invalid operation';

            }
            if(resultDiv){
                resultDiv.textContent = `Result:${result}`
            }

    }catch(error){
        if(resultDiv){
            resultDiv.textContent = `Error:${error.message}`
        }
    }

    });

}
else{
    console.log("result not found")
}
}

)
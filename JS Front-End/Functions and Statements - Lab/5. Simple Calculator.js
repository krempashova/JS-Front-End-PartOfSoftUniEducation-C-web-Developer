function Calculator(numOne, numTwo, operator) {
    validOperations = {
        'multiply': numOne * numTwo,
        'divide': numOne / numTwo,
        'add': numOne + numTwo,
        'subtract':numOne- numTwo
    }

    let result = validOperations[operator]

    console.log(result)
}
Calculator(5,
    5,
    'multiply')
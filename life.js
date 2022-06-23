let operator = prompt('Enter operator ( either +, -, * or / ): ');

let number1 = parseFloat(prompt('Enter first number: '));
let number2 = parseFloat(prompt('Enter second number: '));

if (operator == '+') {
    add = number1 + number2;
    alert(add);   
}

else if (operator == '-') {
    sub = number1 - number2;
    alert(sub);
}

else if (operator == '*') {
    mult = number1 * number2;
    alert(mult);
}

else if (operator == '/') {
    div = number1 / number2;
    alert(div);
}

else {
    alert('wrong operator input!');
    alert('reload page to try again');
}




//Addition

var addCalc = function(){

var num1 = parseInt(prompt("Enter a number"));
var num2 = parseInt(prompt("Enter another number"))

var add = function(){

	return(num1 + num2);
}


alert("Great, the sum of those numbers is " + add(num1, num2) + ".");

}

addCalc();

//Subtraction

var subCalc = function(){

var num1 = parseInt(prompt("Enter a number"));
var num2 = parseInt(prompt("Enter another number"))

var subtract = function(){

	return(num1 - num2);
}


alert("Great, the difference of those numbers is " + subtract(num1, num2) + ".");

}

subCalc();

//Multiplication

var multiCalc = function(){

var num1 = parseInt(prompt("Enter a number"));
var num2 = parseInt(prompt("Enter another number"))

var multiply = function(){

	return(num1 * num2);
}


alert("Great, the product of those numbers is " + multiply(num1, num2) + ".");

}

multiCalc();

//Division

var divCalc = function(){

var num1 = parseInt(prompt("Enter a number"));
var num2 = parseInt(prompt("Enter another number"))

var divide = function(){

	return(num1 / num2);
}


alert("Great, the quotient of those numbers is " + divide(num1, num2) + ".");

}

divCalc();

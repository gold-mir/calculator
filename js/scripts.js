var calculator = function(){

var num1 = parseInt(prompt("Enter a number"));
var num2 = parseInt(prompt("Enter another number"))

var add = function(){

	return(num1 + num2);
}


alert("Great, the sum of those numbers is " + add(num1, num2) + ".");

}

calculator();

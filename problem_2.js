function sumFibonacciEvens() {
    var limit = document.getElementById("limit2").value;
    var num1 = 1;
    var num2 = 2;
    var newVal = 3;
    var sum = 2;
    while (newVal <= limit) {
        if ((newVal % 2) === 0) {
        	sum = sum + newVal;
        }
        num1 = num2;
        num2 = newVal;
        newVal = num1 + num2;
    }
    document.getElementById("result2").innerHTML = "The sum of the even numbers in a Fibonacci series up to " + limit + " is " + sum + ".";
}

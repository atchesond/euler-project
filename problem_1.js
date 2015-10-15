/*PROBLEM: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.*/

// given a limit, return the total
var addEmUp = function(limit) {
	var total = 0;
	nNum = 3;
	while (nNum < limit) {
   	 	if (!(nNum % 3) || !(nNum % 5)) {
        	total = total + nNum;
        }
        nNum ++;
	}
    return total;
}

// prompt user for limit then display total 
function displayMultiplesSum() {
    var limit = document.getElementById("limit").value;
	var total = addEmUp(limit);
    document.getElementById("result1").innerHTML = "The sum of multiples of 3 and/or 5 below " + limit + " is " + total + ".", "Add Multiples";
}
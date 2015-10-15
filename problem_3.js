function maxPrimeFactor() {
    var limit = document.getElementById("limit3").value;
	var i = 1;
	var candidate = limit/i;
	while (candidate > 2) {
		if (!(candidate % 1)) {
			// candidate is a whole number; is it prime?
			if (isPrime(candidate)) {
				document.getElementById("result3").innerHTML ="The maximum prime factor of " + limit + " is " + candidate + ".";
				return candidate;
			}
		}
		i++;
		candidate = limit/i;
	}
}

var isPrime = function(check) {
	for (j = 2; j <= check/2; j++) {
		if (check % j === 0) {
			return false; 
		}
	}
	return check > 1;
}

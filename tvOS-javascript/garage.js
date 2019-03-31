// Alex Brown's
this.car = "Honda Civic w/ Ugly Spolier";

var marksGarage = {
	car: "Aston Martin",
	getCar: function() {
		return this.car;
	}
};

console.log(marksGarage.getCar());

var storeGetCarForLater = marksGarage.getCar;

// Now work is over ans Mark wnats his car

console.log(storeGetCarForLater()); // WTF

var theRealGetCarFunction = marksGarage.getCar.bind(this);
console.log(theRealGetCarFunction());
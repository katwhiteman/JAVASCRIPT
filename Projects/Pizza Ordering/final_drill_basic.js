// Get the pizza size price and add it to the running Total
// then pass that running total to the next function so 
// the next function will add a particular total to the running total and so on...
//
// Keep doing this until you get all items added to the running total.
//
// Just remember that the syntax will be text1 = text1 + something + "<br>";
// So you take the orginal value and concetenate to something new and end it with
// an HTML line break so our code will write the next thing one line below instead
// of overwriting the previous print out.
function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>Your Order:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCrust(runningTotal,text1); // All three of these variables will be passed on to each function
};	

function getCrust(runningTotal, text1) {
	var crustTotal = 0;
		var crustArray = document.getElementsByClassName("crust");
		for (var c = 0; c < crustArray.length; c++) {
			if (crustArray[c].checked) {
				var selectedCrust = crustArray[c].value;
				text1 = text1+selectedCrust+"<br>";
			}
		}
		if (selectedCrust === "House Special Crust") {
			crustTotal = 2;
		} else if (selectedCrust === "Plain Crust") {
			crustTotal = 0;
		} else if (selectedCrust === "Spicy Crust") {
			crustTotal = 0;
		} else if (selectedCrust === "Garlic Butter Crust") {
			crustTotal = 0;
		} else if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
		runningTotal=(runningTotal+crustTotal);
		document.getElementById("showText").innerHTML=text1;
		document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
		getCheese(runningTotal,text1);
};

function getCheese(runningTotal, text1) {
		var cheeseTotal = 0;
		var cheeseArray = document.getElementsByClassName("cheese");
		for (var y = 0; y < cheeseArray.length; y++) {
			if (cheeseArray[y].checked) {
				var selectedCheese = cheeseArray[y].value;
				text1 = text1+selectedCheese+"<br>";
			}
		}
		if (selectedCheese === "Regular Cheese") {
			cheeseTotal = 0;
		} else if (selectedCheese === "Extra Cheese") {
			cheeseTotal = 3;
		} else if (selectedCheese === "No Cheese") {
			cheeseTotal = 0;
		}
		runningTotal=(runningTotal+cheeseTotal);
		document.getElementById("showText").innerHTML=text1;
		document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
		getSauce(runningTotal,text1);
};

function getSauce (runningTotal, text1) {
	var sauceTotal = 0;
		var sauceArray = document.getElementsByClassName("sauce");
		for (var s = 0; s < sauceArray.length; s++) {
			if (sauceArray[s].checked) {
				var selectedSauce = sauceArray[s].value;
				text1 = text1+selectedSauce+"<br>";
			}
		}
		if (selectedSauce === "Marinara Sauce") {
			sauceTotal = 0;
		} else if (selectedSauce === "Barbeque Sauce") {
			sauceTotal = 0;
		} else if (selectedSauce === "White Sauce") {
			sauceTotal = 0;
		} else if (selectedSauce === "No Sauce") {
			sauceTotal = 0;
		}
		runningTotal=(runningTotal+sauceTotal);
		document.getElementById("showText").innerHTML=text1;
		document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
		getMeat(runningTotal,text1);
};


// With both the meat and veggie functions each item in the array will be
// 1 dollar but the first is going to be free so we can count the total
// of items in their array and subtract 1 to get the total item cost
//
// Now we can add the item cost to our running total to get the new
// running total and then pass this new running total to the next function
// Just keep up this process until we've added all items to the running total
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVeggie(runningTotal,text1);
	};

//working getVeggie function
function getVeggie(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var k = 0; k < veggieArray.length; k++) {
		if (veggieArray[k].checked) {
			selectedVeggie.push(veggieArray[k].value);
			console.log("selected veggie item: ("+veggieArray[k].value+")");
			text1 = text1+veggieArray[k].value+"<br>";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	};

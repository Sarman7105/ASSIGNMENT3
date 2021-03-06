//https://github.com/Sarman7105/ASSIGNMENT3

function kilometerToMeter(lengthInKm) {
	
	if (lengthInKm < 0)
		return 'Negative Values are Not Allowed!';
	
	else
		return lengthInKm * 1000;
}

function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop) {
	
	if (numOfWatch < 0 || numOfPhone < 0 || numOfLaptop < 0)
		return 'Negative Values are Not Allowed!';
	
	else {
		var totalCost;
		var watchPrice = 50;
		var phonePrice = 100;
		var laptopPrice = 500;
		totalCost = watchPrice * numOfWatch + phonePrice * numOfPhone + laptopPrice * numOfLaptop;
		return totalCost;
	}
}

function hotelCost(numberOfNightSpent) {

	if (numberOfNightSpent < 0)
		return 'Negative Values are Not Allowed!';
	
	else {
		var totalRent = 0;

		//Calculating Rent for upto 10 days
		if (numberOfNightSpent <= 10) {
			totalRent = numberOfNightSpent * 100;
		}

		//Calculating hotel rent who spent upto 20 days
		else if (numberOfNightSpent <= 20) {
			totalRent = 100 * 10;
			let remainingDays;
			remainingDays = numberOfNightSpent - 10;
			totalRent = totalRent + remainingDays * 80;
		}
		//Calculating hotel rent who spent more than 20 days
		else {
			totalRent = 100 * 10;
			totalRent = totalRent + 10 * 80;
			let remainingDays = numberOfNightSpent - 20;
			totalRent = totalRent + remainingDays * 50;
		}
		return totalRent;
	}
}

function megaFriend(friendsName) {
	
	if (friendsName.length == 0)
		return 'Friends List Cannot be Empty';
	
	else {
		var temp = "";

		var longestName = "";

		//traversing array and getting the longest friend name
		for (let i = 0; i < friendsName.length; i++) {
			temp = friendsName[i];
			
			if (longestName.length < temp.length) {
				longestName = temp;
			}
		}
		return longestName;
	}
}





var app = angular.module('numberConverter', [])
app.controller('numberControl', function($scope) {
	$scope.inputNumber = 0

	$scope.convertGothic = function () {
		var inputValue = parseInt($scope.inputNumber, 10)
		var outputValue = new String()

		var gothicOnes = ['', '𐌰', '𐌱', '𐌲', '𐌳', '𐌴', '𐌵', '𐌶', '𐌷', '𐌸'] //Numbers 1-9
		var gothicTens = ['', '𐌹', '𐌺', '𐌻', '𐌼', '𐌽', '𐌾', '𐌿', '𐍀', '𐍁'] //Tens 10-90
		var gothicHundreds = ['', '𐍂', '𐍃', '𐍄', '𐍅', '𐍆', '𐍇', '𐍈', '𐍉', '𐍊'] //100-900

		var ones = Math.floor(inputValue % 10)
		var tens = Math.floor(inputValue/10 % 10)
		var hundreds = Math.floor(inputValue/100 % 10)

		if (!inputValue) outputValue = ' '
		else outputValue = gothicHundreds[hundreds] + gothicTens[tens] + gothicOnes[ones]

		if (inputValue < 1000 && inputValue > 0) outputValue = "•" + outputValue + "•"
		else outputValue = ' '

		return outputValue
	}

})

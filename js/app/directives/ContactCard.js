function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ username }}</span>',
			'</div>'
		].join(''),
		restrict: 'E',
		controller: lowerCaseController
	};
}

var lowerCaseController = function($scope) {
			//this $scope refers to a 'contact' in ContactController.contacts 
			//and not the parent scope of ContactController
			$scope.username = $scope.username.toLowerCase();
		};

angular
	.module('app')
	.directive('contactCard', ContactCard);
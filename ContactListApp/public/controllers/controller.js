var app = angular

.module("App", [])

.controller("AppCtrl", function($scope, $http){
	console.log("Hello World from controller");

	var refresh = function(){
		$http.get('/contactList').success(function(response){
			console.log("I got the data for contactList from controller");
			$scope.contactList = response;
			$scope.contact = "";
		});
	};

	refresh();

	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactList', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.removeContact = function(id){
		console.log(id);
		$http.delete('/contactList/' + id).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.editContact = function(id){
		console.log(id);
		$http.get('/contactList/' + id).success(function(response){
			$scope.contact = response;
		});
	};

	$scope.updateContact = function(){
		console.log($scope.contact._id);
		$http.put('/contactList/' + $scope.contact._id, $scope.contact).success(function(){
			refresh();
		});
	};

	$scope.deselectContact = function(){
		$scope.contact = "";
	};
});
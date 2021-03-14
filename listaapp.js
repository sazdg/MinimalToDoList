var app = angular.module("myApp", []);

app.controller("ctrl", function($scope){

	$scope.mylist = [];
	$scope.oldist = [];
	$scope.done = [];
	$scope.item = "";

	//add item 
	$scope.addList = function(item){
		if(this.item != ""){
			$scope.mylist.push(this.item);
			$scope.item = "";
		}
	};


	$scope.checked = function(item){
		$scope.oldlist = $scope.mylist;
		$scope.mylist = [];
		var i;

		for(i = 0; i < $scope.oldlist.length; i++){
			if ($scope.oldlist[i] != this.item) {
				$scope.mylist.push($scope.oldlist[i]);
			} else {
				$scope.done.push($scope.oldlist[i]);
			}
		};
		
	};


	//delete item
	$scope.delete = function(item){
		$scope.oldlist = $scope.mylist;
		$scope.mylist = [];
		var i;

		for(i = 0; i < $scope.oldlist.length; i++){
			if($scope.oldlist[i] != this.item){
				$scope.mylist.push($scope.oldlist[i]);
			} 
		};
	};

	//reset list
	$scope.reset = function(){
		$scope.mylist = [];
		$scope.done = [];
		$scope.item = "";
	};

});
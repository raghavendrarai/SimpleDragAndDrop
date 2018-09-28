var module = angular.module("myApp",[]);
module.controller("myController",function ($scope) {
	$scope.list = ["Item1","Item2","Item3","Item4","Item5","Item6","Item7","Item8","Item9","Item10","Item11","Item12"];
});
module.directive("draggableItem",function(){
	return {
		link:function(scope,elem,attr){
			elem[0].ondragstart = function(event){
				scope.$parent.selectedItem = scope.item;
			};
		}
	};
});
module.directive("draggrbleContainer",function(){
	return {
			link:function(scope,elem,attr){
				elem[0].ondrop = function(event){
					event.preventDefault();
					let selectedIndex = scope.list.indexOf(scope.$parent.selectedItem);
					let newPosition = scope.list.indexOf(scope.item);
					scope.$parent.list.splice(selectedIndex,1);
					scope.$parent.list.splice(newPosition,0,scope.$parent.selectedItem);
					scope.$apply();
				};
				elem[0].ondragover = function(event){
					event.preventDefault();
					
				};
			}
		};
});

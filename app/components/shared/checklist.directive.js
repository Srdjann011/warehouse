(function(){

	angular
		.module("checkList")
		.directive("checkDir", checkDir )

		function checkDir(){
			return {
				templateUrl : "app/components/shared/checklist.html",
				restrict : "E",
				scope : {
					columns :"="
				}
			}


		}


})();
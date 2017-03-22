(function(){

	angular
		.module("docModule")
		.service("articleService", articleService);


		function articleService($resource){
			var url = "http://localhost:3000/api/articles";

			 return $resource(url);


		}

})();
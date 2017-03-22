(function(){
	
	angular
		.module("docModule")
		.factory("docService", docService);


	function docService($resource){
		var url = "http://localhost:3000/api/documents/:id/:items";
		return $resource(url, {id:'@_id'}, {update : {method : "PUT"}})
	}

})();
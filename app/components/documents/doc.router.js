(function(){
"use strict"

	angular
		.module("docModule")
		.config( Config);


		function Config($stateProvider){

			$stateProvider
				.state("main.documents", {
					url : "/listofdocs",
					views : {
						"content@" : {
							templateUrl : "app/components/documents/view.listofdocs.html",
							controller : "docCtrl",
							controllerAs : "dc",
							resolve : {
								doclist : getList
							} 
						}
					}
				})
				.state("main.selected", {
					url : "/selected/:id",
					views : {
						"content@" : {
							templateUrl : "app/components/documents/view.selecteddoc.html",
							controller : "selectDocCtrl",
							controllerAs : "sd",
							resolve : {
								document : getDocument,
								items : getItems,
								names : getNames
							}
						}
					}
				});

				function getList(docService){

					var params = {
						page : 1,
						pageSize : 10,
						sort : "dateOfCreation",
						sortDirection : "desc"
					}



					return docService.get(params).$promise;
				}



				function getDocument($stateParams, docService){
				
					return docService.get({id:$stateParams.id}).$promise;

				}

				function getItems($stateParams, docService){
					return docService.get({id:$stateParams.id, items:"items"}).$promise;
				}
				function getNames(articleService){
					
					 return articleService.get().$promise;
				}

		}

})();
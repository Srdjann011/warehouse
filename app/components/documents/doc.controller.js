(function(){
	"use strict"
	angular
		.module("docModule")
		.controller("docCtrl", docCtrl);

		function docCtrl(doclist, docService, $location){
			var dc = this;
			dc.doclist = doclist.results;
			dc.page = 1;
			dc.pageSize = 10;
			dc.sort = "dateOfCreation";
			dc.sortDirection = "desc";
			dc.pageCount = doclist.count;
			dc.numOfPages = Math.ceil(dc.pageCount/dc.pageSize);
			
			dc.pagArr = ['<'];
			for (var i = 1; i <= dc.numOfPages; i++) {
				dc.pagArr.push(i);
			}
			dc.pagArr.push('>');

			dc.changePage = function(param){

				if(dc.page == 1 && param == "<"){
					dc.page = 1;
				}else if(dc.page == dc.numOfPages && param == ">" ){
					dc.page = dc.numOfPages;
				}else if(param == "<"){
					dc.page -=1;
				}else if(param == ">"){
					dc.page +=1;
				}else{dc.page = param
				}
				getList();
			}
			dc.columns = {
				"Date of Creation" : true,
		        "Date of Recording" : true,
		        "Status" : true,
		        "Transaction type" : true,
		        "Business partner" : true,
		        "Business partner location" : true,
		        "Year" : true
			}

			dc.loadDocument =function(doc){
				
				$location.path("/selected/" + doc._id)
			}




			function getList(){
				
				var params = {
					page : dc.page,
					pageSize : dc.pageSize,
					sort : dc.sort,
					sortDirection : dc.sortDirection

				}

				docService.get(params).$promise.then(function(data){
					dc.doclist = data.results;
				})
			}


		}
})();
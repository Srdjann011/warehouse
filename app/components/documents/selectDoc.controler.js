(function(){


	angular
		.module("docModule")
		.controller("selectDocCtrl", selectDocCtrl);

		function selectDocCtrl(document, items, names, docService){
			var sd = this;

			sd.document = document;
			sd.items = items.results;
			sd.names = names.results;
			console.log(sd.names);

			sd.recordDoc = function(){
				sd.document.status = "recorded";
				sd.document.$update({id:sd.document._id}).$promise;
			}

			sd.getName = function(id){
				for(var i = 0; i<sd.names.length; i++){
					if(id == sd.names[i].code){
						return sd.names[i].name					
				}

				}

			}

			sd.addNew = function(){
				docService.save({id:sd.document._id, items:"items"}, sd.newItem).$promise;
			}



		}

})();
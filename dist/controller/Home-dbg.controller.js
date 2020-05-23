sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.employeeList.Employees.controller.Home", {
		onInit: function () {

		},
		onListItemPress: function(oEvent){
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				employeePath: window.encodeURIComponent(oItem.getBindingContext("employee").getPath().substr(1))
			
			
			/*var router = this.getOwnerComponent().getRouter();
			router.navTo("Detail",{
				employeePath: window.encodeURIComponent(oEvent.getSource().getBindingContext("employee").getPath().substr(1))
			});*/
			});
		}
	});
});
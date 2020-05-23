sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History"
], function (Controller,UIComponent) {
	"use strict";

	return Controller.extend("sap.employeeList.Employees.controller.Detail", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").employeePath),
				model: "employee"
			});
		},
		onNavBack: function () {
			var router = this.getOwnerComponent().getRouter();
			router.navTo("home",[],true);
		}
	});
});
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboard/dashboard1/dashboard1.component.ts");




var routes = [
    {
        path: '',
        component: _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_3__["Dashboard1Component"],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboard/dashboard1/dashboard1.component.ts");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "./src/app/dashboard/dashboard2/dashboard2.component.ts");









var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_4__["ChartistModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_6__["MatchHeightModule"]
            ],
            exports: [],
            declarations: [
                _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_7__["Dashboard1Component"],
                _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_8__["Dashboard2Component"]
            ],
            providers: [],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dashboard1/dashboard1.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Statistics cards Starts-->\n<div class=\"row\">\n    <div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\n        <div class=\"card gradient-blackberry\">\n            <div class=\"card-content\">\n                <div class=\"card-body pt-2 pb-1\">\n                    <div class=\"media\">\n                        <div class=\"media-body white text-left\">\n                            <h3 class=\"font-large-1 mb-0\">{{dash.total_year}} T</h3>\n                            <span>Total Annualy</span>\n                        </div>\n                        <div class=\"media-right white text-right\">\n                            <i class=\"icon-graph font-large-1\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\n        <div class=\"card gradient-ibiza-sunset\">\n            <div class=\"card-content\">\n                <div class=\"card-body pt-2 pb-1\">\n                    <div class=\"media\">\n                        <div class=\"media-body white text-left\">\n                            <h3 class=\"font-large-1 mb-0\">{{dash.total_month}} T</h3>\n                            <span>Total Monthly</span>\n                        </div>\n                        <div class=\"media-right white text-right\">\n                            <i class=\"icon-graph font-large-1\"></i>\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\n        <div class=\"card gradient-green-tea\">\n            <div class=\"card-content\">\n                <div class=\"card-body pt-2 pb-1\">\n                    <div class=\"media\">\n                        <div class=\"media-body white text-left\">\n                            <h3 class=\"font-large-1 mb-0\">{{dash.total_day}} T</h3>\n                            <span>Total Today</span>\n                        </div>\n                        <div class=\"media-right white text-right\">\n                            <i class=\"icon-graph font-large-1\"></i>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n<!--Statistics cards Ends-->\n\n<div class=\"row\">\n    <div class=\"col-xl-6 col-lg-12 col-12\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title mb-3\">Actions</h4>\n            </div>\n            <div class=\"card-content\">\n                <table class=\"table table-responsive-sm text-center\">\n                    <thead>\n                    <tr>\n                        <th>User ID</th>\n                        <th>Type</th>\n                        <th>Created At</th>\n                        <th>Status</th>\n                        <th>Action</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let item of todos\">\n                        <td>{{item.account_id ? item.account_id : '-'}}</td>\n                        <td>{{item.type}}</td>\n                        <td>{{item.created_at * 1000 | date:'yyyy/MM/dd'}}</td>\n                        <td>\n                            <a class=\"btn btn-raised btn-round btn-sm\" [class.btn-warning]=\"item.status=='todo'\"\n                               [class.btn-success]=\"item.status=='done'\"\n                               style=\"margin:0\">{{item.status}}</a>\n                        </td>\n                        <td>\n                            <a class=\"info p-0\" (click)=\"action(item)\">\n                                <i class=\"ft-settings font-medium-3 mr-2\"></i>\n                            </a>\n                        </td>\n                    </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 col-lg-12 col-12\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title mb-3\">Support Messages</h4>\n            </div>\n            <div class=\"card-content\">\n                <table class=\"table table-responsive-sm text-center\">\n                    <thead>\n                    <tr>\n                        <th>Fullname</th>\n                        <th>Status</th>\n                        <th>Created At</th>\n                        <th>Last Message</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let item of support;\">\n                        <td>{{item.display_name}}</td>\n                        <td>Pending / Open</td>\n                        <td>{{item.updated_at * 1000 | date:'MMM d, h:mm a'}}</td>\n                        <td>{{item.last_message}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" style=\"display:none\" matchHeight=\"card\">\n    <div class=\"col-xl-6 col-lg-12 col-12\">\n        <div class=\"card gradient-blackberry\">\n            <div class=\"card-content\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title white\">Statistics</h4>\n                    <div class=\"p-2 text-center\">\n                        <a class=\"white font-medium-1\">Month</a>\n                        <a class=\"btn btn-raised btn-round bg-white mx-3 px-3\">Week</a>\n                        <a class=\"white font-medium-1\">Day</a>\n                    </div>\n                    <div class=\"my-3 text-center white\">\n                        <a class=\"font-large-2 d-block mb-1\">$ 78.89 <span class=\"ft-arrow-up font-large-2\"></span></a>\n                        <span class=\"font-medium-1\">Week2   +15.44</span>\n                    </div>\n                </div>\n                <div id=\"lineChart\" class=\"height-250 lineChart lineChartShadow\">\n                    <x-chartist class=\"\" [data]=\"lineChart.data\" [type]=\"lineChart.type\" [options]=\"lineChart.options\"\n                                [responsiveOptions]=\"lineChart.responsiveOptions\" [events]=\"lineChart.events\">\n                    </x-chartist>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 col-lg-12\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\">New Users / Left Users</h4>\n            </div>\n            <div class=\"card-content\">\n\n                <p class=\"font-medium-2 text-muted text-center\">Hobbies</p>\n                <div id=\"bar-chart\" class=\"height-250 BarChartShadow BarChart\">\n                    <x-chartist class=\"\" [data]=\"BarChart.data\" [type]=\"BarChart.type\" [options]=\"BarChart.options\"\n                                [responsiveOptions]=\"BarChart.responsiveOptions\" [events]=\"BarChart.events\">\n                    </x-chartist>\n                </div>\n\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col text-center\">\n                            <span class=\"gradient-pomegranate d-block rounded-circle mx-auto mb-2\"\n                                  style=\"width:10px; height:10px;\"></span>\n                            <span class=\"font-large-1 d-block mb-2\">48</span>\n                            <span>Sport</span>\n                        </div>\n                        <div class=\"col text-center\">\n                            <span class=\"gradient-green-tea d-block rounded-circle mx-auto mb-2\"\n                                  style=\"width:10px; height:10px;\"></span>\n                            <span class=\"font-large-1 d-block mb-2\">9</span>\n                            <span>Music</span>\n                        </div>\n                        <div class=\"col text-center\">\n                            <span class=\"gradient-blackberry d-block rounded-circle mx-auto mb-2\"\n                                  style=\"width:10px; height:10px;\"></span>\n                            <span class=\"font-large-1 d-block mb-2\">26</span>\n                            <span>Travel</span>\n                        </div>\n                        <div class=\"col text-center\">\n                            <span class=\"gradient-ibiza-sunset d-block rounded-circle mx-auto mb-2\"\n                                  style=\"width:10px; height:10px;\"></span>\n                            <span class=\"font-large-1 d-block mb-2\">17</span>\n                            <span>News</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dashboard1/dashboard1.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \n                                                       for the spread property */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGltbWlyemFlZS9Xb3JrL2dldHNwb3RpZnktZnJvbnRlbmQvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkMS9kYXNoYm9hcmQxLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkMS9kYXNoYm9hcmQxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQXFCO0VBQ3JCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGlCQUFpQixFQUFBOztBQUtyQjtFQUNJLGlCQUFpQjtFQUNqQiw0Q0FBNEQsRUFBQTs7QUFHaEU7RUFDSSwyQ0FBNEQ7RUFDNUQsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBT3JCO0VBR1ksMkNBQTRELEVBQUE7O0FBSHhFO0VBUVksZUFBZSxFQUFBOztBQVMzQjtFQUNJLDRDQUE2RCxFQUFBOztBQUdqRTtFQUNJLDRDQUE2RCxFQUFBOztBQUdqRTtFQUNJLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBT3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLDREQUEyRDtFQUNuRCxvREFBbUQ7RUFBRTtnRkNwQ2UsRURxQ0M7O0FBTS9FO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLGVBQWU7RUFDZiw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFPZjtFQUNFLG1DQUFvRCxFQUFBOztBQUV0RDtFQUNFLG1DQUFvRCxFQUFBOztBQUV0RDtFQUNFLG1DQUFvRCxFQUFBOztBQUV0RDtFQUNFLG1DQUFvRCxFQUFBOztBQUd0RDtFQUNFLDREQUEyRDtFQUNuRCxvREFBbUQ7RUFBRTtnRkMvQ2UsRURnREM7O0FBT2pGO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksWUFBWSxFQUFBOztBQUloQjtFQUNJLHFCQUFxQjtFQUNwQixnQ0FBZ0MsRUFBQTs7QUFHckM7RUFDSSw0REFBMkQ7RUFDbkQsb0RBQW1EO0VBQUU7Z0ZDdERlLEVEdURDIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZDEvZGFzaGJvYXJkMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9zY3NzL2dyYWRpZW50LXZhcmlhYmxlc1wiO1xuXG46aG9zdCAvZGVlcC8gLmN0LWdyaWR7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCBDU1MgU3RhcnRzXG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcbiAgICBmaWxsLW9wYWNpdHk6IDAuNztcbiAgICBmaWxsOnVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDEpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XG4gICAgZmlsbC1vcGFjaXR5OiAwLjk7XG59XG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1saW5le1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufVxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtcG9pbnQge1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufVxuXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAxIENTUyBFbmRzXG5cbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgU3RhcnRzXG5cbjpob3N0IC9kZWVwLyAuU3RhY2tiYXJjaGFydHtcbiAgICAuY3Qtc2VyaWVzLWEge1xuICAgICAgICAuY3QtYmFye1xuICAgICAgICAgICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjbGluZWFyKSAhaW1wb3J0YW50XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmN0LXNlcmllcy1iIHtcbiAgICAgICAgLmN0LWJhcntcbiAgICAgICAgICAgIHN0cm9rZTogI2U5ZTllOTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXG5cbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDIgQ1NTIFN0YXJ0c1xuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xuICAgIGZpbGw6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDIpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MykgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXBvaW50LWNpcmNsZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgZmlsbDogd2hpdGU7XG59XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQtY2lyY2xle1xuICAgIHN0cm9rZTogIzg0M2NmNztcbn1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5le1xuICAgIHN0cm9rZTogI0E2NzVGNDtcbn1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xuICAgIHN0cm9rZTogIzMxYWZiMjtcbn1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LWxpbmUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XG59XG5cbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDIgQ1NTIEVuZHNcblxuLy8gTGluZSBDaGFydCBDU1MgU3RhcnRzXG5cbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1wb2ludC1jaXJjbGUge1xuICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XG4gICAgc3Ryb2tlOiB3aGl0ZTtcbn1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LWxpbmUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiB3aGl0ZTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbn1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LWxhYmVsIHtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDI1cHggOHB4IHJnYmEoMCwwLDAsMC4zKSApO1xuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDI1cHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cbn1cblxuLy8gTGluZSBDaGFydCAgQ1NTIEVuZHNcbiBcbiAgLy8gRG9udXQgQ2hhcnQgIENTUyBFbmRzXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICMwQ0MyN0U7XG4gICAgc3Ryb2tlLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtcHJvZ3Jlc3MgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICNGRkMxMDc7XG4gICAgc3Ryb2tlLXdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3Qtb3V0c3RhbmRpbmcgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICM3RTU3QzI7XG4gICAgc3Ryb2tlLXdpZHRoOiA4cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3Qtc3RhcnRlZCAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogIzIxOTZGMztcbiAgICBzdHJva2Utd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWxhYmVsIHtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICAgIGFsaWdubWVudC1iYXNlbGluZTogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmaWxsOiAjODY4ZTk2O1xuICB9XG5cbiAgLy8gRG9udXQgQ2hhcnQgIENTUyBFbmRzXG5cbiAgLy8gQmFyIENoYXJ0IENTUyBTdGFydHNcblxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzEpIHtcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDcpO1xuICB9XG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMikge1xuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XG4gIH1cbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0biszKSB7XG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KTtcbiAgfVxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzQpIHtcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDQpO1xuICB9XG5cbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydFNoYWRvdyB7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xufVxuXG4vLyBCYXIgQ2hhcnQgQ1NTIEVuZHNcblxuLy8gV2lkZ2V0IGxpbmUgQ2hhcnQgQ1NTIFN0YXJ0c1xuXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtcG9pbnQge1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufVxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWxpbmV7XG4gICAgc3Ryb2tlOiAjZmZmO1xufVxuXG5cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwcHg7ICAgIFxuICAgICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnRzaGFkb3cge1xuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApO1xuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cbn1cblxuLy8gV2lkZ2V0IGxpbmUgQ2hhcnQgQ1NTIEVuZHMiLCI6aG9zdCAvZGVlcC8gLmN0LWdyaWQge1xuICBzdHJva2UtZGFzaGFycmF5OiAwcHg7XG4gIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbjpob3N0IC9kZWVwLyAuY3QtbGFiZWwge1xuICBmb250LXNpemU6IDAuOXJlbTsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XG4gIGZpbGwtb3BhY2l0eTogMC43O1xuICBmaWxsOiB1cmwoXCIvZGFzaGJvYXJkI2dyYWRpZW50MVwiKSAhaW1wb3J0YW50OyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcbiAgZmlsbDogdXJsKFwiL2Rhc2hib2FyZCNncmFkaWVudFwiKSAhaW1wb3J0YW50O1xuICBmaWxsLW9wYWNpdHk6IDAuOTsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1saW5lIHtcbiAgc3Ryb2tlLXdpZHRoOiAwcHg7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtcG9pbnQge1xuICBzdHJva2Utd2lkdGg6IDBweDsgfVxuXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXIge1xuICBzdHJva2U6IHVybChcIi9kYXNoYm9hcmQjbGluZWFyXCIpICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgL2RlZXAvIC5TdGFja2JhcmNoYXJ0IC5jdC1zZXJpZXMtYiAuY3QtYmFyIHtcbiAgc3Ryb2tlOiAjZTllOWU5OyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XG4gIGZpbGw6IHVybChcIi9kYXNoYm9hcmQjZ3JhZGllbnQyXCIpICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcbiAgZmlsbDogdXJsKFwiL2Rhc2hib2FyZCNncmFkaWVudDNcIikgIWltcG9ydGFudDsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gIGZpbGw6IHdoaXRlOyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgc3Ryb2tlOiAjODQzY2Y3OyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtbGluZSB7XG4gIHN0cm9rZTogI0E2NzVGNDsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XG4gIHN0cm9rZTogIzMxYWZiMjsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3QtbGluZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZS13aWR0aDogMnB4OyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2Utd2lkdGg6IDJweDtcbiAgZmlsbDogd2hpdGU7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2U6IHdoaXRlOyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1saW5lIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiB3aGl0ZTtcbiAgc3Ryb2tlLXdpZHRoOiAxcHg7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LWxhYmVsIHtcbiAgY29sb3I6ICNGRkY7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDI1cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDI1cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqLyB9XG5cbjpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcbiAgc3Ryb2tlOiAjMENDMjdFO1xuICBzdHJva2Utd2lkdGg6IDI0cHggIWltcG9ydGFudDsgfVxuXG46aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQge1xuICBzdHJva2U6ICNGRkMxMDc7XG4gIHN0cm9rZS13aWR0aDogMTZweCAhaW1wb3J0YW50OyB9XG5cbjpob3N0IC9kZWVwLyAuZG9udXQgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XG4gIHN0cm9rZTogIzdFNTdDMjtcbiAgc3Ryb2tlLXdpZHRoOiA4cHggIWltcG9ydGFudDsgfVxuXG46aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1zdGFydGVkIC5jdC1zbGljZS1kb251dCB7XG4gIHN0cm9rZTogIzIxOTZGMztcbiAgc3Ryb2tlLXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtbGFiZWwge1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmaWxsOiAjODY4ZTk2OyB9XG5cbjpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMSkge1xuICBzdHJva2U6IHVybChcIi9kYXNoYm9hcmQjZ3JhZGllbnQ3XCIpOyB9XG5cbjpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMikge1xuICBzdHJva2U6IHVybChcIi9kYXNoYm9hcmQjZ3JhZGllbnQ1XCIpOyB9XG5cbjpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMykge1xuICBzdHJva2U6IHVybChcIi9kYXNoYm9hcmQjZ3JhZGllbnQ2XCIpOyB9XG5cbjpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rNCkge1xuICBzdHJva2U6IHVybChcIi9kYXNoYm9hcmQjZ3JhZGllbnQ0XCIpOyB9XG5cbjpob3N0IC9kZWVwLyAuQmFyQ2hhcnRTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqLyB9XG5cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XG4gIHN0cm9rZS13aWR0aDogMHB4OyB9XG5cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1saW5lIHtcbiAgc3Ryb2tlOiAjZmZmOyB9XG5cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xuICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgfVxuXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydHNoYWRvdyB7XG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMTVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjgpKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMTVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjgpKTtcbiAgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard1/dashboard1.component.ts ***!
  \**************************************************************/
/*! exports provided: Dashboard1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard1Component", function() { return Dashboard1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-event-bus */ "./node_modules/ng-event-bus/dist/ng_event_bus.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_event_bus__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../accounts/accounts.component */ "./src/app/accounts/accounts.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../payments/payments.component */ "./src/app/payments/payments.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../todos/todos.component */ "./src/app/todos/todos.component.ts");









var data = __webpack_require__(/*! ../../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var Dashboard1Component = /** @class */ (function () {
    // Bar chart configuration Ends
    function Dashboard1Component(http, modalService, eventBus) {
        var _this = this;
        this.http = http;
        this.modalService = modalService;
        this.eventBus = eventBus;
        this.todos = [];
        this.support = [];
        this.dash = {
            total_day: 0,
            total_month: 0,
            total_year: 0,
        };
        // Line chart configuration Starts
        this.lineChart = {
            type: 'Line', data: data['LineDashboard'],
            options: {
                axisX: {
                    showGrid: false
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    low: 0,
                    high: 100,
                    offset: 0,
                },
                fullWidth: true,
                offset: 0,
            },
            events: {
                draw: function (data) {
                    var circleRadius = 4;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_2__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line chart configuration Ends
        //  Bar chart configuration Starts
        this.BarChart = {
            type: 'Bar', data: data['DashboardBar'], options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                low: 0,
                high: 60,
            },
            responsiveOptions: [
                ['screen and (max-width: 640px)', {
                        seriesBarDistance: 5,
                        axisX: {
                            labelInterpolationFnc: function (value) {
                                return value[0];
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient4',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(238, 9, 121,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(255, 106, 0, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient5',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 75, 145,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(120, 204, 55, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient6',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(132, 60, 247,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient7',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(155, 60, 183,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(255, 57, 111, 1)'
                    });
                },
                draw: function (data) {
                    var barHorizontalCenter, barVerticalCenter, label, value;
                    if (data.type === 'bar') {
                        data.element.attr({
                            y1: 195,
                            x1: data.x1 + 0.001
                        });
                    }
                }
            },
        };
        this.eventBus.on('todos:renew').subscribe(function (message) {
            _this.getItems();
        });
        this.eventBus.on('accounts:add').subscribe(function (message) {
            _this.getItems();
        });
    }
    Dashboard1Component.prototype.ngOnInit = function () {
        this.getItems();
    };
    Dashboard1Component.prototype.getItems = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('shortcuts/todos')).subscribe(function (data2) {
            _this.todos = [];
            for (var _i = 0, data2_1 = data2; _i < data2_1.length; _i++) {
                var t = data2_1[_i];
                if (t.status == 'todo') {
                    _this.todos.push(t);
                }
            }
            _this.todos.sort(function (a, b) {
                return b['created_at'] - a['created_at'];
            });
        }, function (error) {
            console.log(error);
        });
        this.http.get(this.http.withApiBase('support-threads?sort=-id&per-page=50&filter[status]=1')).subscribe(function (data2) {
            _this.support = data2.items
                .map(function (i) {
                i['messages_arr'] = JSON.parse(i['messages']);
                if (i.messages_arr !== null && i.messages_arr.length > 0) {
                    i['last_message'] = i['messages_arr'][i.messages_arr.length - 1].text;
                    if (i.last_message.length > 25) {
                        i.last_message = i.last_message.substring(0, 25) + ' ...';
                    }
                }
                return i;
            });
        }, function (error) {
            console.log(error);
        });
        this.http.get(this.http.withApiBase('shortcuts/dashboard')).subscribe(function (data2) {
            _this.dash = data2;
        }, function (error) {
            console.log(error);
        });
    };
    Dashboard1Component.prototype.action = function (item) {
        switch (item.type) {
            case 'first payment':
            case 'late payment':
                var editModal1 = this.modalService.open(_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_6__["EditAccountComponent"], { size: 'lg', windowClass: 'modal-xl' });
                editModal1.componentInstance.id = item.account_id;
                break;
            case 'payment':
                var editModal2 = this.modalService.open(_payments_payments_component__WEBPACK_IMPORTED_MODULE_7__["ViewPaymentComponent"], { size: 'lg', windowClass: 'modal-xl' });
                editModal2.componentInstance.id = item.data.id;
                break;
            case 'kick':
                var editModal3 = this.modalService.open(_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_6__["ViewAccountComponent"], { size: 'lg', windowClass: 'modal-xl' });
                editModal3.componentInstance.id = item.account_id;
                break;
            case 'registeration':
                var editModal4 = this.modalService.open(_todos_todos_component__WEBPACK_IMPORTED_MODULE_8__["RegisterationCheckComponent"], { size: 'lg', windowClass: 'modal-xl' });
                editModal4.componentInstance.data = item.data.account;
                editModal4.componentInstance.id = item.data.id;
                break;
        }
    };
    Dashboard1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard1',
            template: __webpack_require__(/*! ./dashboard1.component.html */ "./src/app/dashboard/dashboard1/dashboard1.component.html"),
            styles: [__webpack_require__(/*! ./dashboard1.component.scss */ "./src/app/dashboard/dashboard1/dashboard1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], ng_event_bus__WEBPACK_IMPORTED_MODULE_5__["NgEventBus"]])
    ], Dashboard1Component);
    return Dashboard1Component;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard2/dashboard2.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dashboard2/dashboard2.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\n    <div class=\"card bg-primary\">\n      <div class=\"card-content\">\n        <div class=\"card-body pt-2 pb-0\">\n          <div class=\"media\">\n            <div class=\"media-body white text-left\">\n              <h3 class=\"font-large-1 mb-0\">$15,678</h3>\n              <span>Total Cost</span>\n            </div>\n            <div class=\"media-right white text-right\">\n              <i class=\"icon-bulb font-large-1\"></i>\n            </div>\n          </div>\n        </div>\n        <div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartShadow mb-3\">\n          <x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\"\n            [responsiveOptions]=\"WidgetlineChart.responsiveOptions\" [events]=\"WidgetlineChart.events\">\n          </x-chartist>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\n    <div class=\"card bg-warning\">\n      <div class=\"card-content\">\n        <div class=\"card-body pt-2 pb-0\">\n          <div class=\"media\">\n            <div class=\"media-body white text-left\">\n              <h3 class=\"font-large-1 mb-0\">$2156</h3>\n              <span>Total Tax</span>\n            </div>\n            <div class=\"media-right white text-right\">\n              <i class=\"icon-pie-chart font-large-1\"></i>\n            </div>\n          </div>\n        </div>\n        <div id=\"Widget-line-chart2\" class=\"height-75 WidgetlineChart WidgetlineChartShadow mb-3\">\n          <x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\"\n            [responsiveOptions]=\"WidgetlineChart.responsiveOptions\" [events]=\"WidgetlineChart.events\">\n          </x-chartist>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\n    <div class=\"card bg-success\">\n      <div class=\"card-content\">\n        <div class=\"card-body pt-2 pb-0\">\n          <div class=\"media\">\n            <div class=\"media-body white text-left\">\n              <h3 class=\"font-large-1 mb-0\">$45,668</h3>\n              <span>Total Sales</span>\n            </div>\n            <div class=\"media-right white text-right\">\n              <i class=\"icon-graph font-large-1\"></i>\n            </div>\n          </div>\n        </div>\n        <div id=\"Widget-line-chart2\" class=\"height-75 WidgetlineChart WidgetlineChartShadow mb-3\">\n          <x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\"\n            [responsiveOptions]=\"WidgetlineChart.responsiveOptions\" [events]=\"WidgetlineChart.events\">\n          </x-chartist>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\n    <div class=\"card bg-danger\">\n      <div class=\"card-content\">\n        <div class=\"card-body pt-2 pb-0\">\n          <div class=\"media\">\n            <div class=\"media-body white text-left\">\n              <h3 class=\"font-large-1 mb-0\">$32,454</h3>\n              <span>Total Earning</span>\n            </div>\n            <div class=\"media-right white text-right\">\n              <i class=\"icon-wallet font-large-1\"></i>\n            </div>\n          </div>\n        </div>\n        <div id=\"Widget-line-chart2\" class=\"height-75 WidgetlineChart WidgetlineChartShadow mb-3\">\n          <x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\"\n            [responsiveOptions]=\"WidgetlineChart.responsiveOptions\" [events]=\"WidgetlineChart.events\">\n          </x-chartist>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\" matchHeight=\"card\">\n  <div class=\"col-xl-4 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title mb-0\">Discover People</h4>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <div class=\"media mb-3\">\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-12.png\">\n            <div class=\"media-body\">\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Jessica Rice</h4>\n            </div>\n            <a class=\"d-flex ml-3 btn btn-raised btn-round gradient-blackberry py-2 width-150 justify-content-center white\">Following</a>\n          </div>\n          <div class=\"media mb-3\">\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-danger height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.png\">\n            <div class=\"media-body\">\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Jacob Rios</h4>\n            </div>\n            <a class=\"d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center\">Follow</a>\n          </div>\n          <div class=\"media mb-3\">\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-success height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\">\n            <div class=\"media-body\">\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Russell Diaz</h4>\n            </div>\n            <a class=\"d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center\">Follow</a>\n          </div>\n          <div class=\"media mb-3\">\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-warning height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-6.png\">\n            <div class=\"media-body\">\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Sara Bell</h4>\n            </div>\n            <a class=\"d-flex ml-3 btn btn-raised btn-round gradient-blackberry py-2 width-150 justify-content-center white\">Following</a>\n          </div>\n          <div class=\"media mb-3\">\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-info height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-18.png\">\n            <div class=\"media-body\">\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Janet Lucas</h4>\n            </div>\n            <a class=\"d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center\">Follow</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-8 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title mb-0\">Sales Analysis</h4>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <div class=\"chart-info mb-3\">\n            <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Sales</span>\n            <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle warning font-small-2 mr-1\"></i> Visits</span>\n            <span class=\"text-uppercase\"><i class=\"fa fa-circle danger font-small-2 mr-1\"></i> clicks</span>\n          </div>\n          <div id=\"line-chart1\" class=\"height-350 lineChart1 lineChart1Shadow\">\n            <x-chartist class=\"\" [data]=\"lineChart1.data\" [type]=\"lineChart1.type\" [options]=\"lineChart1.options\"\n              [responsiveOptions]=\"lineChart1.responsiveOptions\" [events]=\"lineChart1.events\">\n            </x-chartist>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\" matchHeight=\"card\">\n  <div class=\"col-lg-4 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header text-center pb-0\">\n        <span class=\"font-medium-2 primary\">Steps</span>\n        <h3 class=\"font-large-2 mt-1\">3261</h3>\n      </div>\n      <div class=\"card-content\">\n        <div id=\"donut-chart1\" class=\"height-250 donut1\">\n          <x-chartist [data]=\"DonutChart1.data\" [type]=\"DonutChart1.type\" [options]=\"DonutChart1.options\"\n            [responsiveOptions]=\"DonutChart1.responsiveOptions\" [events]=\"DonutChart1.events\">\n          </x-chartist>\n        </div>\n        <div class=\"card-body text-center\">\n          <span class=\"font-large-1 d-block mb-1\">5000</span>\n          <span class=\"primary font-medium-1\">Steps Today's Target</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header text-center pb-0\">\n        <span class=\"font-medium-2 warning\">Distance</span>\n        <h3 class=\"font-large-2 mt-1\">7.6\n          <span class=\"font-medium-1 grey darken-1 text-bold-400\">miles</span>\n        </h3>\n      </div>\n      <div class=\"card-content\">\n        <div id=\"donut-chart2\" class=\"height-250 donut2\">\n          <x-chartist [data]=\"DonutChart2.data\" [type]=\"DonutChart2.type\" [options]=\"DonutChart2.options\"\n            [responsiveOptions]=\"DonutChart2.responsiveOptions\" [events]=\"DonutChart2.events\">\n          </x-chartist>\n        </div>\n        <div class=\"card-body text-center\">\n          <span class=\"font-large-1 d-block mb-1\">10</span>\n          <span class=\"warning font-medium-1\">Miles Today's Target</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header text-center pb-0\">\n        <span class=\"font-medium-2 danger\">Calories</span>\n        <h3 class=\"font-large-2 mt-1\">4,025\n          <span class=\"font-medium-1 grey darken-1 text-bold-400\">kcal</span>\n        </h3>\n      </div>\n      <div class=\"card-content\">\n        <div id=\"donut-chart3\" class=\"height-250 donut3\">\n          <x-chartist [data]=\"DonutChart3.data\" [type]=\"DonutChart3.type\" [options]=\"DonutChart3.options\"\n            [responsiveOptions]=\"DonutChart3.responsiveOptions\" [events]=\"DonutChart3.events\">\n          </x-chartist>\n        </div>\n        <div class=\"card-body text-center\">\n          <span class=\"font-large-1 d-block mb-1\">5000</span>\n          <span class=\"danger font-medium-1\">kcla Today's Target</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\" matchHeight=\"card\">\n  <div class=\"col-xl-6 col-lg-12 col-sm-12\">\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <div class=\"card-img\">\n          <img class=\"card-img-top img-fluid height-300\" src=\"assets/img/photos/weather-1.jpg\" alt=\"Card image cap\">\n          <h4 class=\"card-title\">Sunny</h4>\n          <a class=\"btn btn-floating halfway-fab bg-primary\"><i class=\"ft-plus\"></i></a>\n        </div>\n        <div class=\"card-body mt-2\">\n          <div class=\"row\">\n            <div class=\"col-2 text-center\">\n              <span class=\"d-block\">Mon</span>\n              <i class=\"wi wi-day-sunny d-block warning font-large-1 my-3\"></i>\n              <span class=\"d-block\">13&deg;</span>\n            </div>\n            <div class=\"col-2 text-center\">\n              <span class=\"d-block\">Tue</span>\n              <i class=\"wi wi-day-cloudy d-block warning font-large-1 my-3\"></i>\n              <span class=\"d-block\">12&deg;</span>\n            </div>\n            <div class=\"col-2 text-center\">\n              <span class=\"d-block\">Wed</span>\n              <i class=\"wi wi-day-cloudy-gusts d-block warning font-large-1 my-3\"></i>\n              <span class=\"d-block\">10&deg;</span>\n            </div>\n            <div class=\"col-2 text-center\">\n              <span class=\"d-block\">Thu</span>\n              <i class=\"wi wi-day-cloudy-windy d-block warning font-large-1 my-3\"></i>\n              <span class=\"d-block\">12&deg;</span>\n            </div>\n            <div class=\"col-2 text-center\">\n              <span class=\"d-block\">Fri</span>\n              <i class=\"wi wi-day-fog d-block warning font-large-1 my-3\"></i>\n              <span class=\"d-block\">9&deg;</span>\n            </div>\n            <div class=\"col-2 text-center\">\n              <span class=\"d-block\">Sat</span>\n              <i class=\"wi wi-day-lightning d-block warning font-large-1 my-3\"></i>\n              <span class=\"d-block\">6&deg;</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-6 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header pb-0\">\n        <h4 class=\"card-title\">Statistics</h4>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <div class=\"chart-info mb-2\">\n            <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Sales</span>\n            <span class=\"text-uppercase\"><i class=\"fa fa-circle warning font-small-2 mr-1\"></i> Visits</span>\n          </div>\n          <div id=\"line-chart2\" class=\"height-350 lineChart2 lineChart2Shadow\">\n            <x-chartist class=\"\" [data]=\"lineChart2.data\" [type]=\"lineChart2.type\" [options]=\"lineChart2.options\"\n              [responsiveOptions]=\"lineChart2.responsiveOptions\" [events]=\"lineChart2.events\">\n            </x-chartist>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row mb-3\" matchHeight=\"card\">\n  <div class=\"col-xl-4 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <div class=\"row d-flex mb-3 py-2\">\n            <div class=\"col align-self-center text-center\"><i class=\"icon-graph font-large-2 blue-grey lighten-2\"></i></div>\n            <div class=\"col align-self-center\"><img alt=\"96x96\" class=\"bg-danger width-150 rounded-circle img-fluid\"\n                src=\"assets/img/portrait/small/avatar-s-11.png\"></div>\n            <div class=\"col align-self-center text-center\"><i class=\"icon-envelope font-large-2 blue-grey lighten-2\"></i></div>\n          </div>\n          <h3 class=\"font-large-1 text-center\">Kevin Sullivan</h3>\n          <span class=\"font-medium-1 grey d-block text-center\">UX Designer</span>\n          <div class=\"row mt-4 mb-3\">\n            <div class=\"col-xl-7 col-8 \">\n              <div id=\"Widget-line-chart1\" class=\"height-75 WidgetlineChart1 WidgetlineChart1Shadow px-2\">\n                <x-chartist class=\"\" [data]=\"WidgetlineChart1.data\" [type]=\"WidgetlineChart1.type\" [options]=\"WidgetlineChart1.options\"\n                  [responsiveOptions]=\"WidgetlineChart1.responsiveOptions\" [events]=\"WidgetlineChart1.events\">\n                </x-chartist>\n              </div>\n            </div>\n            <div class=\"col-xl-5 col-4\">\n              <span class=\"font-large-1\"><i class=\"fa fa-caret-up font-large-2 success\"></i> 27 %</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <div class=\"card-img\">\n          <ngb-carousel>\n            <ng-template ngbSlide>\n              <img src=\"assets/img/photos/17.jpg\" alt=\"Random first slide\">\n              <div class=\"carousel-caption\">\n                <h3>First slide label</h3>\n                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide>\n              <img src=\"assets/img/photos/13.jpg\" alt=\"Random second slide\">\n              <div class=\"carousel-caption\">\n                <h3>Second slide label</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide>\n              <img src=\"assets/img/photos/12.jpg\" alt=\"Random third slide\">\n              <div class=\"carousel-caption\">\n                <h3>Third slide label</h3>\n                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n              </div>\n            </ng-template>\n          </ngb-carousel>\n          <a class=\"btn btn-floating halfway-fab btn-large gradient-blackberry\"><i class=\"ft-plus\"></i></a>\n        </div>\n        <div class=\"card-body mt-3\">\n          <h4 class=\"card-title\">Card title</h4>\n          <p class=\"card-text\">Sweet halvah dragée jelly-o halvah carrot cake oat cake. Donut jujubes jelly chocolate\n            cake.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">Earnings</h4>\n        <span class=\"grey\">Mon 18 - Sun 21</span>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <div class=\"earning-details mb-4\">\n            <h3 class=\"font-large-2 mb-1\">$4295.36 <i class=\"ft-arrow-up font-large-2 teal accent-3\"></i></h3>\n            <span class=\"font-medium-1 grey d-block\">Total Earnings</span>\n          </div>\n          <div id=\"Widget-line-chart2\" class=\"height-100 WidgetlineChart2 WidgetlineChart2Shadow\">\n            <x-chartist class=\"\" [data]=\"WidgetlineChart2.data\" [type]=\"WidgetlineChart2.type\" [options]=\"WidgetlineChart2.options\"\n              [responsiveOptions]=\"WidgetlineChart2.responsiveOptions\" [events]=\"WidgetlineChart2.events\">\n            </x-chartist>\n          </div>\n          <div class=\"action-buttons mt-4 mb-1 text-center\">\n            <a class=\"btn btn-raised gradient-blackberry py-2 px-4 white mr-2\">View Full</a>\n            <a class=\"btn btn-raised btn-outline-grey py-2 px-3\">Print</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\" matchHeight=\"card\">\n  <div class=\"col-lg-4 col-md-4 col-sm-12 mb-2\">\n    <div class=\"card card-inverse bg-primary text-center\">\n      <div class=\"card-content\">\n        <div class=\"card-img overlap\">\n          <img src=\"assets/img/elements/11.png\" alt=\"element 06\" width=\"190\" class=\"mb-1\">\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">New Arrival</h4>\n          <p class=\"card-text\">Donut toffee candy brownie soufflé macaroon.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-4 col-md-4 col-sm-12 mb-2\">\n    <div class=\"card card-inverse bg-danger text-center\">\n      <div class=\"card-content\">\n        <div class=\"card-img overlap\">\n          <img src=\"assets/img/elements/14.png\" alt=\"element 03\" width=\"170\">\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Brand Minute</h4>\n          <p class=\"card-text\">Donut toffee candy brownie soufflé macaroon.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-4 col-md-4 col-sm-12 mb-2\">\n    <div class=\"card card-inverse bg-warning text-center\">\n      <div class=\"card-content\">\n        <div class=\"card-img overlap\">\n          <img src=\"assets/img/elements/07.png\" alt=\"element 07\" width=\"225\">\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Brand Minute</h4>\n          <p class=\"card-text\">Donut toffee candy brownie soufflé macaroon.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\" matchHeight=\"card\">\n  <div class=\"col-xl-8 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header pb-0\">\n        <h4 class=\"card-title\">Sales Per Visit</h4>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <div class=\"chart-info mb-2\">\n            <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Sales</span>\n            <span class=\"text-uppercase\"><i class=\"fa fa-circle warning font-small-2 mr-1\"></i> Visits</span>\n          </div>\n          <div id=\"line-area-chart\" class=\"height-300 lineAreaChart mb-1\">\n            <x-chartist class=\"\" [data]=\"lineAreaChart.data\" [type]=\"lineAreaChart.type\" [options]=\"lineAreaChart.options\"\n              [responsiveOptions]=\"lineAreaChart.responsiveOptions\" [events]=\"lineAreaChart.events\">\n\n            </x-chartist>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">DAILY DIET</h4>\n          <p class=\"card-text\">Some quick example text to build on the card.</p>\n        </div>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item text-left\">\n            <span class=\"badge bg-primary float-right text-white\">4</span> Protein Milk\n          </li>\n          <li class=\"list-group-item text-left\">\n            <span class=\"badge bg-info float-right text-white\">2</span> oz Water\n          </li>\n          <li class=\"list-group-item text-left\">\n            <span class=\"badge bg-warning float-right text-white\">6</span> Vegetable Juice\n          </li>\n          <li class=\"list-group-item text-left\">\n            <span class=\"badge bg-success float-right text-white\">1</span> Sugar Free Jello-O\n          </li>\n          <li class=\"list-group-item text-left\">\n            <span class=\"badge bg-danger float-right text-white\">3</span> Protein Meal\n          </li>\n        </ul>\n        <div class=\"card-body\">\n          <a class=\"card-link success\">Card link</a>\n          <a class=\"card-link success\">Another link</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard2/dashboard2.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dashboard2/dashboard2.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChartShadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except for the spread property */ }\n\n:host /deep/ .WidgetlineChart1 .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart1 .ct-line {\n  stroke: url(\"/dashboard#widgradient\") !important; }\n\n:host /deep/ .WidgetlineChart1Shadow {\n  -webkit-filter: drop-shadow(0px 20px 5px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 5px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart2 .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart2 .ct-line {\n  stroke: url(\"/dashboard#widgradient1\") !important; }\n\n:host /deep/ .WidgetlineChart2 .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChart2Shadow {\n  -webkit-filter: drop-shadow(0px 20px 5px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 5px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \n                                                       for the spread property */ }\n\n:host /deep/ .donut1 .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 60px;\n  fill: #009DA0; }\n\n:host /deep/ .donut1 .ct-outstanding .ct-slice-donut {\n  stroke: #eee; }\n\n:host /deep/ .donut1 .ct-done .ct-slice-donut {\n  stroke: #009DA0; }\n\n:host /deep/ .donut2 .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 60px;\n  fill: #FF8D60; }\n\n:host /deep/ .donut2 .ct-outstanding .ct-slice-donut {\n  stroke: #eee; }\n\n:host /deep/ .donut2 .ct-done .ct-slice-donut {\n  stroke: #FF8D60; }\n\n:host /deep/ .donut3 .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 60px;\n  fill: #FF586B; }\n\n:host /deep/ .donut3 .ct-outstanding .ct-slice-donut {\n  stroke: #eee; }\n\n:host /deep/ .donut3 .ct-done .ct-slice-donut {\n  stroke: #FF586A; }\n\n:host /deep/ .lineAreaChart .ct-series-a .ct-area {\n  fill: url(\"/dashboard#gradient\") !important; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-area {\n  fill: #ff8d60;\n  fill-opacity: 0.1; }\n\n:host /deep/ .lineAreaChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-point-circle {\n  stroke: #ff8d60; }\n\n:host /deep/ .lineAreaChart .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineAreaChart .ct-line {\n  fill: none;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart2 .ct-series-b .ct-point-circle {\n  stroke: #ff8d60; }\n\n:host /deep/ .lineChart2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineChart2 .ct-line {\n  fill: none;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart2Shadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \n                                                       for the spread property */ }\n\n:host /deep/ .lineChart1 .ct-line {\n  fill: none;\n  stroke-width: 3px; }\n\n:host /deep/ .lineChart1 .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .lineChart1Shadow {\n  -webkit-filter: drop-shadow(0px 20px 6px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 6px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \n                                                       for the spread property */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGltbWlyemFlZS9Xb3JrL2dldHNwb3RpZnktZnJvbnRlbmQvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkMi9kYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkMi9kYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQXFCO0VBQ3JCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGlCQUFpQixFQUFBOztBQUtyQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSw0REFBMkQ7RUFDbkQsb0RBQW1EO0VBQUUsOERBQUEsRUFBK0Q7O0FBTWhJO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0RBQWlFLEVBQUE7O0FBR3JFO0VBQ0ksNERBQTJEO0VBQ25ELG9EQUFtRDtFQUFFO2dGQ1JlLEVEU0M7O0FBTWpGO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaURBQWlFLEVBQUE7O0FBRXJFO0VBQ0kscUJBQXFCO0VBQ3BCLGdDQUFnQyxFQUFBOztBQUVyQztFQUNJLDREQUEyRDtFQUNuRCxvREFBbUQ7RUFBRTtnRkNYZSxFRFlDOztBQU9qRjtFQUNJLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWUsRUFBQTs7QUFPakI7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlLEVBQUE7O0FBT2pCO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZSxFQUFBOztBQU9qQjtFQUNFLDJDQUE0RCxFQUFBOztBQUdoRTtFQUNJLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBT3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLDREQUEyRDtFQUNuRCxvREFBbUQ7RUFBRTtnRkNsRGUsRURtREM7O0FBTWpGO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLDREQUEyRDtFQUNuRCxvREFBbUQ7RUFBRTtnRkN2RGUsRUR3REMiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkMi9kYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3Njc3MvZ3JhZGllbnQtdmFyaWFibGVzXCI7XG5cbjpob3N0IC9kZWVwLyAuY3QtZ3JpZHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwcHg7XG4gICAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbjpob3N0IC9kZWVwLyAuY3QtbGFiZWx7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi8vd2lkZ2V0IExpbmUgQ2hhcnQgQ1NTIFN0YXJ0c1xuIFxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LXBvaW50IHtcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcbn1cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1saW5le1xuICAgIHN0cm9rZTogI2ZmZjtcbn1cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0U2hhZG93IHtcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuOCkgKTtcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuOCkgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXG59XG5cbi8vd2lkZ2V0IExpbmUgQ2hhcnQgQ1NTIEVuZHNcblxuLy93aWRnZXQgTGluZSBDaGFydCAxIENTUyBTdGFydHNcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0MSAuY3QtcG9pbnQge1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufVxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQxIC5jdC1saW5le1xuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQyLWdyYWRpZW50LXBhdGggKyAgI3dpZGdyYWRpZW50KSAhaW1wb3J0YW50OyAvLyAjMDA5REEwOyBcbn1cblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQxU2hhZG93IHtcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDVweCByZ2JhKDAsMCwwLDAuMykgKTtcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDVweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXG59XG4vL3dpZGdldCBMaW5lIENoYXJ0IDEgQ1NTIEVuZHNcblxuLy93aWRnZXQgTGluZSBDaGFydCAyIENTUyBTdGFydHNcblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQyIC5jdC1wb2ludCB7XG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XG59XG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydDIgLmN0LWxpbmV7XG4gICAgc3Ryb2tlOnVybCgkZGFzaGJvYXJkMi1ncmFkaWVudC1wYXRoICsgICN3aWRncmFkaWVudDEpICFpbXBvcnRhbnQ7XG59XG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydDIgLmN0LWdyaWQge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDsgICAgXG4gICAgIHN0cm9rZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQyU2hhZG93IHtcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDVweCByZ2JhKDAsMCwwLDAuMykgKTtcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDVweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXG59XG4vL3dpZGdldCBMaW5lIENoYXJ0IDIgQ1NTIEVuZHNcblxuXG4vL0RvbnV0IENoYXJ0IDEgQ1NTIFN0YXJ0c1xuXG46aG9zdCAvZGVlcC8gLmRvbnV0MSAuY3QtbGFiZWwge1xuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gICAgYWxpZ25tZW50LWJhc2VsaW5lOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZpbGw6ICMwMDlEQTA7XG4gIH1cblxuICA6aG9zdCAvZGVlcC8gLmRvbnV0MSAuY3Qtb3V0c3RhbmRpbmcgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICNlZWU7ICAgIFxuICB9XG5cbiAgOmhvc3QgL2RlZXAvIC5kb251dDEgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICMwMDlEQTA7XG4gIH1cblxuICAvL0RvbnV0IENoYXJ0IDEgQ1NTIEVuZHNcblxuICAvL0RvbnV0IENoYXJ0IDIgQ1NTIFN0YXJ0c1xuXG4gIDpob3N0IC9kZWVwLyAuZG9udXQyIC5jdC1sYWJlbCB7XG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgZmlsbDogI0ZGOEQ2MDtcbiAgfVxuXG4gIDpob3N0IC9kZWVwLyAuZG9udXQyIC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogI2VlZTsgICAgXG4gIH1cblxuICA6aG9zdCAvZGVlcC8gLmRvbnV0MiAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogI0ZGOEQ2MDtcbiAgfVxuXG4gIC8vRG9udXQgQ2hhcnQgMiBDU1MgRW5kc1xuXG4gIC8vRG9udXQgQ2hhcnQgMyBDU1MgU3RhcnRzXG5cbiAgOmhvc3QgL2RlZXAvIC5kb251dDMgLmN0LWxhYmVsIHtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICAgIGFsaWdubWVudC1iYXNlbGluZTogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmaWxsOiAjRkY1ODZCO1xuICB9XG5cbiAgOmhvc3QgL2RlZXAvIC5kb251dDMgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XG4gICAgc3Ryb2tlOiAjZWVlOyAgICBcbiAgfVxuXG4gIDpob3N0IC9kZWVwLyAuZG9udXQzIC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XG4gICAgc3Ryb2tlOiAjRkY1ODZBO1xuICB9XG5cbiAgLy9Eb251dCBDaGFydCAzIENTUyBFbmRzXG5cbiAgLy8gTGluZSBhcmVhIGNoYXJ0IENTUyBTdGFydHNcblxuICA6aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDItZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xuICAgIGZpbGw6ICNmZjhkNjA7XG4gICAgZmlsbC1vcGFjaXR5OiAwLjE7XG59XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYUNoYXJ0IC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgICBzdHJva2U6ICNmZjhkNjA7XG59XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XG4gICAgc3Ryb2tlOiAjMzFhZmIyO1xufVxuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LWxpbmUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG59XG5cbi8vIExpbmUgYXJlYSBjaGFydCBDU1MgRW5kc1xuXG4vL0xpbmUgY2hhcnQgMiBDU1MgU3RhcnRzXG5cbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MiAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQyIC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgICBzdHJva2U6ICNmZjhkNjA7XG59XG5cbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XG4gICAgc3Ryb2tlOiAjMzFhZmIyO1xufVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDIgLmN0LWxpbmUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG59XG5cbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MlNoYWRvdyB7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xufVxuLy9MaW5lIGNoYXJ0IDIgQ1NTIEVuZHNcblxuLy9MaW5lIENoYXJ0IDEgQ1NTIFN0YXJ0c1xuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDEgLmN0LWxpbmUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG59XG5cbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MSAuY3QtcG9pbnQge1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDFTaGFkb3cge1xuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggNnB4IHJnYmEoMCwwLDAsMC4zKSApO1xuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggNnB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cbn1cbi8vTGluZSBDaGFydCAxIENTUyBFbmRzIiwiOmhvc3QgL2RlZXAvIC5jdC1ncmlkIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xuICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjlyZW07IH1cblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LXBvaW50IHtcbiAgc3Ryb2tlLXdpZHRoOiAwcHg7IH1cblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWxpbmUge1xuICBzdHJva2U6ICNmZmY7IH1cblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnRTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC44KSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC44KSk7XG4gIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqLyB9XG5cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0MSAuY3QtcG9pbnQge1xuICBzdHJva2Utd2lkdGg6IDBweDsgfVxuXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydDEgLmN0LWxpbmUge1xuICBzdHJva2U6IHVybChcIi9kYXNoYm9hcmQjd2lkZ3JhZGllbnRcIikgIWltcG9ydGFudDsgfVxuXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydDFTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqLyB9XG5cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0MiAuY3QtcG9pbnQge1xuICBzdHJva2Utd2lkdGg6IDBweDsgfVxuXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydDIgLmN0LWxpbmUge1xuICBzdHJva2U6IHVybChcIi9kYXNoYm9hcmQjd2lkZ3JhZGllbnQxXCIpICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQyIC5jdC1ncmlkIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xuICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgfVxuXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydDJTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqLyB9XG5cbjpob3N0IC9kZWVwLyAuZG9udXQxIC5jdC1sYWJlbCB7XG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gIGFsaWdubWVudC1iYXNlbGluZTogbWlkZGxlO1xuICBmb250LXNpemU6IDYwcHg7XG4gIGZpbGw6ICMwMDlEQTA7IH1cblxuOmhvc3QgL2RlZXAvIC5kb251dDEgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XG4gIHN0cm9rZTogI2VlZTsgfVxuXG46aG9zdCAvZGVlcC8gLmRvbnV0MSAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xuICBzdHJva2U6ICMwMDlEQTA7IH1cblxuOmhvc3QgL2RlZXAvIC5kb251dDIgLmN0LWxhYmVsIHtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgYWxpZ25tZW50LWJhc2VsaW5lOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZmlsbDogI0ZGOEQ2MDsgfVxuXG46aG9zdCAvZGVlcC8gLmRvbnV0MiAuY3Qtb3V0c3RhbmRpbmcgLmN0LXNsaWNlLWRvbnV0IHtcbiAgc3Ryb2tlOiAjZWVlOyB9XG5cbjpob3N0IC9kZWVwLyAuZG9udXQyIC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XG4gIHN0cm9rZTogI0ZGOEQ2MDsgfVxuXG46aG9zdCAvZGVlcC8gLmRvbnV0MyAuY3QtbGFiZWwge1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmaWxsOiAjRkY1ODZCOyB9XG5cbjpob3N0IC9kZWVwLyAuZG9udXQzIC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xuICBzdHJva2U6ICNlZWU7IH1cblxuOmhvc3QgL2RlZXAvIC5kb251dDMgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcbiAgc3Ryb2tlOiAjRkY1ODZBOyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xuICBmaWxsOiB1cmwoXCIvZGFzaGJvYXJkI2dyYWRpZW50XCIpICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYUNoYXJ0IC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XG4gIGZpbGw6ICNmZjhkNjA7XG4gIGZpbGwtb3BhY2l0eTogMC4xOyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gIGZpbGw6IHdoaXRlOyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZSB7XG4gIHN0cm9rZTogI2ZmOGQ2MDsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2U6ICMzMWFmYjI7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYUNoYXJ0IC5jdC1saW5lIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiAxcHg7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQyIC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2Utd2lkdGg6IDJweDtcbiAgZmlsbDogd2hpdGU7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQyIC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZmY4ZDYwOyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XG4gIHN0cm9rZTogIzMxYWZiMjsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDIgLmN0LWxpbmUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2Utd2lkdGg6IDFweDsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDJTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDI1cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDI1cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqLyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MSAuY3QtbGluZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZS13aWR0aDogM3B4OyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MSAuY3QtcG9pbnQge1xuICBzdHJva2Utd2lkdGg6IDBweDsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDFTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqLyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard2/dashboard2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard2/dashboard2.component.ts ***!
  \**************************************************************/
/*! exports provided: Dashboard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return Dashboard2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_2__);



var data = __webpack_require__(/*! ../../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var Dashboard2Component = /** @class */ (function () {
    function Dashboard2Component() {
        // Line chart configuration Starts
        this.WidgetlineChart = {
            type: 'Line', data: data['WidgetlineChart2'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 50,
                    showLabel: false,
                    offset: 0,
                },
                fullWidth: true
            },
        };
        // Line chart configuration Ends
        // Line chart configuration Starts
        this.WidgetlineChart1 = {
            type: 'Line', data: data['WidgetlineChart3'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 50,
                    showLabel: false,
                    offset: 0,
                },
                fullWidth: true,
                chartPadding: { top: 0, right: 0, bottom: 10, left: 0 }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'widgradient',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(132, 60, 247, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    });
                },
            },
        };
        // Line chart configuration Ends
        // Line chart configuration Starts
        this.WidgetlineChart2 = {
            type: 'Line', data: data['WidgetlineChart'],
            options: {
                axisX: {
                    showGrid: true,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 40,
                    showLabel: false,
                    offset: 0,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_2__["Interpolation"].cardinal({
                    tension: 0
                }),
                fullWidth: true
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'widgradient1',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 201, 255,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(17,228,183, 1)'
                    });
                },
            },
        };
        // Line chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart1 = {
            type: 'Pie',
            data: data['DashboardDonut'],
            options: {
                donut: true,
                donutWidth: 3,
                startAngle: 0,
                chartPadding: 25,
                labelInterpolationFnc: function (value) {
                    return '\ue9c9';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                                class: 'ct-label',
                                'font-family': 'feather'
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart2 = {
            type: 'Pie',
            data: data['DashboardDonut'],
            options: {
                donut: true,
                donutWidth: 3,
                startAngle: 90,
                chartPadding: 25,
                labelInterpolationFnc: function (value) {
                    return '\ue9e7';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                                class: 'ct-label',
                                'font-family': 'feather'
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart3 = {
            type: 'Pie',
            data: data['DashboardDonut'],
            options: {
                donut: true,
                donutWidth: 3,
                startAngle: 270,
                chartPadding: 25,
                labelInterpolationFnc: function (value) {
                    return '\ue964';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                                class: 'ct-label',
                                'font-family': 'feather'
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        // Line area chart configuration Starts
        this.lineAreaChart = {
            type: 'Line',
            data: data['lineArea3'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(255, 255, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(38, 198, 218, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_2__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Line area chart configuration Ends
        // Line chart configuration Starts
        this.lineChart2 = {
            type: 'Line', data: data['line2'],
            options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                fullWidth: true,
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 381px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_2__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line chart configuration Ends
        // Line chart configuration Starts
        this.lineChart1 = {
            type: 'Line', data: data['line1'],
            options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                fullWidth: true
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line chart configuration Ends
    }
    Dashboard2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard2',
            template: __webpack_require__(/*! ./dashboard2.component.html */ "./src/app/dashboard/dashboard2/dashboard2.component.html"),
            styles: [__webpack_require__(/*! ./dashboard2.component.scss */ "./src/app/dashboard/dashboard2/dashboard2.component.scss")]
        })
    ], Dashboard2Component);
    return Dashboard2Component;
}());



/***/ }),

/***/ "./src/app/shared/data/chartist.json":
/*!*******************************************!*\
  !*** ./src/app/shared/data/chartist.json ***!
  \*******************************************/
/*! exports provided: Bar, Line3, ScatterLine, Scatter, lineArea4, lineArea3, lineArea2, lineAreaDashboard, lineArea1, Bi-PolarLine, DistributedSeries, donut, donutDashboard, DashboardDonut, LineDashboard, line2, line1, WidgetlineChart, WidgetlineChart2, WidgetlineChart3, DashboardBar, Stackbarchart, default */
/***/ (function(module) {

module.exports = {"Bar":{"labels":["Jan","Feb","Mar","Apr"],"series":[[5,4,3,7],[3,2,9,5]]},"Line3":{"labels":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"series":[[12,9,7,4,5,6,6],[2,1,10,7,3,7,2],[1,10,2,10,6,2,8]]},"ScatterLine":{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"series":[[5,5,10,8,7,5,4,null,null,null,10,10,7,8,6,9],[10,15,null,12,null,10,12,15,null,null,12,null,14,null,null,null],[null,null,null,null,3,4,1,3,4,6,7,9,5,null,null,null]]},"Scatter":{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"series":[[53.761530227932376,55.06077543488965,90.15619763154757,37.945743703232026,90.15064659594809,72.37213982905773,29.242023161826005,10.613377393892765,41.13272180459888,66.89170357483623,85.47173517613665,80.61313435041848,33.86466777842112,6.993834151672074,58.93321826442517,84.4944785171936,66.47863439014286,26.61792342884319,64.7715312645164,66.7721238997995,24.81459377695263,82.09485043326285,94.28939258245515,81.16315118589196,26.285515136087987,94.25034710171474,82.86738500874603,42.275860431799764,7.252221593822195,12.509815755028853,57.592396396889086,16.98227807583916,82.13296667627357,20.7798608815297,1.4886093931434141,27.717128889831557,83.02006467579533,46.825802760236044,4.449951322677559,63.949111152579285,76.2705142938321,92.84217568625859,33.34033701723147,83.32421059421287,30.95015406095809,99.26555827017742,64.73104862164556,58.3205528852039,98.07205383638176,34.217237701943006,76.84029415694194,77.51086205882534],[68.01743447487219,33.569040390627556,55.83518094287856,6.424873491809824,40.24108430485855,12.867529962712322,33.9171424717146,66.13486382709537,75.36042883674916,37.18758127466557,46.080488500245266,40.98286341759507,25.372664387026923,40.063178151024424,73.6495194240123,48.56310577188692,22.903651846539972,91.5635618730181,84.08459591966795,49.153284675642595,34.82239557500657,38.7753190443602,77.57931404198679,78.24594487949813,42.96149738863182,68.87344162290039,73.35891706187205,79.20638493178991,39.862955442611494,67.72254472880542,32.5667298714178,67.8951691474951,68.22845079029227,24.013142038835245,84.77387385278308,81.96540495436318,21.938120212431865,20.591735159801374,44.392082366517926,99.42917256114683,75.80197000496361,44.95928290576234,56.30251437622547,81.39575345403685,46.6480941362678,60.30444929651577,63.904344644822956,96.31525902388087,80.79036620032171,67.94970208668927,81.84914397158013,64.34930133297705],[94.83796449464408,0.05012881656139001,78.03842883107683,86.85066315022306,63.09834842166116,23.82558487142836,95.04013234951407,91.84355248378253,12.28927042529946,91.59027939302398,44.15426456286402,38.40309269293461,3.0323072732378,51.442756807992104,51.067878308530304,68.87925798432126,9.786004373688861,93.42472024399827,7.196590706996409,90.61672585107475,82.64800742042794,29.33983554466535,27.575295787547738,63.76900610636933,44.31691167371892,35.02049600051234,77.91406665575869,9.594366007019817,33.17507518940415,45.94854823450043,6.028395302814493,97.36303808493578,20.735238575670635,11.577295085428618,49.377810037702986,7.984978938697163,81.52380171386066,86.62152122764415,46.81516933597669,72.70055546352265,39.482785893198404,2.1729768023229346,32.730007414228865,11.8384494034782,97.04367174876609,37.87839695714026,96.1605067491887,24.340714355822968,90.92986653306863,1.9182109464024322,36.43773292877359,51.562138311337314],[90.93023971442824,91.24607758668748,83.11135627737995,38.89630350329263,47.48702934796674,83.10718371512166,93.40725921590878,62.65211828434698,76.93458061916239,94.13663459332706,15.47636651231441,93.70144628274673,80.7911280644665,32.06886936152644,6.458421962605865,14.668285135928372,10.700783089925082,46.997088144127886,53.02589740808132,15.662154340561152,94.70275097718405,59.27632659816442,53.88591373783527,21.602789791233846,29.326094253488066,8.159091366607441,52.57892041859127,71.68439221439431,61.773032787481455,43.02319475997418,97.7745443722398,41.77024219267196,32.79576671635134,26.614574588124352,96.60428591791621,68.90454201273897,33.39711159158707,94.56531035270376,83.77269890317353,72.91107164394433,50.31188574983041,54.67801129631369,69.65510719649639,59.96153020907791,50.66882388014429,97.73196339743835,12.936677564924759,30.197501751145396,7.071721221094629,60.85688790258899,51.276925828485446,30.951614223635193]]},"lineArea4":{"labels":[1,2,3,4,5,6,7,8],"series":[[5,9,7,8,5,3,5,4]]},"lineArea3":{"labels":[1,2,3,4,5,6,7,8],"series":[[0,5,15,8,15,9,30,0],[0,3,5,2,8,1,5,0]]},"lineArea2":{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"series":[[5,30,25,55,45,65,60,105,80,110,120,150],[80,95,87,155,140,147,130,180,160,175,165,200]]},"lineAreaDashboard":{"labels":[1,2,3,4,5,6,7,8],"series":[[0,20,10,45,20,36,21,0],[0,5,22,14,32,12,28,0]]},"lineArea1":{"labels":[1,2,3,4,5,6,7,8,9,10],"series":[[10,30,10,35,15,45,15,35,20,30],[0,10,30,10,30,15,30,15,30,0]]},"Bi-PolarLine":{"labels":[1,2,3,4,5,6,7,8],"series":[[1,2,3,1,-2,0,1,0],[-2,-1,-2,-1,-2.5,-1,-2,-1],[0,0,0,1,2,2.5,2,1],[2.5,2,1,0.5,1,0.5,-1,-2.5]]},"DistributedSeries":{"labels":["XS","S","M","L","XL","XXL","XXXL"],"series":[50,70,120,200,180,120,150]},"donut":{"series":[20,10,30,40]},"donutDashboard":{"series":[{"name":"done","className":"ct-done","value":23},{"name":"progress","className":"ct-progress","value":14},{"name":"outstanding","className":"ct-outstanding","value":35},{"name":"started","className":"ct-started","value":28}]},"DashboardDonut":{"series":[{"name":"done","className":"ct-done","value":10},{"name":"outstanding","className":"ct-outstanding","value":3}]},"LineDashboard":{"labels":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"series":[[80,85,75,65,63,70,82]]},"line2":{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"series":[[160,150,140,120,75,35,45,65,100,145,160,180],[100,95,90,100,110,120,130,140,130,95,75,80]]},"line1":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[65,105,145,105,145,185],[125,80,30,70,110,150],[175,190,160,190,140,100]]},"WidgetlineChart":{"labels":["1","2","3","4","5","6","7","8","9","10","11","12","13"],"series":[[50,45,60,55,70,55,60,55,65,57,60,53,53]]},"WidgetlineChart2":{"labels":["Jan","Feb","Mar","Apr","May","June","July","Aug"],"series":[[55,60,50,55,50,60,55,57]]},"WidgetlineChart3":{"labels":["Jan","Feb","Mar","Apr","May"],"series":[[50,70,45,75,85]]},"DashboardBar":{"labels":["Sport","Music","Travel","News"],"series":[[53,23,40,30]]},"Stackbarchart":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[8,9,5,6,7,4],[2,1,5,4,3,6]]}};

/***/ }),

/***/ "./src/app/shared/directives/match-height.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/match-height.directive.ts ***!
  \*************************************************************/
/*! exports provided: MatchHeightDirective, MatchHeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightModule", function() { return MatchHeightModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // call our matchHeight function here
        setTimeout(function () { _this.matchHeights(_this.el.nativeElement, _this.matchHeight); }, 300);
    };
    MatchHeightDirective.prototype.matchHeights = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        //Pixinvent - Match hight - fix --- comment below code
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MatchHeightDirective.prototype, "matchHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[matchHeight]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());

var MatchHeightModule = /** @class */ (function () {
    function MatchHeightModule() {
    }
    MatchHeightModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [MatchHeightDirective],
            exports: [MatchHeightDirective]
        })
    ], MatchHeightModule);
    return MatchHeightModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./pages/content-layout-page/content-pages.module": [
		"./src/app/pages/content-layout-page/content-pages.module.ts",
		"pages-content-layout-page-content-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/accounts/accounts.component.html":
/*!**************************************************!*\
  !*** ./src/app/accounts/accounts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Extended Table starts-->\n<div class=\"row text-left\">\n    <div class=\"col-6\">\n        <div class=\"content-header\">Accounts</div>\n        <p class=\"content-sub-header\">List of getspotify accounts.</p>\n    </div>\n    <div class=\"col-6\" style=\"text-align: right\">\n        <a class=\"btn btn-raised gradient-ibiza-sunset white m-2 mr-auto\" (click)=\"add()\">Add New Account</a>\n        <a class=\"btn btn-raised gradient-purple-bliss white m-2 mr-auto\" (click)=\"mass()\">Send Mass Message</a>\n        <a class=\"btn btn-raised gradient-pomegranate white m-2 mr-auto\" (click)=\"export()\">Export List</a>\n    </div>\n</div>\n<section id=\"extended\">\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label for=\"basicInput\">Search</label>\n                <input type=\"text\" class=\"form-control\" id=\"basicInput\" placeholder=\"Id, Email, Fullname\"\n                       [(ngModel)]=\"filter.search\" (keyup)=\"filterList()\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label for=\"mSelect\">Master</label>\n                <select class=\"form-control\" id=\"mSelect\" [(ngModel)]=\"filter.master_id\" (change)=\"filterList()\">\n                    <option value=\"0\">Select Master</option>\n                    <option *ngFor=\"let m of masters\" [value]=\"m.id\">{{m.email}}</option>\n                </select>\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label for=\"sSelect\">Status</label>\n                <select class=\"form-control\" id=\"sSelect\" [(ngModel)]=\"filter.status\" (change)=\"filterList()\">\n                    <option value=\"-1\">Select Status</option>\n                    <option value=\"1\">Active</option>\n                    <option value=\"0\">Inactive</option>\n                    <option value=\"2\">Pending</option>\n                </select>\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label for=\"pSelect\">Packages</label>\n                <select class=\"form-control\" id=\"pSelect\" [(ngModel)]=\"filter.package_id\" (change)=\"filterList()\">\n                    <option value=\"0\">Select Package</option>\n                    <option *ngFor=\"let p of packages\" [value]=\"p.id\">{{p.name}}</option>\n                </select>\n            </fieldset>\n        </div>\n    </div>\n    <div class=\"row text-left\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body\" style=\"padding: 0\">\n                        <table class=\"table table-responsive-md text-center\">\n                            <thead>\n                            <tr>\n                                <th (click)=\"changeSort('id')\"># <i *ngIf=\"sortBy=='id'\"\n                                                                    class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th (click)=\"changeSort('package_id')\">Package <i *ngIf=\"sortBy=='package_id'\"\n                                                                                  class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th (click)=\"changeSort('created_at')\">Created At <i *ngIf=\"sortBy=='created_at'\"\n                                                                                     class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th (click)=\"changeSort('expires_at')\">Expires In <i *ngIf=\"sortBy=='expires_at'\"\n                                                                                     class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th (click)=\"changeSort('status')\">Status <i *ngIf=\"sortBy=='status'\"\n                                                                             class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th (click)=\"changeSort('master_id')\">Master <i *ngIf=\"sortBy=='master_id'\"\n                                                                                class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th (click)=\"changeSort('email')\">Email <i *ngIf=\"sortBy=='email'\"\n                                                                           class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th>Password</th>\n                                <th (click)=\"changeSort('fullname')\">Full Name <i *ngIf=\"sortBy=='fullname'\"\n                                                                                  class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th>Actions</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngIf=\"isLoading\">\n                                <td colspan=\"10\"><img\n                                        style=\"filter: drop-shadow(0 0 2px purple);margin: 5px 0;position: initial;\"\n                                        src=\"assets/img/oval.svg\" class=\"loading-icon\"/></td>\n                            </tr>\n                            <tr *ngFor=\"let item of displayItems\">\n                                <td>{{item.id}}</td>\n                                <td>{{getPackageName(item.package_id)}}</td>\n                                <td>{{item.created_at * 1000 | date:'yyyy/MM/dd'}}</td>\n                                <td>{{item.expires_at | date:'yyyy/MM/dd'}}</td>\n                                <td>\n                                    <a class=\"btn btn-raised btn-round btn-sm {{getStatusClass(item.status)}}\"\n                                       style=\"margin:0\">{{getStatusTitle(item.status)}}</a>\n                                </td>\n                                <td>{{getMasterName(item.master_id)}}</td>\n                                <td>{{item.email}}</td>\n                                <td>{{item.password}}</td>\n                                <td>{{item.fullname}}</td>\n                                <td>\n                                    <a class=\"info p-0\" (click)=\"view(item.id)\">\n                                        <i class=\"ft-user font-medium-3 mr-2\"></i>\n                                    </a>\n                                    <a class=\"success p-0\" (click)=\"edit(item.id)\">\n                                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Extended Table Ends-->\n"

/***/ }),

/***/ "./src/app/accounts/accounts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/accounts/accounts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-xl .modal-lg {\n  max-width: 80%; }\n\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  outline: none; }\n\n.chat-application .chat-app-window, .chat-application .chat-app-form {\n  margin-left: 0 !important; }\n\n.chat-application .chat-app-window {\n  background: #f5f5f5; }\n\n.chat-application .chats .chat-left .chat-content {\n  background-color: #ffb092 !important; }\n\n.chats {\n  direction: rtl;\n  font-family: tahoma; }\n\nchat-application {\n  min-height: 400px; }\n\n.chat-application .chats .chat-body .chat-content {\n  background-color: #029200; }\n\n.chat-application .chats .time {\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGltbWlyemFlZS9Xb3JrL2dldHNwb3RpZnktZnJvbnRlbmQvc3JjL2FwcC9hY2NvdW50cy9hY2NvdW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudHMvYWNjb3VudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwteGwgLm1vZGFsLWxnIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5jbG9zZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpob3ZlciwgLmNsb3NlOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNoYXQtYXBwbGljYXRpb24gLmNoYXQtYXBwLXdpbmRvdywgLmNoYXQtYXBwbGljYXRpb24gLmNoYXQtYXBwLWZvcm0ge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uY2hhdC1hcHBsaWNhdGlvbiAuY2hhdC1hcHAtd2luZG93IHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxuLmNoYXQtYXBwbGljYXRpb24gLmNoYXRzIC5jaGF0LWxlZnQgLmNoYXQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIwOTIgIWltcG9ydGFudDtcbn1cblxuLmNoYXRzIHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIGZvbnQtZmFtaWx5OiB0YWhvbWE7XG59XG5cbmNoYXQtYXBwbGljYXRpb24ge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cblxuLmNoYXQtYXBwbGljYXRpb24gLmNoYXRzIC5jaGF0LWJvZHkgLmNoYXQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjkyMDA7XG59XG5cbi5jaGF0LWFwcGxpY2F0aW9uIC5jaGF0cyAudGltZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/accounts/accounts.component.ts":
/*!************************************************!*\
  !*** ./src/app/accounts/accounts.component.ts ***!
  \************************************************/
/*! exports provided: AccountsComponent, MassMessageComponent, AddAccountComponent, EditAccountComponent, ViewAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassMessageComponent", function() { return MassMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountComponent", function() { return AddAccountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountComponent", function() { return EditAccountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAccountComponent", function() { return ViewAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-event-bus */ "./node_modules/ng-event-bus/dist/ng_event_bus.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_event_bus__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







var AccountsComponent = /** @class */ (function () {
    function AccountsComponent(http, modalService, eventBus) {
        var _this = this;
        this.http = http;
        this.modalService = modalService;
        this.eventBus = eventBus;
        this.items = [];
        this.displayItems = [];
        this.packages = [];
        this.masters = [];
        this.isLoading = true;
        this.filter = { search: '', master_id: 0, status: -1, package_id: 0 };
        this.sort = 'asc';
        this.sortBy = 'id';
        this.eventBus.on('accounts:add').subscribe(function (message) {
            _this.getItems();
        });
    }
    AccountsComponent.prototype.ngOnInit = function () {
        this.getItems();
        this.getPackages();
        this.getMasters();
    };
    AccountsComponent.prototype.getItems = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('accounts')).subscribe(function (data) {
            _this.items = data;
            _this.changeSort('id');
            _this.isLoading = false;
        }, function (error) {
            console.log(error);
        });
    };
    AccountsComponent.prototype.getPackages = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('packages')).subscribe(function (data) {
            _this.packages = data;
        }, function (error) {
            console.log(error);
        });
    };
    AccountsComponent.prototype.getMasters = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('masters')).subscribe(function (data) {
            _this.masters = data;
        }, function (error) {
            console.log(error);
        });
    };
    AccountsComponent.prototype.getPackageName = function (id) {
        for (var i = 0; i < this.packages.length; i++) {
            if (this.packages[i].id == id) {
                return this.packages[i].name;
            }
        }
    };
    AccountsComponent.prototype.getStatusTitle = function (status) {
        if (status == 0) {
            return 'inactive';
        }
        if (status == 1) {
            return 'active';
        }
        return 'pending';
    };
    AccountsComponent.prototype.getStatusClass = function (status) {
        if (status == 0) {
            return 'btn-danger';
        }
        if (status == 1) {
            return 'btn-primary';
        }
        return 'btn-info';
    };
    AccountsComponent.prototype.getMasterName = function (master_id) {
        for (var i = 0; i < this.masters.length; i++) {
            if (this.masters[i].id == master_id) {
                return this.masters[i].email;
            }
        }
        return 'Not Selected';
    };
    AccountsComponent.prototype.formatDate = function (time) {
        var d = new Date(time);
        return (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate());
    };
    AccountsComponent.prototype.changeSort = function (sortBy) {
        var _this = this;
        if (this.sortBy === sortBy) {
            this.sort = (this.sort === 'desc' ? 'asc' : 'desc');
        }
        else {
            this.sort = 'desc';
            this.sortBy = sortBy;
        }
        this.items.sort(function (a, b) {
            if (a[_this.sortBy] === null || a[_this.sortBy] === undefined) {
                _this.filterList();
                return;
            }
            if (typeof a[_this.sortBy] === 'number') {
                if (_this.sort === 'asc') {
                    return a[_this.sortBy] - b[_this.sortBy];
                }
                else {
                    return b[_this.sortBy] - a[_this.sortBy];
                }
            }
            else {
                if (_this.sort === 'desc') {
                    return a[_this.sortBy].localeCompare(b[_this.sortBy]);
                }
                else {
                    return b[_this.sortBy].localeCompare(a[_this.sortBy]);
                }
            }
        });
        this.filterList();
    };
    AccountsComponent.prototype.filterList = function () {
        var _this = this;
        this.displayItems = [];
        this.items = this.items.map(function (item) {
            item.visible = true;
            return item;
        });
        if (this.filter.search !== '') {
            this.items = this.items.map(function (item) {
                if ((item.email ? item.email : '').indexOf(_this.filter.search) === -1
                    && (item.fullname ? item.fullname : '').indexOf(_this.filter.search) === -1
                    && '' + item['id'] !== _this.filter.search) {
                    item.visible = false;
                }
                return item;
            });
        }
        if ('' + this.filter.master_id !== '0') {
            this.items = this.items.map(function (item) {
                if ('' + item.master_id !== '' + _this.filter.master_id) {
                    item.visible = false;
                }
                return item;
            });
        }
        if ('' + this.filter.status !== '-1') {
            this.items = this.items.map(function (item) {
                if ('' + item.status !== '' + _this.filter.status) {
                    item.visible = false;
                }
                return item;
            });
        }
        if ('' + this.filter.package_id !== '0') {
            this.items = this.items.map(function (item) {
                if ('' + item.package_id !== '' + _this.filter.package_id) {
                    item.visible = false;
                }
                return item;
            });
        }
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].visible) {
                this.displayItems.push(this.items[i]);
            }
        }
    };
    AccountsComponent.prototype.export = function () {
        var ids = [];
        for (var i = 0; i < this.displayItems.length; i++) {
            ids.push(this.displayItems[i].id);
        }
        window.open(this.http.withApiBase('accounts/export?ids=' + ids.join(',')), '_system');
    };
    AccountsComponent.prototype.add = function () {
        this.modalService.open(AddAccountComponent, { size: 'lg', windowClass: 'modal-xl' });
    };
    AccountsComponent.prototype.edit = function (id) {
        var editModal = this.modalService.open(EditAccountComponent, { size: 'lg', windowClass: 'modal-xl' });
        editModal.componentInstance.id = id;
    };
    AccountsComponent.prototype.view = function (id) {
        var editModal = this.modalService.open(ViewAccountComponent, { size: 'lg', windowClass: 'modal-xl' });
        editModal.componentInstance.id = id;
    };
    AccountsComponent.prototype.mass = function () {
        var editModal = this.modalService.open(MassMessageComponent, { size: 'lg', windowClass: 'modal-xl' });
        editModal.componentInstance.accounts = this.displayItems;
        var chat_ids = [];
        for (var i = 0; i < this.displayItems.length; i++) {
            if (this.displayItems[i].chat_id > 0) {
                chat_ids.push(this.displayItems[i].chat_id);
            }
        }
        editModal.componentInstance.chat_ids = chat_ids;
    };
    AccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__(/*! ./accounts.component.html */ "./src/app/accounts/accounts.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./accounts.component.scss */ "./src/app/accounts/accounts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], AccountsComponent);
    return AccountsComponent;
}());

var MassMessageComponent = /** @class */ (function () {
    function MassMessageComponent(activeModal, http, eventBus) {
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.editorModulesConfig = {
            toolbar: [
                ['bold', 'italic'],
                [{ 'direction': 'rtl' }],
                ['link']
            ]
        };
        this.chat_ids = [];
        this.accounts = [];
        this.isLoading = false;
        this.reply = '';
    }
    MassMessageComponent.prototype.send = function () {
        var _this = this;
        this.isLoading = true;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('chat_ids', this.chat_ids.join(','))
            .set('text', this.reply);
        this.http.post(this.http.withApiBase('messages/mass'), body).subscribe(function (data) {
            _this.isLoading = false;
            _this.activeModal.close();
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    MassMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mass-message-modal',
            template: __webpack_require__(/*! ./mass.component.html */ "./src/app/accounts/mass.component.html"),
            styles: [__webpack_require__(/*! ./accounts.component.scss */ "./src/app/accounts/accounts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], MassMessageComponent);
    return MassMessageComponent;
}());

var AddAccountComponent = /** @class */ (function () {
    function AddAccountComponent(activeModal, http, eventBus) {
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.data = {
            email: '',
            fullname: '',
            password: '',
            telegram: '',
            instagram: '',
            phone: '',
            package_id: 0,
            master_id: 0,
            status: 1,
            birthday: { year: '', month: '', day: '' },
            expires_at: { year: '', month: '', day: '' },
            created_at: { year: '', month: '', day: '' },
            note: ''
        };
        this.isLoading = true;
        this.masters = [];
        this.packages = [];
        this.title = 'Add New';
        this.getData();
    }
    AddAccountComponent.prototype.getData = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('masters/list')).subscribe(function (data) {
            _this.masters = data;
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            alert('error loading data:masters!');
            _this.activeModal.dismiss();
        });
        this.http.get(this.http.withApiBase('packages')).subscribe(function (data) {
            _this.packages = data;
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            alert('error loading data:packages!');
            _this.activeModal.dismiss();
        });
    };
    AddAccountComponent.prototype.save = function () {
        var _this = this;
        this.isLoading = true;
        var created_at = new Date(this.data.created_at.year + '-' + this.data.created_at.month + '-' + this.data.created_at.day);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('email', this.data.email)
            .set('password', this.data.password)
            .set('fullname', this.data.fullname)
            .set('telegram', this.data.telegram)
            .set('instagram', this.data.instagram)
            .set('phone', this.data.phone)
            .set('package_id', '' + this.data.package_id)
            .set('master_id', '' + this.data.master_id)
            .set('status', '' + this.data.status)
            .set('note', this.data.note)
            .set('created_at', '' + created_at.getTime() / 1000)
            .set('expires_at', this.data.expires_at.year + '-' + this.data.expires_at.month + '-' + this.data.expires_at.day)
            .set('birthday', this.data.birthday.year + '-' + this.data.birthday.month + '-' + this.data.birthday.day);
        this.http.post(this.http.withApiBase('accounts'), body).subscribe(function (data) {
            _this.isLoading = false;
            _this.eventBus.cast('accounts:add', _this.data);
            _this.activeModal.close();
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    AddAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-add-modal',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/accounts/add.component.html"),
            styles: [__webpack_require__(/*! ./accounts.component.scss */ "./src/app/accounts/accounts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], AddAccountComponent);
    return AddAccountComponent;
}());

var EditAccountComponent = /** @class */ (function () {
    function EditAccountComponent(activeModal, http, eventBus) {
        var _this = this;
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.data = {
            email: '',
            fullname: '',
            password: '',
            telegram: '',
            instagram: '',
            phone: '',
            package_id: 0,
            master_id: 0,
            status: 1,
            birthday: null,
            expires_at: null,
            created_at: null,
            note: ''
        };
        this.isLoading = true;
        this.masters = [];
        this.packages = [];
        this.title = 'Edit';
        this.id = 0;
        setTimeout(function () {
            _this.getData();
        }, 200);
    }
    EditAccountComponent.prototype.getData = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('accounts/' + this.id)).subscribe(function (data) {
            _this.data = data;
            var birthday = new Date(data.birthday);
            _this.data.birthday = { year: birthday.getFullYear(), month: birthday.getMonth() + 1, day: birthday.getDate() };
            var expires_at = new Date(data.expires_at);
            _this.data.expires_at = { year: expires_at.getFullYear(), month: expires_at.getMonth() + 1, day: expires_at.getDate() };
            var created_at = new Date(data.created_at * 1000);
            _this.data.created_at = { year: created_at.getFullYear(), month: created_at.getMonth() + 1, day: created_at.getDate() };
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            alert('error loading data:account!');
            _this.activeModal.dismiss();
        });
        this.http.get(this.http.withApiBase('masters/list')).subscribe(function (data) {
            _this.masters = data;
        }, function (err) {
            console.log(err);
            alert('error loading data:masters!');
            _this.activeModal.dismiss();
        });
        this.http.get(this.http.withApiBase('packages')).subscribe(function (data) {
            _this.packages = data;
        }, function (err) {
            console.log(err);
            alert('error loading data:packages!');
            _this.activeModal.dismiss();
        });
    };
    EditAccountComponent.prototype.save = function () {
        var _this = this;
        this.isLoading = true;
        var created_at = new Date(this.data.created_at.year + '-' + this.data.created_at.month + '-' + this.data.created_at.day);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('email', this.data.email)
            .set('password', this.data.password)
            .set('fullname', this.data.fullname)
            .set('telegram', this.data.telegram)
            .set('instagram', this.data.instagram)
            .set('phone', this.data.phone)
            .set('package_id', '' + this.data.package_id)
            .set('master_id', '' + this.data.master_id)
            .set('status', '' + this.data.status)
            .set('note', this.data.note)
            .set('created_at', '' + created_at.getTime() / 1000)
            .set('expires_at', this.data.expires_at.year + '-' + this.data.expires_at.month + '-' + this.data.expires_at.day)
            .set('birthday', this.data.birthday.year + '-' + this.data.birthday.month + '-' + this.data.birthday.day);
        this.http.put(this.http.withApiBase('accounts/' + this.id), body).subscribe(function (data) {
            _this.isLoading = false;
            _this.eventBus.cast('accounts:add', _this.data);
            _this.activeModal.close();
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    EditAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-edit-modal',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/accounts/add.component.html"),
            styles: [__webpack_require__(/*! ./accounts.component.scss */ "./src/app/accounts/accounts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], EditAccountComponent);
    return EditAccountComponent;
}());

var ViewAccountComponent = /** @class */ (function () {
    function ViewAccountComponent(activeModal, http, eventBus) {
        var _this = this;
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.data = null;
        this.payments = null;
        this.messages = null;
        this.masters = [];
        this.packages = [];
        this.isLoading = true;
        this.disableInput = false;
        this.id = 0;
        this.reply = '';
        setTimeout(function () {
            _this.getData();
        }, 200);
    }
    ViewAccountComponent.prototype.getData = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('accounts/' + this.id)).subscribe(function (data) {
            _this.data = data;
            if (_this.data.chat_id) {
                _this.http.get(_this.http.withApiBase('messages?sort=-id&per-page=50&filter[chat_id]=' + _this.data.chat_id))
                    .subscribe(function (data2) {
                    _this.messages = data2.items.reverse();
                });
            }
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            alert('error loading data:account!');
            _this.activeModal.dismiss();
        });
        this.http.get(this.http.withApiBase('payments?sort=-id&per-page=50&filter[account_id]=' + this.id)).subscribe(function (data) {
            _this.payments = data.items;
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            alert('error loading data:payments!');
        });
        this.http.get(this.http.withApiBase('masters/list')).subscribe(function (data) {
            _this.masters = data;
        }, function (err) {
            console.log(err);
            alert('error loading data:masters!');
            _this.activeModal.dismiss();
        });
        this.http.get(this.http.withApiBase('packages')).subscribe(function (data) {
            _this.packages = data;
        }, function (err) {
            console.log(err);
            alert('error loading data:packages!');
            _this.activeModal.dismiss();
        });
    };
    ViewAccountComponent.prototype.getPackageName = function () {
        if (this.data.package_id) {
            for (var i = 0; i < this.packages.length; i++) {
                if (this.packages[i].id == this.data.package_id) {
                    return this.packages[i].name;
                }
            }
        }
        else {
            return 'Not Selected';
        }
    };
    ViewAccountComponent.prototype.getMasterName = function () {
        if (this.data.master_id) {
            for (var i = 0; i < this.masters.length; i++) {
                if (this.masters[i].id == this.data.master_id) {
                    return this.masters[i].username + ' / ' + this.masters[i].email + ' (' + this.masters[i].accounts_count + '/5)';
                }
            }
        }
        else {
            return 'Not Selected';
        }
    };
    ViewAccountComponent.prototype.getStatusName = function () {
        if (this.data.status == 0) {
            return 'Inactive';
        }
        else if (this.data.status == 2) {
            return 'Pending';
        }
        return 'Active';
    };
    ViewAccountComponent.prototype.formatStatus = function (s) {
        if (s == 1) {
            return 'Successful';
        }
        else if (this.data.status == 2) {
            return 'Pending';
        }
        return 'Unsuccessful';
    };
    ViewAccountComponent.prototype.formatAmount = function (amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    ViewAccountComponent.prototype.formatDescription = function (d) {
        if (this.isJson(d)) {
            var json = JSON.parse(d);
            if (typeof json.description !== 'undefined') {
                if (json.description.length > 30) {
                    return json.description.substring(0, 30) + ' ...';
                }
                else {
                    return json.description;
                }
            }
        }
        if (d == '2') {
            return 'First Payment';
        }
        if (d == '1') {
            return 'Renewal';
        }
        return d;
    };
    ViewAccountComponent.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    ViewAccountComponent.prototype.getStatusClass = function (status) {
        if (status == 3) {
            return 'btn-danger';
        }
        if (status == 1) {
            return 'btn-primary';
        }
        return 'btn-info';
    };
    ViewAccountComponent.prototype.isFromUser = function (m) {
        if (m.command === 'register' || m.command === 'support') {
            return true;
        }
        return false;
    };
    ViewAccountComponent.prototype.htmlDecode = function (input) {
        var doc = new DOMParser().parseFromString(input, 'text/html');
        return doc.documentElement.textContent;
    };
    ViewAccountComponent.prototype.formatMessage = function (m) {
        switch (m.command) {
            case 'bot_reply':
                return this.htmlDecode(decodeURIComponent(m.data.replace(/\+/g, '%20'))).replace(/(?:\r\n|\r|\n)/g, '<br>');
            case 'register':
                var d = JSON.parse(m.data);
                var r = '<b>Registering New Account</b><br>';
                if (typeof d.account.fullname != 'undefined' && d.account.fullname) {
                    r += '<br><b>Fullname:</b> ' + d.account.fullname;
                }
                if (typeof d.account.number != 'undefined' && d.account.number) {
                    r += '<br><b>Phone Number:</b> ' + d.account.number;
                }
                if (typeof d.account.email != 'undefined' && d.account.email) {
                    r += '<br><b>Email:</b> ' + d.account.email;
                }
                if (typeof d.account.password != 'undefined' && d.account.password) {
                    r += '<br><b>Password:</b> ' + d.account.password;
                }
                return r;
            case 'support':
                var d2 = JSON.parse(m.data);
                var r2 = '<b>New Support Ticket</b><br>';
                for (var _i = 0, _a = d2.messages; _i < _a.length; _i++) {
                    var i = _a[_i];
                    r2 += '<br>' + i.text;
                }
                return r2;
            case 'admin_message':
                var d3 = JSON.parse(m.data);
                var r3 = '<b>Admin Message / ' + d3.username + ':</b><br><br>';
                r3 += d3.text;
                return r3.replace(/(?:\r\n|\r|\n)/g, '<br>');
        }
        return m.command;
    };
    ViewAccountComponent.prototype.sendMessage = function () {
        var _this = this;
        this.disableInput = true;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('chat_ids', this.data.chat_id)
            .set('text', this.reply);
        this.http.post(this.http.withApiBase('messages/mass'), body).subscribe(function (data) {
            _this.reply = '';
            _this.disableInput = false;
            _this.http.get(_this.http.withApiBase('messages?sort=-id&per-page=50&filter[chat_id]=' + _this.data.chat_id))
                .subscribe(function (data2) {
                _this.messages = data2.items.reverse();
            });
        }, function (err) {
            _this.disableInput = false;
            console.log(err);
        });
    };
    ViewAccountComponent.prototype.kick = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'Do you want to kick this account from master?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No, cancel'
        }).then(function (isConfirm) {
            if (isConfirm.value) {
                _this.disableInput = true;
                var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
                    .set('master_id', '0')
                    .set('status', '0');
                _this.http.put(_this.http.withApiBase('accounts/' + _this.id), body).subscribe(function (data) {
                    _this.disableInput = false;
                    _this.eventBus.cast('todos:renew', _this.data);
                    _this.http.get(_this.http.withApiBase('accounts/' + _this.id)).subscribe(function (data2) {
                        _this.data = data2;
                    }, function (err) {
                        console.log(err);
                    });
                }, function (err) {
                    _this.disableInput = false;
                    console.log(err);
                });
            }
        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.noop);
    };
    ViewAccountComponent.prototype.ActiveAccount = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'Do you want to change this account status to "Active"?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No, cancel'
        }).then(function (isConfirm) {
            if (isConfirm.value) {
                _this.disableInput = true;
                var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
                    .set('status', '1');
                _this.http.put(_this.http.withApiBase('accounts/' + _this.id), body).subscribe(function (data) {
                    _this.disableInput = false;
                    _this.eventBus.cast('todos:renew', _this.data);
                    _this.http.get(_this.http.withApiBase('accounts/' + _this.id)).subscribe(function (data2) {
                        _this.data = data2;
                    }, function (err) {
                        console.log(err);
                    });
                }, function (err) {
                    _this.disableInput = false;
                    console.log(err);
                });
            }
        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.noop);
    };
    ViewAccountComponent.prototype.sendReminderMessage = function () {
        var _this = this;
        this.disableInput = true;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        this.http.post(this.http.withApiBase('accounts/' + this.id + '/send-reminder-message'), body).subscribe(function (data) {
            _this.disableInput = false;
        }, function (err) {
            _this.disableInput = false;
            console.log(err);
        });
    };
    ViewAccountComponent.prototype.sendPaymentLink = function () {
        var _this = this;
        this.disableInput = true;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        this.http.post(this.http.withApiBase('accounts/' + this.id + '/send-payment-link'), body).subscribe(function (data) {
            _this.disableInput = false;
        }, function (err) {
            _this.disableInput = false;
            console.log(err);
        });
    };
    ViewAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-view-modal',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/accounts/view.component.html"),
            styles: [__webpack_require__(/*! ./accounts.component.scss */ "./src/app/accounts/accounts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], ViewAccountComponent);
    return ViewAccountComponent;
}());



/***/ }),

/***/ "./src/app/accounts/add.component.html":
/*!*********************************************!*\
  !*** ./src/app/accounts/add.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}} Account</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.email\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Password</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Password\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.password\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Fullname</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Fullname\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.fullname\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Telegram</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Telegram\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.telegram\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Instagram</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Instagram\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.instagram\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Phone Number</label>\n                <input type=\"number\" class=\"form-control\" placeholder=\"989xxxxxxxx\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.phone\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Package</label>\n                <select class=\"form-control\" [(ngModel)]=\"data.package_id\">\n                    <option value=\"0\">Not Selected</option>\n                    <option *ngFor=\"let p of packages\" [value]=\"p.id\">{{p.name}}</option>\n                </select>\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Master</label>\n                <select class=\"form-control\" [(ngModel)]=\"data.master_id\">\n                    <option value=\"0\">Not Selected</option>\n                    <option *ngFor=\"let m of masters\" [disabled]=\"m.accounts_count >= 5\"\n                            [value]=\"m.id\">{{m.username + \" / \" + m.email + ' (' + m.accounts_count + '/5)'}}</option>\n                </select>\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Birthday</label>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"data.birthday\"\n                           [disabled]=\"isLoading\"\n                           ngbDatepicker\n                           #d3=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                        <div class=\"input-group-text\" (click)=\"d3.toggle()\">\n                            <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\n                        </div>\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Created At</label>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"data.created_at\"\n                           [disabled]=\"isLoading\"\n                           ngbDatepicker\n                           #d1=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                        <div class=\"input-group-text\" (click)=\"d1.toggle()\">\n                            <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\n                        </div>\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Expires At</label>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"data.expires_at\"\n                           [disabled]=\"isLoading\"\n                           ngbDatepicker\n                           #d2=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                        <div class=\"input-group-text\" (click)=\"d2.toggle()\">\n                            <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\n                        </div>\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Status</label>\n                <select class=\"form-control\" [(ngModel)]=\"data.status\">\n                    <option value=\"1\">Active</option>\n                    <option value=\"0\">Inactive</option>\n                    <option value=\"2\">Pending</option>\n                </select>\n            </fieldset>\n        </div>\n\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Notes</label>\n                <textarea rows=\"4\" type=\"text\" class=\"form-control\" placeholder=\"Any note ...\" [disabled]=\"isLoading\"\n                          [(ngModel)]=\"data.note\"></textarea>\n            </fieldset>\n        </div>\n\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary btn-raised\" [disabled]=\"isLoading\"\n            (click)=\"activeModal.close('Close click')\">Close\n    </button>\n    <button type=\"button\" class=\"btn btn-primary btn-raised\" [disabled]=\"isLoading\" (click)=\"save()\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/accounts/mass.component.html":
/*!**********************************************!*\
  !*** ./src/app/accounts/mass.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Send Mass Message</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label class=\"text-bold-700\">Filtered Accounts Count</label>\n                <div class=\"text-success\">{{accounts.length}}</div>\n            </fieldset>\n        </div>\n        <div class=\"col-xl-6 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label class=\"text-bold-700\">Telegram-Connected Accounts Count</label>\n                <div class=\"text-success\">{{chat_ids.length}}</div>\n            </fieldset>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Message</label>\n                <quill-editor [(ngModel)]=\"reply\" [modules]=\"editorModulesConfig\"></quill-editor>\n            </fieldset>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary btn-raised\" [disabled]=\"isLoading\"\n            (click)=\"activeModal.close('Close click')\">Close\n    </button>\n    <button type=\"button\" class=\"btn btn-primary btn-raised\" [disabled]=\"isLoading\" (click)=\"send()\">Send</button>\n</div>\n"

/***/ }),

/***/ "./src/app/accounts/view.component.html":
/*!**********************************************!*\
  !*** ./src/app/accounts/view.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">View Account</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <ngb-tabset>\n        <ngb-tab title=\"Account Data\">\n            <ng-template ngbTabContent>\n                <div class=\"row\" *ngIf=\"data\">\n                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n                        <label class=\"text-bold-700\">Email</label>\n                        <div>{{data.email}}</div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n                        <label class=\"text-bold-700\">Password</label>\n                        <div>{{data.password}}</div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n                        <label class=\"text-bold-700\">Fullname</label>\n                        <div>{{data.fullname}}</div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n                        <label class=\"text-bold-700\">Telegram</label>\n                        <div>{{data.telegram}}</div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n                        <label class=\"text-bold-700\">Instagram</label>\n                        <div>{{data.instagram}}</div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n                        <label class=\"text-bold-700\">Phone Number</label>\n                        <div>{{data.phone}}</div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n                        <label class=\"text-bold-700\">Package</label>\n                        <div>{{this.getPackageName()}}</div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n                        <label class=\"text-bold-700\">Master</label>\n                        <div>{{this.getMasterName()}}</div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n                        <label class=\"text-bold-700\">Birthday</label>\n                        <div>{{data.birthday | date:'yyyy/MM/dd'}}</div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n                        <label class=\"text-bold-700\">Created At</label>\n                        <div>{{data.created_at * 1000 | date:'yyyy/MM/dd'}}</div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n                        <label class=\"text-bold-700\">Expires At</label>\n                        <div>{{data.expires_at | date:'yyyy/MM/dd'}}</div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n                        <label class=\"text-bold-700\">Status</label>\n                        <div>{{this.getStatusName()}}</div>\n                    </div>\n                    <div class=\"col-xl-12 col-lg-12 col-md-12 mt-2\">\n                        <fieldset class=\"form-group\">\n                            <label class=\"text-bold-700\">Notes</label>\n                            <textarea rows=\"4\" type=\"text\" class=\"form-control\"\n                                      [disabled]=\"true\"\n                                      [(ngModel)]=\"data.note\"></textarea>\n                        </fieldset>\n                    </div>\n                </div>\n            </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Payments\">\n            <ng-template ngbTabContent>\n                <table class=\"table table-responsive-md text-center table-bordered table-striped\">\n                    <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>Status</th>\n                        <th>Created At</th>\n                        <th>Amount (Rials)</th>\n                        <th>Reference Code</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let item of payments\">\n                        <td>{{item.id}}</td>\n                        <td><a class=\"btn btn-raised btn-round btn-sm {{getStatusClass(item.status)}}\"\n                               style=\"margin:0\">{{formatStatus(item.status)}}</a></td>\n                        <td>{{item.created_at * 1000 | date:'yyyy/MM/dd HH:mm:ss'}}</td>\n                        <td>{{formatAmount(item.amount)}}</td>\n                        <td>{{item.reference_code}}</td>\n                        <td>{{formatDescription(item.data)}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Messages\">\n            <ng-template ngbTabContent>\n                <p *ngIf=\"!data.chat_id\" class=\"text-danger\">This account is not connected with her/his telegram!</p>\n                <div *ngIf=\"data.chat_id\" class=\"chat-application\">\n\n                    <section class=\"chat-app-window\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n                        <div class=\"chats\">\n                            <div class=\"chats\">\n                                <div class=\"chat\" [class.chat-left]=\"isFromUser(chat)\" *ngFor=\"let chat of messages\">\n                                    <div class=\"chat-body m-0\">\n                                        <div class=\"chat-content m-0 mt-2\">\n                                            <p>\n                                                <span [innerHTML]=\"formatMessage(chat)\"></span>\n                                                <br>\n                                                <span class=\"time\">{{chat.created_at * 1000 | date:'MMM d, h:mm a'}}</span>\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </section>\n                    <section class=\"chat-app-form bg-blue-grey bg-lighten-5\">\n                        <div class=\"chat-app-input row mt-2\">\n                            <fieldset class=\"form-group position-relative col-lg-10 col-8 m-0 px-3\">\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"reply\" [disabled]=\"disableInput\"\n                                       (keyup.enter)=\"sendMessage()\"\n                                       placeholder=\"Type your message\">\n                            </fieldset>\n                            <fieldset class=\"form-group position-relative has-icon-left col-lg-2 col-4 m-0 pl-0\">\n                                <button type=\"button\" class=\"btn btn-raised px-4 gradient-pomegranate white\"\n                                        (click)=\"sendMessage()\"\n                                        [disabled]=\"disableInput\">\n                                    <i class=\"fa fa-paper-plane-o d-block d-xl-inline-block d-lg-none p-0\"></i>\n                                    <span class=\"d-none d-lg-inline-block ml-1\">Send</span>\n                                </button>\n                            </fieldset>\n                        </div>\n                    </section>\n                </div>\n            </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Actions\">\n            <ng-template ngbTabContent>\n                <div class=\"row\">\n                    <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n                        <button type=\"button\" class=\"btn btn-raised btn-block btn-danger\"\n                                (click)=\"kick()\"\n                                [disabled]=\"disableInput\">\n                            <span class=\"d-none d-lg-inline-block ml-1\">Kick From Master</span>\n                        </button>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n                        <button type=\"button\" class=\"btn btn-raised btn-block btn-success\"\n                                (click)=\"ActiveAccount()\"\n                                [disabled]=\"disableInput\">\n                            <span class=\"d-none d-lg-inline-block ml-1\">Active Account</span>\n                        </button>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n                        <button type=\"button\" class=\"btn btn-raised btn-block btn-info\"\n                                (click)=\"sendReminderMessage()\"\n                                [disabled]=\"disableInput\">\n                            <span class=\"d-none d-lg-inline-block ml-1\">Send Reminder Message</span>\n                        </button>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n                        <button type=\"button\" class=\"btn btn-raised btn-block btn-info\"\n                                (click)=\"sendPaymentLink()\"\n                                [disabled]=\"disableInput\">\n                            <span class=\"d-none d-lg-inline-block ml-1\">Send Payment Link</span>\n                        </button>\n                    </div>\n                </div>\n            </ng-template>\n        </ngb-tab>\n    </ngb-tabset>\n\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary btn-raised\" [disabled]=\"isLoading\"\n            (click)=\"activeModal.close('Close click')\">Close\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");









var appRoutes = [
    {
        path: '',
        redirectTo: 'page/login',
        pathMatch: 'full',
    },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutComponent"], data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__["Full_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutComponent"], data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__["CONTENT_ROUTES"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.subscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function () { return window.scrollTo(0, 0); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./accounts/accounts.component */ "./src/app/accounts/accounts.component.ts");
/* harmony import */ var _masters_masters_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./masters/masters.component */ "./src/app/masters/masters.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/payments/payments.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-event-bus */ "./node_modules/ng-event-bus/dist/ng_event_bus.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ng_event_bus__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _packages_packages_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./packages/packages.component */ "./src/app/packages/packages.component.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");





























var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_14__["FullLayoutComponent"], _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_13__["ContentLayoutComponent"], _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_19__["AccountsComponent"],
                _masters_masters_component__WEBPACK_IMPORTED_MODULE_20__["MastersComponent"], _payments_payments_component__WEBPACK_IMPORTED_MODULE_21__["PaymentsComponent"], _support_support_component__WEBPACK_IMPORTED_MODULE_22__["SupportComponent"], _masters_masters_component__WEBPACK_IMPORTED_MODULE_20__["AddMasterComponent"], _masters_masters_component__WEBPACK_IMPORTED_MODULE_20__["ViewMasterComponent"],
                _masters_masters_component__WEBPACK_IMPORTED_MODULE_20__["EditMasterComponent"], _payments_payments_component__WEBPACK_IMPORTED_MODULE_21__["AddPaymentComponent"], _payments_payments_component__WEBPACK_IMPORTED_MODULE_21__["EditPaymentComponent"], _payments_payments_component__WEBPACK_IMPORTED_MODULE_21__["ViewPaymentComponent"],
                _packages_packages_component__WEBPACK_IMPORTED_MODULE_25__["PackagesComponent"], _packages_packages_component__WEBPACK_IMPORTED_MODULE_25__["EditPackageComponent"], _packages_packages_component__WEBPACK_IMPORTED_MODULE_25__["AddPackageComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_27__["SettingsComponent"],
                _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_19__["AddAccountComponent"], _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_19__["EditAccountComponent"], _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_19__["ViewAccountComponent"], _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_19__["MassMessageComponent"], _todos_todos_component__WEBPACK_IMPORTED_MODULE_28__["TodosComponent"],
                _todos_todos_component__WEBPACK_IMPORTED_MODULE_28__["RegisterationCheckComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["IonicStorageModule"].forRoot({
                    name: '__codeart',
                    driverOrder: ['localstorage']
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_26__["QuillModule"]
            ],
            providers: [
                _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                _shared_services_http_service__WEBPACK_IMPORTED_MODULE_17__["HttpService"],
                _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_18__["StorageService"],
                ng_event_bus__WEBPACK_IMPORTED_MODULE_24__["NgEventBus"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
            entryComponents: [
                _masters_masters_component__WEBPACK_IMPORTED_MODULE_20__["AddMasterComponent"], _masters_masters_component__WEBPACK_IMPORTED_MODULE_20__["ViewMasterComponent"], _masters_masters_component__WEBPACK_IMPORTED_MODULE_20__["EditMasterComponent"], _packages_packages_component__WEBPACK_IMPORTED_MODULE_25__["EditPackageComponent"], _packages_packages_component__WEBPACK_IMPORTED_MODULE_25__["AddPackageComponent"],
                _payments_payments_component__WEBPACK_IMPORTED_MODULE_21__["AddPaymentComponent"], _payments_payments_component__WEBPACK_IMPORTED_MODULE_21__["EditPaymentComponent"], _payments_payments_component__WEBPACK_IMPORTED_MODULE_21__["ViewPaymentComponent"], _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_19__["AddAccountComponent"], _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_19__["EditAccountComponent"],
                _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_19__["ViewAccountComponent"], _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_19__["MassMessageComponent"], _todos_todos_component__WEBPACK_IMPORTED_MODULE_28__["RegisterationCheckComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent() {
    }
    ContentLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__(/*! ./content-layout.component.html */ "./src/app/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/layouts/content/content-layout.component.scss")]
        })
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #wrapper class=\"wrapper\" [ngClass]=\"{'nav-collapsed': iscollapsed, 'menu-collapsed': iscollapsed, 'sidebar-sm': isSidebar_sm, 'sidebar-lg': isSidebar_lg}\" [dir]=\"options.direction\">\n  <div #appSidebar appSidebar class=\"app-sidebar\" (toggleHideSidebar)=\"toggleHideSidebar($event)\" [ngClass]=\"{'hide-sidebar': hideSidebar}\" data-active-color=\"white\" [attr.data-background-color]=\"bgColor\" [attr.data-image]=\"bgImage\">\n      <app-sidebar></app-sidebar>\n      <div class=\"sidebar-background\" #sidebarBgImage></div>\n  </div>\n  <app-navbar (toggleHideSidebar)=\"toggleHideSidebar($event)\"></app-navbar>\n  <div class=\"main-panel\">\n      <div class=\"main-content\">\n          <div class=\"content-wrapper\">\n              <div class=\"container-fluid\">\n                  <router-outlet></router-outlet>\n              </div>\n          </div>\n      </div>\n      <app-footer></app-footer>\n  </div>\n<!--  <app-notification-sidebar></app-notification-sidebar>-->\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(elementRef, configService, document, renderer) {
        this.elementRef = elementRef;
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.options = {
            direction: 'ltr',
            bgColor: 'black',
            bgImage: 'assets/img/sidebar-bg/01.jpg'
        };
        this.iscollapsed = false;
        this.isSidebar_sm = false;
        this.isSidebar_lg = false;
        this.bgColor = 'black';
        this.bgImage = 'assets/img/sidebar-bg/01.jpg';
        this.config = {};
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.configService.templateConf;
        this.bgColor = this.config.layout.sidebar.backgroundColor;
        if (!this.config.layout.sidebar.backgroundImage) {
            this.bgImage = '';
        }
        else {
            this.bgImage = this.config.layout.sidebar.backgroundImageURL;
        }
        if (this.config.layout.variant === "Transparent") {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === '') {
                this.bgColor = 'bg-glass-1';
            }
        }
        else {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === '') {
                this.bgColor = 'black';
            }
        }
        setTimeout(function () {
            if (_this.config.layout.sidebar.size === 'sidebar-lg') {
                _this.isSidebar_sm = false;
                _this.isSidebar_lg = true;
            }
            else if (_this.config.layout.sidebar.size === 'sidebar-sm') {
                _this.isSidebar_sm = true;
                _this.isSidebar_lg = false;
            }
            else {
                _this.isSidebar_sm = false;
                _this.isSidebar_lg = false;
            }
            _this.iscollapsed = _this.config.layout.sidebar.collapsed;
        }, 0);
    };
    FullLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.options.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant === "Dark") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
            }
            else if (_this.config.layout.variant === "Transparent") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
                _this.renderer.addClass(_this.document.body, 'layout-transparent');
                if (_this.config.layout.sidebar.backgroundColor) {
                    _this.renderer.addClass(_this.document.body, _this.config.layout.sidebar.backgroundColor);
                }
                else {
                    _this.renderer.addClass(_this.document.body, 'bg-glass-1');
                }
                _this.bgColor = 'black';
                _this.options.bgColor = 'black';
                _this.bgImage = '';
                _this.options.bgImage = '';
                _this.bgImage = '';
                _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, 'style', 'display: none');
            }
        }, 0);
    };
    FullLayoutComponent.prototype.toggleHideSidebar = function ($event) {
        var _this = this;
        setTimeout(function () {
            _this.hideSidebar = $event;
        }, 0);
    };
    FullLayoutComponent.prototype.getOptions = function ($event) {
        this.options = $event;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebarBgImage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "sidebarBgImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appSidebar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "appSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wrapper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "wrapper", void 0);
    FullLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! ./full-layout.component.html */ "./src/app/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/layouts/full/full-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/masters/add.component.html":
/*!********************************************!*\
  !*** ./src/app/masters/add.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Add New Master</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.email\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Username</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.username\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Password</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Password\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.password\">\n            </fieldset>\n        </div>\n\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Due Date</label>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"data.due_date\" [disabled]=\"isLoading\"\n                           ngbDatepicker\n                           #d2=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                        <div class=\"input-group-text\" (click)=\"d2.toggle()\">\n                            <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\n                        </div>\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Notes</label>\n                <textarea rows=\"4\" type=\"text\" class=\"form-control\" placeholder=\"Any note ...\" [disabled]=\"isLoading\"\n                          [(ngModel)]=\"data.note\"></textarea>\n            </fieldset>\n        </div>\n\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary btn-raised\" [disabled]=\"isLoading\" (click)=\"activeModal.close('Close click')\">Close</button>\n    <button type=\"button\" class=\"btn btn-primary btn-raised\" [disabled]=\"isLoading\" (click)=\"save()\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/masters/edit.component.html":
/*!*********************************************!*\
  !*** ./src/app/masters/edit.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Edit Master</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.email\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Username</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.username\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Password</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Password\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.password\">\n            </fieldset>\n        </div>\n\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Due Date</label>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"data.due_date\" [disabled]=\"isLoading\"\n                           ngbDatepicker\n                           #d2=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                        <div class=\"input-group-text\" (click)=\"d2.toggle()\">\n                            <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\n                        </div>\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Notes</label>\n                <textarea rows=\"4\" type=\"text\" class=\"form-control\" placeholder=\"Any note ...\" [disabled]=\"isLoading\"\n                          [(ngModel)]=\"data.note\"></textarea>\n            </fieldset>\n        </div>\n\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary btn-raised\" [disabled]=\"isLoading\" (click)=\"activeModal.close('Close click')\">Close</button>\n    <button type=\"button\" class=\"btn btn-primary btn-raised\" [disabled]=\"isLoading\" (click)=\"save()\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/masters/masters.component.html":
/*!************************************************!*\
  !*** ./src/app/masters/masters.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-left\">\n    <div class=\"col-6\">\n        <div class=\"content-header\">Masters</div>\n        <p class=\"content-sub-header\">List of getspotify master accounts.</p>\n    </div>\n    <div class=\"col-6\" style=\"text-align: right\">\n        <a class=\"btn btn-raised gradient-ibiza-sunset white m-2 mr-auto\" (click)=\"openAddNewModal()\">Add New Master</a>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n        <fieldset class=\"form-group\">\n            <label for=\"basicInput\">Search</label>\n            <input type=\"text\" class=\"form-control\" id=\"basicInput\" placeholder=\"Email, Username\"\n                   [(ngModel)]=\"filter.search\" (keyup)=\"filterList()\">\n        </fieldset>\n    </div>\n    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n        <fieldset class=\"form-group\">\n            <label for=\"mSelect\">Type</label>\n            <select class=\"form-control\" id=\"mSelect\" [(ngModel)]=\"filter.type\" (change)=\"filterList()\">\n                <option value=\"0\">Select Type</option>\n                <option value=\"1\">Free Masters</option>\n                <option value=\"2\">Full Masters</option>\n            </select>\n        </fieldset>\n    </div>\n</div>\n<div class=\"row\" matchHeight=\"card\">\n    <div class=\"col-xl-3 col-lg-12\" *ngFor=\"let item of displayItems\">\n        <div class=\"card\">\n            <div class=\"card-content\">\n\n                <h4 class=\"info text-center mt-3\">{{item.username}}</h4>\n                <h6 class=\"text-center mt-1\">{{item.email}}</h6>\n                <h6 class=\"warning text-center mt-1\">Due: {{item.due_date | date:'yyyy/MM/dd'}}</h6>\n\n                <div class=\"card-body p-0\">\n                    <div class=\"row\">\n                        <div class=\"card-body\">\n                            <div id=\"donut-chart1\">\n                                <x-chartist [data]=\"item.chart\" [type]=\"donutChart.type\"\n                                            [options]=\"donutChart.options\"\n                                            [responsiveOptions]=\"donutChart.responsiveOptions\"\n                                            [events]=\"donutChart.events\">\n                                </x-chartist>\n                            </div>\n                            <h6 class=\"text-danger text-center\" style=\"margin-top: -50px;\">{{item.accounts_count}} /\n                                5</h6>\n                            <div class=\"text-center pt-1\">\n                                <a class=\"info p-0\" (click)=\"view(item.id)\">\n                                    <i class=\"ft-eye font-medium-3 mr-2\"></i>\n                                </a>\n                                <a class=\"success p-0\" (click)=\"edit(item.id)\">\n                                    <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                                </a>\n                                <a class=\"danger p-0\" (click)=\"delete(item.id)\">\n                                    <i class=\"ft-trash font-medium-3 mr-2\"></i>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/masters/masters.component.scss":
/*!************************************************!*\
  !*** ./src/app/masters/masters.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-xl .modal-lg {\n  max-width: 80%; }\n\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGltbWlyemFlZS9Xb3JrL2dldHNwb3RpZnktZnJvbnRlbmQvc3JjL2FwcC9tYXN0ZXJzL21hc3RlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVycy9tYXN0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLXhsIC5tb2RhbC1sZyB7XG4gIG1heC13aWR0aDogODAlO1xufVxuXG4uY2xvc2U6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6aG92ZXIsIC5jbG9zZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/masters/masters.component.ts":
/*!**********************************************!*\
  !*** ./src/app/masters/masters.component.ts ***!
  \**********************************************/
/*! exports provided: MastersComponent, AddMasterComponent, ViewMasterComponent, EditMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastersComponent", function() { return MastersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMasterComponent", function() { return AddMasterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMasterComponent", function() { return ViewMasterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMasterComponent", function() { return EditMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-event-bus */ "./node_modules/ng-event-bus/dist/ng_event_bus.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_event_bus__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);








var MastersComponent = /** @class */ (function () {
    function MastersComponent(http, modalService, eventBus) {
        var _this = this;
        this.http = http;
        this.modalService = modalService;
        this.eventBus = eventBus;
        this.donutChart = {
            type: 'Pie',
            data: {
                'series': []
            },
            options: {
                donut: true,
                donutWidth: 60,
                startAngle: 270,
                total: 200,
                showLabel: false,
            },
        };
        this.items = [];
        this.displayItems = [];
        this.isLoading = true;
        this.filter = { type: '0', search: '' };
        this.eventBus.on('masters:add').subscribe(function (message) {
            _this.getItems();
        });
    }
    MastersComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    MastersComponent.prototype.getItems = function () {
        var _this = this;
        this.isLoading = true;
        this.http.get(this.http.withApiBase('masters/list')).subscribe(function (data) {
            _this.items = data.map(function (item) {
                var percents = [];
                if (item.accounts_count === '0') {
                    percents.push(100);
                    percents.push(0);
                }
                else if (parseInt(item.accounts_count) >= 5) {
                    percents.push(0);
                    percents.push(100);
                }
                else {
                    var used = parseInt(item.accounts_count) >= 5 ? 5 : parseInt(item.accounts_count);
                    percents.push((5 - used) * 20);
                    percents.push(used * 20);
                }
                item.chart = {
                    'series': percents
                };
                return item;
            });
            _this.filterList();
            _this.isLoading = false;
        }, function (error) {
            console.log(error);
        });
    };
    MastersComponent.prototype.filterList = function () {
        var _this = this;
        this.displayItems = [];
        this.items = this.items.map(function (item) {
            item.visible = true;
            return item;
        });
        if (this.filter.search !== '') {
            this.items = this.items.map(function (item) {
                if ((item.email ? item.email : '').indexOf(_this.filter.search) === -1
                    && (item.username ? item.username : '').indexOf(_this.filter.search) === -1) {
                    item.visible = false;
                }
                return item;
            });
        }
        if ('' + this.filter.type !== '0') {
            if (this.filter.type === '2') {
                this.items = this.items.map(function (item) {
                    if (parseInt(item.accounts_count) < 5) {
                        item.visible = false;
                    }
                    return item;
                });
            }
            if (this.filter.type === '1') {
                this.items = this.items.map(function (item) {
                    if (parseInt(item.accounts_count) >= 5) {
                        item.visible = false;
                    }
                    return item;
                });
            }
        }
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].visible) {
                this.displayItems.push(this.items[i]);
            }
        }
    };
    MastersComponent.prototype.openAddNewModal = function () {
        this.modalService.open(AddMasterComponent, { size: 'lg', windowClass: 'modal-xl' });
    };
    MastersComponent.prototype.view = function (id) {
        var viewModal = this.modalService.open(ViewMasterComponent, { size: 'lg', windowClass: 'modal-xl' });
        viewModal.componentInstance.id = id;
    };
    MastersComponent.prototype.edit = function (id) {
        var editModal = this.modalService.open(EditMasterComponent, { size: 'lg', windowClass: 'modal-xl' });
        editModal.componentInstance.id = id;
    };
    MastersComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'Do you want to delete this item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No, cancel'
        }).then(function (isConfirm) {
            if (isConfirm.value) {
                _this.http.delete(_this.http.withApiBase('masters/' + id)).subscribe(function (data) {
                    _this.getItems();
                }, function (err) {
                    console.log(err);
                });
            }
        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.noop);
    };
    MastersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-masters',
            template: __webpack_require__(/*! ./masters.component.html */ "./src/app/masters/masters.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./masters.component.scss */ "./src/app/masters/masters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], ng_event_bus__WEBPACK_IMPORTED_MODULE_5__["NgEventBus"]])
    ], MastersComponent);
    return MastersComponent;
}());

var AddMasterComponent = /** @class */ (function () {
    function AddMasterComponent(activeModal, http, eventBus) {
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.data = { email: '', username: '', password: '', due_date: { year: '', month: '', day: '' }, note: '' };
        this.isLoading = false;
    }
    AddMasterComponent.prototype.save = function () {
        var _this = this;
        this.isLoading = true;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('username', this.data.username)
            .set('password', this.data.password)
            .set('email', this.data.email)
            .set('note', this.data.note)
            .set('due_date', this.data.due_date.year + '-' + this.data.due_date.month + '-' + this.data.due_date.day);
        this.http.post(this.http.withApiBase('masters'), body).subscribe(function (data) {
            _this.isLoading = false;
            _this.eventBus.cast('masters:add', _this.data);
            _this.activeModal.close();
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    AddMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master-add-modal',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/masters/add.component.html"),
            styles: [__webpack_require__(/*! ./masters.component.scss */ "./src/app/masters/masters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_5__["NgEventBus"]])
    ], AddMasterComponent);
    return AddMasterComponent;
}());

var ViewMasterComponent = /** @class */ (function () {
    function ViewMasterComponent(activeModal, http, eventBus) {
        var _this = this;
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.data = {};
        this.accounts = [];
        this.id = 0;
        this.isLoading = true;
        setTimeout(function () {
            _this.getData();
        }, 200);
    }
    ViewMasterComponent.prototype.getData = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('masters/' + this.id)).subscribe(function (data) {
            _this.data = data;
            _this.http.get(_this.http.withApiBase('masters/' + _this.id + '/accounts')).subscribe(function (data2) {
                _this.accounts = data2.sort(function (a, b) {
                    return b.status - a.status;
                });
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
            alert('error loading data!');
            _this.activeModal.dismiss();
        });
    };
    ViewMasterComponent.prototype.getStatusTitle = function (status) {
        if (status == 0) {
            return 'inactive';
        }
        if (status == 1) {
            return 'active';
        }
        return 'pending';
    };
    ViewMasterComponent.prototype.formatDate = function (time) {
        var d = new Date(time);
        return (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate());
    };
    ViewMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master-view-modal',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/masters/view.component.html"),
            styles: [__webpack_require__(/*! ./masters.component.scss */ "./src/app/masters/masters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_5__["NgEventBus"]])
    ], ViewMasterComponent);
    return ViewMasterComponent;
}());

var EditMasterComponent = /** @class */ (function () {
    function EditMasterComponent(activeModal, http, eventBus) {
        var _this = this;
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.data = {};
        this.id = 0;
        this.isLoading = true;
        setTimeout(function () {
            _this.getData();
        }, 200);
    }
    EditMasterComponent.prototype.getData = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('masters/' + this.id)).subscribe(function (data) {
            _this.data = data;
            var d = new Date(data.due_date);
            _this.data.due_date = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            alert('error loading data!');
            _this.activeModal.dismiss();
        });
    };
    EditMasterComponent.prototype.save = function () {
        var _this = this;
        this.isLoading = true;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('username', this.data.username)
            .set('password', this.data.password)
            .set('email', this.data.email)
            .set('note', this.data.note)
            .set('due_date', this.data.due_date.year + '-' + this.data.due_date.month + '-' + this.data.due_date.day);
        this.http.put(this.http.withApiBase('masters/' + this.id), body).subscribe(function (data) {
            _this.isLoading = false;
            _this.eventBus.cast('masters:add', _this.data);
            _this.activeModal.close();
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    EditMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master-edit-modal',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/masters/edit.component.html"),
            styles: [__webpack_require__(/*! ./masters.component.scss */ "./src/app/masters/masters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_5__["NgEventBus"]])
    ], EditMasterComponent);
    return EditMasterComponent;
}());



/***/ }),

/***/ "./src/app/masters/view.component.html":
/*!*********************************************!*\
  !*** ./src/app/masters/view.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">View Master</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.email\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Username</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.username\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Password</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Password\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.password\">\n            </fieldset>\n        </div>\n\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Due Date</label>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"data.due_date\"\n                           [disabled]=\"isLoading\">\n                    <div class=\"input-group-append\">\n                        <div class=\"input-group-text\">\n                            <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\n                        </div>\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Notes</label>\n                <textarea rows=\"4\" type=\"text\" class=\"form-control\" placeholder=\"Any note ...\" [disabled]=\"isLoading\"\n                          [(ngModel)]=\"data.note\"></textarea>\n            </fieldset>\n        </div>\n\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\">\n            <table class=\"table table-responsive-md text-center\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Package</th>\n                    <th>Created At</th>\n                    <th>Expires In</th>\n                    <th>Email</th>\n                    <th>Password</th>\n                    <th>Full Name</th>\n                    <th>Status</th>\n                    <!--                    <th>Actions</th>-->\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of accounts\" [class.danger]=\"item.status != 1\">\n                    <td>{{item.id}}</td>\n                    <td>{{item.package}}</td>\n                    <td>{{formatDate(item.created_at)}}</td>\n                    <td>{{item.expires_at}}</td>\n                    <td>{{item.email}}</td>\n                    <td>{{item.password}}</td>\n                    <td>{{item.fullname}}</td>\n                    <td>{{getStatusTitle(item.status)}}</td>\n                    <!--                    <td>-->\n                    <!--                        <a class=\"info p-0\" data-original-title=\"\" title=\"\">-->\n                    <!--                            <i class=\"ft-user font-medium-3 mr-2\"></i>-->\n                    <!--                        </a>-->\n                    <!--                        <a class=\"success p-0\" data-original-title=\"\" title=\"\">-->\n                    <!--                            <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>-->\n                    <!--                        </a>-->\n                    <!--                    </td>-->\n                </tr>\n                </tbody>\n            </table>\n        </div>\n\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary btn-raised\" [disabled]=\"isLoading\"\n            (click)=\"activeModal.close('Close click')\">Close\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/app/packages/edit.component.html":
/*!**********************************************!*\
  !*** ./src/app/packages/edit.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}} Package</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Package name\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.name\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Duration (Days)</label>\n                <input type=\"number\" class=\"form-control\" placeholder=\"e.g. 30\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.duration_days\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Price (Rials)</label>\n                <input type=\"number\" class=\"form-control\" placeholder=\"e.g. 500000\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.price\">\n            </fieldset>\n        </div>\n\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Info</label>\n                <quill-editor [(ngModel)]=\"data.info\" [modules]=\"editorModulesConfig\" [readOnly]=\"isLoading\"></quill-editor>\n            </fieldset>\n        </div>\n\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary btn-raised\" [disabled]=\"isLoading\"\n            (click)=\"activeModal.close('Close click')\">Close\n    </button>\n    <button type=\"button\" class=\"btn btn-primary btn-raised\" [disabled]=\"isLoading\" (click)=\"save()\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/packages/packages.component.html":
/*!**************************************************!*\
  !*** ./src/app/packages/packages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Extended Table starts-->\n<div class=\"row text-left\">\n    <div class=\"col-6\">\n        <div class=\"content-header\">Packages</div>\n        <p class=\"content-sub-header\">List of getspotify packages.</p>\n    </div>\n    <div class=\"col-6\" style=\"text-align: right\">\n        <a class=\"btn btn-raised gradient-ibiza-sunset white m-2 mr-auto\" (click)=\"add()\">Add New Package</a>\n    </div>\n</div>\n<section id=\"extended\">\n    <div class=\"row text-left\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body\" style=\"padding: 0\">\n                        <table class=\"table table-responsive-md text-center\">\n                            <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>Name</th>\n                                <th>Duration (Days)</th>\n                                <th>Price (Rials)</th>\n                                <th>Actions</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngIf=\"isLoading\">\n                                <td colspan=\"5\"><img\n                                        style=\"filter: drop-shadow(0 0 2px purple);margin: 5px 0;position: initial;\"\n                                        src=\"assets/img/oval.svg\" class=\"loading-icon\"/></td>\n                            </tr>\n                            <tr *ngFor=\"let item of displayItems\">\n                                <td>{{item.id}}</td>\n                                <td>{{item.name}}</td>\n                                <td>{{item.duration_days}}</td>\n                                <td>{{item.price}}</td>\n                                <td>\n                                    <a class=\"success p-0\" (click)=\"edit(item.id)\">\n                                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Extended Table Ends-->\n"

/***/ }),

/***/ "./src/app/packages/packages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/packages/packages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "quill-editor {\n  display: block; }\n\n.modal-xl .modal-lg {\n  max-width: 80%; }\n\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGltbWlyemFlZS9Xb3JrL2dldHNwb3RpZnktZnJvbnRlbmQvc3JjL2FwcC9wYWNrYWdlcy9wYWNrYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFja2FnZXMvcGFja2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJxdWlsbC1lZGl0b3Ige1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1vZGFsLXhsIC5tb2RhbC1sZyB7XG4gIG1heC13aWR0aDogODAlO1xufVxuXG4uY2xvc2U6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6aG92ZXIsIC5jbG9zZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/packages/packages.component.ts":
/*!************************************************!*\
  !*** ./src/app/packages/packages.component.ts ***!
  \************************************************/
/*! exports provided: PackagesComponent, EditPackageComponent, AddPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesComponent", function() { return PackagesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPackageComponent", function() { return EditPackageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPackageComponent", function() { return AddPackageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-event-bus */ "./node_modules/ng-event-bus/dist/ng_event_bus.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_event_bus__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var PackagesComponent = /** @class */ (function () {
    function PackagesComponent(http, modalService, eventBus) {
        var _this = this;
        this.http = http;
        this.modalService = modalService;
        this.eventBus = eventBus;
        this.items = [];
        this.displayItems = [];
        this.isLoading = true;
        this.eventBus.on('packages:add').subscribe(function (message) {
            _this.items = _this.displayItems = [];
            _this.isLoading = true;
            _this.getItems();
        });
    }
    PackagesComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    PackagesComponent.prototype.getItems = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('packages')).subscribe(function (data) {
            _this.items = _this.displayItems = data;
            _this.isLoading = false;
        }, function (error) {
            console.log(error);
        });
    };
    PackagesComponent.prototype.edit = function (id) {
        var editModal = this.modalService.open(EditPackageComponent, { size: 'lg', windowClass: 'modal-xl' });
        editModal.componentInstance.id = id;
    };
    PackagesComponent.prototype.add = function () {
        this.modalService.open(AddPackageComponent, { size: 'lg', windowClass: 'modal-xl' });
    };
    PackagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-packages',
            template: __webpack_require__(/*! ./packages.component.html */ "./src/app/packages/packages.component.html"),
            styles: [__webpack_require__(/*! ./packages.component.scss */ "./src/app/packages/packages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], PackagesComponent);
    return PackagesComponent;
}());

var EditPackageComponent = /** @class */ (function () {
    function EditPackageComponent(activeModal, http, eventBus) {
        var _this = this;
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.data = {};
        this.id = 0;
        this.isLoading = true;
        this.title = 'Edit';
        this.editorModulesConfig = {
            toolbar: [
                ['bold', 'italic'],
                [{ 'direction': 'rtl' }],
                ['link']
            ]
        };
        setTimeout(function () {
            _this.getData();
        }, 200);
    }
    EditPackageComponent.prototype.getData = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('packages/' + this.id)).subscribe(function (data) {
            _this.data = data;
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            alert('error loading data!');
            _this.activeModal.dismiss();
        });
    };
    EditPackageComponent.prototype.save = function () {
        var _this = this;
        this.isLoading = true;
        console.log(this.data);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('info', this.data.info)
            .set('name', this.data.name)
            .set('duration_days', this.data.duration_days)
            .set('price', this.data.price);
        this.http.put(this.http.withApiBase('packages/' + this.id), body).subscribe(function (data) {
            _this.isLoading = false;
            _this.eventBus.cast('packages:add', _this.data);
            _this.activeModal.close();
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    EditPackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-package-edit-modal',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/packages/edit.component.html"),
            styles: [__webpack_require__(/*! ./packages.component.scss */ "./src/app/packages/packages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], EditPackageComponent);
    return EditPackageComponent;
}());

var AddPackageComponent = /** @class */ (function () {
    function AddPackageComponent(activeModal, http, eventBus) {
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.data = { info: '', name: '', duration_days: '', price: '' };
        this.isLoading = false;
        this.title = 'Add New';
        this.editorModulesConfig = {
            toolbar: [
                ['bold', 'italic'],
                [{ 'direction': 'rtl' }],
                ['link']
            ]
        };
    }
    AddPackageComponent.prototype.save = function () {
        var _this = this;
        this.isLoading = true;
        console.log(this.data);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('info', this.data.info)
            .set('name', this.data.name)
            .set('duration_days', this.data.duration_days)
            .set('price', this.data.price);
        this.http.post(this.http.withApiBase('packages'), body).subscribe(function (data) {
            _this.isLoading = false;
            _this.eventBus.cast('packages:add', _this.data);
            _this.activeModal.close();
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    AddPackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-package-add-modal',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/packages/edit.component.html"),
            styles: [__webpack_require__(/*! ./packages.component.scss */ "./src/app/packages/packages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], AddPackageComponent);
    return AddPackageComponent;
}());



/***/ }),

/***/ "./src/app/payments/add.component.html":
/*!*********************************************!*\
  !*** ./src/app/payments/add.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}} Payment</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>User</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Payed by\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.user\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Amount</label>\n                <input type=\"number\" class=\"form-control\" placeholder=\"Amount\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.amount\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Reference Code</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Bank Reference Code\" [disabled]=\"isLoading\"\n                       [(ngModel)]=\"data.reference_code\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Payment Date</label>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"data.created_at\"\n                           [disabled]=\"isLoading\"\n                           ngbDatepicker\n                           #d2=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                        <div class=\"input-group-text\" (click)=\"d2.toggle()\">\n                            <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\n                        </div>\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Type</label>\n                <select class=\"form-control\" [(ngModel)]=\"data.type\">\n                    <option value=\"2\">Expenses</option>\n                    <option value=\"1\">Income</option>\n                </select>\n            </fieldset>\n        </div>\n\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Description</label>\n                <textarea rows=\"4\" type=\"text\" class=\"form-control\" placeholder=\"Keep it short!\" [disabled]=\"isLoading\"\n                          [(ngModel)]=\"data.description\"></textarea>\n            </fieldset>\n        </div>\n\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary btn-raised\" [disabled]=\"isLoading\"\n            (click)=\"activeModal.close('Close click')\">Close\n    </button>\n    <button type=\"button\" class=\"btn btn-primary btn-raised\" [disabled]=\"isLoading\" (click)=\"save()\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/payments/payments.component.html":
/*!**************************************************!*\
  !*** ./src/app/payments/payments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Extended Table starts-->\n<div class=\"row text-left\">\n    <div class=\"col-4\">\n        <div class=\"content-header\">Payments</div>\n        <p class=\"content-sub-header\">List of getspotify payments.</p>\n    </div>\n    <div class=\"col-4\" style=\"text-align: center\">\n        <div class=\"btn-group btn-group-justified btn-group-raised btn-round mt-2\">\n            <a class=\"btn btn-outline-primary btn-round\" [class.active]=\"filter.type == 1\" (click)=\"changeType(1)\">Income</a>\n            <a class=\"btn btn-outline-success btn-round\" [class.active]=\"filter.type == -1\"\n               (click)=\"changeType(-1)\">All</a>\n            <a class=\"btn btn-outline-danger btn-round\" [class.active]=\"filter.type == 2\" (click)=\"changeType(2)\">Expenses</a>\n        </div>\n    </div>\n    <div class=\"col-4\" style=\"text-align: right\">\n        <a class=\"btn btn-raised gradient-ibiza-sunset white m-2 mr-auto\" (click)=\"add()\">Add New Payment</a>\n        <a class=\"btn btn-raised gradient-pomegranate white m-2 mr-auto\" (click)=\"export()\">Export List</a>\n    </div>\n</div>\n<section id=\"extended\">\n    <div class=\"row\" *ngIf=\"filter.type != 2\">\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label for=\"basicInput\">Search</label>\n                <input type=\"text\" class=\"form-control\" id=\"basicInput\" placeholder=\"UserID\" [(ngModel)]=\"filter.search\"\n                       (keyup)=\"filterList()\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Status</label>\n                <select class=\"form-control\" [(ngModel)]=\"filter.status\" (change)=\"filterList()\">\n                    <option value=\"1\">Successful</option>\n                    <option value=\"2\">Pending</option>\n                    <option value=\"3\">Unsuccessful</option>\n                </select>\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Description</label>\n                <select class=\"form-control\" [(ngModel)]=\"filter.description\" (change)=\"filterList()\">\n                    <option value=\"-1\">All</option>\n                    <option value=\"1\">Renewal</option>\n                    <option value=\"2\">First Payment</option>\n                </select>\n            </fieldset>\n        </div>\n\n    </div>\n    <div class=\"row text-left\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body\" style=\"padding: 0\">\n                        <table class=\"table table-responsive-md text-center\">\n                            <thead>\n                            <tr>\n                                <th (click)=\"changeSort('id')\"># <i *ngIf=\"sortBy=='id'\"\n                                                                    class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th (click)=\"changeSort('account_id')\">User ID <i *ngIf=\"sortBy=='account_id'\"\n                                                                                  class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th (click)=\"changeSort('created_at')\">Created At <i *ngIf=\"sortBy=='created_at'\"\n                                                                                     class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th (click)=\"changeSort('amount')\">Amount (Rials) <i *ngIf=\"sortBy=='amount'\"\n                                                                                     class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th>Description</th>\n                                <th>Actions</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngIf=\"isLoading\">\n                                <td colspan=\"6\"><img\n                                        style=\"filter: drop-shadow(0 0 2px purple);margin: 5px 0;position: initial;\"\n                                        src=\"assets/img/oval.svg\" class=\"loading-icon\"/></td>\n                            </tr>\n                            <tr *ngFor=\"let item of items\" [class.highlight]=\"isByAdmin(item.data)\">\n                                <td>{{item.id}}</td>\n                                <td>{{formatAccount(item)}}</td>\n                                <td>{{formatDate(item.created_at) | date:'yyyy/MM/dd'}}</td>\n                                <td [class.success]=\"item.amount > 0\"\n                                    [class.danger]=\"item.amount <= 0\">{{formatAmount(item.amount)}}</td>\n                                <td>{{formatDescription(item.data)}}</td>\n                                <td>\n                                    <a class=\"info p-0\" (click)=\"view(item.id)\">\n                                        <i class=\"ft-eye font-medium-3 mr-2\"></i>\n                                    </a>\n                                    <a class=\"success p-0\" *ngIf=\"isByAdmin(item.data)\" (click)=\"edit(item.id)\">\n                                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                        <div style=\"text-align: center\">\n                            <ngb-pagination (pageChange)=\"changePage()\" style=\"display: inline-block;\"\n                                            [pageSize]=\"meta.perPage\" [collectionSize]=\"meta.totalCount\" [(page)]=\"page\"\n                                            [maxSize]=\"10\" [rotate]=\"true\" [ellipses]=\"false\"\n                                            [boundaryLinks]=\"true\"></ngb-pagination>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Extended Table Ends-->\n"

/***/ }),

/***/ "./src/app/payments/payments.component.scss":
/*!**************************************************!*\
  !*** ./src/app/payments/payments.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".highlight {\n  background: #d5eafd; }\n\n.modal-xl .modal-lg {\n  max-width: 80%; }\n\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGltbWlyemFlZS9Xb3JrL2dldHNwb3RpZnktZnJvbnRlbmQvc3JjL2FwcC9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZDVlYWZkO1xufVxuXG4ubW9kYWwteGwgLm1vZGFsLWxnIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5jbG9zZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpob3ZlciwgLmNsb3NlOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/payments/payments.component.ts":
/*!************************************************!*\
  !*** ./src/app/payments/payments.component.ts ***!
  \************************************************/
/*! exports provided: PaymentsComponent, AddPaymentComponent, EditPaymentComponent, ViewPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPaymentComponent", function() { return AddPaymentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPaymentComponent", function() { return EditPaymentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPaymentComponent", function() { return ViewPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-event-bus */ "./node_modules/ng-event-bus/dist/ng_event_bus.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_event_bus__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(http, modalService, eventBus) {
        var _this = this;
        this.http = http;
        this.modalService = modalService;
        this.eventBus = eventBus;
        this.items = [];
        this.isLoading = true;
        this.filter = { search: '', type: -1, status: 1, description: -1 };
        this.sort = 'asc';
        this.sortBy = 'id';
        this.page = 1;
        this.meta = { totalCount: 0, pageCount: 0, currentPage: 0, perPage: 20 };
        this.eventBus.on('payments:add').subscribe(function (message) {
            _this.getItems(_this.page, _this.sort, _this.sortBy, _this.filter);
        });
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        this.getItems(this.page, this.sort, this.sortBy, this.filter);
    };
    PaymentsComponent.prototype.getItems = function (page, sort, sortBy, filter) {
        var _this = this;
        this.items = [];
        this.isLoading = true;
        var req_url = this.http.withApiBase('payments');
        req_url = req_url + '?sort=' + (sort === 'asc' ? '' : '-') + sortBy;
        req_url = req_url + '&filter[status]=' + filter.status;
        if (filter.search !== '') {
            req_url = req_url + '&filter[account_id]=' + filter.search;
        }
        if (filter.type != -1) {
            req_url = req_url + '&filter[type]=' + filter.type;
        }
        if (filter.description != -1) {
            req_url = req_url + '&filter[description]=' + filter.description;
        }
        req_url = req_url + '&page=' + this.page;
        this.http.get(req_url).subscribe(function (data) {
            _this.items = data.items;
            _this.meta = data['_meta'];
            _this.page = _this.meta.currentPage;
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
            alert('error loading data!');
            console.log(error);
        });
    };
    PaymentsComponent.prototype.changeSort = function (sortBy) {
        if (this.sortBy === sortBy) {
            this.sort = (this.sort === 'desc' ? 'asc' : 'desc');
        }
        else {
            this.sort = 'desc';
            this.sortBy = sortBy;
        }
        this.getItems(this.page, this.sort, this.sortBy, this.filter);
    };
    PaymentsComponent.prototype.changePage = function () {
        var _this = this;
        setTimeout(function () {
            _this.getItems(_this.page, _this.sort, _this.sortBy, _this.filter);
        }, 100);
    };
    PaymentsComponent.prototype.changeType = function (t) {
        this.filter.type = t;
        if (t == 2) {
            this.filter.description = -1;
            this.filter.status = 1;
            this.filter.search = '';
        }
        this.meta = { totalCount: 0, pageCount: 0, currentPage: 0, perPage: 20 };
        this.getItems(this.page, this.sort, this.sortBy, this.filter);
    };
    PaymentsComponent.prototype.formatDate = function (time) {
        var d = new Date(time * 1000);
        return (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate());
    };
    PaymentsComponent.prototype.formatAmount = function (amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    PaymentsComponent.prototype.formatDescription = function (d) {
        if (this.isJson(d)) {
            var json = JSON.parse(d);
            if (typeof json.description !== 'undefined') {
                if (json.description.length > 30) {
                    return json.description.substring(0, 30) + ' ...';
                }
                else {
                    return json.description;
                }
            }
        }
        if (d == '2') {
            return 'First Payment';
        }
        if (d == '1') {
            return 'Renewal';
        }
        return d;
    };
    PaymentsComponent.prototype.formatAccount = function (item) {
        if (this.isByAdmin(item.data)) {
            var j = JSON.parse(item.data);
            return j.user;
        }
        return item.account_id;
    };
    PaymentsComponent.prototype.isByAdmin = function (d) {
        try {
            var j = JSON.parse(d);
            if (typeof j.description === 'undefined') {
                return false;
            }
            else {
                return true;
            }
        }
        catch (e) {
            return false;
        }
    };
    PaymentsComponent.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    PaymentsComponent.prototype.filterList = function () {
        this.meta = { totalCount: 0, pageCount: 0, currentPage: 0, perPage: 20 };
        this.getItems(this.page, this.sort, this.sortBy, this.filter);
    };
    PaymentsComponent.prototype.add = function () {
        this.modalService.open(AddPaymentComponent, { size: 'lg', windowClass: 'modal-xl' });
    };
    PaymentsComponent.prototype.edit = function (id) {
        var editModal = this.modalService.open(EditPaymentComponent, { size: 'lg', windowClass: 'modal-xl' });
        editModal.componentInstance.id = id;
    };
    PaymentsComponent.prototype.view = function (id) {
        var viewModal = this.modalService.open(ViewPaymentComponent, { size: 'lg', windowClass: 'modal-xl' });
        viewModal.componentInstance.id = id;
    };
    PaymentsComponent.prototype.export = function () {
        window.open(this.http.withApiBase('payments/export'), '_system');
    };
    PaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! ./payments.component.html */ "./src/app/payments/payments.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.scss */ "./src/app/payments/payments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], PaymentsComponent);
    return PaymentsComponent;
}());

var AddPaymentComponent = /** @class */ (function () {
    function AddPaymentComponent(activeModal, http, eventBus) {
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.data = { description: '', user: '', reference_code: '', created_at: { year: '', month: '', day: '' }, amount: null, type: 2 };
        this.isLoading = false;
        this.title = 'Add New';
        this.data.user = JSON.parse(localStorage.getItem('__codeart/_ionickv/display_name'));
    }
    AddPaymentComponent.prototype.save = function () {
        var _this = this;
        this.isLoading = true;
        console.log(this.data);
        var date = new Date(this.data.created_at.year + '-' + this.data.created_at.month + '-' + this.data.created_at.day);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('amount', '' + ((this.data.type == 2 ? -1 : 1) * Math.abs(parseInt(this.data.amount))))
            .set('status', '1')
            .set('reference_code', this.data.reference_code)
            .set('type', '' + this.data.type)
            .set('data', JSON.stringify({ user: this.data.user, description: this.data.description }))
            .set('created_at', '' + date.getTime() / 1000)
            .set('updated_at', '' + date.getTime() / 1000);
        this.http.post(this.http.withApiBase('payments'), body).subscribe(function (data) {
            _this.isLoading = false;
            _this.eventBus.cast('payments:add', _this.data);
            _this.activeModal.close();
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    AddPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-add-modal',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/payments/add.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.scss */ "./src/app/payments/payments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], AddPaymentComponent);
    return AddPaymentComponent;
}());

var EditPaymentComponent = /** @class */ (function () {
    function EditPaymentComponent(activeModal, http, eventBus) {
        var _this = this;
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.data = { description: '', user: '', reference_code: '', created_at: null, amount: null, type: 2 };
        this.isLoading = true;
        this.id = 0;
        this.title = 'Edit';
        setTimeout(function () {
            _this.getData();
        }, 200);
    }
    EditPaymentComponent.prototype.getData = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('payments/' + this.id)).subscribe(function (data) {
            var parsed_data = JSON.parse(data.data);
            var d = new Date(data.created_at * 1000);
            _this.data = {
                description: parsed_data.description,
                user: parsed_data.user,
                reference_code: data.reference_code,
                created_at: { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() },
                amount: data.amount,
                type: data.type
            };
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            alert('error loading data!');
            _this.activeModal.dismiss();
        });
    };
    EditPaymentComponent.prototype.save = function () {
        var _this = this;
        this.isLoading = true;
        console.log(this.data);
        var date = new Date(this.data.created_at.year + '-' + this.data.created_at.month + '-' + this.data.created_at.day);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('amount', '' + ((this.data.type == 2 ? -1 : 1) * Math.abs(parseInt(this.data.amount))))
            .set('status', '1')
            .set('reference_code', this.data.reference_code)
            .set('type', '' + this.data.type)
            .set('data', JSON.stringify({ user: this.data.user, description: this.data.description }))
            .set('created_at', '' + date.getTime() / 1000)
            .set('updated_at', '' + date.getTime() / 1000);
        this.http.put(this.http.withApiBase('payments/' + this.id), body).subscribe(function (data) {
            _this.isLoading = false;
            _this.eventBus.cast('payments:add', _this.data);
            _this.activeModal.close();
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    EditPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-edit-modal',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/payments/add.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.scss */ "./src/app/payments/payments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], EditPaymentComponent);
    return EditPaymentComponent;
}());

var ViewPaymentComponent = /** @class */ (function () {
    function ViewPaymentComponent(activeModal, http, eventBus) {
        var _this = this;
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.data = { description: '', user: '', reference_code: '', created_at: null, amount: null, type: 0, status: 0 };
        this.id = 0;
        setTimeout(function () {
            _this.getData();
        }, 200);
    }
    ViewPaymentComponent.prototype.getData = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('payments/' + this.id)).subscribe(function (data) {
            var parsed_data = JSON.parse(data.data);
            var user = data.account_id;
            var description = data.data;
            if (typeof parsed_data.description != 'undefined') {
                description = parsed_data.description;
                user = parsed_data.user;
            }
            if (description == '1') {
                description = 'Renewal';
            }
            if (description == '2') {
                description = 'First Payment';
            }
            var d = new Date(data.created_at * 1000);
            _this.data = {
                description: description,
                user: user,
                reference_code: data.reference_code,
                created_at: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes(),
                amount: data.amount,
                type: data.type,
                status: data.status
            };
        }, function (err) {
            console.log(err);
            alert('error loading data!');
            _this.activeModal.dismiss();
        });
    };
    ViewPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-view-modal',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/payments/view.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.scss */ "./src/app/payments/payments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], ViewPaymentComponent);
    return ViewPaymentComponent;
}());



/***/ }),

/***/ "./src/app/payments/view.component.html":
/*!**********************************************!*\
  !*** ./src/app/payments/view.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">View Payment</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>User/UserID</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Payed by\" [disabled]=\"true\"\n                       [(ngModel)]=\"data.user\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Amount</label>\n                <input type=\"number\" class=\"form-control\" placeholder=\"Amount\" [disabled]=\"true\"\n                       [(ngModel)]=\"data.amount\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Reference Code</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Bank Reference Code\" [disabled]=\"true\"\n                       [(ngModel)]=\"data.reference_code\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Payment Date</label>\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"data.created_at\"\n                           [disabled]=\"true\">\n\n                </div>\n            </fieldset>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Type</label>\n                <select class=\"form-control\" [(ngModel)]=\"data.type\" [disabled]=\"true\">\n                    <option value=\"2\">Expenses</option>\n                    <option value=\"1\">Income</option>\n                </select>\n            </fieldset>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Status</label>\n                <select class=\"form-control\" [(ngModel)]=\"data.status\" [disabled]=\"true\">\n                    <option value=\"1\">Successful</option>\n                    <option value=\"2\">Pending</option>\n                    <option value=\"3\">Unsuccessful</option>\n                </select>\n            </fieldset>\n        </div>\n\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Description</label>\n                <textarea rows=\"4\" type=\"text\" class=\"form-control\" placeholder=\"Keep it short!\" [disabled]=\"true\"\n                          [(ngModel)]=\"data.description\"></textarea>\n            </fieldset>\n        </div>\n\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary btn-raised\"\n            (click)=\"activeModal.close('Close click')\">Close\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-left\">\n    <div class=\"col-6\">\n        <div class=\"content-header\">Settings</div>\n        <p class=\"content-sub-header\">Getspotify settings</p>\n    </div>\n    <div class=\"col-6\" style=\"text-align: right\">\n        <a class=\"btn btn-raised gradient-ibiza-sunset white m-2 mr-auto\" (click)=\"save()\">Save Settings</a>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\" *ngFor=\"let item of items\">\n        <fieldset class=\"form-group\">\n            <label>{{getTitle(item.key)}}</label>\n            <quill-editor [(ngModel)]=\"data[item.key]\" [modules]=\"editorModulesConfig\"\n                          [readOnly]=\"isLoading\"></quill-editor>\n        </fieldset>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(http) {
        this.http = http;
        this.editorModulesConfig = {
            toolbar: [
                ['bold', 'italic'],
                [{ 'direction': 'rtl' }],
                ['link']
            ]
        };
        this.items = [];
        this.isLoading = true;
        this.data = {};
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    SettingsComponent.prototype.getItems = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('constants/list')).subscribe(function (data) {
            _this.items = data;
            for (var i = 0; i < _this.items.length; i++) {
                _this.data[_this.items[i].key] = _this.items[i].value;
            }
            _this.isLoading = false;
        }, function (error) {
            console.log(error);
        });
    };
    SettingsComponent.prototype.getTitle = function (key) {
        return key.replace(/_/g, ' ').replace(/\b\w/g, function (l) { return l.toUpperCase(); });
    };
    SettingsComponent.prototype.save = function () {
        var _this = this;
        this.isLoading = true;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        for (var key in this.data) {
            body = body.set(key, this.data[key]);
        }
        this.http.post(this.http.withApiBase('constants/mass'), body).subscribe(function (data) {
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/animations/custom-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/*! exports provided: customAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAnimations", function() { return customAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var customAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 <=> 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200))
    ])
];


/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuthenticated = this.authService.isAuthenticated();
        if (!isAuthenticated) {
            this.router.navigateByUrl('/page/login');
        }
        return isAuthenticated;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/shared/services/storage.service.ts");



var AuthService = /** @class */ (function () {
    function AuthService(storage) {
        this.storage = storage;
    }
    AuthService.prototype.signinUser = function (email, password) {
        //your code for checking credentials and getting tokens for for signing in user
    };
    AuthService.prototype.logout = function () {
        this.storage.logout();
    };
    AuthService.prototype.getToken = function () {
        return this.storage.getToken();
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('__codeart/_ionickv/jwt_token');
        return !!token;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebar.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/*! exports provided: SidebarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(el, renderer, router, cd) {
        this.el = el;
        this.renderer = renderer;
        this.router = router;
        this.cd = cd;
        this.navlinks = [];
        this.activeLinks = [];
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidebarDirective.prototype.ngOnInit = function () {
        this.activeRoute = this.router.url;
        this.innerWidth = window.innerWidth;
    };
    SidebarDirective.prototype.ngAfterViewInit = function () {
        var element = this.el.nativeElement;
        this.$wrapper = this.renderer.parentNode(this.el.nativeElement); // document.getElementsByClassName("wrapper")[0];
        var $sidebar_img_container = this.el.nativeElement.querySelector('.sidebar-background');
        var $sidebar_img = element.getAttribute("data-image");
        if ($sidebar_img_container.length !== 0 && $sidebar_img !== undefined) {
            this.renderer.setAttribute($sidebar_img_container, 'style', 'background-image: url("' + $sidebar_img + '")');
        }
        if (!this.$wrapper.classList.contains("nav-collapsed")) {
            this.expandActive();
        }
        if (this.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        this.cd.detectChanges();
    };
    SidebarDirective.prototype.onMouseOver = function (e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(function (_) { return _.navCollapsedOpen === true; })
                .forEach(function (link) {
                link.open = true;
                link.navCollapsedOpen = false;
            });
        }
    };
    SidebarDirective.prototype.onMouseOut = function (e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.addClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(function (_) { return _.open === true; })
                .forEach(function (link) {
                link.open = false;
                link.navCollapsedOpen = true;
            });
        }
    };
    SidebarDirective.prototype.onClick = function (e) {
        if (e.target.parentElement.classList.contains("logo-text") ||
            e.target.parentElement.classList.contains("logo-img")) {
            this.activeLinks = [];
            this.activeRoute = this.router.url;
            this.expandActive();
            this.hideSidebar();
        }
        else if (e.target.parentElement.classList.contains("nav-close") ||
            e.target.classList.contains("nav-close")) {
            this.toggleHideSidebar.emit(true);
        }
    };
    SidebarDirective.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        if (event.target.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        if (event.target.innerWidth > 992) {
            var toggleStatus = this.el.nativeElement;
            // this.el.nativeElement.querySelector('.toggle-icon')
            //   .getAttribute("data-toggle");
            if (toggleStatus === "collapsed" &&
                this.$wrapper.classList.contains("nav-collapsed") &&
                this.$wrapper.classList.contains("menu-collapsed")) {
                this.$wrapper.classList.add("nav-collapsed");
                this.$wrapper.classList.add("menu-collapsed");
            }
            this.toggleHideSidebar.emit(false);
        }
    };
    // check outside click and close sidebar for smaller screen <992
    SidebarDirective.prototype.onOutsideClick = function (event) {
        if (this.innerWidth < 992) {
            var clickedComponent = event.target;
            var inside = false;
            do {
                if (clickedComponent === this.el.nativeElement) {
                    inside = true;
                }
                clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);
            if (!this.el.nativeElement.classList.contains("hide-sidebar") &&
                !inside &&
                !event.target.classList.contains("navbar-toggle")) {
                this.toggleHideSidebar.emit(true);
            }
        }
    };
    SidebarDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    SidebarDirective.prototype.getLinks = function () {
        return this.navlinks;
    };
    SidebarDirective.prototype.hideSidebar = function () {
        if (this.innerWidth < 992) {
            this.toggleHideSidebar.emit(true);
        }
    };
    SidebarDirective.prototype.expandActive = function () {
        var _this = this;
        this.navlinks
            .filter(function (_) { return _.routePath === _this.activeRoute; })
            .forEach(function (link) {
            link.isShown = true;
            if (link.level.toString().trim() === "3") {
                _this.navlinks
                    .filter(function (_) { return _.level.toString().trim() === "2" && _.title === link.parent; })
                    .forEach(function (parentLink) {
                    parentLink.open = true;
                    _this.activeLinks.push(parentLink.title);
                    _this.navlinks
                        .filter(function (_) {
                        return _.level.toString().trim() === "1" &&
                            _.title === parentLink.parent;
                    })
                        .forEach(function (superParentLink) {
                        superParentLink.open = true;
                        _this.activeLinks.push(superParentLink.title);
                        superParentLink.toggleEmit.emit(_this.activeLinks);
                    });
                });
            }
            else if (link.level.toString().trim() === "2") {
                _this.navlinks
                    .filter(function (_) { return _.level.toString().trim() === "1" && _.title === link.parent; })
                    .forEach(function (parentLink) {
                    parentLink.open = true;
                    _this.activeLinks.push(parentLink.title);
                    parentLink.toggleEmit.emit(_this.activeLinks);
                });
            }
        });
    };
    SidebarDirective.prototype.toggleActiveList = function () {
        var _this = this;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === "3" && _.routePath !== _this.activeRoute;
        })
            .forEach(function (link) {
            link.active = false;
        });
    };
    SidebarDirective.prototype.setIsShown = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = true;
            link.isHidden = false;
        });
    };
    SidebarDirective.prototype.setIsHidden = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = false;
            link.isHidden = true;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarDirective.prototype, "toggleHideSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onMouseOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onMouseOut", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onOutsideClick", null);
    SidebarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebar]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SidebarDirective);
    return SidebarDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebaranchortoggle.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/sidebaranchortoggle.directive.ts ***!
  \********************************************************************/
/*! exports provided: SidebarAnchorToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAnchorToggleDirective", function() { return SidebarAnchorToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");



var SidebarAnchorToggleDirective = /** @class */ (function () {
    function SidebarAnchorToggleDirective(navlink) {
        this.navlink = navlink;
    }
    SidebarAnchorToggleDirective.prototype.onClick = function () {
        this.navlink.toggle();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarAnchorToggleDirective.prototype, "onClick", null);
    SidebarAnchorToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[appSidebarAnchorToggle]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"]])
    ], SidebarAnchorToggleDirective);
    return SidebarAnchorToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebarlink.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlink.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLinkDirective", function() { return SidebarLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");




var SidebarLinkDirective = /** @class */ (function () {
    function SidebarLinkDirective(sidebarList, sidebar, el) {
        this.el = el;
        this.toggleEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sidebarList = sidebarList;
        this.sidebar = sidebar;
    }
    Object.defineProperty(SidebarLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "navCollapsedOpen", {
        get: function () {
            return this._navCollapsedOpen;
        },
        set: function (value) {
            this._navCollapsedOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "isHidden", {
        get: function () {
            return this._isHidden;
        },
        set: function (value) {
            this._isHidden = value;
        },
        enumerable: true,
        configurable: true
    });
    SidebarLinkDirective.prototype.ngOnInit = function () {
        this.sidebar.addLink(this);
    };
    SidebarLinkDirective.prototype.toggle = function () {
        this.sidebarList.activeLinks = [];
        this.sidebarList.setList(this.sidebar.getLinks());
        var classList = this.el.nativeElement.classList;
        if (this.level.toString().trim() === "3") {
            this.active = true;
            this.sidebarList.toggleActiveList(this);
            this.sidebar.hideSidebar();
        }
        if (this.level.toString().trim() === "1" && !classList.contains("has-sub")) {
            this.sidebarList.collapseOtherLinks(this);
        }
        if (classList.contains("has-sub") && classList.contains("open")) {
            this.sidebarList.collapse(this);
        }
        else {
            if (classList.contains("has-sub")) {
                this.sidebarList.expand(this);
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SidebarLinkDirective.prototype, "level", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "classes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "parent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "routePath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarLinkDirective.prototype, "toggleEmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.open"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "open", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.nav-collapsed-open"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "navCollapsedOpen", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.active"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "active", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-shown"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "isShown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-hidden"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "isHidden", null);
    SidebarLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarlink]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],
            _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SidebarLinkDirective);
    return SidebarLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebarlist.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlist.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarListDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarListDirective", function() { return SidebarListDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarListDirective = /** @class */ (function () {
    function SidebarListDirective() {
        this.navlinks = [];
        this.activeLinks = [];
    }
    SidebarListDirective.prototype.setList = function (list) {
        this.navlinks = list;
    };
    SidebarListDirective.prototype.collapse = function (link) {
        link.open = false;
        this.setIsHidden(link);
        if (link.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(function (_) { return _.level.toString().trim() === "1" && _.open === true; })[0].title);
        }
        link.toggleEmit.emit(this.activeLinks);
    };
    SidebarListDirective.prototype.expand = function (link) {
        link.open = true;
        this.activeLinks.push(link.title);
        this.collapseOtherLinks(link);
        this.setIsShown(link);
        link.toggleEmit.emit(this.activeLinks);
    };
    SidebarListDirective.prototype.toggleActiveList = function (openLink) {
        this.navlinks
            .filter(function (_) { return _.level.toString().trim() === "3"; })
            .forEach(function (link) {
            if (link !== openLink) {
                link.active = false;
            }
        });
    };
    SidebarListDirective.prototype.collapseOtherLinks = function (openLink) {
        var _this = this;
        if (openLink.level.toString().trim() === "1") {
            this.navlinks
                .filter(function (_) {
                return (_.level.toString().trim() === openLink.level.toString().trim() ||
                    _.level.toString().trim() === "2") &&
                    _.open === true;
            })
                .forEach(function (link) {
                if (link !== openLink) {
                    link.open = false;
                    _this.setIsHidden(link);
                }
            });
        }
        else if (openLink.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(function (_) { return _.level.toString().trim() === "1" && _.open === true; })[0].title);
            this.navlinks
                .filter(function (_) {
                return _.level.toString().trim() === openLink.level.toString().trim() &&
                    _.parent === openLink.parent &&
                    _.open === true;
            })
                .forEach(function (link) {
                if (link !== openLink) {
                    link.open = false;
                    _this.setIsHidden(link);
                }
            });
        }
    };
    SidebarListDirective.prototype.setIsShown = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = true;
            link.isHidden = false;
        });
    };
    SidebarListDirective.prototype.setIsHidden = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = false;
            link.isHidden = true;
        });
    };
    SidebarListDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarList]" })
    ], SidebarListDirective);
    return SidebarListDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebartoggle.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/sidebartoggle.directive.ts ***!
  \**************************************************************/
/*! exports provided: SidebarToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._dataToggle = "expanded";
        this._toggleRight = true;
        this._toggleLeft = false;
        this.fireRefreshEventOnWindow = function () {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
    }
    Object.defineProperty(SidebarToggleDirective.prototype, "dataToggle", {
        get: function () {
            return this._dataToggle;
        },
        set: function (value) {
            this._dataToggle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarToggleDirective.prototype, "toggleRight", {
        get: function () {
            return this._toggleRight;
        },
        set: function (value) {
            this._toggleRight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarToggleDirective.prototype, "toggleLeft", {
        get: function () {
            return this._toggleLeft;
        },
        set: function (value) {
            this._toggleLeft = value;
        },
        enumerable: true,
        configurable: true
    });
    SidebarToggleDirective.prototype.ngAfterViewInit = function () {
        this.$wrapper = document.getElementsByClassName("wrapper")[0];
        this.compact_menu_checkbox = this.$wrapper.querySelector('.cz-compact-menu');
    };
    SidebarToggleDirective.prototype.onClick = function (e) {
        var _this = this;
        if (this.dataToggle === "expanded") {
            this.dataToggle = "collapsed";
            this.renderer.addClass(this.$wrapper, 'nav-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = true;
            }
        }
        else {
            this.dataToggle = "expanded";
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = false;
            }
        }
        this.toggleLeft = !this.toggleLeft;
        this.toggleRight = !this.toggleRight;
        setTimeout(function () {
            _this.fireRefreshEventOnWindow();
        }, 300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("attr.data-toggle"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], SidebarToggleDirective.prototype, "dataToggle", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-right"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarToggleDirective.prototype, "toggleRight", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-left"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarToggleDirective.prototype, "toggleLeft", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "onClick", null);
    SidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarToggle]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\n<footer>\n    <div class=\"container-fluid\">\n        <p class=\"copyright text-center\">\n            Developed With <span style=\"font-size: 19px;color: #ff586b;\">♥️</span> By <a href=\"https://alimrz.com\">Ali M.Mirzaee</a>\n        </p>\n\n    </div>\n</footer>\n<!--Footer Ends-->\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        //Variables
        this.currentDate = new Date();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (Header) Starts -->\n<nav class=\"header-navbar navbar navbar-expand-lg navbar-light bg-faded\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\"\n                    (click)=\"toggleSidebar()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <span class=\"d-lg-none navbar-right navbar-collapse-toggle\">\n                <a class=\"open-navbar-container\" (click)=\"isCollapsed = !isCollapsed\"\n                   [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\n                    <i class=\"ft-more-vertical\"></i>\n                </a>\n            </span>\n        </div>\n        <div class=\"navbar-container\">\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item mr-2  d-none d-lg-block\">\n                        <a href=\"javascript:;\" class=\"nav-link\" id=\"navbar-fullscreen\" appToggleFullscreen\n                           (click)=\"ToggleClass()\">\n                            <i class=\"{{toggleClass}} font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">fullscreen</p>\n                        </a>\n                    </li>\n\n\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\n                            <i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">User Settings</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\" class=\"text-left\">\n                            <!--                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">-->\n                            <!--                                <i class=\"ft-edit mr-2\"></i>-->\n                            <!--                                <span>My Profile</span>-->\n                            <!--                            </a>-->\n                            <!--                            <div class=\"dropdown-divider\"></div>-->\n                            <a class=\"dropdown-item\" (click)=\"logout()\">\n                                <i class=\"ft-power mr-2\"></i>\n                                <span>Logout</span>\n                            </a>\n                        </div>\n                    </li>\n\n\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n<!-- Navbar (Header) Ends -->\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, layoutService, configService, storage, router) {
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.storage = storage;
        this.router = router;
        this.currentLang = 'en';
        this.toggleClass = 'ft-maximize';
        this.placement = 'bottom-right';
        this.isCollapsed = true;
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = {};
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        if (this.config.layout.dir) {
            var dir = this.config.layout.dir;
            if (dir === 'rtl') {
                this.placement = 'bottom-left';
            }
            else if (dir === 'ltr') {
                this.placement = 'bottom-right';
            }
        }
    };
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else {
            this.toggleClass = 'ft-maximize';
        }
    };
    NavbarComponent.prototype.toggleNotificationSidebar = function () {
        this.layoutService.emitChange(true);
    };
    NavbarComponent.prototype.toggleSidebar = function () {
        var appSidebar = document.getElementsByClassName('app-sidebar')[0];
        if (appSidebar.classList.contains('hide-sidebar')) {
            this.toggleHideSidebar.emit(false);
        }
        else {
            this.toggleHideSidebar.emit(true);
        }
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            title: 'Are you sure?',
            text: 'Do you want to logout?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No, cancel'
        }).then(function (isConfirm) {
            if (isConfirm.value) {
                _this.storage.logout();
                _this.router.navigateByUrl('/page/login');
            }
        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.noop);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "toggleHideSidebar", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"], _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'page',
        loadChildren: './pages/content-layout-page/content-pages.module#ContentPagesModule'
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../accounts/accounts.component */ "./src/app/accounts/accounts.component.ts");
/* harmony import */ var _masters_masters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../masters/masters.component */ "./src/app/masters/masters.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../payments/payments.component */ "./src/app/payments/payments.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _packages_packages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../packages/packages.component */ "./src/app/packages/packages.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../todos/todos.component */ "./src/app/todos/todos.component.ts");







var Full_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'accounts',
        component: _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_0__["AccountsComponent"],
        data: {
            title: 'Accounts'
        }
    },
    {
        path: 'masters',
        component: _masters_masters_component__WEBPACK_IMPORTED_MODULE_1__["MastersComponent"],
        data: {
            title: 'Masters'
        }
    },
    {
        path: 'payments',
        component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_2__["PaymentsComponent"],
        data: {
            title: 'Payments'
        }
    },
    {
        path: 'support',
        component: _support_support_component__WEBPACK_IMPORTED_MODULE_3__["SupportComponent"],
        data: {
            title: 'Support'
        }
    },
    {
        path: 'packages',
        component: _packages_packages_component__WEBPACK_IMPORTED_MODULE_4__["PackagesComponent"],
        data: {
            title: 'Packages'
        }
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
        data: {
            title: 'Settings'
        }
    },
    {
        path: 'todos',
        component: _todos_todos_component__WEBPACK_IMPORTED_MODULE_6__["TodosComponent"],
        data: {
            title: 'Todos'
        }
    },
];


/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.setConfigValue();
    }
    ConfigService.prototype.setConfigValue = function () {
        this.templateConf = {
            layout: {
                variant: 'Light',
                dir: 'ltr',
                sidebar: {
                    collapsed: false,
                    size: 'sidebar-md',
                    backgroundColor: "purple-love",
                    backgroundImage: true,
                    backgroundImageURL: 'assets/img/sidebar-bg/01.jpg'
                }
            }
        };
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/services/http.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/http.service.ts ***!
  \*************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");








var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getHeaders = function () {
        var h = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        h = h.set('Content-Type', 'application/x-www-form-urlencoded');
        var token = localStorage.getItem('__codeart/_ionickv/jwt_token');
        if (token) {
            token = JSON.parse(token);
            h = h.set('Authorization', 'Bearer ' + token);
        }
        return h;
    };
    HttpService.prototype.get = function (url, params) {
        return this.http.get(url, {
            headers: this.getHeaders(),
            params: params
        }).catch(this.handleError.bind(this));
    };
    HttpService.prototype.post = function (url, data) {
        return this.http.post(url, data.toString(), {
            headers: this.getHeaders()
        }).catch(this.handleError.bind(this));
    };
    HttpService.prototype.put = function (url, data) {
        return this.http.put(url, data.toString(), {
            headers: this.getHeaders()
        }).catch(this.handleError.bind(this));
    };
    HttpService.prototype.delete = function (url) {
        return this.http.delete(url, {
            headers: this.getHeaders()
        }).catch(this.handleError.bind(this));
    };
    HttpService.prototype.toHttpParams = function (params) {
        return Object.getOwnPropertyNames(params)
            .reduce(function (p, key) { return p.set(key, params[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
    };
    HttpService.prototype.handleError = function (error) {
        if (error.status === 401) {
        }
        var errMsg = {
            isJson: false,
            msg: (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : 'Server error',
            status: 0
        };
        if (error.status > 200 && error.status < 500 && error.headers.get('Content-Type') === 'application/json') {
            // TODO redirect
            errMsg.isJson = true;
            errMsg.msg = error.json().data;
            errMsg.status = error.status;
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
    };
    HttpService.prototype.withApiBase = function (url) {
        var b = 'http://api.getspotify.ir/';
        return b + url.trim();
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    LayoutService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/shared/services/storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");



var StorageService = /** @class */ (function () {
    function StorageService(storage) {
        this.storage = storage;
        this.constData = {
            token: '',
            uid: null,
            displayName: '',
            role: '',
        };
        this.updateConstData();
    }
    StorageService.prototype.updateConstData = function () {
        var _this = this;
        this.storage.get('jwt_token').then(function (data) {
            _this.constData.token = data;
        });
        this.storage.get('uid').then(function (data) {
            _this.constData.uid = data;
        });
        this.storage.get('display_name').then(function (data) {
            _this.constData.displayName = data;
        });
        this.storage.get('role').then(function (data) {
            _this.constData.role = data;
        });
    };
    StorageService.prototype.setToken = function (token) {
        this.storage.set('jwt_token', token);
        this.updateConstData();
    };
    StorageService.prototype.getToken = function () {
        return this.constData.token;
    };
    StorageService.prototype.setUid = function (uid) {
        this.storage.set('uid', uid);
        this.updateConstData();
    };
    StorageService.prototype.getUid = function () {
        return this.constData.uid;
    };
    StorageService.prototype.setDisplayName = function (displayName) {
        this.storage.set('display_name', displayName);
        this.updateConstData();
    };
    StorageService.prototype.getDisplayName = function () {
        return this.constData.displayName;
    };
    StorageService.prototype.setRole = function (Roles) {
        this.storage.set('role', Roles);
        this.updateConstData();
    };
    StorageService.prototype.getRole = function () {
        return this.constData.role;
    };
    StorageService.prototype.logout = function () {
        this.storage.remove('uid');
        this.storage.remove('jwt_token');
        this.storage.remove('role');
        this.storage.remove('display_name');
    };
    StorageService.prototype.set = function (key, value) {
        this.storage.set(key, value);
    };
    StorageService.prototype.get = function (key) {
        return this.storage.get(key);
    };
    StorageService.prototype.keys = function () {
        return this.storage.keys();
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");
/* harmony import */ var _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/sidebaranchortoggle.directive */ "./src/app/shared/directives/sidebaranchortoggle.directive.ts");
/* harmony import */ var _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/sidebartoggle.directive */ "./src/app/shared/directives/sidebartoggle.directive.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/shared/services/storage.service.ts");








//COMPONENTS



// import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';
//DIRECTIVES







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                // NotificationSidebarComponent,
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__["ToggleFullscreenDirective"],
                _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__["SidebarDirective"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                // NotificationSidebarComponent,
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__["ToggleFullscreenDirective"],
                _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__["SidebarDirective"],
                _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_13__["SidebarLinkDirective"],
                _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_14__["SidebarListDirective"],
                _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_15__["SidebarAnchorToggleDirective"],
                _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_16__["SidebarToggleDirective"],
            ],
            providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_17__["StorageService"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar-routes.config.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar-routes.config.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: '/accounts', title: 'Accounts', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: '/masters', title: 'Masters', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: '/payments', title: 'Payments', icon: 'ft-credit-card', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: '/packages', title: 'Packages', icon: 'ft-package', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: '/settings', title: 'Settings', icon: 'ft-settings', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    {
        path: '/support',
        title: 'Support',
        icon: 'ft-message-square',
        class: '',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: true,
        submenu: []
    },
    { path: '/todos', title: 'To Do', icon: 'ft-check-square', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\n<div class=\"sidebar-header\">\n    <div class=\"logo clearfix\">\n        <a [routerLink]=\"['/']\" class=\"logo-text float-left\">\n            <span class=\"text align-middle\">GetSpotify.ir</span>\n        </a>\n    </div>\n</div>\n<!-- Sidebar Header Ends -->\n\n<!-- Sidebar Content starts -->\n<div class=\"sidebar-content\"  [perfectScrollbar]>\n    <div class=\"nav-container\">\n        <ul class=\"navigation\" appSidebarList>\n            <!-- First level menu -->\n             <li appSidebarlink level=\"{{depth + 1}}\" (toggleEmit)=\"handleToggle($event)\" (click)=\"toggleSlideInOut()\" [routePath]=\"menuItem.path\" [classes]=\"menuItem.class\" [title]=\"menuItem.title\"  [parent]=\"\" *ngFor=\"let menuItem of menuItems\"   [ngClass]=\"{'has-sub': menuItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuItem.title)}\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\n                [routerLinkActiveOptions]=\"{exact: true}\">\n                <a appSidebarAnchorToggle [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\n                    <span class=\"menu-title\">{{menuItem.title | translate }}</span>\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\n                </a>\n                <ng-template #externalLinkBlock>\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\n                        <span class=\"menu-title\">{{menuItem.title | translate }}</span>\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\n                    </a>\n                </ng-template>\n                <!-- Second level menu -->\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuItem.title) ? true : false\">\n                    <li appSidebarlink level=\"{{depth + 2}}\" (toggleEmit)=\"handleToggle($event)\" [routePath]=\"menuSubItem.path\" [classes]=\"menuSubItem.class\" [title]=\"menuSubItem.title\" [parent]=\"menuItem.title\" *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"{'has-sub': menuSubItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuSubItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuSubItem.title)}\">\n                        <a appSidebarAnchorToggle [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\n                            <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\n                        </a>\n                        <ng-template #externalSubLinkBlock>\n                            <a [href]=\"[menuSubItem.path]\">\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\n                                <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\n                            </a>\n                        </ng-template>\n                        <!-- Third level menu -->\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuSubItem.title) ? true : false\">\n                            <li appSidebarlink level=\"{{depth + 3}}\" [routePath]=\"menuSubsubItem.path\" [classes]=\"menuSubsubItem.class\" [title]=\"menuSubsubItem.title\" [parent]=\"menuSubItem.title\" *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\n                                [ngClass]=\"[menuSubsubItem.class]\">\n                                <a appSidebarAnchorToggle [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\n                                    <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\n                                </a>\n                                <ng-template #externalSubSubLinkBlock>\n                                    <a [href]=\"[menuSubsubItem.path]\">\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\n                                        <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\n                                    </a>\n                                </ng-template>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</div>\n<!-- Sidebar Content Ends -->\n"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/custom-animations */ "./src/app/shared/animations/custom-animations.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");







var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(elementRef, renderer, router, route, translate, configService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.configService = configService;
        this.activeTitles = [];
        this.nav_collapsed_open = false;
        this.logoUrl = 'assets/img/logo.png';
        this.config = {};
        if (this.depth === undefined) {
            this.depth = 0;
            this.expanded = true;
        }
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
        if (this.config.layout.sidebar.backgroundColor === 'white') {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/img/logo.png';
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.sidebar.collapsed != undefined) {
                if (_this.config.layout.sidebar.collapsed === true) {
                    _this.expanded = false;
                    // this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
                    // this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = true;
                }
                else if (_this.config.layout.sidebar.collapsed === false) {
                    _this.expanded = true;
                    // this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
                    // this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = false;
                }
            }
        }, 0);
    };
    SidebarComponent.prototype.toggleSlideInOut = function () {
        this.expanded = !this.expanded;
    };
    SidebarComponent.prototype.handleToggle = function (titles) {
        this.activeTitles = titles;
    };
    // NGX Wizard - skip url change
    SidebarComponent.prototype.ngxWizardFunction = function (path) {
        if (path.indexOf('forms/ngx') !== -1) {
            this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
        }
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
            animations: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__["customAnimations"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/support/chat.model.ts":
/*!***************************************!*\
  !*** ./src/app/support/chat.model.ts ***!
  \***************************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
var Chat = /** @class */ (function () {
    function Chat(avatar, chatClass, imagePath, time, messages, messageType) {
        this.avatar = avatar;
        this.chatClass = chatClass;
        this.imagePath = imagePath;
        this.time = time;
        this.messages = messages;
        this.messageType = messageType;
    }
    return Chat;
}());



/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-application\">\n    <div #contentOverlay class=\"content-overlay\" (click)=\"onContentOverlay()\"></div>\n    <div [perfectScrollbar] #chatSidebar class=\"chat-sidebar float-left d-none d-sm-none d-md-block d-lg-block\">\n        <div class=\"chat-sidebar-content\">\n            <div id=\"users-list\" class=\"list-group position-relative\">\n                <a class=\"list-group-item no-border\" *ngFor=\"let item of items;\"\n                   (click)=\"SetActive($event,item.id)\">\n                        <span class=\"media\">\n                          <span class=\"avatar avatar-md avatar-away\">\n                            <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                                 src=\"/assets/img/avatar.jpg\"\n                                 alt=\"Generic placeholder image\">\n                            <i></i>\n                          </span>\n                          <div class=\"media-body  text-left\">\n                            <h6 class=\"list-group-item-heading\">{{item.display_name}}\n                                <span class=\"font-small-3 float-right primary\">{{item.updated_at * 1000 | date:'MMM d, h:mm a'}}</span>\n                            </h6>\n                            <p class=\"list-group-item-text text-muted\">\n                              <i class=\"font-small-2\" [class.danger]=\"item.status == 1\"\n                                 [class.success]=\"item.status != 1\" [class.ft-circle]=\"item.status == 1\"\n                                 [class.ft-check-circle]=\"item.status == 2\"\n                                 [class.ft-check]=\"item.status == 3\"></i> {{item.last_message}}</p>\n                          </div>\n                        </span>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"chat-name p-2 bg-white\">\n        <div class=\"media\">\n            <span class=\"chat-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-none d-block d-sm-block d-md-none\"\n                  (click)=\"onSidebarToggle()\"></span>\n            <div class=\"media-body text-left\">\n                <img src=\"/assets/img/avatar.jpg\" width=\"37\" class=\"rounded-circle mr-1\" alt=\"avatar\"/>\n                <span>{{ activeChatUser }}</span>\n                <span *ngIf=\"activeChatUserId\" class=\"font-small-1 text-success\"> / Account ID: {{ activeChatUserId }}</span>\n            </div>\n            <button *ngIf=\"activeChatstatus != 3\" type=\"button\"\n                    class=\"btn btn-raised gradient-ibiza-sunset white pull-right m-0\" (click)=\"close()\"\n                    [disabled]=\"disableInput\">\n                <i class=\"fa ft-alert-triangle d-block d-xl-inline-block d-lg-none p-0\"></i>\n                <span class=\"d-none d-lg-inline-block ml-1\">Close Thread</span>\n            </button>\n        </div>\n    </div>\n    <section class=\"chat-app-window\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n        <div class=\"chats\">\n            <div class=\"chats\">\n                <div [ngClass]=\"[chat.chatClass]\" *ngFor=\"let chat of chat\">\n                    <div class=\"chat-avatar\">\n                        <a class=\"avatar\" data-toggle=\"tooltip\" data-placement=\"[chat.avatar]\" title=\"\"\n                           data-original-title=\"\">\n                            <img [src]=\"[chat.imagePath]\" class=\"width-50\" alt=\"avatar\"/>\n                        </a>\n                    </div>\n                    <div class=\"chat-body\">\n                        <div class=\"chat-content\" *ngFor=\"let message of chat.messages\">\n                            <p *ngIf=\"chat.messageType === 'text'\">\n                                {{ message }}\n                                <span class=\"time\">{{chat.time * 1000 | date:'MMM d, h:mm a'}}</span>\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </section>\n    <section class=\"chat-app-form bg-blue-grey bg-lighten-5\">\n        <div class=\"chat-app-input row mt-2\">\n            <fieldset class=\"form-group position-relative col-lg-10 col-8 m-0 px-3\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"reply\" [disabled]=\"disableInput\"\n                       (keyup.enter)=\"send()\"\n                       placeholder=\"Type your message\">\n            </fieldset>\n            <fieldset class=\"form-group position-relative has-icon-left col-lg-2 col-4 m-0 pl-0\">\n                <button type=\"button\" class=\"btn btn-raised px-4 gradient-pomegranate white\" (click)=\"send()\"\n                        [disabled]=\"disableInput\">\n                    <i class=\"fa fa-paper-plane-o d-block d-xl-inline-block d-lg-none p-0\"></i>\n                    <span class=\"d-none d-lg-inline-block ml-1\">Send</span>\n                </button>\n            </fieldset>\n        </div>\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/support/support.component.scss":
/*!************************************************!*\
  !*** ./src/app/support/support.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-application .chat-app-form {\n  position: relative;\n  padding: 10px 10px;\n  overflow: hidden; }\n  .chat-application .chat-app-form .form-group i.fa.fa-paper-plane-o {\n    padding: 0.25rem; }\n  .chat-application .list-group-item-heading span {\n  font-size: 0.6rem !important; }\n  .time {\n  display: block;\n  margin: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGltbWlyemFlZS9Xb3JrL2dldHNwb3RpZnktZnJvbnRlbmQvc3JjL2FwcC9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBSnBCO0lBUVEsZ0JBQWdCLEVBQUE7RUFPeEI7RUFDRSw0QkFBNEIsRUFBQTtFQUc5QjtFQUNFLGNBQWM7RUFDZCxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LWFwcGxpY2F0aW9uIHtcbiAgLmNoYXQtYXBwLWZvcm0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIGkuZmEuZmEtcGFwZXItcGxhbmUtbyB7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cblxuLmNoYXQtYXBwbGljYXRpb24gLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHNwYW4ge1xuICBmb250LXNpemU6IDAuNnJlbSAhaW1wb3J0YW50O1xufVxuXG4udGltZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.model */ "./src/app/support/chat.model.ts");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-event-bus */ "./node_modules/ng-event-bus/dist/ng_event_bus.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_event_bus__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var SupportComponent = /** @class */ (function () {
    function SupportComponent(elRef, renderer, http, eventBus) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.http = http;
        this.eventBus = eventBus;
        this.activeChatId = 0;
        this.activeChatstatus = 3;
        this.messages = new Array();
        this.item = 0;
        this.items = [];
        this.isLoading = true;
        this.reply = '';
        this.search = '';
        this.disableInput = false;
        // this.chat = chatService.chat4;
        // this.activeChatUser = 'Ali M.Mirzaee';
        // this.activeChatUserImg = 'https://avatars2.githubusercontent.com/u/7364392?s=460&v=4';
    }
    SupportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getItems();
        setInterval(function () {
            _this.getItems();
        }, 30000);
    };
    SupportComponent.prototype.getItems = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('support-threads?sort=-updated_at&per-page=50')).subscribe(function (data) {
            var temp_data = data.items.map(function (i) {
                i['messages_arr'] = JSON.parse(i['messages']);
                i['added'] = false;
                if (i.messages_arr !== null && i.messages_arr.length > 0) {
                    i['last_message'] = i['messages_arr'][i.messages_arr.length - 1].text;
                    if (i.last_message.length > 25) {
                        i.last_message = i.last_message.substring(0, 25) + ' ...';
                    }
                }
                return i;
            });
            _this.items = [];
            for (var i = 0; i < temp_data.length; i++) {
                if (temp_data[i].added) {
                    continue;
                }
                temp_data[i].added = true;
                var f = temp_data[i];
                for (var j = 0; j < temp_data.length; j++) {
                    if (temp_data[j].added === false && temp_data[j].chat_id === f.chat_id) {
                        temp_data[j].added = true;
                        for (var _i = 0, _a = temp_data[j].messages_arr; _i < _a.length; _i++) {
                            var m = _a[_i];
                            f.messages_arr.unshift(m);
                        }
                    }
                }
                if (f.messages_arr) {
                    f.messages_arr.sort(function (a, b) {
                        return a.created_at - b.created_at;
                    });
                    _this.items.push(f);
                }
            }
            if (_this.items.length > 0 && _this.activeChatId === 0) {
                _this.chat = _this.generateChat(_this.items[0].messages_arr);
                _this.activeChatUser = _this.items[0].display_name;
                _this.activeChatId = _this.items[0].id;
                _this.activeChatstatus = _this.items[0].status;
                _this.http.get(_this.http.withApiBase('shortcuts/get-accounts-by-chat-id?chat_id=' + _this.items[0].chat_id))
                    .subscribe(function (data2) {
                    if (data2 && data2.length > 0) {
                        _this.activeChatUserId = data2[0].id;
                        _this.activeChatUser = data2[0].fullname;
                    }
                    else {
                        _this.activeChatUser = _this.items[0].display_name;
                        _this.activeChatUserId = 0;
                    }
                });
            }
            _this.isLoading = false;
        });
    };
    SupportComponent.prototype.onAddMessage = function () {
    };
    SupportComponent.prototype.SetActive = function (event, id) {
        var _this = this;
        var hElement = this.elRef.nativeElement;
        var allAnchors = hElement.getElementsByClassName('list-group-item');
        [].forEach.call(allAnchors, function (item) {
            item.setAttribute('class', 'list-group-item no-border');
        });
        event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');
        this.messages = [];
        this.activeChatUserId = 0;
        var _loop_1 = function (i) {
            if (this_1.items[i].id == id) {
                this_1.chat = this_1.generateChat(this_1.items[i].messages_arr);
                this_1.activeChatId = id;
                this_1.activeChatUser = '';
                this_1.activeChatstatus = this_1.items[i].status;
                this_1.http.get(this_1.http.withApiBase('shortcuts/get-accounts-by-chat-id?chat_id=' + this_1.items[i].chat_id))
                    .subscribe(function (data) {
                    if (data && data.length > 0) {
                        _this.activeChatUserId = data[0].id;
                        _this.activeChatUser = data[0].fullname;
                    }
                    else {
                        _this.activeChatUser = _this.items[i].display_name;
                        _this.activeChatUserId = 0;
                    }
                });
                return "break";
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.items.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        this.disableInput = false;
        this.reply = '';
    };
    SupportComponent.prototype.generateChat = function (messages) {
        var msg = [];
        for (var i = 0; i < messages.length; i++) {
            msg.push(new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"](messages[i].from == 'user' ? 'left' : 'right', 'chat' + (messages[i].from == 'user' ? ' chat-left' : ''), (messages[i].from == 'user' ? '/assets/img/avatar.jpg' :
                'https://getspotify.ir/wp-content/uploads/2019/03/Spotify.png'), messages[i].created_at, [messages[i].text], 'text'));
        }
        return msg;
    };
    SupportComponent.prototype.send = function () {
        var _this = this;
        if (!this.reply) {
            return;
        }
        this.disableInput = true;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('text', this.reply);
        this.http.post(this.http.withApiBase('support-threads/' + this.activeChatId + '/reply'), body).subscribe(function (data) {
            _this.reply = '';
            for (var i = 0; i < _this.items.length; i++) {
                if (_this.items[i].id == data.id) {
                    _this.items[i] = data;
                    _this.items[i]['messages_arr'] = JSON.parse(_this.items[i]['messages']);
                    _this.items[i]['last_message'] = _this.items[i]['messages_arr'][_this.items[i].messages_arr.length - 1].text;
                    if (_this.items[i].last_message.length > 25) {
                        _this.items[i].last_message = _this.items[i].last_message.substring(0, 25) + ' ...';
                    }
                    _this.chat = _this.generateChat(_this.items[i]['messages_arr']);
                    break;
                }
            }
            _this.activeChatstatus = 2;
            _this.disableInput = false;
        }, function (err) {
            _this.disableInput = false;
        });
    };
    SupportComponent.prototype.close = function () {
        var _this = this;
        this.disableInput = true;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        this.http.post(this.http.withApiBase('support-threads/' + this.activeChatId + '/close'), body).subscribe(function (data) {
            for (var i = 0; i < _this.items.length; i++) {
                if (_this.items[i].id == data.id) {
                    _this.items[i] = data;
                    _this.items[i]['messages_arr'] = JSON.parse(_this.items[i]['messages']);
                    _this.items[i]['last_message'] = _this.items[i]['messages_arr'][_this.items[i].messages_arr.length - 1].text;
                    if (_this.items[i].last_message.length > 25) {
                        _this.items[i].last_message = _this.items[i].last_message.substring(0, 25) + ' ...';
                    }
                    break;
                }
            }
            _this.activeChatstatus = 3;
            _this.disableInput = false;
        }, function (err) {
            _this.disableInput = false;
        });
    };
    SupportComponent.prototype.onSidebarToggle = function () {
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-none');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-sm-none');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-block');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-sm-block');
        this.renderer.addClass(this.overlay.nativeElement, 'show');
    };
    SupportComponent.prototype.onContentOverlay = function () {
        this.renderer.removeClass(this.overlay.nativeElement, 'show');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-block');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-sm-block');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-none');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-sm-none');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SupportComponent.prototype, "messageInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatSidebar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SupportComponent.prototype, "sidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentOverlay'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SupportComponent.prototype, "overlay", void 0);
    SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
            styles: [__webpack_require__(/*! ./support.component.scss */ "./src/app/support/support.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/todos/registeration.component.html":
/*!****************************************************!*\
  !*** ./src/app/todos/registeration.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Register New Account</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\" [disabled]=\"true\"\n                       [(ngModel)]=\"data.email\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Password</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Password\" [disabled]=\"true\"\n                       [(ngModel)]=\"data.password\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Fullname</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Fullname\" [disabled]=\"true\"\n                       [(ngModel)]=\"data.fullname\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label>Phone Number</label>\n                <input type=\"number\" class=\"form-control\" placeholder=\"989xxxxxxxx\" [disabled]=\"true\"\n                       [(ngModel)]=\"data.number\">\n            </fieldset>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary btn-raised\" [disabled]=\"isLoading\"\n            (click)=\"activeModal.close('Close click')\">Close\n    </button>\n    <button type=\"button\" class=\"btn btn-success btn-raised\" [disabled]=\"isLoading\" (click)=\"accept()\">Accept</button>\n    <button type=\"button\" class=\"btn btn-danger btn-raised\" [disabled]=\"isLoading\" (click)=\"reject()\">Reject</button>\n</div>\n"

/***/ }),

/***/ "./src/app/todos/todos.component.html":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Extended Table starts-->\n<div class=\"row text-left\">\n    <div class=\"col-6\">\n        <div class=\"content-header\">Todos</div>\n        <p class=\"content-sub-header\">List of admin todos.</p>\n    </div>\n</div>\n<section id=\"extended\">\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label for=\"basicInput\">Search</label>\n                <input type=\"text\" class=\"form-control\" id=\"basicInput\" placeholder=\"Account Id, Fullname\"\n                       [(ngModel)]=\"filter.search\" (keyup)=\"filterList()\">\n            </fieldset>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\n            <fieldset class=\"form-group\">\n                <label for=\"sSelect\">Type</label>\n                <select class=\"form-control\" id=\"sSelect\" [(ngModel)]=\"filter.type\" (change)=\"filterList()\">\n                    <option value=\"0\">All</option>\n                    <option value=\"kick\">Kick Account</option>\n                    <option value=\"late payment\">Late Payment</option>\n                    <option value=\"first payment\">First Payment</option>\n                    <option value=\"registeration\">Registeration</option>\n                    <option value=\"payment\">Payment</option>\n                </select>\n            </fieldset>\n        </div>\n    </div>\n    <div class=\"row text-left\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body\" style=\"padding: 0\">\n                        <table class=\"table table-responsive-md text-center\">\n                            <thead>\n                            <tr>\n                                <th>Account ID</th>\n                                <th>Fullname</th>\n                                <th (click)=\"changeSort('created_at')\">Created At <i *ngIf=\"sortBy=='created_at'\"\n                                                                                     class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th (click)=\"changeSort('type')\">Type <i *ngIf=\"sortBy=='type'\"\n                                                                         class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th (click)=\"changeSort('status')\">Status <i *ngIf=\"sortBy=='status'\"\n                                                                             class=\"ft-chevron-{{sort == 'asc'? 'down':'up'}}\"></i>\n                                </th>\n                                <th>Actions</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngIf=\"isLoading\">\n                                <td colspan=\"6\"><img\n                                        style=\"filter: drop-shadow(0 0 2px purple);margin: 5px 0;position: initial;\"\n                                        src=\"assets/img/oval.svg\" class=\"loading-icon\"/></td>\n                            </tr>\n                            <tr *ngFor=\"let item of displayItems\">\n                                <td>{{item.account_id?item.account_id:'-'}}</td>\n                                <td>{{item.account_fullname?item.account_fullname:'-'}}</td>\n                                <td>{{item.created_at * 1000 | date:'yyyy/MM/dd'}}</td>\n                                <td>{{item.type}}</td>\n                                <td>\n                                    <a class=\"btn btn-raised btn-round btn-sm\" [class.btn-warning]=\"item.status=='todo'\"\n                                       [class.btn-success]=\"item.status=='done'\"\n                                       style=\"margin:0\">{{item.status}}</a>\n                                </td>\n                                <td>\n                                    <a class=\"info p-0\" (click)=\"action(item)\">\n                                        <i class=\"ft-settings font-medium-3 mr-2\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Extended Table Ends-->\n"

/***/ }),

/***/ "./src/app/todos/todos.component.scss":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-xl .modal-lg {\n  max-width: 80%; }\n\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGltbWlyemFlZS9Xb3JrL2dldHNwb3RpZnktZnJvbnRlbmQvc3JjL2FwcC90b2Rvcy90b2Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC14bCAubW9kYWwtbGcge1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cblxuLmNsb3NlOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmhvdmVyLCAuY2xvc2U6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent, RegisterationCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationCheckComponent", function() { return RegisterationCheckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-event-bus */ "./node_modules/ng-event-bus/dist/ng_event_bus.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_event_bus__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../accounts/accounts.component */ "./src/app/accounts/accounts.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../payments/payments.component */ "./src/app/payments/payments.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var TodosComponent = /** @class */ (function () {
    function TodosComponent(http, modalService, eventBus) {
        this.http = http;
        this.modalService = modalService;
        this.eventBus = eventBus;
        this.items = [];
        this.displayItems = [];
        this.packages = [];
        this.masters = [];
        this.isLoading = true;
        this.filter = { search: '', type: '0' };
        this.sort = 'asc';
        this.sortBy = 'created_at';
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    TodosComponent.prototype.getItems = function () {
        var _this = this;
        this.http.get(this.http.withApiBase('shortcuts/todos')).subscribe(function (data) {
            _this.items = data;
            _this.changeSort('created_at');
            _this.isLoading = false;
        }, function (error) {
            console.log(error);
        });
    };
    TodosComponent.prototype.changeSort = function (sortBy) {
        var _this = this;
        if (this.sortBy === sortBy) {
            this.sort = (this.sort === 'desc' ? 'asc' : 'desc');
        }
        else {
            this.sort = 'desc';
            this.sortBy = sortBy;
        }
        this.items.sort(function (a, b) {
            if (a[_this.sortBy] === null || a[_this.sortBy] === undefined) {
                _this.filterList();
                return;
            }
            if (typeof a[_this.sortBy] === 'number') {
                if (_this.sort === 'asc') {
                    return a[_this.sortBy] - b[_this.sortBy];
                }
                else {
                    return b[_this.sortBy] - a[_this.sortBy];
                }
            }
            else {
                if (_this.sort === 'desc') {
                    return a[_this.sortBy].localeCompare(b[_this.sortBy]);
                }
                else {
                    return b[_this.sortBy].localeCompare(a[_this.sortBy]);
                }
            }
        });
        this.filterList();
    };
    TodosComponent.prototype.filterList = function () {
        var _this = this;
        this.displayItems = [];
        this.items = this.items.map(function (item) {
            item.visible = true;
            return item;
        });
        if (this.filter.search !== '') {
            this.items = this.items.map(function (item) {
                if ((item.account_fullname ? item.account_fullname : '').indexOf(_this.filter.search) === -1
                    && '' + item['account_id'] !== _this.filter.search) {
                    item.visible = false;
                }
                return item;
            });
        }
        if ('' + this.filter.type !== '0') {
            this.items = this.items.map(function (item) {
                if ('' + item.type !== '' + _this.filter.type) {
                    item.visible = false;
                }
                return item;
            });
        }
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].visible) {
                this.displayItems.push(this.items[i]);
            }
        }
    };
    TodosComponent.prototype.action = function (item) {
        switch (item.type) {
            case 'first payment':
            case 'late payment':
                var editModal1 = this.modalService.open(_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_5__["EditAccountComponent"], { size: 'lg', windowClass: 'modal-xl' });
                editModal1.componentInstance.id = item.account_id;
                break;
            case 'payment':
                var editModal2 = this.modalService.open(_payments_payments_component__WEBPACK_IMPORTED_MODULE_6__["ViewPaymentComponent"], { size: 'lg', windowClass: 'modal-xl' });
                editModal2.componentInstance.id = item.data.id;
                break;
            case 'kick':
                var editModal3 = this.modalService.open(_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_5__["ViewAccountComponent"], { size: 'lg', windowClass: 'modal-xl' });
                editModal3.componentInstance.id = item.account_id;
                break;
            case 'registeration':
                var editModal4 = this.modalService.open(RegisterationCheckComponent, { size: 'lg', windowClass: 'modal-xl' });
                editModal4.componentInstance.data = item.data.account;
                editModal4.componentInstance.id = item.data.id;
                break;
        }
    };
    TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todos/todos.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./todos.component.scss */ "./src/app/todos/todos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], TodosComponent);
    return TodosComponent;
}());

var RegisterationCheckComponent = /** @class */ (function () {
    function RegisterationCheckComponent(activeModal, http, eventBus) {
        var _this = this;
        this.activeModal = activeModal;
        this.http = http;
        this.eventBus = eventBus;
        this.data = {
            email: '',
            fullname: '',
            password: '',
            number: '',
        };
        this.isLoading = true;
        this.id = 0;
        setTimeout(function () {
            _this.getData();
        }, 200);
    }
    RegisterationCheckComponent.prototype.getData = function () {
        this.isLoading = false;
    };
    RegisterationCheckComponent.prototype.accept = function () {
        var _this = this;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]();
        this.http.post(this.http.withApiBase('shortcuts/' + this.id + '/accept'), body).subscribe(function (data) {
            _this.isLoading = false;
            _this.eventBus.cast('todos:renew', _this.data);
            _this.activeModal.close();
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    RegisterationCheckComponent.prototype.reject = function () {
        var _this = this;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]();
        this.http.post(this.http.withApiBase('shortcuts/' + this.id + '/reject'), body).subscribe(function (data) {
            _this.isLoading = false;
            _this.eventBus.cast('todos:renew', _this.data);
            _this.activeModal.close();
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    RegisterationCheckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registeration-check-modal',
            template: __webpack_require__(/*! ./registeration.component.html */ "./src/app/todos/registeration.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.scss */ "./src/app/todos/todos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], ng_event_bus__WEBPACK_IMPORTED_MODULE_4__["NgEventBus"]])
    ], RegisterationCheckComponent);
    return RegisterationCheckComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alimmirzaee/Work/getspotify-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
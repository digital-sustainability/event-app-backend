(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth_only_logged_in_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/auth/only-logged-in.guard */ "./src/app/shared/auth/only-logged-in.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_register_successful_register_successful_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/register-successful/register-successful.component */ "./src/app/auth/register-successful/register-successful.component.ts");
/* harmony import */ var _auth_register_confirm_register_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/register-confirm/register-confirm.component */ "./src/app/auth/register-confirm/register-confirm.component.ts");
/* harmony import */ var _auth_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/edit/edit.component */ "./src/app/auth/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        pathMatch: 'full',
        data: { state: 'home' }
    },
    {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        data: { state: 'login' }
    },
    {
        path: 'register',
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
        data: { state: 'register' }
    },
    {
        path: 'register/successful',
        component: _auth_register_successful_register_successful_component__WEBPACK_IMPORTED_MODULE_6__["RegisterSuccessfulComponent"],
        data: { state: 'registerSuccessful' }
    },
    {
        path: 'register/confirm',
        component: _auth_register_confirm_register_confirm_component__WEBPACK_IMPORTED_MODULE_7__["RegisterConfirmComponent"],
        data: { state: 'registerConfirm' }
    },
    {
        path: 'user/edit',
        canActivate: [_shared_auth_only_logged_in_guard__WEBPACK_IMPORTED_MODULE_2__["OnlyLoggedInGuard"]],
        component: _auth_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar color=\"primary\">\n  <span>Welcome to {{title}}<span *ngIf=\"authenticatedUser\">&nbsp;{{ authenticatedUser.first_name }} {{authenticatedUser.last_name}}</span>!</span>\n  <div fxFlex=\"1 1 auto\"></div>\n  <a mat-button routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n  <!-- <a *ngIf=\"!authenticated\" mat-button routerLink=\"/register\" routerLinkActive=\"active\">Register</a> -->\n  <a *ngIf=\"!authenticated\" mat-button routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n  <a *ngIf=\"!authenticated\" mat-button routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n  <a *ngIf=\"authenticated\" mat-button routerLink=\"/user/edit\" routerLinkActive=\"active\">Edit user</a>\n  <a *ngIf=\"authenticated\" mat-button (click)=\"logout()\">Logout</a>\n</mat-toolbar>\n<div class=\"mat-typography\">\n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular2_sails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-sails */ "./node_modules/angular2-sails/index.js");
/* harmony import */ var angular2_sails__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_sails__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(_sailsService, authService, router, snackbar) {
        this._sailsService = _sailsService;
        this.authService = authService;
        this.router = router;
        this.snackbar = snackbar;
        this.title = 'Sails Angular';
    }
    AppComponent.prototype.ngOnInit = function () {
        //Init Sails service and request CSRF Token and check login
        var opts = {
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL,
            transports: ['websocket'],
            reconnection: true
        };
        this._sailsService.connect(opts);
        //this.requestCSRFToken()
        this.checkLogin();
    };
    AppComponent.prototype.checkLogin = function () {
        this.authService.checkLogin()
            .subscribe();
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout()
            .subscribe(function () {
            _this.router.navigate(['login']);
            _this.snackbar.open('Successfully logged out', '', {
                duration: 3000
            });
        }, function (err) {
            console.log(err);
        });
    };
    Object.defineProperty(AppComponent.prototype, "authenticated", {
        get: function () {
            return this.authService.isAuthenticated();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "authenticatedUser", {
        get: function () {
            return this.authService.getAuthenticatedUser();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [angular2_sails__WEBPACK_IMPORTED_MODULE_2__["SailsService"],
            _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: appInitFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitFactory", function() { return appInitFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_sails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-sails */ "./node_modules/angular2-sails/index.js");
/* harmony import */ var angular2_sails__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_sails__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_auth_http_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth/http-interceptor.service */ "./src/app/shared/auth/http-interceptor.service.ts");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/material-design/material-design.module */ "./src/app/shared/material-design/material-design.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_register_successful_register_successful_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/register-successful/register-successful.component */ "./src/app/auth/register-successful/register-successful.component.ts");
/* harmony import */ var _auth_register_confirm_register_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/register-confirm/register-confirm.component */ "./src/app/auth/register-confirm/register-confirm.component.ts");
/* harmony import */ var _auth_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/edit/edit.component */ "./src/app/auth/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















function appInitFactory(authService) {
    return function () { return authService.checkLogin().toPromise(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _auth_register_confirm_register_confirm_component__WEBPACK_IMPORTED_MODULE_14__["RegisterConfirmComponent"],
                _auth_register_successful_register_successful_component__WEBPACK_IMPORTED_MODULE_13__["RegisterSuccessfulComponent"],
                _auth_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__["EditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _shared_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_9__["MaterialDesignModule"],
                angular2_sails__WEBPACK_IMPORTED_MODULE_6__["SailsModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _shared_auth_http_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["HttpInterceptorService"],
                    multi: true
                },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: appInitFactory, deps: [_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/edit/edit.component.html":
/*!***********************************************!*\
  !*** ./src/app/auth/edit/edit.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editForm\" *ngIf=\"editForm\">\n  <div class=\"edit-box\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card fxFlex=\"90\" fxFlex.lg=\"50\">\n    <mat-card-title class=\"edit-box-title\">\n      Edit User\n    </mat-card-title>\n    <mat-card-content>\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n            <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <div fxFlex=\"30\" >\n                  <img class=\"card-img\" src=\"./assets/img/digitale-nachhaltigkeit.png\">\n              </div>\n            </div>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"Firstname\" type=\"text\" formControlName=\"first_name\" required>\n              <mat-icon matSuffix>person</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"Lastname\" type=\"text\" formControlName=\"last_name\" requried>\n              <mat-icon matSuffix>person</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"Email\" type=\"text\" formControlName=\"email\" required>\n              <mat-icon matSuffix>mail</mat-icon>\n              <mat-error *ngIf=\"email.invalid\">Email ist ungültig</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"Street\" type=\"text\" formControlName=\"street\" required>\n              <mat-icon matSuffix>place</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"ZIP Code\" type=\"number\" formControlName=\"zip_code\" required>\n              <mat-icon matSuffix>place</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"City\" type=\"text\" formControlName=\"city\" required>\n              <mat-icon matSuffix>place</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n                <input matInput placeholder=\"New password\" type=\"password\" formControlName=\"password\" text=\"password\">\n                <mat-hint align=\"end\">(Min 10. Chars): {{password.value.length}} / 10</mat-hint>\n                <mat-icon matSuffix>lock</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"Repeat new password\" type=\"password\" text=\"Repeat Password\" formControlName=\"confirm_password\">\n              <mat-icon matSuffix>lock</mat-icon>\n              <mat-error *ngIf=\"confirm_password.invalid\">Passwords do not match</mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n            <input matInput placeholder=\"Current Password\" type=\"password\" text=\"Repeat Password\" formControlName=\"old_password\" required>\n            <mat-icon matSuffix>lock</mat-icon>\n            <mat-error *ngIf=\"old_password.invalid\">Current Password required</mat-error>\n        </mat-form-field>\n        <div fxFlex=\"100\" style=\"text-align: center\">\n            <button mat-raised-button [disabled]=\"editForm.invalid\" class=\"edit-button\">\n              <mat-icon>input</mat-icon> Save\n            </button>\n          </div>\n          </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/edit/edit.component.scss":
/*!***********************************************!*\
  !*** ./src/app/auth/edit/edit.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-box {\n  min-height: calc(100vh - 64px); }\n\n.edit-box-title {\n  margin: -24px -24px 20px !important;\n  align-content: center;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  background: #ffd740; }\n\n.edit-button {\n  margin-top: 20px; }\n\n.mat-form-field {\n  padding: 0 10px; }\n\n/* .ng-invalid:not(form)  {\n     border-left: 5px solid #a94442;\n   } */\n"

/***/ }),

/***/ "./src/app/auth/edit/edit.component.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/edit/edit.component.ts ***!
  \*********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(authService, router, snackbar) {
        this.authService = authService;
        this.router = router;
        this.snackbar = snackbar;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.editForm = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'first_name': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.first_name, [
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'last_name': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.last_name, [
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'email': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.email, [
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ]),
            'street': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.street, [
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'zip_code': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.zip_code, [
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'city': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.city, [
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'password': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)
            ]),
            'confirm_password': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                this.passwordConfirming.bind(this),
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)
            ]),
            'old_password': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
        });
    };
    EditComponent.prototype.passwordConfirming = function (fieldControl) {
        if (this.editForm) {
            return (fieldControl.value !== this.editForm.get('password').value) ?
                { invalidConfirmation: true } : null;
        }
    };
    Object.defineProperty(EditComponent.prototype, "user", {
        get: function () {
            return this.authService.getAuthenticatedUser();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "password", {
        get: function () {
            return this.editForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "confirm_password", {
        get: function () {
            return this.editForm.get('confirm_password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "old_password", {
        get: function () {
            return this.editForm.get('old_password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "email", {
        get: function () {
            return this.editForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.editForm.invalid) {
            return false;
        }
        else {
            var inputs = this.editForm.value;
            if (!inputs.password) {
                delete inputs.password;
                delete inputs.password_confirm;
            }
            this.authService.update(inputs)
                .subscribe(function (user) {
                var navigationExtras = {
                    queryParams: user
                };
                _this.snackbar.open('Successfully updated user', '', {
                    duration: 3000,
                    panelClass: 'success'
                });
            }, function (err) {
                if (err.status === 401)
                    _this.snackbar.open('Wrong password', '', {
                        duration: 3000,
                        panelClass: 'fail'
                    });
                else {
                    _this.snackbar.open('Email already registered', '', {
                        duration: 3000,
                        panelClass: 'fail'
                    });
                }
            });
        }
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/auth/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/auth/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\">\n  <div class=\"login-box\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card fxFlex=\"90\" fxFlex.lg=\"30\">\n    <mat-card-title class=\"login-box-title\">\n      Login\n    </mat-card-title>\n    <mat-card-content>\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n            <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <div fxFlex=\"30\" >\n                  <img class=\"card-img\" src=\"./assets/img/digitale-nachhaltigkeit.png\">\n              </div>\n            </div>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\">\n              <input matInput placeholder=\"Email\" type=\"text\" formControlName=\"email\">\n              <mat-icon matSuffix>mail</mat-icon>\n              <mat-error *ngIf=\"email.invalid\">Email ist ungültig</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\">\n                <input matInput placeholder=\"Passwort\" type=\"password\" formControlName=\"password\" text=\"password\">\n                <mat-icon matSuffix>lock</mat-icon>\n            </mat-form-field>\n            <button mat-raised-button color=\"accent\" [disabled]=\"loginForm.invalid\" class=\"login-button\">\n              <mat-icon>input</mat-icon> Login\n            </button>\n          </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box {\n  min-height: calc(100vh - 64px); }\n\n.login-box-title {\n  margin: -24px -24px 20px !important;\n  align-content: center;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  background: #ffd740; }\n\n.mat-form-field {\n  padding: 0 10px; }\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, snackbar, activatedRoute) {
        this.authService = authService;
        this.router = router;
        this.snackbar = snackbar;
        this.activatedRoute = activatedRoute;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.queryParams.subscribe(function (params) {
            _this.redirect = params['return'];
        });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
            ]),
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return false;
        }
        else {
            this.authService.login(this.loginForm.value)
                .subscribe(function (user) {
                _this.snackbar.open("Hi " + user.first_name, '', {
                    duration: 3000,
                });
                if (_this.redirect)
                    _this.router.navigate([_this.redirect]);
                else
                    _this.router.navigate(['']);
            }, function (err) {
                console.log(err);
                _this.snackbar.open('Invalid email or password', '', {
                    duration: 3000,
                    panelClass: 'fail'
                });
            });
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register-confirm/register-confirm.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/auth/register-confirm/register-confirm.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"min-height: calc(100vh - 64px)\">\n  <div *ngIf=\"loading\">\n      <mat-spinner></mat-spinner>\n  </div>\n  <div *ngIf=\"!loading && confirmSuccess\">\n    <h1 class=\"mat-display-1\">Email erfolgreich bestätigt!\n      <mat-icon>thumb_up</mat-icon>\n    </h1>\n    <p>Du bist nun dazu berechtigt, dich der\n      <b>Crowdfin</b> Community anzuschliessen.</p>\n  </div>\n  <a mat-raised-button *ngIf=\"!loading && confirmSuccess\" color=\"accent\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n  <div *ngIf=\"!loading && !confirmSuccess\">\n    <h1 class=\"mat-display-1\">Email konnte nicht bestätigt werden!\n      <mat-icon>thumb_down</mat-icon>\n    </h1>\n    <p>Überprüfe bitte, ob du den richtigen Link aufgerufen hast oder kontaktiere den Support.</p>\n  </div>\n  <a mat-raised-button *ngIf=\"!loading && !confirmSuccess\" color=\"accent\" routerLink=\"/support\" routerLinkActive=\"active\">Support</a>\n</div>"

/***/ }),

/***/ "./src/app/auth/register-confirm/register-confirm.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/auth/register-confirm/register-confirm.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/register-confirm/register-confirm.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/auth/register-confirm/register-confirm.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterConfirmComponent", function() { return RegisterConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterConfirmComponent = /** @class */ (function () {
    function RegisterConfirmComponent(route, authService, snackbar) {
        this.route = route;
        this.authService = authService;
        this.snackbar = snackbar;
        this.loading = true;
    }
    RegisterConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.authService.confirm(params)
                .subscribe(function (res) {
                _this.confirmSuccess = true;
                _this.loading = false;
            }, function (err) {
                _this.confirmSuccess = false;
                _this.loading = false;
            });
        });
    };
    RegisterConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-confirm',
            template: __webpack_require__(/*! ./register-confirm.component.html */ "./src/app/auth/register-confirm/register-confirm.component.html"),
            styles: [__webpack_require__(/*! ./register-confirm.component.scss */ "./src/app/auth/register-confirm/register-confirm.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], RegisterConfirmComponent);
    return RegisterConfirmComponent;
}());



/***/ }),

/***/ "./src/app/auth/register-successful/register-successful.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/auth/register-successful/register-successful.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"center center\" style=\"min-height: calc(100vh - 64px)\">\n  <div>\n      <h1 class=\"mat-display-1\">Successfully registered! <mat-icon>thumb_up</mat-icon></h1>\n      <p>Thank you <b>{{user.first_name}} {{user.last_name}}</b> for your registration<br>\n      Please confirm your email address by clicking on the link sent to your\n      personal mail account (<i>{{user.email}}</i>).</p>\n  </div>\n </div>"

/***/ }),

/***/ "./src/app/auth/register-successful/register-successful.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/auth/register-successful/register-successful.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/register-successful/register-successful.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/auth/register-successful/register-successful.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegisterSuccessfulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSuccessfulComponent", function() { return RegisterSuccessfulComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterSuccessfulComponent = /** @class */ (function () {
    function RegisterSuccessfulComponent(route) {
        this.route = route;
    }
    RegisterSuccessfulComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            _this.user = params;
        });
    };
    RegisterSuccessfulComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    RegisterSuccessfulComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-successful',
            template: __webpack_require__(/*! ./register-successful.component.html */ "./src/app/auth/register-successful/register-successful.component.html"),
            styles: [__webpack_require__(/*! ./register-successful.component.scss */ "./src/app/auth/register-successful/register-successful.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RegisterSuccessfulComponent);
    return RegisterSuccessfulComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"registerForm\">\n  <div class=\"login-box\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card fxFlex=\"90\" fxFlex.lg=\"50\">\n    <mat-card-title class=\"login-box-title\">\n      Register\n    </mat-card-title>\n    <mat-card-content>\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n            <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <div fxFlex=\"30\" >\n                  <img class=\"card-img\" src=\"./assets/img/digitale-nachhaltigkeit.png\">\n              </div>\n            </div>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"Firstname\" type=\"text\" formControlName=\"first_name\" required>\n              <mat-icon matSuffix>person</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"Lastname\" type=\"text\" formControlName=\"last_name\" requried>\n              <mat-icon matSuffix>person</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"Email\" type=\"text\" formControlName=\"email\" required>\n              <mat-icon matSuffix>mail</mat-icon>\n              <mat-error *ngIf=\"email.invalid\">Email is invalid</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"Street\" type=\"text\" formControlName=\"street\" required>\n              <mat-icon matSuffix>place</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"ZIP Code\" type=\"number\" formControlName=\"zip_code\" required>\n              <mat-icon matSuffix>place</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"City\" type=\"text\" formControlName=\"city\" required>\n              <mat-icon matSuffix>place</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n                <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" text=\"password\" required>\n                <mat-hint align=\"end\">(Min 10. Characters): {{password.value.length}} / 10</mat-hint>\n                <mat-icon matSuffix>lock</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"justifier\" fxFlex=\"100\" fxFlex.lg=\"50\">\n              <input matInput placeholder=\"Repeat Password\" type=\"password\" text=\"Repeat Password\" formControlName=\"confirm_password\" required>\n              <mat-icon matSuffix>lock</mat-icon>\n              <mat-error *ngIf=\"confirm_password.invalid\">Passwords do not match</mat-error>\n          </mat-form-field>\n            <button mat-raised-button color=\"accent\" [disabled]=\"registerForm.invalid\" class=\"login-button\">\n              <mat-icon>input</mat-icon> Register\n            </button>\n          </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box {\n  min-height: calc(100vh - 64px); }\n\n.login-box-title {\n  margin: -24px -24px 20px !important;\n  align-content: center;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  background: #ffd740; }\n\n.login-button {\n  margin-top: 20px; }\n\n.mat-form-field {\n  padding: 0 10px; }\n\n/* .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442;\n  } */\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, snackbar) {
        this.authService = authService;
        this.router = router;
        this.snackbar = snackbar;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'first_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'last_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            'street': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'zip_code': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
            ]),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                this.passwordConfirming.bind(this)
            ]),
        });
    };
    RegisterComponent.prototype.passwordConfirming = function (fieldControl) {
        if (this.registerForm)
            return (fieldControl.value !== this.registerForm.get('password').value) ?
                { invalidConfirmation: true } : null;
    };
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirm_password", {
        get: function () {
            return this.registerForm.get('confirm_password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.registerForm.invalid) {
            return false;
        }
        else {
            this.authService.register(this.registerForm.value)
                .subscribe(function (user) {
                var navigationExtras = {
                    queryParams: user
                };
                _this.router.navigate(['register/successful'], navigationExtras);
            }, function (err) {
                console.log('Error', err);
                _this.snackbar.open('Email already registered.', '', {
                    duration: 3000,
                    panelClass: 'fail'
                });
            });
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>TODO</h1>\n  <mat-chip-list class=\"mat-chip-list-stacked\">\n      <mat-chip selected color=\"warn\">I18N</mat-chip>\n      <mat-chip selected color=\"accent\">Publisher/Subscriber Implementation</mat-chip>\n      <mat-chip selected color=\"accent\">Generic User Model</mat-chip>\n      <mat-chip selected color=\"accent\">Password reset</mat-chip>\n      <mat-chip selected>Router animations</mat-chip>\n    </mat-chip-list>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-chip {\n  max-width: 400px; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (loginDetails) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/login', loginDetails)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            _this.authenticatedUser = user;
            return user;
        }));
    };
    AuthService.prototype.update = function (user) {
        var _this = this;
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + ("api/user/" + this.authenticatedUser.id), user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            _this.authenticatedUser = user;
            return user;
        }));
    };
    AuthService.prototype.findOne = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "user/${id}");
    };
    /**
     * Used to check if the user is logged in after a page refresh.
     * It automatically logs in the user and sets the authenticated user
     * if the server returns a positive response.
     */
    AuthService.prototype.checkLogin = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/check-login')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            _this.authenticatedUser = user;
            return user ? true : false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/logout', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            _this.authenticatedUser = null;
            return null;
        }));
    };
    AuthService.prototype.getAuthenticatedUser = function () {
        return this.authenticatedUser;
    };
    AuthService.prototype.getAuthenticatedProjectId = function () {
        if (!this.authenticatedUser ||
            this.authenticatedUser.projects.length === 0)
            return -1;
        return this.authenticatedUser.projects[0].id;
    };
    AuthService.prototype.isProjectOwner = function (projectId) {
        return this.getAuthenticatedProjectId() === projectId;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.authenticatedUser ? true : false;
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/user', user);
    };
    AuthService.prototype.confirm = function (userIdAndToken) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/register/confirm', userIdAndToken);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/auth/csrf.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/csrf.service.ts ***!
  \*********************************************/
/*! exports provided: CsrfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsrfService", function() { return CsrfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CsrfService = /** @class */ (function () {
    function CsrfService(http) {
        this.http = http;
    }
    CsrfService.prototype.requestCSRFToken = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'api/csrf-token')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.csrf = res._csrf;
            console.log(_this.csrf);
            return res._csrf;
        }));
    };
    CsrfService.prototype.getCSRFToken = function () {
        if (this.csrf)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.csrf);
        return this.requestCSRFToken();
    };
    CsrfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CsrfService);
    return CsrfService;
}());



/***/ }),

/***/ "./src/app/shared/auth/http-interceptor.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/auth/http-interceptor.service.ts ***!
  \*********************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _csrf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csrf.service */ "./src/app/shared/auth/csrf.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService(csrfService) {
        this.csrfService = csrfService;
    }
    HttpInterceptorService.prototype.intercept = function (request, next) {
        if (request.method !== 'GET') {
            return this.csrfService.getCSRFToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (csrf) {
                request = request.clone({
                    setHeaders: {
                        'X-CSRF-Token': csrf
                    },
                    withCredentials: !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production
                });
                return next.handle(request);
            }));
        }
        else {
            request = request.clone({
                withCredentials: !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production
            });
            return next.handle(request);
        }
    };
    HttpInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_csrf_service__WEBPACK_IMPORTED_MODULE_1__["CsrfService"]])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/shared/auth/only-logged-in.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/auth/only-logged-in.guard.ts ***!
  \*****************************************************/
/*! exports provided: OnlyLoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyLoggedInGuard", function() { return OnlyLoggedInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OnlyLoggedInGuard = /** @class */ (function () {
    function OnlyLoggedInGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    OnlyLoggedInGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.authService.isAuthenticated())
            return true;
        return this.authService.checkLogin().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            if (!result) {
                _this.router.navigate(['/login'], {
                    queryParams: {
                        return: state.url
                    }
                });
                return false;
            }
            return true;
        }));
    };
    OnlyLoggedInGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OnlyLoggedInGuard);
    return OnlyLoggedInGuard;
}());



/***/ }),

/***/ "./src/app/shared/material-design/material-design.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/material-design/material-design.module.ts ***!
  \******************************************************************/
/*! exports provided: MaterialDesignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignModule", function() { return MaterialDesignModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MaterialDesignModule = /** @class */ (function () {
    function MaterialDesignModule() {
    }
    MaterialDesignModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_5__["CdkAccordionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_5__["CdkAccordionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"]
            ],
            declarations: []
        })
    ], MaterialDesignModule);
    return MaterialDesignModule;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiURL: 'http://localhost:1337/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oscarmeier/projects/event-app/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
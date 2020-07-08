(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_cards_pokemon_cards_pokemon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cards-pokemon/cards-pokemon.component */ "./src/app/components/cards-pokemon/cards-pokemon.component.ts");





const routes = [{
        path: '',
        component: _components_cards_pokemon_cards_pokemon_component__WEBPACK_IMPORTED_MODULE_2__["CardsPokemonComponent"]
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'pokedex';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_cards_pokemon_cards_pokemon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cards-pokemon/cards-pokemon.component */ "./src/app/components/cards-pokemon/cards-pokemon.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_cards_pokemon_cards_pokemon_component__WEBPACK_IMPORTED_MODULE_13__["CardsPokemonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_cards_pokemon_cards_pokemon_component__WEBPACK_IMPORTED_MODULE_13__["CardsPokemonComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/cards-pokemon/cards-pokemon.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards-pokemon/cards-pokemon.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardsPokemonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPokemonComponent", function() { return CardsPokemonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_pokemon_api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/pokemon-api-service.service */ "./src/app/services/pokemon-api-service.service.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function CardsPokemonComponent_div_40_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("planta", type_r4 === "Grass")("water", type_r4 === "Water")("fire", type_r4 === "Fire")("dragon", type_r4 === "Dragon")("normal", type_r4 === "Normal")("ghost", type_r4 === "Ghost")("bug", type_r4 === "Bug")("poison", type_r4 === "Poison")("electric", type_r4 === "Electric")("ground", type_r4 === "Ground")("fight", type_r4 === "Fighting")("ice", type_r4 === "Ice")("psychic", type_r4 === "Psychic")("rock", type_r4 === "Rock")("flying", type_r4 === "Flying");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r4);
} }
function CardsPokemonComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_div_40_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const pokemon_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSelect(pokemon_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CardsPokemonComponent_div_40_p_9_Template, 2, 31, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("planta", pokemon_r2.type[0] === "Grass")("water", pokemon_r2.type[0] === "Water")("fire", pokemon_r2.type[0] === "Fire")("dragon", pokemon_r2.type[0] === "Dragon")("normal", pokemon_r2.type[0] === "Normal")("bug", pokemon_r2.type[0] === "Bug")("poison", pokemon_r2.type[0] === "Poison")("electric", pokemon_r2.type[0] === "Electric")("ground", pokemon_r2.type[0] === "Ground")("ghost", pokemon_r2.type[0] === "Ghost")("fight", pokemon_r2.type[0] === "Fighting")("psychic", pokemon_r2.type[0] === "Psychic")("rock", pokemon_r2.type[0] === "Rock")("ice", pokemon_r2.type[0] === "Ice")("flying", pokemon_r2.type[0] === "Flying");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("N\u00B0", pokemon_r2.num, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://pokeres.bastionbot.org/images/pokemon/", pokemon_r2.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pokemon_r2.type);
} }
function CardsPokemonComponent_div_41_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("planta", type_r9 === "Grass")("water", type_r9 === "Water")("ice", type_r9 === "Ice")("fire", type_r9 === "Fire")("dragon", type_r9 === "Dragon")("normal", type_r9 === "Normal")("bug", type_r9 === "Bug")("ghost", type_r9 === "Ghost")("poison", type_r9 === "Poison")("electric", type_r9 === "Electric")("ground", type_r9 === "Ground")("fight", type_r9 === "Fighting")("psychic", type_r9 === "Psychic")("flying", type_r9 === "Flying")("rock", type_r9 === "Rock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r9);
} }
function CardsPokemonComponent_div_41_p_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("planta", type_r10 === "Grass")("water", type_r10 === "Water")("ice", type_r10 === "Ice")("ghost", type_r10 === "Ghost")("fire", type_r10 === "Fire")("dragon", type_r10 === "Dragon")("normal", type_r10 === "Normal")("bug", type_r10 === "Bug")("poison", type_r10 === "Poison")("electric", type_r10 === "Electric")("ground", type_r10 === "Ground")("fight", type_r10 === "Fighting")("flying", type_r10 === "Flying")("psychic", type_r10 === "Psychic")("rock", type_r10 === "Rock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r10, "");
} }
function CardsPokemonComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_div_41_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onSelect(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardsPokemonComponent_div_41_p_6_Template, 2, 31, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Chance de spawn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hora spawn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Altura");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Doce");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Doces necess\u00E1rios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Principais fraquezas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CardsPokemonComponent_div_41_p_46_Template, 2, 31, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("planta", ctx_r1.pokemonSelected.type[0] === "Grass")("water", ctx_r1.pokemonSelected.type[0] === "Water")("fire", ctx_r1.pokemonSelected.type[0] === "Fire")("normal", ctx_r1.pokemonSelected.type[0] === "Normal")("dragon", ctx_r1.pokemonSelected.type[0] === "Dragon")("bug", ctx_r1.pokemonSelected.type[0] === "Bug")("ghost", ctx_r1.pokemonSelected.type[0] === "Ghost")("poison", ctx_r1.pokemonSelected.type[0] === "Poison")("electric", ctx_r1.pokemonSelected.type[0] === "Electric")("ground", ctx_r1.pokemonSelected.type[0] === "Ground")("fight", ctx_r1.pokemonSelected.type[0] === "Fighting")("psychic", ctx_r1.pokemonSelected.type[0] === "Psychic")("rock", ctx_r1.pokemonSelected.type[0] === "Rock")("ice", ctx_r1.pokemonSelected.type[0] === "Ice")("flying", ctx_r1.pokemonSelected.type[0] === "Flying");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://pokeres.bastionbot.org/images/pokemon/", ctx_r1.pokemonSelected.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pokemonSelected.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pokemonSelected.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pokemonSelected.spawn_chance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pokemonSelected.spawn_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pokemonSelected.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pokemonSelected.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pokemonSelected.candy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pokemonSelected.candy_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pokemonSelected.weaknesses);
} }
class CardsPokemonComponent {
    constructor(PokemonApi) {
        this.PokemonApi = PokemonApi;
    }
    ngOnInit() {
        this.PokemonApi.List().subscribe((lista) => {
            this.listaPokemons = lista;
            this.listaFiltrada = this.listaPokemons;
        });
    }
    filtra(tipo) {
        this.listaFiltrada = this.listaPokemons.filter(function (obj) { return obj.type[0] == tipo || obj.type[1] == tipo || obj.type[2] == tipo; });
    }
    onSelect(pokemon) {
        this.pokemonSelected = pokemon;
    }
}
CardsPokemonComponent.ɵfac = function CardsPokemonComponent_Factory(t) { return new (t || CardsPokemonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pokemon_api_service_service__WEBPACK_IMPORTED_MODULE_1__["PokemonApiServiceService"])); };
CardsPokemonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsPokemonComponent, selectors: [["app-cards-pokemon"]], decls: 42, vars: 2, consts: [["id", "logoPrincipal", "src", "../../../assets/pokemon-logo.png", "alt", ""], ["id", "filtro"], [3, "click"], ["id", "card", 3, "planta", "water", "fire", "dragon", "normal", "bug", "poison", "electric", "ground", "ghost", "fight", "psychic", "rock", "ice", "flying", "click", 4, "ngFor", "ngForOf"], ["id", "modal", 3, "click", 4, "ngIf"], ["id", "card", 3, "click"], ["id", "numeroPokemon"], ["id", "background-img"], ["alt", "descri\u00E7\u00E3o", 3, "src"], ["id", "types"], [3, "planta", "water", "fire", "dragon", "normal", "ghost", "bug", "poison", "electric", "ground", "fight", "ice", "psychic", "rock", "flying", 4, "ngFor", "ngForOf"], ["id", "modal", 3, "click"], ["id", "conteudo-modal"], ["id", "header"], ["id", "foto"], ["alt", "", 3, "src"], [3, "planta", "water", "ice", "fire", "dragon", "normal", "bug", "ghost", "poison", "electric", "ground", "fight", "psychic", "flying", "rock", 4, "ngFor", "ngForOf"], ["id", "stats"], ["id", "atributos"], ["id", "esquerda"], [1, "item"], ["id", "direita"], ["id", "fraquezas"], [3, "planta", "water", "ice", "ghost", "fire", "dragon", "normal", "bug", "poison", "electric", "ground", "fight", "flying", "psychic", "rock", 4, "ngFor", "ngForOf"], ["id", "evolucao"]], template: function CardsPokemonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filtro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_9_listener() { return ctx.filtra("Water"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Water");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_11_listener() { return ctx.filtra("Fire"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_13_listener() { return ctx.filtra("Grass"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Grass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_15_listener() { return ctx.filtra("Bug"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_17_listener() { return ctx.filtra("Normal"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_19_listener() { return ctx.filtra("Poison"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Poison");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_21_listener() { return ctx.filtra("Flying"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Flying");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_23_listener() { return ctx.filtra("Dragon"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Dragon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_25_listener() { return ctx.filtra("Electric"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Electric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_27_listener() { return ctx.filtra("Ground"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ground");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_29_listener() { return ctx.filtra("Fighting"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Fighting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_31_listener() { return ctx.filtra("Psychic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Psychic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_33_listener() { return ctx.filtra("Rock"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Rock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_35_listener() { return ctx.filtra("Ice"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPokemonComponent_Template_mat_chip_click_37_listener() { return ctx.filtra("Ghost"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ghost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CardsPokemonComponent_div_40_Template, 10, 34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CardsPokemonComponent_div_41_Template, 48, 40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaFiltrada);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pokemonSelected);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChip"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@media only screen and (min-width: 900px) {\r\n  #modal[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  #conteudo-modal[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    height: 90%;\r\n    background-color: #fff;\r\n    box-sizing: border-box;\r\n    border-radius: 10px;\r\n    margin-top: 40px;\r\n    animation-name: fade;\r\n    animation-duration: .3s;\r\n  }\r\n  #header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 55%;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    padding: 10px 20px 40px 20px;\r\n    justify-content: space-around;\r\n    box-sizing: border-box;\r\n  }\r\n  #header[_ngcontent-%COMP%]   #foto[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    padding: 0 10px;\r\n  }\r\n  #header[_ngcontent-%COMP%]   #foto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n  }\r\n  #header[_ngcontent-%COMP%]   #stats[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  #header[_ngcontent-%COMP%]   #stats[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 4vw;\r\n    color: white;\r\n  }\r\n  #atributos[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding-top: 20px;\r\n  }\r\n  #atributos[_ngcontent-%COMP%]   #esquerda[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 45%;\r\n    height: 100%;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    padding: 10px 40px;\r\n    box-sizing: border-box;\r\n  }\r\n  #atributos[_ngcontent-%COMP%]   #esquerda[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    border: 1px solid white;\r\n    padding: 5px 5px;\r\n    border-radius: 5px;\r\n  }\r\n  .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1vw;\r\n  }\r\n  #atributos[_ngcontent-%COMP%]   #direita[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 55%;\r\n    height: 100%;\r\n    padding: 10px 40px;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n  #atributos[_ngcontent-%COMP%]   #direita[_ngcontent-%COMP%]   #fraquezas[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box;\r\n    border-top: 1px solid white;\r\n  }\r\n  #atributos[_ngcontent-%COMP%]   #direita[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 3vh;\r\n  }\r\n  #fraquezas[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n    padding: 5px 25px;\r\n    margin: 10px 10px;\r\n    font-size: 1.5vw;\r\n  }\r\n  #types[_ngcontent-%COMP%] {\r\n    border: 1px solid;\r\n    border-radius: 3px;\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-evenly;\r\n    background-color: #fff;\r\n    box-sizing: border-box;\r\n    padding: 7px 0;\r\n  }\r\n  #types[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n    padding: 2px 10px;\r\n    font-size: 12pt;\r\n  }\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 19pt;\r\n    padding: 10px 0;\r\n  }\r\n  #card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    margin-bottom: 20px;\r\n  }\r\n  #card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 10px 15px;\r\n    margin: 20px 15px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    box-sizing: border-box;\r\n    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);\r\n    max-width: 230px;\r\n    border-radius: 5px;\r\n  }\r\n  #filtro[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:900px) {\r\n  #modal[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 100vw;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  #conteudo-modal[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    align-items: center;\r\n    margin-top: 10vh;\r\n    height: auto;\r\n    min-height: 100vh;\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    animation-name: fade;\r\n    animation-duration: .3s;\r\n  }\r\n  #header[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 5vh 5px 0px 5px;\r\n    box-sizing: border-box;\r\n  }\r\n  #header[_ngcontent-%COMP%]   #foto[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 0 10px;\r\n  }\r\n  #header[_ngcontent-%COMP%]   #foto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 15vh;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 25%;\r\n  }\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 100%;\r\n  }\r\n  #numeroPokemon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 5pt;\r\n  }\r\n  #types[_ngcontent-%COMP%] {\r\n    border: 1px solid;\r\n    border-radius: 3px;\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-evenly;\r\n    background-color: #fff;\r\n    box-sizing: border-box;\r\n    padding: 4px 0;\r\n  }\r\n  #types[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n    padding: 2px 5px;\r\n    font-size: 7pt;\r\n  }\r\n  #card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n  #card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 40%;\r\n    padding: 10px 5px;\r\n    margin: 10px 10px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    box-sizing: border-box;\r\n    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);\r\n    max-width: 300px;\r\n    border-radius: 5px;\r\n  }\r\n  #header[_ngcontent-%COMP%]   #stats[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  #atributos[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding-top: 20px;\r\n  }\r\n  #atributos[_ngcontent-%COMP%]   #esquerda[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 90%;\r\n    height: 100%;\r\n    min-height: 200px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 10px 10px;\r\n    margin-bottom: 10px;\r\n    box-sizing: border-box;\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n  }\r\n  #atributos[_ngcontent-%COMP%]   #esquerda[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 90%;\r\n    justify-content: space-between;\r\n  }\r\n  .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 10pt;\r\n  }\r\n  #stats[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 30pt;\r\n    padding-top: 10px;\r\n    padding-bottom: 5px;\r\n    margin: 0;\r\n  }\r\n  #atributos[_ngcontent-%COMP%]   #direita[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 90%;\r\n    height: 100%;\r\n    padding: 10px 20px;\r\n    box-sizing: border-box;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n  #filtro[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n  }\r\n  #atributos[_ngcontent-%COMP%]   #direita[_ngcontent-%COMP%]   #fraquezas[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-top: 10px;\r\n    align-items: center;\r\n    width: 90%;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box;\r\n    border-top: 1px solid white;\r\n  }\r\n  #fraquezas[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n    padding: 5px 20px;\r\n    margin: 2px 5px;\r\n    font-size: 10pt;\r\n  }\r\n}\r\n\r\n@keyframes fade {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, 40px, 0);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n*[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow-y: hidden;\r\n}\r\n\r\n#numeroPokemon[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n#background-img[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  width: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 5px;\r\n  box-sizing: border-box;\r\n  padding: 5%;\r\n  flex-direction: column;\r\n  text-decoration: none;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding-bottom: 50px;\r\n  padding-top: 50px;\r\n  justify-content: center;\r\n  width: 95%;\r\n  margin-top: 5vh;\r\n  margin-bottom: 10vh;\r\n  border-radius: 10px;\r\n  box-sizing: border-box;\r\n  background-color: #202020;\r\n}\r\n\r\n#card[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  transition: 0.4s;\r\n  transform: translateY(-20px);\r\n  box-shadow: 4px 10px 16px 0px rgba(250, 250, 250, 0.4);\r\n}\r\n\r\n.planta[_ngcontent-%COMP%] {\r\n  background-color: #85C125;\r\n  color: white;\r\n}\r\n\r\n.water[_ngcontent-%COMP%] {\r\n  background-color: #2D3192;\r\n  color: white;\r\n}\r\n\r\n.fire[_ngcontent-%COMP%] {\r\n  background: orange;\r\n  color: white;\r\n}\r\n\r\n.normal[_ngcontent-%COMP%] {\r\n  background-color: #563317;\r\n  color: white;\r\n}\r\n\r\n.bug[_ngcontent-%COMP%] {\r\n  background-color: #B4350C;\r\n  color: white;\r\n}\r\n\r\n.poison[_ngcontent-%COMP%] {\r\n  background-color: #741F7C;\r\n  color: white;\r\n}\r\n\r\n.electric[_ngcontent-%COMP%] {\r\n  background-color: #C5AC11;\r\n  color: white;\r\n}\r\n\r\n.ground[_ngcontent-%COMP%] {\r\n  background-color: peru;\r\n  color: white;\r\n}\r\n\r\n.fight[_ngcontent-%COMP%] {\r\n  background-color: #C7AB02;\r\n  color: white;\r\n}\r\n\r\n.psychic[_ngcontent-%COMP%] {\r\n  background-color: #044318;\r\n  color: white;\r\n}\r\n\r\n.rock[_ngcontent-%COMP%] {\r\n  background-color: #5D6162;\r\n  color: white;\r\n}\r\n\r\n.flying[_ngcontent-%COMP%] {\r\n  background-color: #74A4BC;\r\n  color: white;\r\n}\r\n\r\n.ice[_ngcontent-%COMP%] {\r\n  background-color: #34e4ea;\r\n  color: white;\r\n}\r\n\r\n.ghost[_ngcontent-%COMP%] {\r\n  background-color: #000;\r\n  color: white;\r\n  border: 1px solid white;\r\n}\r\n\r\n.dragon[_ngcontent-%COMP%] {\r\n  background-color: #DD0426;\r\n  color: white;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: auto;\r\n  min-height: 100vh;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: auto;\r\n  background-color: #181818;\r\n  padding: 0 10px;\r\n}\r\n\r\n#logoPrincipal[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  height: auto;\r\n  box-sizing: border-box;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy1wb2tlbW9uL2NhcmRzLXBva2Vtb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsWUFBWTtFQUNkO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtJQUNi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QkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmRzLXBva2Vtb24vY2FyZHMtcG9rZW1vbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICNtb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgI2NvbnRldWRvLW1vZGFsIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gIH1cclxuICAjaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweCA0MHB4IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gICNoZWFkZXIgI2ZvdG8ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcbiAgI2hlYWRlciAjZm90byBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgI2hlYWRlciAjc3RhdHMge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgI2hlYWRlciAjc3RhdHMgaDEge1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICNhdHJpYnV0b3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAjYXRyaWJ1dG9zICNlc3F1ZXJkYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAjYXRyaWJ1dG9zICNlc3F1ZXJkYSAuaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5pdGVtIHAge1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbiAgfVxyXG4gICNhdHJpYnV0b3MgI2RpcmVpdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgI2F0cmlidXRvcyAjZGlyZWl0YSAjZnJhcXVlemFzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG4gICNhdHJpYnV0b3MgI2RpcmVpdGEgaDIge1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbiAgfVxyXG4gICNmcmFxdWV6YXMgcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNXB4IDI1cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgfVxyXG4gICN0eXBlcyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiA3cHggMDtcclxuICB9XHJcbiAgI3R5cGVzIHAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB0O1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDE5cHQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gICNjYXJkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gICNjYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMTVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBtYXgtd2lkdGg6IDIzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAjZmlsdHJvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDBweCkge1xyXG4gICNtb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gICNjb250ZXVkby1tb2RhbCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gIH1cclxuICAjaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1dmggNXB4IDBweCA1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAjaGVhZGVyICNmb3RvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIH1cclxuICAjaGVhZGVyICNmb3RvIGltZyB7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDI1JTtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gIH1cclxuICAjbnVtZXJvUG9rZW1vbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogNXB0O1xyXG4gIH1cclxuICAjdHlwZXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbiAgfVxyXG4gICN0eXBlcyBwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgZm9udC1zaXplOiA3cHQ7XHJcbiAgfVxyXG4gICNjYXJkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgI2NhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gICNoZWFkZXIgI3N0YXRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAjYXRyaWJ1dG9zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gICNhdHJpYnV0b3MgI2VzcXVlcmRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAjYXRyaWJ1dG9zICNlc3F1ZXJkYSAuaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLml0ZW0gcCB7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgfVxyXG4gICNzdGF0cyBoMSB7XHJcbiAgICBmb250LXNpemU6IDMwcHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gICNhdHJpYnV0b3MgI2RpcmVpdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gICNmaWx0cm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjYXRyaWJ1dG9zICNkaXJlaXRhICNmcmFxdWV6YXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG4gICNmcmFxdWV6YXMgcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDJweCA1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNDBweCwgMCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuKiwgaHRtbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4jbnVtZXJvUG9rZW1vbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNiYWNrZ3JvdW5kLWltZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiA1JTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcclxufVxyXG5cclxuI2NhcmQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgYm94LXNoYWRvdzogNHB4IDEwcHggMTZweCAwcHggcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjQpO1xyXG59XHJcblxyXG4ucGxhbnRhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVDMTI1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndhdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQzMTkyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZpcmUge1xyXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ub3JtYWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjMzMTc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnVnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjQzNTBDO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBvaXNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0MUY3QztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5lbGVjdHJpYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M1QUMxMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBlcnU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDN0FCMDI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHN5Y2hpYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0NDMxODtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yb2NrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUQ2MTYyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZseWluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0QTRCQztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pY2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNGU0ZWE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ2hvc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uZHJhZ29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQwNDI2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuI2xvZ29QcmluY2lwYWwge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsPokemonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cards-pokemon',
                templateUrl: './cards-pokemon.component.html',
                styleUrls: ['./cards-pokemon.component.css']
            }]
    }], function () { return [{ type: src_app_services_pokemon_api_service_service__WEBPACK_IMPORTED_MODULE_1__["PokemonApiServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/pokemon-api-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/pokemon-api-service.service.ts ***!
  \*********************************************************/
/*! exports provided: PokemonApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonApiServiceService", function() { return PokemonApiServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class PokemonApiServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    List() {
        return this.httpClient.get('https://trabalho-971f3.firebaseio.com/pokemon.json');
    }
}
PokemonApiServiceService.ɵfac = function PokemonApiServiceService_Factory(t) { return new (t || PokemonApiServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PokemonApiServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonApiServiceService, factory: PokemonApiServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonApiServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel\Desktop\Pokedex\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
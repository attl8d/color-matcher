(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/attila.daczo/projects/js_projects/color-matcher/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "HC5s":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: ColorUtility, Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorUtility", function() { return ColorUtility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
class ColorUtility {
    static isLight(color) {
        let r;
        let g;
        let b;
        let hsp;
        // Check the format of the color, HEX or RGB?
        if (color.match(/^rgb/)) {
            // If RGB --> store the red, green, blue values in separate variables
            color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            r = color[1];
            g = color[2];
            b = color[3];
        }
        else {
            // If hex --> Convert it to RGB: http://gist.github.com/983661
            color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
            r = color >> 16;
            g = color >> 8 & 255;
            b = color & 255;
        }
        hsp = Math.sqrt(0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b));
        return hsp > 127.5;
    }
}
class Utils {
    static copyToClipboard(content) {
        const el = document.createElement('textarea');
        el.value = content;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-convert */ "uxXc");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color_convert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "HC5s");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-gridster2 */ "Ljk9");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function AppComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sortOption_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", sortOption_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sortOption_r5.label, " ");
} }
function AppComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sortOption_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", sortOption_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sortOption_r6.label, " ");
} }
function AppComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sortOption_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", sortOption_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sortOption_r7.label, " ");
} }
const _c0 = function () { return { color: "gold" }; };
function AppComponent_gridster_item_15_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
const _c1 = function (a0) { return { backgroundColor: a0 }; };
const _c2 = function (a0) { return { color: a0 }; };
function AppComponent_gridster_item_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gridster-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_gridster_item_15_mat_icon_8_Template, 2, 3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_gridster_item_15_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r9 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.Utils.copyToClipboard(ctx_r11.colorsToMatch[i_r9].color); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx_r3.colorsToMatch[i_r9].color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx_r3.colorsToMatch[i_r9].textColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.colorsToMatch[i_r9].color, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" H: ", ctx_r3.colorsToMatch[i_r9].hsl.h, " S: ", ctx_r3.colorsToMatch[i_r9].hsl.s, " L: ", ctx_r3.colorsToMatch[i_r9].hsl.l, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.colorsToMatch[i_r9].isStyleGuideColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx_r3.colorsToMatch[i_r9].textColor));
} }
class AppComponent {
    constructor(fb) {
        this.fb = fb;
        this.Utils = _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"];
        this.title = 'color-matcher';
        this.sortOptions = [
            {
                label: 'Hue',
                value: 'hsl.h',
            },
            {
                label: 'Saturation',
                value: 'hsl.s',
            },
            {
                label: 'Brightness',
                value: 'hsl.l',
            }
        ];
        this.options = {
            gridType: 'fixed',
            fixedRowHeight: 100,
            // verticalFixed: true,
            draggable: {
                enabled: true
            },
            margin: 0,
        };
        this.dashboard = [];
        this.colorsToMatch = [
            { isStyleGuideColor: true, name: 'color-primary', color: '#2638c4' },
            { isStyleGuideColor: true, name: 'color-medium-blue', color: '#0f1e8c' },
            { isStyleGuideColor: true, name: 'color-navy-blue', color: '#0a145a' },
            { isStyleGuideColor: true, name: 'color-midnight-blue', color: '#000525' },
            { isStyleGuideColor: true, name: 'color-lightest-grey', color: '#f6f6fa' },
            { isStyleGuideColor: true, name: 'color-light-grey', color: '#eef0f5' },
            { isStyleGuideColor: true, name: 'color-border-grey', color: '#d6d9da' },
            { isStyleGuideColor: true, name: 'color-darker-grey', color: '#656772' },
            { isStyleGuideColor: true, name: 'color-medium-slate-grey', color: '#60738a' },
            { isStyleGuideColor: true, name: 'color-white', color: '#fff' },
            { isStyleGuideColor: true, name: 'color-almost-white', color: '#f6f8fa' },
            { isStyleGuideColor: true, name: 'color-black', color: '#000' },
            { isStyleGuideColor: true, name: 'color-almost-black', color: '#262626' },
            { isStyleGuideColor: true, name: 'color-body-black', color: '#212529' },
            { isStyleGuideColor: true, name: 'color-medium-magenta', color: '#b2528c' },
            { isStyleGuideColor: true, name: 'color-dusty-rose', color: '#a31a51' },
            { isStyleGuideColor: true, name: 'color-teal', color: '#007b9b' },
            { isStyleGuideColor: true, name: 'color-light-blue', color: '#486cd8' },
            { isStyleGuideColor: true, name: 'color-red', color: '#d6383a' },
            { isStyleGuideColor: true, name: 'color-green', color: '#087b45' },
            { isStyleGuideColor: true, name: 'color-purple', color: '#6a1b9a' },
            { isStyleGuideColor: true, name: 'color-dark-teal', color: '#074d51' },
            { isStyleGuideColor: true, name: 'color-buttercup-yellow', color: '#ffcf00' },
            { name: 'backgroundGrey', color: '#bcbecf' },
            { name: 'darkGrey', color: '#6c757d' },
            { name: 'browseTitleBackground', color: '#e2e6ef' },
            { name: 'title', color: '#172073' },
            { name: 'headerDropdownLinkColor', color: '#32304f' },
            { name: 'buttonColorDisabled', color: '#c4c8ee' },
            { name: 'borderColorGrey', color: '#ebebeb' },
            { name: 'arrowolorHover', color: '#afafaf' },
            { name: 'subcollectionDefaultBackgroundColor', color: '#f8f8f8' },
            { name: 'unknown1', color: '#375bc6' },
            { name: 'unknown2', color: '#0c3c36' },
            { name: 'unknown3', color: '#333333' },
            { name: 'unknown4', color: '#f6f6f6' },
            { name: 'unknown5', color: '#eef4f4' },
            { name: 'unknown6', color: '#46b8da' },
            { name: 'unknown7', color: '#e68a00' },
            { name: 'unknown8', color: '#e1e1e1' },
            { name: 'unknown9', color: '#353d46' },
            { name: 'unknown10', color: '#738496' },
            { name: 'unknown11', color: '#d7d7d7' },
            { name: 'unknown12', color: '#566271' },
            { name: 'unknown13', color: '#dce0e5' },
            { name: 'unknown14', color: '#e4e5eb' },
            { name: 'unknown15', color: '#2f50be' },
            { name: 'unknown16', color: '#76b93c' },
            { name: 'unknown17', color: '#39b3d7' },
            { name: 'unknown18', color: '#011627' },
            { name: 'unknown19', color: '#5d5d5d' },
            { name: 'unknown20', color: '#979797' },
            { name: 'unknown21', color: '#ff0000' },
            { name: 'unknown22', color: '#fe704e' },
            { name: 'unknown23', color: '#04155f' },
            { name: 'unknown24', color: '#2d3a59' },
            { name: 'unknown25', color: '#269abc' },
            { name: 'unknown26', color: '#5bc0de' },
            { name: 'unknown27', color: '#999' },
            { name: 'unknown28', color: '#f6f6f3' },
            { name: 'unknown29', color: '#eef2ff' },
            { name: 'unknown30', color: '#f6f5f6' },
            { name: 'unknown31', color: '#ffcf00' },
            { name: 'unknown32', color: '#0f1d49' },
            { name: 'unknown33', color: '#ca2027' },
            { name: 'unknown34', color: '#e3e3e9' },
            { name: 'unknown35', color: '#3259c3' },
            { name: 'unknown36', color: '#262626' },
            { name: 'unknown37', color: '#cacaca' },
            { name: 'unknown38', color: '#cecece' },
            { name: 'unknown39', color: '#aeaeae' },
            { name: 'unknown40', color: '#dee2e6' },
            { name: 'unknown41', color: '#d8ddec' },
            { name: 'unknown42', color: '#e5e5e5' },
            { name: 'unknown43', color: '#e1e5e9' },
            { name: 'unknown44', color: '#ab3a1e' },
            { name: 'unknown45', color: '#2a6496' },
            { name: 'unknown46', color: '#bcbece' },
            { name: 'unknown47', color: '#31365f' },
            { name: 'unknown48', color: '#c4cbd4' },
            { name: 'unknown49', color: '#02146a' },
            { name: 'unknown50', color: '#f1f1f1' },
            { name: 'unknown51', color: '#f6f6f4' },
            { name: 'unknown52', color: '#3a579d' },
            { name: 'unknown53', color: '#e8e9f2' },
            { name: 'unknown54', color: '#f7f6f3' },
            { name: 'unknown55', color: '#475769' },
            { name: 'unknown56', color: '#dddddd' },
            { name: 'unknown57', color: '#4b5cdd' },
            { name: 'unknown58', color: '#1da1f2' },
            { name: 'unknown59', color: '#65a205' },
            { name: 'unknown60', color: '#d81b60' },
            { name: 'unknown61', color: '#fefefe' },
            { name: 'unknown62', color: '#af2220' },
            { name: 'unknown63', color: '#bcbed0' },
            { name: 'unknown64', color: '#4a4a4a' },
            { name: 'unknown65', color: '#f6f7f8' },
            { name: 'unknown66', color: '#c9f1f4' },
            { name: 'unknown67', color: '#ffd800' },
            { name: 'unknown68', color: '#48d3cd' },
            { name: 'unknown69', color: '#556271' },
            { name: 'unknown70', color: '#444444' },
            { name: 'unknown71', color: '#e7ebf9' },
            { name: 'unknown72', color: '#777' },
            { name: 'unknown73', color: '#a2a2a2' },
            { name: 'unknown74', color: '#5c6e85' },
            { name: 'unknown75', color: '#a9a9a9' },
            { name: 'unknown76', color: '#efefef' },
            { name: 'unknown77', color: '#f2f2f2' },
            { name: 'unknown78', color: '#cccccc' },
            { name: 'unknown79', color: '#757575' },
            { name: 'unknown80', color: '#d1d6dc' },
            { name: 'unknown81', color: '#3b5998' },
            { name: 'unknown82', color: '#dc3545' },
            { name: 'unknown83', color: '#f0f0f0' },
            { name: 'unknown84', color: '#eaebeb' },
            { name: 'unknown85', color: '#eef0f5' },
        ];
    }
    ngOnInit() {
        this.sortByForm = this.fb.group({
            firstSort: this.sortOptions[0].value,
            secondSort: this.sortOptions[1].value,
            thirdSort: this.sortOptions[2].value,
        });
        this.sortByForm.valueChanges.subscribe((val) => {
            let y = 0;
            let x = 0;
            this.colorsToMatch = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](this.colorsToMatch, [val.firstSort, val.secondSort, val.thirdSort]);
            this.dashboard = [];
            this.colorsToMatch.forEach((i) => {
                this.dashboard.push({
                    cols: 1, rows: 1, x, y
                });
                if (x === 4) {
                    x = 0;
                    y++;
                }
                else {
                    x++;
                }
            });
        });
        this.initColors();
    }
    initColors() {
        let y = 0;
        let x = 0;
        this.colorsToMatch = this.colorsToMatch.map((i, index) => {
            i.textColor = _utils__WEBPACK_IMPORTED_MODULE_2__["ColorUtility"].isLight(i.color) ? '#00000080' : '#ffffff47';
            const hsl = color_convert__WEBPACK_IMPORTED_MODULE_1__["hex"].hsl(i.color);
            i.hsl = {
                h: hsl[0],
                s: hsl[1],
                l: hsl[2]
            };
            return i;
        });
        this.colorsToMatch = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](this.colorsToMatch, ['hsl.h', 'hsl.s', 'hsl.l']);
        this.colorsToMatch.forEach((i) => {
            this.dashboard.push({
                cols: 1, rows: 1, x, y
            });
            if (x === 4) {
                x = 0;
                y++;
            }
            else {
                x++;
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 6, consts: [[1, "container"], [2, "overflow", "hidden"], ["color", "primary", 1, "toolbar"], [1, "sort-by-form", 3, "formGroup"], ["for", "firstSort", 1, "sort-label"], ["formControlName", "firstSort", "id", "firstSort"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["formControlName", "secondSort"], ["formControlName", "thirdSort"], [3, "options"], [3, "item", 4, "ngFor", "ngForOf"], ["position", "end", "mode", "over"], ["drawer", ""], [1, "example-form-field"], ["matInput", ""], [3, "ngValue"], [3, "item"], [1, "colorBox"], [1, "hexValue"], [1, "box-controls"], [3, "style", 4, "ngIf"], ["mat-icon-button", "", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Color Matcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sort By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_option_9_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_option_11_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_option_13_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "gridster", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_gridster_item_15_Template, 12, 18, "gridster-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-drawer", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Clearable input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.sortByForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dashboard);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], angular_gridster2__WEBPACK_IMPORTED_MODULE_8__["GridsterComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawer"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], angular_gridster2__WEBPACK_IMPORTED_MODULE_8__["GridsterItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], styles: [".colorBox[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.colorBox[_ngcontent-%COMP%]:hover {\n  border: 1px solid white;\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  cursor: grab;\n}\ngridster[_ngcontent-%COMP%] {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAH0lEQVQYV2NkQAX/GZH4/xkYGBhhAmAOSBJEwDkgAQCCrgQEjpMcPgAAAABJRU5ErkJggg==) repeat;\n  height: calc(100% - 64px);\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n}\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\nmat-drawer[_ngcontent-%COMP%] {\n  width: 400px;\n  padding: 20px;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.done-checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 10px;\n}\n.box-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sort-by-form[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  font-size: 12px;\n}\nselect[_ngcontent-%COMP%] {\n  padding: 5px;\n  height: 40px;\n  width: 150px;\n  margin-right: 10px;\n  font-size: 16px;\n  border-radius: 4px;\n}\n.sort-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBR0E7RUFDRSxzS0FBQTtFQUlBLHlCQUFBO0FBSEY7QUFNQTtFQUNFLGFBQUE7QUFIRjtBQU9BO0VBQ0UsWUFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKRjtBQU9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFKRjtBQU9BO0VBQ0UsYUFBQTtBQUpGO0FBT0E7RUFDRSxXQUFBO0FBSkY7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FBSkY7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSkY7QUFPQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUpGO0FBT0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUpGO0FBT0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvckJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMnB4KTtcbiAgICBjdXJzb3I6IGdyYWI7XG4gIH1cbn1cblxuZ3JpZHN0ZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXG4gIGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBRUNBWUFBQUNwOFo1K0FBQUFIMGxFUVZRWVYyTmtRQVgvR1pINC94a1lHQmhoQW1BT1NCSkV3RGtnQVFDQ3JnUUVqcE1jUGdBQUFBQkpSVTVFcmtKZ2dnPT1cbiAgKSByZXBlYXQ7XG5cbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbn1cblxuLnRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxubWF0LWRyYXdlciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kb25lLWNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmJveC1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc29ydC1ieS1mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuc2VsZWN0IHtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnNvcnQtbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-gridster2 */ "Ljk9");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            angular_gridster2__WEBPACK_IMPORTED_MODULE_3__["GridsterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        angular_gridster2__WEBPACK_IMPORTED_MODULE_3__["GridsterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    angular_gridster2__WEBPACK_IMPORTED_MODULE_3__["GridsterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
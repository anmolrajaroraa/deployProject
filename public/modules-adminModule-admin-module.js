(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-adminModule-admin-module"],{

/***/ "./src/app/globalmodel/ad/ads.modal.ts":
/*!*********************************************!*\
  !*** ./src/app/globalmodel/ad/ads.modal.ts ***!
  \*********************************************/
/*! exports provided: Ads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ads", function() { return Ads; });
/* harmony import */ var _subads_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subads.modal */ "./src/app/globalmodel/ad/subads.modal.ts");
/* harmony import */ var _params_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./params.modal */ "./src/app/globalmodel/ad/params.modal.ts");


var Ads = /** @class */ (function () {
    function Ads() {
        this.subAds = [];
        this.category = '';
        this.noOfAds = '';
    }
    Object.defineProperty(Ads.prototype, "priorityvalue", {
        get: function () {
            return this.priority;
        },
        set: function (priority) {
            this.priority = priority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ads.prototype, "categoryName", {
        get: function () {
            return this.category;
        },
        set: function (category) {
            this.category = category;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ads.prototype, "noofads", {
        get: function () {
            return this.noOfAds;
        },
        set: function (noofads) {
            this.noOfAds = noofads;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ads.prototype, "layoutvalue", {
        get: function () {
            return this.layout;
        },
        set: function (layout) {
            this.layout = layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ads.prototype, "subadsarray", {
        get: function () {
            return this.subAds;
        },
        set: function (subads) {
            var _this = this;
            if (subads != null) {
                subads.forEach(function (subad) {
                    _this.subAds.push(subad);
                });
            }
            else {
                var subad = new _subads_modal__WEBPACK_IMPORTED_MODULE_0__["Subads"]();
                subad.labelname = '';
                subad.linkurl = '';
                subad.imageObj = {
                    url: null,
                    key: null
                };
                subad.statestatus = 'inactive';
                var array = [];
                var param = new _params_modal__WEBPACK_IMPORTED_MODULE_1__["Params"]();
                param.keywordvalue = '';
                param.categoryvalue = this.category;
                param.paramvalue = '';
                array.push(param);
                subad.paramaters = array;
                this.subAds.push(subad);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Ads;
}());



/***/ }),

/***/ "./src/app/globalmodel/ad/params.modal.ts":
/*!************************************************!*\
  !*** ./src/app/globalmodel/ad/params.modal.ts ***!
  \************************************************/
/*! exports provided: Params */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params", function() { return Params; });
var Params = /** @class */ (function () {
    function Params() {
        this.keyword = '';
        this.value = '';
        this.category = '';
    }
    Object.defineProperty(Params.prototype, "keywordvalue", {
        get: function () {
            return this.keyword;
        },
        set: function (keyword) {
            this.keyword = keyword;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Params.prototype, "paramvalue", {
        get: function () {
            return this.value;
        },
        set: function (value) {
            this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Params.prototype, "categoryvalue", {
        get: function () {
            return this.category;
        },
        set: function (category) {
            this.category = category;
        },
        enumerable: true,
        configurable: true
    });
    return Params;
}());



/***/ }),

/***/ "./src/app/globalmodel/ad/subads.modal.ts":
/*!************************************************!*\
  !*** ./src/app/globalmodel/ad/subads.modal.ts ***!
  \************************************************/
/*! exports provided: Subads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subads", function() { return Subads; });
var Subads = /** @class */ (function () {
    function Subads() {
        this.label = '';
        this.imageobj = {};
        this.link = '';
        this.status = '';
        this.priority = null;
        this.params = [];
    }
    Object.defineProperty(Subads.prototype, "priorityvalue", {
        get: function () {
            return this.priority;
        },
        set: function (priority) {
            this.priority = priority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subads.prototype, "labelname", {
        get: function () {
            return this.label;
        },
        set: function (label) {
            this.label = label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subads.prototype, "imageObj", {
        get: function () {
            return this.imageobj;
        },
        set: function (object) {
            this.imageobj = object;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subads.prototype, "linkurl", {
        get: function () {
            return this.link;
        },
        set: function (link) {
            this.link = link;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subads.prototype, "statestatus", {
        get: function () {
            return this.status;
        },
        set: function (status) {
            this.status = status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subads.prototype, "paramaters", {
        get: function () {
            return this.params;
        },
        set: function (param) {
            this.params = param;
        },
        enumerable: true,
        configurable: true
    });
    return Subads;
}());



/***/ }),

/***/ "./src/app/globalmodel/delivLevel.ts":
/*!*******************************************!*\
  !*** ./src/app/globalmodel/delivLevel.ts ***!
  \*******************************************/
/*! exports provided: Level, DelivLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelivLevel", function() { return DelivLevel; });
var Level = /** @class */ (function () {
    function Level() {
        this.levelIndex = null;
        this.levelMessage = null;
    }
    Object.defineProperty(Level.prototype, "LvlIndex", {
        get: function () {
            return this.levelIndex;
        },
        set: function (val) {
            this.levelIndex = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "LvlMsg", {
        get: function () {
            return this.levelMessage;
        },
        set: function (val) {
            this.levelMessage = val;
        },
        enumerable: true,
        configurable: true
    });
    return Level;
}());

var DelivLevel = /** @class */ (function () {
    function DelivLevel() {
        this.levelId = null;
        this.maxLevel = null;
        this.level = [];
    }
    Object.defineProperty(DelivLevel.prototype, "LvlId", {
        get: function () {
            return this.levelId;
        },
        set: function (val) {
            this.levelId = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DelivLevel.prototype, "MaxLvl", {
        get: function () {
            return this.maxLevel;
        },
        set: function (val) {
            this.maxLevel = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DelivLevel.prototype, "Level", {
        get: function () {
            return this.level;
        },
        set: function (val) {
            this.level = val;
        },
        enumerable: true,
        configurable: true
    });
    return DelivLevel;
}());



/***/ }),

/***/ "./src/app/globalmodel/listitem/category.ts":
/*!**************************************************!*\
  !*** ./src/app/globalmodel/listitem/category.ts ***!
  \**************************************************/
/*! exports provided: category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony import */ var _categorylist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorylist */ "./src/app/globalmodel/listitem/categorylist.ts");

var category = /** @class */ (function () {
    function category() {
        this.categoryId = null;
        this.categoryName = null;
        this.subcategory = [];
        this.childIds = [];
        this.subcategory.push(new _categorylist__WEBPACK_IMPORTED_MODULE_0__["Subcategorylist"]());
    }
    return category;
}());



/***/ }),

/***/ "./src/app/globalmodel/listitem/categorylist.ts":
/*!******************************************************!*\
  !*** ./src/app/globalmodel/listitem/categorylist.ts ***!
  \******************************************************/
/*! exports provided: Subcategorylist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subcategorylist", function() { return Subcategorylist; });
/* harmony import */ var _productList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productList */ "./src/app/globalmodel/listitem/productList.ts");

var Subcategorylist = /** @class */ (function () {
    function Subcategorylist() {
        this.subcategoryId = null;
        this.subcategoryName = null;
        this.childIds = [];
        this.products = [];
        this.products.push(new _productList__WEBPACK_IMPORTED_MODULE_0__["Productlist"]());
    }
    return Subcategorylist;
}());



/***/ }),

/***/ "./src/app/globalmodel/listitem/productList.ts":
/*!*****************************************************!*\
  !*** ./src/app/globalmodel/listitem/productList.ts ***!
  \*****************************************************/
/*! exports provided: Productlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Productlist", function() { return Productlist; });
/* harmony import */ var _subProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subProduct */ "./src/app/globalmodel/listitem/subProduct.ts");

var Productlist = /** @class */ (function () {
    function Productlist() {
        this.productId = null;
        this.productName = null;
        this.childIds = [];
        this.subProducts = [];
        this.subProducts.push(new _subProduct__WEBPACK_IMPORTED_MODULE_0__["SubProduct"]());
    }
    return Productlist;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/AboutCrud/abtcrud.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/adminModule/AboutCrud/abtcrud.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    background-color:#034f84;\r\n    overflow:hidden;\r\n    padding-bottom: 100px;\r\n}\r\n#abtcrudcontainer{\r\n    margin:1rem;\r\n}\r\nform h2 {\r\n    color:white;\r\n    /* margin:10px 15px; */\r\n    letter-spacing: 1px;\r\n    letter-spacing: 2.5px;\r\n    margin:25px 35px;\r\n    text-shadow:2px 4px black;\r\n}\r\ntextarea {\r\n    width:100%;\r\n    height:100px;\r\n    resize: none;\r\n    font-size:13.5px;\r\n    line-height: 25px;\r\n    letter-spacing: 0.2px;\r\n}\r\nmat-form-field {\r\n    width:100%;\r\n    margin-left:20px;\r\n    margin-bottom:20px;\r\n    padding:15px 20px;\r\n    resize: none;\r\n    background-color:whitesmoke;\r\n    border:1px solid white;\r\n    border-radius :5px;\r\n}\r\n.addButton {\r\n    margin-left:2.3rem;\r\n}\r\nbutton {\r\n    margin:15px 35px;\r\n}\r\n.matField {\r\n    width:70%;\r\n}\r\n.buttonDiv {\r\n    display:flex;\r\n    align-items: center !important; \r\n    justify-content: center !important;\r\n}\r\n.containerPara {\r\n    display:flex !important;\r\n    justify-content: space-around;\r\n}\r\n.submitButton {\r\n    background-color:whitesmoke;\r\n    color:black;\r\n    text-align: center;\r\n}\r\n.buttonInside {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9BYm91dENydWQvYWJ0Y3J1ZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQiwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksVUFBVTtDQUNiO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLG1DQUFtQztDQUN0QztBQUNEO0lBQ0ksd0JBQXdCO0lBQ3hCLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9BYm91dENydWQvYWJ0Y3J1ZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMzRmODQ7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuI2FidGNydWRjb250YWluZXJ7XHJcbiAgICBtYXJnaW46MXJlbTtcclxufVxyXG5cclxuZm9ybSBoMiB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIC8qIG1hcmdpbjoxMHB4IDE1cHg7ICovXHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG4gICAgbWFyZ2luOjI1cHggMzVweDtcclxuICAgIHRleHQtc2hhZG93OjJweCA0cHggYmxhY2s7XHJcbn1cclxudGV4dGFyZWEge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDBweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZToxMy41cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgIHBhZGRpbmc6MTVweCAyMHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXMgOjVweDtcclxufVxyXG4uYWRkQnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OjIuM3JlbTtcclxufVxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOjE1cHggMzVweDtcclxufVxyXG4ubWF0RmllbGQge1xyXG4gICAgd2lkdGg6NzAlO1xyXG59XHJcbi5idXR0b25EaXYge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRhaW5lclBhcmEge1xyXG4gICAgZGlzcGxheTpmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uc3VibWl0QnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idXR0b25JbnNpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/AboutCrud/abtcrud.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/adminModule/AboutCrud/abtcrud.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='abtcrudcontainer'>\r\n<form [formGroup]=\"abtForm\" *ngIf='datacame' (ngSubmit)=\"onsubmit(abtForm.value)\">\r\n    <h2>About Title</h2>\r\n    <div formArrayName=\"titleName\"\r\n      *ngFor=\"let abttitle of abtForm.controls.titleName.controls; let i = index;\">\r\n      <div class=\"containerPara\">\r\n          <div class=\"matField\">\r\n        <mat-form-field class=\"example-full-width\">\r\n        <textarea matInput placeholder=\"About Title\" formControlName=\"{{i}}\"></textarea>\r\n        </mat-form-field></div>\r\n        <div class=\"buttonDiv\">\r\n          <button mat-raised-button type=\"button\" color='accent' (click)='deleteTitleName(i)'>Delete Title</button>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"addButton\">\r\n          <button mat-raised-button type=\"button\" color='accent' (click)='addTitleName()'>Add Title</button>\r\n      </div>\r\n    <h2>About Paragraphs <title></title></h2>\r\n    <div formGroupName=\"titleParagraph\">\r\n    <div formArrayName=\"paragraph\"\r\n      *ngFor=\"let abttitle of abtForm.controls.titleParagraph.controls.paragraph.controls; let i = index;\">\r\n      <div class=\"containerPara\">\r\n          <div class=\"matField\">\r\n        <mat-form-field class=\"example-full-width\">\r\n        <textarea matInput placeholder=\"About Paragraph\" formControlName=\"{{i}}\"></textarea>\r\n        </mat-form-field></div>\r\n        <div class=\"buttonDiv\">\r\n            <button mat-raised-button type=\"button\" color='accent' (click)='deleteParagraph(i)'>Delete Paragraph</button>\r\n        </div>\r\n  \r\n    </div>\r\n    </div>\r\n  \r\n    </div>\r\n    <div class=\"addButton\">\r\n          <button mat-raised-button type=\"button\" color='accent' (click)='addTitlePara()'>Add Paragraph</button>\r\n      </div>\r\n    <h2>About Lists <title></title></h2>\r\n    <div formGroupName=\"titleParagraph\">\r\n    <div formArrayName=\"lists\"\r\n      *ngFor=\"let abttitle of abtForm.controls.titleParagraph.controls.lists.controls; let i = index;\">\r\n      <div class=\"containerPara\">\r\n          <div class=\"matField\">\r\n        <mat-form-field class=\"example-full-width\">\r\n        <textarea matInput placeholder=\"About List\" formControlName=\"{{i}}\"></textarea>\r\n        </mat-form-field></div>\r\n        <div class=\"buttonDiv\">\r\n            <button mat-raised-button type=\"button\" color='accent' (click)='deleteList(i)'>Delete List</button>\r\n        </div>\r\n  \r\n    </div>\r\n    </div>\r\n  \r\n    </div>\r\n    <div class=\"addButton\">\r\n          <button mat-raised-button type=\"button\" color='accent' (click)='addTitleList()'>Add List</button>\r\n      </div>\r\n    <h2>About SubTitles</h2>\r\n    \r\n    <div formGroupName=\"aboutSubTitle\">\r\n    <div formArrayName=\"subTitleName\"\r\n      *ngFor=\"let abttitle of abtForm.controls.aboutSubTitle.controls.subTitleName.controls; let i = index;\">\r\n      <div class=\"containerPara\">\r\n          <div class=\"matField\">\r\n        <mat-form-field class=\"example-full-width\">\r\n        <textarea matInput placeholder=\"About SubTitle\" formControlName=\"{{i}}\"></textarea>\r\n        </mat-form-field></div>\r\n        <div class=\"buttonDiv\"> \r\n            <button mat-raised-button type=\"button\" color='accent' (click)='deletesubTitleName(i)'>Delete Sub Title</button>\r\n        </div>\r\n  \r\n    </div>\r\n    </div>\r\n  \r\n    </div>\r\n    <div class=\"addButton\">\r\n          <button mat-raised-button type=\"button\" color='accent' (click)='addsubTitleName()'>Add Sub Title</button>\r\n      </div>\r\n    <h2>About SubTitleParagraphs</h2>\r\n    <div formGroupName=\"aboutSubTitle\">\r\n    <div formArrayName=\"subTitleParagraphs\"\r\n      *ngFor=\"let abttitle of abtForm.controls.aboutSubTitle.controls.subTitleParagraphs.controls; let i = index;\">\r\n      <div class=\"containerPara\">\r\n          <div class=\"matField\">\r\n        <mat-form-field class=\"example-full-width\">\r\n        <textarea matInput placeholder=\"About SubTitleParagraph\" formControlName=\"{{i}}\"></textarea>\r\n        </mat-form-field></div>\r\n        <div class=\"buttonDiv\">\r\n            <button mat-raised-button type=\"button\" color='accent' (click)='deletesubParagraph(i)'>Delete Paragraph</button>\r\n        </div>\r\n  \r\n    </div>\r\n    </div>\r\n  \r\n    </div>\r\n    <div class=\"addButton\">\r\n          <button mat-raised-button type=\"button\" color='accent' (click)='addsubTitlePara()'>Add Sub Title Paragraph</button>\r\n      </div>\r\n    <div class=\"buttonInside\">\r\n          <button mat-raised-button class=\"submitButton\" type=\"submit\" [disabled]=\"abtForm.invalid||titleArr.length!=1||subtitleArr.length!=1\">\r\n              submit</button>\r\n    </div>\r\n  </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/modules/adminModule/AboutCrud/abtcrud.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/adminModule/AboutCrud/abtcrud.component.ts ***!
  \********************************************************************/
/*! exports provided: AboutCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCrudComponent", function() { return AboutCrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_abtcrud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/abtcrud */ "./src/app/modules/adminModule/AboutCrud/service/abtcrud.ts");




var AboutCrudComponent = /** @class */ (function () {
    function AboutCrudComponent(fb, abtcrudService) {
        this.fb = fb;
        this.abtcrudService = abtcrudService;
        this.titleArr = [];
        this.datacame = false;
        this.paragraphArr = [];
        this.listsArr = [];
        this.subtitleArr = [];
        this.subtitleParaArr = [];
    }
    AboutCrudComponent.prototype.ngOnInit = function () {
        this.initialData();
    };
    AboutCrudComponent.prototype.initialData = function () {
        var _this = this;
        //get all the data
        this.abtcrudService.Aboutjsonretrieve().subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.initialAbtData = data.data;
                console.log(_this.initialAbtData.aboutTitle.titleName);
                _this.fillinitialData();
            }
            else {
                _this.firstTimeFill();
            }
            _this.datacame = true;
        }, function (err) {
            _this.firstTimeFill();
            _this.datacame = true;
        });
    };
    AboutCrudComponent.prototype.fillinitialData = function () {
        this.titleArr.push(this.createTitleName(this.initialAbtData.aboutTitle.titleName));
        for (var _i = 0, _a = this.initialAbtData.aboutTitle.titleParagraph[0].paragraph; _i < _a.length; _i++) {
            var str = _a[_i];
            this.paragraphArr.push(this.createParagraph(str));
        }
        for (var _b = 0, _c = this.initialAbtData.aboutTitle.titleParagraph[0].lists; _b < _c.length; _b++) {
            var str = _c[_b];
            this.listsArr.push(this.createList(str));
        }
        for (var _d = 0, _e = this.initialAbtData.aboutSubTitle; _d < _e.length; _d++) {
            var subObject = _e[_d];
            this.subtitleArr.push(this.createsubTitleName(subObject.subTitleName));
            this.subtitleParaArr.push(this.createsubParagraph(subObject.subTitleParagraphs[0]));
        }
        this.createForm();
    };
    AboutCrudComponent.prototype.firstTimeFill = function () {
        this.titleArr.push(this.createTitleName(''));
        this.paragraphArr.push(this.createParagraph(''));
        this.listsArr.push(this.createList(''));
        this.subtitleArr.push(this.createsubTitleName(''));
        this.subtitleParaArr.push(this.createsubParagraph(''));
        this.createForm();
    };
    AboutCrudComponent.prototype.createForm = function () {
        this.abtForm = this.fb.group({
            titleName: this.fb.array(this.titleArr),
            titleParagraph: this.fb.group({
                paragraph: this.fb.array(this.paragraphArr),
                lists: this.fb.array(this.listsArr)
            }),
            aboutSubTitle: this.fb.group({
                subTitleName: this.fb.array(this.subtitleArr),
                subTitleParagraphs: this.fb.array(this.subtitleParaArr)
            })
        });
    };
    AboutCrudComponent.prototype.addTitleName = function () {
        this.titleArr.push(this.createTitleName(''));
        this.createForm();
    };
    AboutCrudComponent.prototype.deleteTitleName = function (index) {
        this.titleArr.splice(index, 1);
        this.createForm();
    };
    AboutCrudComponent.prototype.createTitleName = function (title) {
        if (title) {
            return this.fb.control(title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
        else {
            return this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
    };
    AboutCrudComponent.prototype.addTitlePara = function () {
        this.paragraphArr.push(this.createParagraph(''));
        this.createForm();
    };
    AboutCrudComponent.prototype.deleteParagraph = function (index) {
        this.paragraphArr.splice(index, 1);
        this.createForm();
    };
    AboutCrudComponent.prototype.createParagraph = function (paragraph) {
        if (paragraph) {
            return this.fb.control(paragraph, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
        else {
            return this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
    };
    AboutCrudComponent.prototype.addsubTitleName = function () {
        this.subtitleArr.push(this.createTitleName(''));
        this.createForm();
    };
    AboutCrudComponent.prototype.deletesubTitleName = function (index) {
        this.subtitleArr.splice(index, 1);
        this.createForm();
    };
    AboutCrudComponent.prototype.createsubTitleName = function (subtitle) {
        if (subtitle) {
            return this.fb.control(subtitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
        else {
            return this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
    };
    AboutCrudComponent.prototype.addTitleList = function () {
        this.listsArr.push(this.createParagraph(''));
        this.createForm();
    };
    AboutCrudComponent.prototype.deleteList = function (index) {
        this.listsArr.splice(index, 1);
        this.createForm();
    };
    AboutCrudComponent.prototype.createList = function (list) {
        if (list) {
            return this.fb.control(list, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
        else {
            return this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
    };
    AboutCrudComponent.prototype.addsubTitlePara = function () {
        this.subtitleParaArr.push(this.createParagraph(''));
        this.createForm();
    };
    AboutCrudComponent.prototype.deletesubParagraph = function (index) {
        this.subtitleParaArr.splice(index, 1);
        this.createForm();
    };
    AboutCrudComponent.prototype.createsubParagraph = function (subparagraph) {
        if (subparagraph) {
            return this.fb.control(subparagraph, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
        else {
            return this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
    };
    AboutCrudComponent.prototype.onsubmit = function (form) {
        console.log(form);
        this.abtcrudService.uploadForm(form).subscribe(function (data) {
            if (data) {
                alert('success');
            }
        }, function (err) {
            alert(err);
        });
    };
    AboutCrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'abtCrud',
            template: __webpack_require__(/*! ./abtcrud.component.html */ "./src/app/modules/adminModule/AboutCrud/abtcrud.component.html"),
            providers: [_service_abtcrud__WEBPACK_IMPORTED_MODULE_3__["AbtcrudService"]],
            styles: [__webpack_require__(/*! ./abtcrud.component.css */ "./src/app/modules/adminModule/AboutCrud/abtcrud.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service_abtcrud__WEBPACK_IMPORTED_MODULE_3__["AbtcrudService"]])
    ], AboutCrudComponent);
    return AboutCrudComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/Dialogs/Add/add-dialog.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/Dialogs/Add/add-dialog.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csstoButton{\n    margin:1rem;\n    background-color:#fdd835; \n}\n\n.heading{\n    text-align: center;\n    background-color:#3F51B5;\n    color:white;\n    padding:1rem;\n\n\n\n}\n\n::ng-deep .mat-dialog-container{\npadding:0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9BZGRyZXNzQ3J1ZC9EaWFsb2dzL0FkZC9hZGQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTs7OztDQUloQjs7QUFDRDtBQUNBLHVCQUF1QjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvQWRkcmVzc0NydWQvRGlhbG9ncy9BZGQvYWRkLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNzc3RvQnV0dG9ue1xuICAgIG1hcmdpbjoxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZkZDgzNTsgXG59XG5cbi5oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzRjUxQjU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzoxcmVtO1xuXG5cblxufVxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcbnBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/Dialogs/Add/add-dialog.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/Dialogs/Add/add-dialog.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"heading\"><h1 >ADD NEW DATA</h1></div>\r\n\r\n<form [formGroup]=\"demo\" (ngSubmit)=\"Add(demo.value)\">\r\n    <mat-form-field style=\"margin: 5px 4px 2px 7px\" formArrayName=\"addarray\" *ngFor=\"let key of keyArray; let i=index\">\r\n        <mat-label>{{key}}</mat-label>\r\n        <input matInput placeholder=\"Enter the value\" [formControlName]=\"i\">\r\n      </mat-form-field>\r\n      <button mat-raised-button  class=\"csstoButton\" [disabled]=\"!demo.valid\">Submit</button>\r\n      <button mat-raised-button  type=\"button\" class=\"csstoButton\" (click)=\"Cancel()\">Cancel</button>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/Dialogs/Add/add-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/Dialogs/Add/add-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddressAddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressAddDialogComponent", function() { return AddressAddDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AddressAddDialogComponent = /** @class */ (function () {
    //private addarray:FormArray;
    function AddressAddDialogComponent(object, dialogRef) {
        this.object = object;
        this.dialogRef = dialogRef;
        this.keyArray = [];
        this.resultArray = [];
    }
    AddressAddDialogComponent.prototype.ngOnInit = function () {
        this.demo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addarray: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        for (var key in this.object) {
            if (this.keyCheck(key)) {
                this.keyArray.push(key);
                this.demo.get('addarray').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
            }
            else {
                this.resultArray.push(this.object[key]);
            }
        }
    };
    AddressAddDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    AddressAddDialogComponent.prototype.Add = function (value) {
        this.dialogRef.close(value);
        //add form data to session storage to form object
    };
    AddressAddDialogComponent.prototype.keyCheck = function (key) {
        if (key == "areaId") {
            return false;
        }
        else {
            return true;
        }
    };
    AddressAddDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addressAdd-dialog',
            template: __webpack_require__(/*! ./add-dialog.component.html */ "./src/app/modules/adminModule/AddressCrud/Dialogs/Add/add-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-dialog.component.css */ "./src/app/modules/adminModule/AddressCrud/Dialogs/Add/add-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AddressAddDialogComponent);
    return AddressAddDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/Dialogs/Delete/delete-dialog.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/Dialogs/Delete/delete-dialog.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csstoButton{\n    margin:1rem;\n    background-color:#fdd835; \n}\n\n.heading{\n    text-align: center;\n    background-color:#3F51B5;\n    color:white;\n    padding:1rem;\n\n\n\n}\n\n::ng-deep .mat-dialog-container{\npadding:0px !important;\n}\n\n#form{\n    margin-top:1rem;\ndisplay: flex;\njustify-content: center;    \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9BZGRyZXNzQ3J1ZC9EaWFsb2dzL0RlbGV0ZS9kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTs7OztDQUloQjs7QUFDRDtBQUNBLHVCQUF1QjtDQUN0Qjs7QUFDRDtJQUNJLGdCQUFnQjtBQUNwQixjQUFjO0FBQ2Qsd0JBQXdCOztDQUV2QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvQWRkcmVzc0NydWQvRGlhbG9ncy9EZWxldGUvZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNzc3RvQnV0dG9ue1xuICAgIG1hcmdpbjoxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZkZDgzNTsgXG59XG5cbi5oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzRjUxQjU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzoxcmVtO1xuXG5cblxufVxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcbnBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG59XG4jZm9ybXtcbiAgICBtYXJnaW4tdG9wOjFyZW07XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgIFxuXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/Dialogs/Delete/delete-dialog.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/Dialogs/Delete/delete-dialog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"heading\"><h1 >DELETE THE DATA</h1></div>\r\n\r\n<div id=\"form\">\r\n    <h2>Are you sure you want to delete this Entry</h2>\r\n</div>\r\n<div>\r\n    <button mat-raised-button  class=\"csstoButton\" (click)=\"Delete()\">Delete</button>\r\n    <button mat-raised-button  type=\"button\" class=\"csstoButton\" (click)=\"Cancel()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/Dialogs/Delete/delete-dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/Dialogs/Delete/delete-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddressDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDeleteDialogComponent", function() { return AddressDeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AddressDeleteDialogComponent = /** @class */ (function () {
    function AddressDeleteDialogComponent(object, dialogRef) {
        this.object = object;
        this.dialogRef = dialogRef;
    }
    AddressDeleteDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    AddressDeleteDialogComponent.prototype.Delete = function () {
        this.dialogRef.close(true); //change later
        //manipulate the object here and fill it into result
    };
    AddressDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addressDelete-dialog',
            template: __webpack_require__(/*! ./delete-dialog.component.html */ "./src/app/modules/adminModule/AddressCrud/Dialogs/Delete/delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-dialog.component.css */ "./src/app/modules/adminModule/AddressCrud/Dialogs/Delete/delete-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AddressDeleteDialogComponent);
    return AddressDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/Dialogs/Edit/edit-dialog.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/Dialogs/Edit/edit-dialog.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csstoButton{\n    margin:1rem;\n    background-color:#fdd835; \n}\n\n.heading{\n    text-align: center;\n    background-color:#3F51B5;\n    color:white;\n    padding:1rem;\n\n\n\n}\n\n::ng-deep .mat-dialog-container{\npadding:0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9BZGRyZXNzQ3J1ZC9EaWFsb2dzL0VkaXQvZWRpdC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhOzs7O0NBSWhCOztBQUNEO0FBQ0EsdUJBQXVCO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9BZGRyZXNzQ3J1ZC9EaWFsb2dzL0VkaXQvZWRpdC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jc3N0b0J1dHRvbntcbiAgICBtYXJnaW46MXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZGQ4MzU7IFxufVxuXG4uaGVhZGluZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojM0Y1MUI1O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6MXJlbTtcblxuXG5cbn1cbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXJ7XG5wYWRkaW5nOjBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/Dialogs/Edit/edit-dialog.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/Dialogs/Edit/edit-dialog.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"heading\"><h1 >EDIT THE DATA</h1></div>\r\n\r\n<form [formGroup]=\"demo\" (ngSubmit)=\"Edit(demo.value)\">\r\n    <mat-form-field style=\"margin: 5px 4px 2px 7px\" formArrayName=\"addarray\" *ngFor=\"let key of keyArray; let i=index\">\r\n        <mat-label>{{key}}</mat-label>\r\n        <input matInput placeholder=\"\" [formControlName]=\"i\">\r\n      </mat-form-field>\r\n      <button mat-raised-button class=\"csstoButton\" [disabled]='demo.invalid'>Submit</button>\r\n      <button mat-raised-button  class=\"csstoButton\" type=\"button\" (click)=\"Cancel()\">Cancel</button>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/Dialogs/Edit/edit-dialog.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/Dialogs/Edit/edit-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddressEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressEditDialogComponent", function() { return AddressEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AddressEditDialogComponent = /** @class */ (function () {
    function AddressEditDialogComponent(object, dialogRef) {
        this.object = object;
        this.dialogRef = dialogRef;
        this.keyArray = [];
        this.resultArray = [];
    }
    AddressEditDialogComponent.prototype.ngOnInit = function () {
        this.demo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addarray: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        for (var key in this.object) {
            if (this.keyCheck(key)) { //creation of formarray and reactive form,validations
                this.keyArray.push(key); //based on object recieved
                this.demo.get('addarray').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.object[key], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
            }
            else {
                this.resultArray.push(this.object[key]);
            }
        }
    };
    AddressEditDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    AddressEditDialogComponent.prototype.Edit = function (object) {
        this.dialogRef.close(object);
        //store in permanent obj as well
    };
    AddressEditDialogComponent.prototype.keyCheck = function (key) {
        if (key == "areaId") {
            return false;
        }
        else {
            return true;
        }
    };
    AddressEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addressEdit-dialog',
            template: __webpack_require__(/*! ./edit-dialog.component.html */ "./src/app/modules/adminModule/AddressCrud/Dialogs/Edit/edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-dialog.component.css */ "./src/app/modules/adminModule/AddressCrud/Dialogs/Edit/edit-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AddressEditDialogComponent);
    return AddressEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/address.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/address.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvQWRkcmVzc0NydWQvYWRkcmVzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/address.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/address.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group animationDuration=\"0ms\" mat-align-tabs=\"center\">\r\n    <mat-tab label=\"Single Address Crud\">\r\n      <div style=\"width: 100\" class=\"mat-elevation-z8\">\r\n  \r\n  \r\n        <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\r\n      \r\n          <!--- Note that these columns can be defined in any order.\r\n                The actual rendered columns are set as a property on the row definition\" -->\r\n      \r\n          <!-- ID Column -->\r\n          <ng-container *ngFor=\"let col of columns\" matColumnDef={{col}}>\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>{{col}}</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\" >{{row[col]}}</mat-cell>\r\n          </ng-container>\r\n          \r\n          <ng-container matColumnDef=\"actions\">\r\n            <mat-header-cell *matHeaderCellDef>\r\n              <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n              </button>\r\n            </mat-header-cell>\r\n      \r\n            <mat-cell *matCellDef=\"let row; let i=index;\">\r\n              <button mat-icon-button color=\"accent\" (click)=\"startEdit(row)\">\r\n                <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n              </button>\r\n      \r\n              <button mat-icon-button color=\"accent\" (click)=\"deleteItem(row)\">\r\n                <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n              </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n      \r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <div class=\"no-results\" [style.display]=\"dataSource.length == 0 ? '' : 'none'\">\r\n          No results\r\n        </div>\r\n      \r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Bulk Upload\">\r\n      <bulkAddCrud></bulkAddCrud>\r\n    </mat-tab>\r\n  </mat-tab-group>"

/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/address.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/address.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddressCrud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressCrud", function() { return AddressCrud; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_addressCrud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/addressCrud */ "./src/app/modules/adminModule/AddressCrud/service/addressCrud.ts");
/* harmony import */ var _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dialogs/Edit/edit-dialog.component */ "./src/app/modules/adminModule/AddressCrud/Dialogs/Edit/edit-dialog.component.ts");
/* harmony import */ var _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dialogs/Delete/delete-dialog.component */ "./src/app/modules/adminModule/AddressCrud/Dialogs/Delete/delete-dialog.component.ts");
/* harmony import */ var _Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dialogs/Add/add-dialog.component */ "./src/app/modules/adminModule/AddressCrud/Dialogs/Add/add-dialog.component.ts");







var AddressCrud = /** @class */ (function () {
    function AddressCrud(dialog, addcrud) {
        this.dialog = dialog;
        this.addcrud = addcrud;
        this.columns = [];
        this.displayedColumns = [];
        this.dataSource = [];
    }
    AddressCrud.prototype.ngOnInit = function () {
        var _this = this;
        this.addcrud.Addressjsonretrieve().subscribe(function (data) {
            _this.dataSource = data;
            console.log(_this.dataSource[0]);
            _this.makeColoumns();
        });
    };
    AddressCrud.prototype.makeColoumns = function () {
        var object = this.dataSource[0];
        for (var key in object) {
            this.columns.push(key);
        }
        console.log(this.columns);
        this.displayedColumns = this.columns.concat(['actions']);
    };
    AddressCrud.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddressAddDialogComponent"], {
            height: '330px',
            width: '430px',
            data: this.dataSource[0],
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                //change the data in db
                console.log(result);
                var obj = {
                    optype: 'add',
                    areaName: result.addarray[1],
                    city: result.addarray[0],
                    pincode: result.addarray[2],
                    status: result.addarray[3]
                };
                _this.addcrud.updateAddress(obj).subscribe(function (data) {
                    if (data != null) {
                        _this.addcrud.Addressjsonretrieve().subscribe(function (data) {
                            if (data != null) {
                                _this.dataSource = data;
                            }
                        });
                    }
                });
            }
        });
    };
    AddressCrud.prototype.startEdit = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(_Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddressEditDialogComponent"], {
            height: '330px',
            width: '430px',
            data: row,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                //change the data in db
                console.log(result);
                var obj = {
                    optype: 'edit',
                    areaId: row.areaId,
                    areaName: result.addarray[1],
                    city: result.addarray[0],
                    pincode: result.addarray[2],
                    status: result.addarray[3]
                };
                _this.addcrud.updateAddress(obj).subscribe(function (data) {
                    if (data != null) {
                        _this.addcrud.Addressjsonretrieve().subscribe(function (data) {
                            if (data != null) {
                                _this.dataSource = data;
                            }
                        });
                    }
                });
            }
        });
    };
    AddressCrud.prototype.deleteItem = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(_Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddressDeleteDialogComponent"], {
            height: '330px',
            width: '430px',
            data: null,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                //delete in db
                //console.log('deleted');
                var obj = {
                    optype: 'delete',
                    areaId: row.areaId,
                    areaName: row.areaName,
                    city: row.city,
                    pincode: row.pincode,
                    status: row.status
                };
                _this.addcrud.updateAddress(obj).subscribe(function (data) {
                    if (data != null) {
                        _this.addcrud.Addressjsonretrieve().subscribe(function (data) {
                            if (data != null) {
                                _this.dataSource = data;
                            }
                        });
                    }
                });
            }
        });
    };
    AddressCrud = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addressCrud',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/modules/adminModule/AddressCrud/address.component.html"),
            providers: [_service_addressCrud__WEBPACK_IMPORTED_MODULE_3__["AddressCrudService"]],
            styles: [__webpack_require__(/*! ./address.component.css */ "./src/app/modules/adminModule/AddressCrud/address.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _service_addressCrud__WEBPACK_IMPORTED_MODULE_3__["AddressCrudService"]])
    ], AddressCrud);
    return AddressCrud;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/bulkAddUploading/bulkadd.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/bulkAddUploading/bulkadd.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-file-upload {\r\n  \r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  text-align: center;\r\n  background-color:#FF007B;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  color:white;\r\n}\r\ninput[type=\"file\"]{\r\n  display:none;\r\n}\r\n.bulk_div{\r\nmargin: 15px 0px 15px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9BZGRyZXNzQ3J1ZC9idWxrQWRkVXBsb2FkaW5nL2J1bGthZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUVEO0FBQ0EsMEJBQTBCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9BZGRyZXNzQ3J1ZC9idWxrQWRkVXBsb2FkaW5nL2J1bGthZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gIFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojRkYwMDdCO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuaW5wdXRbdHlwZT1cImZpbGVcIl17XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4uYnVsa19kaXZ7XHJcbm1hcmdpbjogMTVweCAwcHggMTVweCAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/bulkAddUploading/bulkadd.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/bulkAddUploading/bulkadd.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n        <div class=\"bulk_div\">\r\n            <label class=\"custom-file-upload\">\r\n               Address File<input type=\"file\" name=\"address\" accept=\".xlsx, .xls, .csv\" (change)=\"OnChange(address)\" #address >\r\n            </label> \r\n        </div> \r\n        <div class=\"bulk_div\">\r\n                <button mat-raised-button class=\"uploadButton\" [color]='primary' [disabled]=\"false\" \r\n                (click)=\"uploadExcel()\">Upload</button>\r\n        </div>\r\n        </div>"

/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/bulkAddUploading/bulkadd.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/bulkAddUploading/bulkadd.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BulkAddUploading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkAddUploading", function() { return BulkAddUploading; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_fileupload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/fileupload */ "./src/app/modules/adminModule/AddressCrud/service/fileupload.ts");



var BulkAddUploading = /** @class */ (function () {
    function BulkAddUploading(fileUpload) {
        this.fileUpload = fileUpload;
    }
    BulkAddUploading.prototype.ngOnInit = function () {
        this.formdata = new FormData();
        //this.formdata.set('idToken',localStorage.getItem('id_token'))
    };
    BulkAddUploading.prototype.OnChange = function (inputParam) {
        if (inputParam.files.length != 0) {
            this.formdata.set(inputParam.getAttribute("name"), inputParam.files[0]);
        }
    };
    BulkAddUploading.prototype.uploadExcel = function () {
        this.fileUpload.exceluploader(this.formdata).subscribe(function (res) {
            if (res) {
                //this.openSnackBar();
                console.log('upload success');
            }
        }, function (err) {
            alert(err);
        });
    };
    BulkAddUploading = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bulkAddCrud',
            template: __webpack_require__(/*! ./bulkadd.component.html */ "./src/app/modules/adminModule/AddressCrud/bulkAddUploading/bulkadd.component.html"),
            providers: [_service_fileupload__WEBPACK_IMPORTED_MODULE_2__["fileUpload"]],
            styles: [__webpack_require__(/*! ./bulkadd.component.css */ "./src/app/modules/adminModule/AddressCrud/bulkAddUploading/bulkadd.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_fileupload__WEBPACK_IMPORTED_MODULE_2__["fileUpload"]])
    ], BulkAddUploading);
    return BulkAddUploading;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/service/addressCrud.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/service/addressCrud.ts ***!
  \************************************************************************/
/*! exports provided: AddressCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressCrudService", function() { return AddressCrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/globalmodel/url */ "./src/app/globalmodel/url.ts");






var AddressCrudService = /** @class */ (function () {
    function AddressCrudService(http) {
        this.http = http;
        this.pushUrl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_5__["url"].pushlocationAddress;
        this.getUrl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_5__["url"].getlocationAddress;
    }
    AddressCrudService.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else {
            err = 'BackendError';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
    };
    ;
    AddressCrudService.prototype.updateAddress = function (data) {
        console.log(data);
        return this.http.post(this.pushUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ;
    AddressCrudService.prototype.Addressjsonretrieve = function () {
        return this.http.get(this.getUrl);
    };
    AddressCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddressCrudService);
    return AddressCrudService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/AddressCrud/service/fileupload.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/adminModule/AddressCrud/service/fileupload.ts ***!
  \***********************************************************************/
/*! exports provided: fileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileUpload", function() { return fileUpload; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/globalmodel/url */ "./src/app/globalmodel/url.ts");






var fileUpload = /** @class */ (function () {
    function fileUpload(http) {
        this.http = http;
        this.url = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_5__["url"].setlocationAddressExcelFile;
    }
    fileUpload.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else {
            err = 'BackendError';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
    };
    ;
    fileUpload.prototype.exceluploader = function (form) {
        console.log(form);
        return this.http.post(this.url, form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ;
    fileUpload = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], fileUpload);
    return fileUpload;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csstoButton{\n    margin:1rem;\n    background-color:#fdd835; \n}\n\n.heading{\n    text-align: center;\n    background-color:#3F51B5;\n    color:white;\n    padding:1rem;\n\n\n\n}\n\n::ng-deep .mat-dialog-container{\npadding:0px !important;\n}\n\n#form{\n    margin-top:1rem;\ndisplay: flex;\njustify-content: center;    \n\n}\n\n#addDialogBox{\n   \n    text-align: center;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0FkZC9hZGQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTs7OztDQUloQjs7QUFDRDtBQUNBLHVCQUF1QjtDQUN0Qjs7QUFDRDtJQUNJLGdCQUFnQjtBQUNwQixjQUFjO0FBQ2Qsd0JBQXdCOztDQUV2Qjs7QUFFRDs7SUFFSSxtQkFBbUI7O0NBRXRCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0FkZC9hZGQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3NzdG9CdXR0b257XG4gICAgbWFyZ2luOjFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmRkODM1OyBcbn1cblxuLmhlYWRpbmd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzNGNTFCNTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjFyZW07XG5cblxuXG59XG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xucGFkZGluZzowcHggIWltcG9ydGFudDtcbn1cbiNmb3Jte1xuICAgIG1hcmdpbi10b3A6MXJlbTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICAgXG5cbn1cblxuI2FkZERpYWxvZ0JveHtcbiAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addDialogBox\">\r\n   \r\n<div class=\"heading\"><h1 >ADD NEW DATA</h1></div>\r\n<form id=\"form\" [formGroup]=\"demo\" (ngSubmit)=\"Add(demo.value)\">\r\n   <div>\r\n    <mat-form-field formArrayName=\"addarray\" *ngFor=\"let key of keyArray; let i=index\">\r\n        <mat-label>{{key}}</mat-label>\r\n        <input matInput placeholder=\"Enter the value\" [formControlName]=\"i\" >\r\n    \r\n      \r\n      </mat-form-field></div>\r\n      <div>\r\n      <button mat-raised-button  class=\"csstoButton\" [disabled]=\"!demo.valid\">Submit</button>\r\n      <button mat-raised-button  type=\"button\" class=\"csstoButton\" (click)=\"Cancel()\">Cancel</button>\r\n    </div>\r\n</form>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialogComponent", function() { return AddDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var src_app_globalServices_Validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/globalServices/Validation */ "./src/app/globalServices/Validation.ts");






var AddDialogComponent = /** @class */ (function () {
    //private addarray:FormArray;
    function AddDialogComponent(object, dialogRef, dialogService, error_message) {
        this.object = object;
        this.dialogRef = dialogRef;
        this.dialogService = dialogService;
        this.error_message = error_message;
        this.sessionkey = null;
        this.keyArray = [];
        this.resultArray = [];
        this.error_messages = this.error_message.geterror();
    }
    AddDialogComponent.prototype.checkTypeOfCategory = function (checkobject) {
        var checkkey = Object.keys(checkobject)[0];
        switch (checkkey) {
            case 'categoryId':
                this.sessionkey = 'category';
                break;
            case 'subcategoryId':
                this.sessionkey = "subcategory";
                break;
            case 'productId':
                this.sessionkey = 'products';
                // code block
                break;
            case 'subproductId':
                this.sessionkey = 'subProducts';
                break;
            default: this.sessionkey = null;
            // code block
        }
    };
    AddDialogComponent.prototype.iscontainsobject = function (array) {
        if (Array.isArray(array)) {
            if (array.some(function (value) { return typeof value == "object"; }) == true) {
                return true;
            }
            else
                return false;
        }
        return false;
    };
    AddDialogComponent.prototype.ngOnInit = function () {
        this.demo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addarray: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        for (var key in this.object) {
            if (this.objCheck(this.object[key])) {
                console.log(this.object[key]);
                this.keyArray.push(key);
                this.demo.get('addarray').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
            }
            else if (this.iscontainsobject(this.object[key]) == true) {
                this.resultArray.push(this.object[key]);
            }
        }
    };
    AddDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close(null);
    };
    AddDialogComponent.prototype.Add = function (form) {
        var _a;
        this.checkTypeOfCategory(this.object);
        if (this.sessionkey != null) {
            var obj = (_a = {},
                _a[this.sessionkey] = form,
                _a);
            console.log(obj);
            this.dialogService.updateDataSource(obj);
        }
        this.dialogRef.close(this.resultArray);
        // sessionStorage.setItem('')
        //add form data to session storage to form object
    };
    AddDialogComponent.prototype.objCheck = function (value) {
        if (typeof (value) == "object") {
            return false;
        }
        else {
            return true;
        }
    };
    AddDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-dialog',
            template: __webpack_require__(/*! ./add-dialog.component.html */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-dialog.component.css */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_4__["DialogDataService"], src_app_globalServices_Validation__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"]])
    ], AddDialogComponent);
    return AddDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csstoButton{\n    margin:1rem;\n    background-color:#fdd835; \n}\n\n.heading{\n    text-align: center;\n    background-color:#3F51B5;\n    color:white;\n    padding:1rem;\n\n\n\n}\n\n::ng-deep .mat-dialog-container{\npadding:0px !important;\n}\n\n#form{\n    margin-top:1rem;\ndisplay: flex;\njustify-content: center;    \n\n}\n\n#addDialogBox{\n   \n    text-align: center;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0RlbGV0ZS9kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTs7OztDQUloQjs7QUFDRDtBQUNBLHVCQUF1QjtDQUN0Qjs7QUFDRDtJQUNJLGdCQUFnQjtBQUNwQixjQUFjO0FBQ2Qsd0JBQXdCOztDQUV2Qjs7QUFFRDs7SUFFSSxtQkFBbUI7O0NBRXRCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0RlbGV0ZS9kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3NzdG9CdXR0b257XG4gICAgbWFyZ2luOjFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmRkODM1OyBcbn1cblxuLmhlYWRpbmd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzNGNTFCNTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjFyZW07XG5cblxuXG59XG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xucGFkZGluZzowcHggIWltcG9ydGFudDtcbn1cbiNmb3Jte1xuICAgIG1hcmdpbi10b3A6MXJlbTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICAgXG5cbn1cblxuI2FkZERpYWxvZ0JveHtcbiAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addDialogBox\">\r\n<div class=\"heading\"><h1 >DELETE THE DATA</h1></div>\r\n<div id=\"form\">\r\n<h2>Are you sure you want to delete this Entry</h2>\r\n</div>\r\n<div>\r\n        <button mat-raised-button  class=\"csstoButton\" (click)=\"Delete()\">Delete</button>\r\n        <button mat-raised-button  type=\"button\" class=\"csstoButton\" (click)=\"Cancel()\">Cancel</button>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(object, dialogRef) {
        this.object = object;
        this.dialogRef = dialogRef;
    }
    DeleteDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close(null);
    };
    DeleteDialogComponent.prototype.Delete = function () {
        this.dialogRef.close(true); //change later
        //manipulate the object here and fill it into result
    };
    DeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-dialog',
            template: __webpack_require__(/*! ./delete-dialog.component.html */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-dialog.component.css */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csstoButton{\n    margin:1rem;\n    background-color:#fdd835; \n}\n\n.heading{\n    text-align: center;\n    background-color:#3F51B5;\n    color:white;\n    padding:1rem;\n\n\n\n}\n\n::ng-deep .mat-dialog-container{\npadding:0px !important;\n}\n\n#form{\n    margin-top:1rem;\ndisplay: flex;\njustify-content: center;    \n\n}\n\n#addDialogBox{\n   \n    text-align: center;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0VkaXQvZWRpdC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhOzs7O0NBSWhCOztBQUNEO0FBQ0EsdUJBQXVCO0NBQ3RCOztBQUNEO0lBQ0ksZ0JBQWdCO0FBQ3BCLGNBQWM7QUFDZCx3QkFBd0I7O0NBRXZCOztBQUVEOztJQUVJLG1CQUFtQjs7Q0FFdEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluTW9kdWxlL0RpYWxvZ3MvRWRpdC9lZGl0LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNzc3RvQnV0dG9ue1xuICAgIG1hcmdpbjoxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZkZDgzNTsgXG59XG5cbi5oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzRjUxQjU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzoxcmVtO1xuXG5cblxufVxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcbnBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG59XG4jZm9ybXtcbiAgICBtYXJnaW4tdG9wOjFyZW07XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgIFxuXG59XG5cbiNhZGREaWFsb2dCb3h7XG4gICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addDialogBox\">\r\n   \r\n        <div class=\"heading\"><h1 >EDIT THE DATA</h1></div>\r\n<form id=\"form\" [formGroup]=\"demo\" (ngSubmit)=\"Edit(demo.value)\">\r\n   <div>\r\n    <mat-form-field formArrayName=\"addarray\" *ngFor=\"let key of keyArray; let i=index\">\r\n        <mat-label>{{key}}</mat-label>\r\n        <input matInput placeholder=\"\" [formControlName]=\"i\"  >\r\n\r\n      </mat-form-field>\r\n      </div>\r\n      <div>\r\n      <button mat-raised-button class=\"csstoButton\" [disabled]='demo.invalid'>Submit</button>\r\n      <button mat-raised-button  class=\"csstoButton\" type=\"button\" (click)=\"Cancel()\">Cancel</button>\r\n    </div>\r\n    </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(object, dialogRef) {
        this.object = object;
        this.dialogRef = dialogRef;
        this.keyArray = [];
        this.resultArray = [];
    }
    EditDialogComponent.prototype.ngOnInit = function () {
        this.demo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addarray: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        for (var key in this.object) {
            if (this.objCheck(this.object[key])) { //creation of formarray and reactive form,validations
                this.keyArray.push(key); //based on object recieved
                this.demo.get('addarray').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.object[key], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
            }
            else {
                this.resultArray.push(this.object[key]);
            }
        }
    };
    EditDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    EditDialogComponent.prototype.Edit = function (newObject) {
        console.log(newObject); //create a better object and send it as result
        var i = 0;
        for (var key in this.object) {
            if (i < newObject.addarray.length) {
                this.object[key] = newObject.addarray[i]; //form values are transferred to object
            }
            i++;
        }
        this.dialogRef.close(this.object);
        //store in permanent obj as well
    };
    EditDialogComponent.prototype.objCheck = function (value) {
        if (typeof (value) == "object") {
            return false;
        }
        else {
            return true;
        }
    };
    EditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edit-dialog',
            template: __webpack_require__(/*! ./edit-dialog.component.html */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-dialog.component.css */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/override/override.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/override/override.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexcontainer{\n    display: flex;\n    justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL292ZXJyaWRlL292ZXJyaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsOEJBQThCO0NBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL292ZXJyaWRlL292ZXJyaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/override/override.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/override/override.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n<div>  <p>\n  Do want to override the entry?\n</p></div>\n<div class='flexcontainer'>\n  <div>\n<button mat-raised-button (click)='override()'>Override</button>\n</div>\n<div>\n    <button mat-raised-button (click)='cancel()' >Cancel</button>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/override/override.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/override/override.component.ts ***!
  \****************************************************************************/
/*! exports provided: OverrideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverrideComponent", function() { return OverrideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var OverrideComponent = /** @class */ (function () {
    function OverrideComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.overrideStatus = false;
    }
    OverrideComponent.prototype.ngOnInit = function () {
    };
    OverrideComponent.prototype.override = function () {
        this.dialogRef.close(true);
    };
    OverrideComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
    };
    OverrideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-override',
            template: __webpack_require__(/*! ./override.component.html */ "./src/app/modules/adminModule/Dialogs/override/override.component.html"),
            styles: [__webpack_require__(/*! ./override.component.css */ "./src/app/modules/adminModule/Dialogs/override/override.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], OverrideComponent);
    return OverrideComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/ad-image-crud/ad-image-crud.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/adminModule/ad-image-crud/ad-image-crud.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#image_container img{\n    width:100%;\n    height:100%;\n}\n#image_container{\n    height: 290px;\n}\n#imageSection{\n    width:100%;\n}\n#upload_container\n{\n    width:100%;\n}\n.imageUploadSection .mat-card{\n    padding:0px !important;\n    margin-top: 1rem;\n}\n.imageUploadSection .csssetting .mat-icon{\n    border-radius: 35px;\n\n    background-color:white ;\n}\n.imageUploadSection .csssetting .mat-card .material-icons{\n    font-size: 20px;\n}\n.imageUploadSection  ::ng-deep .mat-card-header .mat-card-title{\n    margin:12px;\n}\n#disabledbutton{\nmargin-bottom:0.4rem;\n}\n.card_title{\nbackground-color: #3F51B5;\ncolor:white;\n}\n.custom-file-upload {\n  \n    display: inline-block;\n    padding: 6px 12px;\n    text-align: center;\n    background-color:#FF007B;\n    border-radius: 5px;\n    cursor: pointer;\n    color:white;\n  }\ninput[type=\"file\"]{\n    display:none;\n}\n.csssetting{\n    min-width: 170px;\n    max-width: 1700px;\n    flex-basis: auto; /* default value */\nwidth: 170px;\nmargin: 1rem 2% 0px 0px;\nposition: relative;\n\n\n}\n.image{\n    width:100%;\n    margin:0.3rem;\n\n\n}\n.clear{\n    position: absolute;\n    right: 0%;\n    top: 0%;\n    z-index: 2;\n    cursor: pointer;\n}\n.clear ::ng-deep .material-icons{\n   color:grey;\n   border-radius:35px;\n   border:0.5px solid lightgrey;\n}\n.image img{\n   \nwidth:100%;\n\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9hZC1pbWFnZS1jcnVkL2FkLWltYWdlLWNydWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7QUFFRDs7SUFFSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLG9CQUFvQjs7SUFFcEIsd0JBQXdCO0NBQzNCO0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFFRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0FBQ0EscUJBQXFCO0NBQ3BCO0FBQ0Q7QUFDQSwwQkFBMEI7QUFDMUIsWUFBWTtDQUNYO0FBQ0Q7O0lBRUksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQixDQUFDLG1CQUFtQjtBQUN6QyxhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLG1CQUFtQjs7O0NBR2xCO0FBS0Q7SUFDSSxXQUFXO0lBQ1gsY0FBYzs7O0NBR2pCO0FBSUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFFBQVE7SUFDUixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25CO0FBRUQ7R0FDRyxXQUFXO0dBQ1gsbUJBQW1CO0dBQ25CLDZCQUE2QjtDQUMvQjtBQUVEOztBQUVBLFdBQVc7OztDQUdWIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9hZC1pbWFnZS1jcnVkL2FkLWltYWdlLWNydWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2ltYWdlX2NvbnRhaW5lciBpbWd7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbn1cbiNpbWFnZV9jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAyOTBweDtcbn1cblxuI2ltYWdlU2VjdGlvbntcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4jdXBsb2FkX2NvbnRhaW5lclxue1xuICAgIHdpZHRoOjEwMCU7XG59XG4uaW1hZ2VVcGxvYWRTZWN0aW9uIC5tYXQtY2FyZHtcbiAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5pbWFnZVVwbG9hZFNlY3Rpb24gLmNzc3NldHRpbmcgLm1hdC1pY29ue1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlIDtcbn1cblxuLmltYWdlVXBsb2FkU2VjdGlvbiAuY3Nzc2V0dGluZyAubWF0LWNhcmQgLm1hdGVyaWFsLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmltYWdlVXBsb2FkU2VjdGlvbiAgOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxle1xuICAgIG1hcmdpbjoxMnB4O1xufVxuI2Rpc2FibGVkYnV0dG9ue1xubWFyZ2luLWJvdHRvbTowLjRyZW07XG59XG4uY2FyZF90aXRsZXtcbmJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XG5jb2xvcjp3aGl0ZTtcbn1cbi5jdXN0b20tZmlsZS11cGxvYWQge1xuICBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGMDA3QjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOndoaXRlO1xuICB9XG4gIGlucHV0W3R5cGU9XCJmaWxlXCJde1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cblxuLmNzc3NldHRpbmd7XG4gICAgbWluLXdpZHRoOiAxNzBweDtcbiAgICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgICBmbGV4LWJhc2lzOiBhdXRvOyAvKiBkZWZhdWx0IHZhbHVlICovXG53aWR0aDogMTcwcHg7XG5tYXJnaW46IDFyZW0gMiUgMHB4IDBweDtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG59XG5cblxuXG5cbi5pbWFnZXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbjowLjNyZW07XG5cblxufVxuXG5cblxuLmNsZWFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMCU7XG4gICAgdG9wOiAwJTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsZWFyIDo6bmctZGVlcCAubWF0ZXJpYWwtaWNvbnN7XG4gICBjb2xvcjpncmV5O1xuICAgYm9yZGVyLXJhZGl1czozNXB4O1xuICAgYm9yZGVyOjAuNXB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxuLmltYWdlIGltZ3tcbiAgIFxud2lkdGg6MTAwJTtcblxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/ad-image-crud/ad-image-crud.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/adminModule/ad-image-crud/ad-image-crud.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n      <div class=\"imageUploadSection\">\n      <div id=\"upload_container\">\n          <mat-card class=\"file_upload\">\n                <mat-card-header class=\"card_title\">\n                \n                  <mat-card-title >Upload Image</mat-card-title>\n                  \n                </mat-card-header>\n                <mat-card-actions>\n                    <label *ngIf=\"categoryName!='' && activeImageObj.label!=''\" class=\"custom-file-upload\">\n                        Upload Image<input type=\"file\" name=\"uploadadImage\" \n                        accept=\".jpg,.jpeg,.png\" (change)=\"uploadImage(uploadadImage)\" #uploadadImage ></label>\n                        <button *ngIf=\"categoryName=='' || activeImageObj.label==''\" id=\"disabledbutton\" [disabled]='true' mat-raised-button >Upload Image</button>\n                </mat-card-actions>\n              </mat-card>\n            </div>\n           \n              <div>\n                   \n                      <mat-card *ngIf=\" activeImageObj!=null && (activeImageObj.imageobj).url!=null \" class=\"activeImageCard\">\n                          <mat-card-header>\n                              {{activeImageObj.label| uppercase}}\n                            </mat-card-header>\n                        <div id=\"imageSection\">\n                          \n                         <div id=\"image_container\">\n                            <img *ngIf='(activeImageObj.imageobj).url!=null' [src]=\"(activeImageObj.imageobj).url\" >\n            \n                             </div>\n                      </div>\n                      </mat-card>\n                      </div>\n                      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/adminModule/ad-image-crud/ad-image-crud.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/adminModule/ad-image-crud/ad-image-crud.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdImageCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdImageCrudComponent", function() { return AdImageCrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var _moduleServices_imageCrud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moduleServices/imageCrud */ "./src/app/modules/adminModule/moduleServices/imageCrud.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var AdImageCrudComponent = /** @class */ (function () {
    function AdImageCrudComponent(imagecrud, snackbar) {
        this.imagecrud = imagecrud;
        this.snackbar = snackbar;
        this.activeImageObj = null;
        this.imagecrudemit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.oldlabel = null;
        this.form = new FormData();
    }
    AdImageCrudComponent.prototype.openSnackBar = function (message, action) {
        this.snackbar.open(message, action, {
            duration: 2000,
        });
    };
    AdImageCrudComponent.prototype.ngOnInit = function () {
        this.setoldlabel();
    };
    AdImageCrudComponent.prototype.imageEmit = function (obj) {
        this.imagecrudemit.emit(obj);
    };
    AdImageCrudComponent.prototype.setoldlabel = function () {
        if (this.initialobj.subAds[this.labelindex] != null) {
            this.oldlabel = this.initialobj.subAds[this.labelindex].label;
        }
    };
    AdImageCrudComponent.prototype.uploadImage = function (inputFile) {
        var _this = this;
        this.form.set('category', this.categoryName);
        this.form.set('label', this.activeImageObj.label);
        this.form.set('oldlabel', this.oldlabel);
        if (inputFile.files.length != 0) {
            this.form.set('adImage', inputFile.files[0]);
            this.form.set('crud', 'add');
            this.imagecrud.uploadFile(_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].localAdImageAdd, this.form).subscribe(function (imageobj) {
                if (imageobj != null && imageobj.imageUrl != null) {
                    _this.activeImageObj.label = imageobj.label;
                    _this.activeImageObj.imageobj.url = imageobj.imageUrl;
                    _this.openSnackBar('Image Uploaded Successfully', '');
                    _this.imageEmit({ 'crud': 'add', 'url': imageobj.imageUrl, 'label': imageobj.label, 'key': imageobj.imagekey });
                }
            }, function (err) {
                _this.openSnackBar(err, '');
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdImageCrudComponent.prototype, "categoryName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdImageCrudComponent.prototype, "labelindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdImageCrudComponent.prototype, "activeImageObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdImageCrudComponent.prototype, "initialobj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdImageCrudComponent.prototype, "imagecrudemit", void 0);
    AdImageCrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ad-image-crud',
            template: __webpack_require__(/*! ./ad-image-crud.component.html */ "./src/app/modules/adminModule/ad-image-crud/ad-image-crud.component.html"),
            styles: [__webpack_require__(/*! ./ad-image-crud.component.css */ "./src/app/modules/adminModule/ad-image-crud/ad-image-crud.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_moduleServices_imageCrud__WEBPACK_IMPORTED_MODULE_3__["ImageCrud"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], AdImageCrudComponent);
    return AdImageCrudComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/admin-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/adminModule/admin-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/adminModule/login/login.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "./src/app/modules/adminModule/admin.component.ts");
/* harmony import */ var _dashboardmodule_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboardmodule/dashboard.component */ "./src/app/modules/adminModule/dashboardmodule/dashboard.component.ts");







var routes = [
    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
        children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["adminloginComponent"] },
            { path: 'dashboard', component: _dashboardmodule_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            }
        ] },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());

var routingComponents = [_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["adminloginComponent"]];


/***/ }),

/***/ "./src/app/modules/adminModule/admin.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/adminModule/admin.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  \r\n#adminheader{\r\n    position: fixed;\r\n    z-index:10;\r\n    width:100%;\r\n    top:0px;\r\n}\r\n\r\n#content{\r\n    padding-top:6rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsUUFBUTtDQUNYOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gIFxyXG4jYWRtaW5oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OjEwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRvcDowcHg7XHJcbn1cclxuXHJcbiNjb250ZW50e1xyXG4gICAgcGFkZGluZy10b3A6NnJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/admin.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/adminModule/admin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='adminheader'>\r\n<adminheader></adminheader>\r\n</div>\r\n<div id='content' >\r\n        <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/adminModule/admin.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/adminModule/admin.component.ts ***!
  \********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/modules/adminModule/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/modules/adminModule/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/admin.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/adminModule/admin.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ "./src/app/modules/adminModule/admin.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/modules/adminModule/admin-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _importMats_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../importMats.module */ "./src/app/importMats.module.ts");
/* harmony import */ var _sharedModule_sharedModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedModule/sharedModule */ "./src/app/modules/sharedModule/sharedModule.ts");
/* harmony import */ var _moduleServices_AuthInterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moduleServices/AuthInterceptor */ "./src/app/modules/adminModule/moduleServices/AuthInterceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _moduleServices_imageCrud__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./moduleServices/imageCrud */ "./src/app/modules/adminModule/moduleServices/imageCrud.ts");
/* harmony import */ var _dashboardmodule_dashboard_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboardmodule/dashboard.module */ "./src/app/modules/adminModule/dashboardmodule/dashboard.module.ts");















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"],
            ],
            exports: [],
            providers: [_moduleServices_imageCrud__WEBPACK_IMPORTED_MODULE_10__["ImageCrud"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: _moduleServices_AuthInterceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
                    multi: true
                }],
            imports: [
                _dashboardmodule_dashboard_module__WEBPACK_IMPORTED_MODULE_11__["DashboardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _sharedModule_sharedModule__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _importMats_module__WEBPACK_IMPORTED_MODULE_6__["MyOwnCustomMaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/adscrud/adscrud.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/adscrud/adscrud.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputtag{\n    width:60%;\n}\n.flexcontainer{\n    display: flex;\n  justify-content: space-around;\n  \n}\n.buttonaction{\n    margin:1rem;\n}\n#form{\n\nwidth:100%;   \n}\n#form .mat-form-field{\n    width:100%;\n    display:block;\n  \n}\n#formcontainer{\n    margin:2rem;\n  \n}\n#subdata{\n    width:48%;\n}\n#subdata \n\n.buttonwrapper{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.imageupload{\n    width:50%;\n}\n.parameters{\n    text-align:left;\n}\n.parameters ::ng-deep .mat-form-field-prefix{\n    width: 30% !important;\n}\n.parameters .mat-form-field{\n    width:300px !important;\n}\n.subads{\n    margin-bottom:1rem;\n    padding:1rem;\n    background-color:white;\n    \n    position: relative;\n}\n.clear{\n    position: absolute;\n    right: 0%;\n    top: 0%;\n    z-index: 2;\n    cursor: pointer;\n}\n.clear ::ng-deep .material-icons{\n   color:grey;\n   border-radius:35px;\n   border:0.5px solid lightgrey;\n}\n.error_message_display{\n    background-color:lightcoral;\n    color:white;\n    margin-right: 3.5rem;\n    margin-bottom: 1rem;\n     }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9hZHNjcnVkL2Fkc2NydWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7Q0FDYjtBQUNEO0lBQ0ksY0FBYztFQUNoQiw4QkFBOEI7O0NBRS9CO0FBR0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDs7QUFFQSxXQUFXO0NBQ1Y7QUFFRDtJQUNJLFdBQVc7SUFDWCxjQUFjOztDQUVqQjtBQUVEO0lBQ0ksWUFBWTs7Q0FFZjtBQUVEO0lBQ0ksVUFBVTtDQUNiO0FBQ0Q7OztJQUdJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQzNCO0FBRUQ7SUFDSSxVQUFVO0NBQ2I7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCOztJQUV2QixtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7Q0FDbkI7QUFFRDtHQUNHLFdBQVc7R0FDWCxtQkFBbUI7R0FDbkIsNkJBQTZCO0NBQy9CO0FBQ0Q7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixvQkFBb0I7TUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluTW9kdWxlL2Fkc2NydWQvYWRzY3J1ZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0dGFne1xuICAgIHdpZHRoOjYwJTtcbn1cbi5mbGV4Y29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBcbn1cblxuXG4uYnV0dG9uYWN0aW9ue1xuICAgIG1hcmdpbjoxcmVtO1xufVxuI2Zvcm17XG5cbndpZHRoOjEwMCU7ICAgXG59XG5cbiNmb3JtIC5tYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gIFxufVxuXG4jZm9ybWNvbnRhaW5lcntcbiAgICBtYXJnaW46MnJlbTtcbiAgXG59XG5cbiNzdWJkYXRhe1xuICAgIHdpZHRoOjQ4JTtcbn1cbiNzdWJkYXRhIFxuXG4uYnV0dG9ud3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWFnZXVwbG9hZHtcbiAgICB3aWR0aDo1MCU7XG59XG5cbi5wYXJhbWV0ZXJze1xuICAgIHRleHQtYWxpZ246bGVmdDtcbn1cblxuLnBhcmFtZXRlcnMgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1wcmVmaXh7XG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xufVxuXG4ucGFyYW1ldGVycyAubWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6MzAwcHggIWltcG9ydGFudDtcbn1cblxuLnN1YmFkc3tcbiAgICBtYXJnaW4tYm90dG9tOjFyZW07XG4gICAgcGFkZGluZzoxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2xlYXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwJTtcbiAgICB0b3A6IDAlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xlYXIgOjpuZy1kZWVwIC5tYXRlcmlhbC1pY29uc3tcbiAgIGNvbG9yOmdyZXk7XG4gICBib3JkZXItcmFkaXVzOjM1cHg7XG4gICBib3JkZXI6MC41cHggc29saWQgbGlnaHRncmV5O1xufVxuLmVycm9yX21lc3NhZ2VfZGlzcGxheXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Y29yYWw7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/adscrud/adscrud.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/adminModule/adscrud/adscrud.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<div id='formcontainer'>\n  \n    <form [formGroup]='dataform' id='form' (ngSubmit)='formSubmit(dataform.value)'>\n  \n  <div class='divcss'>\n      <mat-form-field>\n          <mat-label>Type Of Ad</mat-label>\n          <mat-select formControlName='typeOfAd'>\n            <mat-option value='Product'>\n           Product\n            </mat-option>\n            <mat-option value='Bank'>\n                Bank\n                 </mat-option>\n          </mat-select>\n        </mat-form-field>\n  </div>\n      <div class='divcss'>\n    \n      <mat-form-field>\n          <mat-label>Category</mat-label>\n          <!-- <input matInput placeholder=\"Type Category\" formControlName=\"category\">\n                  <mat-error *ngFor=\"let validation of errors.adField\">\n                      <mat-error *ngIf=\"dataform.controls.category.hasError(validation.type) && \n                      (dataform.controls.category.dirty || dataform.controls.category.touched)\">\n                      {{validation.message}}</mat-error>\n                       \n                  </mat-error> -->\n               \n                      <mat-select formControlName='category'>\n                        <mat-option *ngFor=\"let categoryad of categoryArray\" [value]=\"categoryad.categoryName\">\n                          {{categoryad.categoryName}}\n                        </mat-option>\n                      </mat-select>\n                      <mat-error *ngFor=\"let validation of errors.adField\">\n                          <mat-error *ngIf=\"dataform.controls.category.hasError(validation.type) && \n                          (dataform.controls.category.dirty || dataform.controls.category.touched)\">\n                          {{validation.message}}</mat-error>\n                           \n                      </mat-error>\n                    </mat-form-field>\n       \n  </div>\n  \n  <div class='divcss'>\n        <mat-form-field>\n            <mat-label>No Of Ads</mat-label>\n            <input matInput placeholder=\"Type no of ads\" formControlName=\"noOfAds\">\n                  <mat-error *ngFor=\"let validation of errors.mandateField\">\n                      <mat-error *ngIf=\"dataform.controls.noOfAds.hasError(validation.type) && \n                      (dataform.controls.noOfAds.dirty || dataform.controls.noOfAds.touched)\">\n                      {{validation.message}}</mat-error>\n                       \n                  </mat-error>\n          \n          </mat-form-field>\n      \n  </div>\n  <div class='divcss'>\n      <mat-form-field>\n          <mat-label>Priority</mat-label>\n          <input matInput placeholder=\"Priority\" formControlName=\"priority\">\n                <mat-error *ngFor=\"let validation of errors.mandateField\">\n                    <mat-error *ngIf=\"dataform.controls.priority.hasError(validation.type) && \n                    (dataform.controls.priority.dirty || dataform.controls.priority.touched)\">\n                    {{validation.message}}</mat-error>\n                     \n                </mat-error>\n        \n        </mat-form-field>\n    \n</div>\n  <div class='divcss'>\n    <mat-form-field>\n        <mat-label>Layout</mat-label>\n        <mat-select formControlName=\"layout\">\n          <mat-option value=\"gridlayout\" >\n         Grid Layout\n          </mat-option>\n          <mat-option value=\"serieslayout\" >\n              Series Layout\n               </mat-option>\n               <mat-option value=\"carousellayout\" >\n                  CarouselLayout\n                   </mat-option>\n        </mat-select>\n      </mat-form-field>\n  \n</div>\n<div class='divcss'>\n  <div>  <mat-error *ngIf=\"minaderrorMessage!='' || minaderrorMessage!=null\" class=\"error_message_display\">{{minaderrorMessage | uppercase }}</mat-error>\n  </div>\n  <div>\n   \n    <div class='subads' formArrayName='subAds' *ngFor='let subad of dataform.controls.subAds.controls;let i = index'>\n      \n        <span (click)=\"deleteThisIndex(dataform.controls.subAds.controls,i)\" class=\"clear\"><mat-icon>clear</mat-icon></span> \n                     \n      <div formGroupName='{{i}}'>\n          <div class='flexcontainer'>\n        \n          <div id='subdata' >\n            \n            <div>\n                <mat-form-field>\n                    <mat-label>Label</mat-label>\n            <mat-select formControlName='label'>\n                <mat-option *ngFor=\"let subcategory of subCategoryArray\" [value]=\"subcategory.subcategoryName\">\n                  {{subcategory.subcategoryName}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngFor=\"let validation of errors.mandateField\">\n                  <mat-error *ngIf=\"subad.controls.label.hasError(validation.type) && \n                  (subad.controls.label.dirty || subad.controls.label.touched)\">\n                  {{validation.message}}</mat-error>\n                   \n              </mat-error>\n            </mat-form-field>\n          \n         </div>\n        \n            \n        \n         <div>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Type Link \" formControlName=\"link\">\n                <mat-error *ngFor=\"let validation of errors.mandateField\">\n                    <mat-error *ngIf=\"subad.controls.link.hasError(validation.type) && \n                    (subad.controls.link.dirty || subad.controls.link.touched)\">\n                    {{validation.message}}</mat-error>\n                     \n                </mat-error>\n              </mat-form-field>\n          </div>\n          <div>\n              <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Type Priority \" formControlName=\"priority\">\n                  <mat-error *ngFor=\"let validation of errors.mandateField\">\n                      <mat-error *ngIf=\"subad.controls.priority.hasError(validation.type) && \n                      (subad.controls.priority.dirty || subad.controls.priority.touched)\">\n                      {{validation.message}}</mat-error>\n                       \n                  </mat-error>\n                </mat-form-field>\n            </div>\n          <div >\n              <mat-form-field>\n                  <mat-label>Status</mat-label>\n                  <mat-select formControlName=\"status\">\n                    <mat-option value=\"active\">active\n                    </mat-option>\n                    <mat-option value='inactive'>inactive</mat-option>\n                  </mat-select>\n                </mat-form-field>\n            </div>\n<div class='parameters'>\n  \n    \n        <mat-label>Parameters</mat-label>\n        <div formArrayName='params' *ngFor=\"let param of subad.controls.params.controls;let j = index\">\n         \n          <div class='flexcontainer'>\n              <div formGroupName='{{j}}'>\n        \n            <mat-form-field class=\"example-full-width\">\n                  \n              <mat-label>{{param.controls.keyword.value}}</mat-label> \n              <!-- <input class='inputtag' matInput placeholder='Type of parameter' formControlName='keyword'> -->\n              <mat-select formControlName='keyword'>\n                  <mat-option *ngFor=\"let param of paramArray\" [value]=\"param\">\n                    {{param}}\n                  </mat-option>\n                </mat-select>\n              <mat-error *ngFor=\"let validation of errors.mandateField\">\n                  <mat-error *ngIf=\"param.controls.keyword.hasError(validation.type) && \n                  (param.controls.keyword.dirty || param.controls.keyword.touched)\">\n                  {{validation.message}}</mat-error>\n                   \n              </mat-error>\n               \n              </mat-form-field> \n              <mat-form-field>\n                  <mat-label>Value</mat-label><input class='inputtag' matInput formControlName='value'>\n                  <mat-error *ngFor=\"let validation of errors.mandateField\">\n                      <mat-error *ngIf=\"param.controls.value.hasError(validation.type) && \n                      (param.controls.value.dirty || param.controls.value.touched)\">\n                      {{validation.message}}</mat-error>\n                       \n                  </mat-error>\n                </mat-form-field>  \n            </div>\n            <div class='buttonwrapper'>\n            <button  mat-raised-button color='warn' type='button' [disabled]='subad.controls.params.controls.length==1' (click)=\"deleteParameters(subad.controls,j)\">DELETE</button>\n          </div>\n</div>\n         </div>\n         <div>\n         <button mat-raised-button color='primary' type='button' (click)=\"addParameters(subad.controls,null,null,dataform.controls.category.value)\">ADD</button>\n</div>\n      \n</div>\n</div>\n\n\n  <div class='imageupload'>\n      <ad-image-crud  (imagecrudemit)='urlcrud($event)' [initialobj]='ad' [categoryName]='dataform.controls.category.value'  [activeImageObj]='subad.value' [labelindex]='i'></ad-image-crud>\n  </div>\n</div>\n</div>\n</div>\n</div>\n<div>\n<mat-error *ngIf=\"errorMessage!='' || errorMessage!=null\" class=\"error_message_display\">{{errorMessage | uppercase }}</mat-error>\n</div>    \n<div>\n    \n    <button mat-raised-button class='buttonaction' color='accent' type='button' (click)='addNewSubAd(true,null)'>ADD SUB ADS</button>\n   \n</div>\n<div>\n    <button mat-raised-button class='buttonaction' color='warn' type='button' (click)='deleteThisAd(dataform.controls.category.value)'>REMOVE AD</button>\n    <button mat-raised-button class='buttonaction' color='primary' [disabled]='dataform.invalid || !isAdCountEqual()'>SUBMIT</button>\n</div>\n</div>\n\n</form>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/adminModule/adscrud/adscrud.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/adminModule/adscrud/adscrud.component.ts ***!
  \******************************************************************/
/*! exports provided: AdscrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdscrudComponent", function() { return AdscrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _globalServices_Validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globalServices/Validation */ "./src/app/globalServices/Validation.ts");
/* harmony import */ var _services_adCrud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/adCrud */ "./src/app/modules/adminModule/adscrud/services/adCrud.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_norepeatvalidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/norepeatvalidation */ "./src/app/modules/adminModule/adscrud/services/norepeatvalidation.ts");







var AdscrudComponent = /** @class */ (function () {
    function AdscrudComponent(fb, geterror, adcrud, snackbar) {
        this.fb = fb;
        this.geterror = geterror;
        this.adcrud = adcrud;
        this.snackbar = snackbar;
        this.optionList = null;
        this.ademit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.minSubad = 2;
        this.productArray = [];
        this.paramArray = [];
        this.subCategoryArray = [];
        this.categoryArray = [];
        this.typeOfAdShow = false;
        this.crudStatus = 'new';
        this.minparaerrorMessage = '';
        this.minaderrorMessage = '';
        this.errorMessage = '';
        this.subads = [];
        this.errors = this.geterror.geterror();
    }
    AdscrudComponent.prototype.openSnackBar = function (message, action) {
        this.snackbar.open(message, action, {
            duration: 2000,
        });
    };
    AdscrudComponent.prototype.createparameters = function (keyword, currentparams, category) {
        return this.fb.group({
            keyword: [keyword, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            value: [currentparams, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [category]
        });
    };
    AdscrudComponent.prototype.urlcrud = function (obj) {
        if (obj.crud == 'add') {
            this.dataform.get('subAds').controls.forEach(function (subad) {
                if (subad.controls.label.value == obj.label) {
                    subad.controls.imageobj.get('url').setValue(obj.url);
                    subad.controls.imageobj.get('key').setValue(obj.key);
                }
            });
            console.log(this.dataform.get('subAds').value);
        }
        else if (obj.crud == 'delete') {
            this.dataform.get('subAds').controls.forEach(function (subad) {
                if (subad.controls.label.value == obj.label) {
                    subad.controls.imageobj.get('url').setValue(null);
                    subad.controls.imageobj.get('key').setValue(null);
                }
            });
        }
    };
    AdscrudComponent.prototype.createSubAds = function (isNew, currentobj, parameter) {
        if (isNew == true) {
            return this.fb.group({
                label: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                imageobj: this.fb.group({
                    url: null,
                    key: null
                }),
                link: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                params: this.fb.array(parameter),
                status: ['inactive', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
        else {
            return this.fb.group({
                label: [currentobj.label, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                imageobj: this.fb.group({
                    url: currentobj.imageobj.url,
                    key: currentobj.imageobj.key
                }),
                link: [currentobj.link, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                params: this.fb.array(parameter),
                status: [currentobj.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                priority: [currentobj.priority, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
    };
    AdscrudComponent.prototype.addParameters = function (subad, keyword, currentparams, category) {
        subad.params.push(this.createparameters(keyword, currentparams, category));
    };
    AdscrudComponent.prototype.deleteParameters = function (subad, index) {
        subad.params.removeAt(index);
    };
    AdscrudComponent.prototype.addNewSubAd = function (isNew, currentobj) {
        this.dataform.get('subAds').push(this.createSubAds(isNew, currentobj, []));
        this.isAdCountEqual();
        this.minaderrorMessage = '';
    };
    AdscrudComponent.prototype.deleteThisIndex = function (subads, index) {
        if (subads.length >= this.minSubad) {
            this.dataform.get('subAds').removeAt(index);
        }
        else if (subads.length == this.minSubad - 1) {
            this.minaderrorMessage = 'Minimum four Ad Should Be Present';
        }
    };
    AdscrudComponent.prototype.createform = function () {
        if (this.ad != null) {
            this.dataform = this.fb.group({
                typeOfAd: [this.ad.typeOfAd, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                category: [this.ad.category, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _services_norepeatvalidation__WEBPACK_IMPORTED_MODULE_6__["advalidations"].categoryValidation]],
                noOfAds: [this.ad.noOfAds, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                layout: [this.ad.layout, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                priority: [this.ad.priority, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                subAds: this.fb.array(this.subads)
            });
        }
        else {
            this.dataform = this.fb.group({
                typeOfAd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                noOfAds: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                layout: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                subAds: this.fb.array(this.subads)
            });
        }
    };
    AdscrudComponent.prototype.deleteThisAd = function (category) {
        var _this = this;
        this.adcrud.deleteAd({ 'crud': 'delete', 'category': category }).subscribe(function (response) {
            if (response.isDeleted == true) {
                _this.openSnackBar('Successfull Deletion', '');
                window.location.reload();
            }
        }, function (err) {
            _this.openSnackBar(err, '');
        });
    };
    AdscrudComponent.prototype.setcategoryArray = function () {
        var _this = this;
        var newarray = this.categoryNameArray.filter(function (element) {
            return element != _this.ad.category;
        });
        _services_norepeatvalidation__WEBPACK_IMPORTED_MODULE_6__["advalidations"].setcategoryNameArray(newarray);
    };
    AdscrudComponent.prototype.intializeselectoption = function (array, key, obj) {
        this.categoryArray = array[0][key];
        if (obj != null) {
            var subarray = this.categoryArray.filter(function (element) {
                return element.categoryName == obj.category;
            });
            if (subarray.length != 0) {
                this.subCategoryArray = subarray[0].subcategory;
                this.setParamArray(this.subCategoryArray, key, obj);
            }
        }
        else {
            this.subCategoryArray = this.categoryArray[0].subcategory;
            this.setParamArray(this.subCategoryArray, key, obj);
        }
    };
    AdscrudComponent.prototype.setTypeOfAd = function (obj) {
        if (obj.typeOfAd == null || obj.typeOfAd == '') {
            this.productArray = this.optionList;
            this.intializeselectoption(this.productArray, 'Product', null);
        }
        else if (obj.typeOfAd == 'Product') {
            this.productArray = [];
            this.productArray = this.optionList.filter(function (element) {
                return Object.keys(element)[0] == 'Product';
            });
            this.intializeselectoption(this.productArray, 'Product', obj);
            //this.categoryArray[0].product[0].subcategory[0].products[0].subProducts[0];
        }
        else if (obj.typeOfAd == 'Bank') {
            this.productArray = [];
            this.productArray = this.optionList.filter(function (element) {
                return Object.keys(element)[0] == 'Bank';
            });
            this.intializeselectoption(this.productArray, 'Bank', obj);
        }
    };
    AdscrudComponent.prototype.setParamArray = function (array, key, obj) {
        if (key == 'Product') {
            this.paramArray = [];
            this.paramArray = Object.keys((array[0].products[0].subProducts[0].info).priceAndAmount[0]).filter(function (element) {
                return element != '_id';
            });
            this.paramArray.push('label');
        }
    };
    AdscrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.status.currentValue == 'opened') {
            this.setcategoryArray();
        }
    };
    AdscrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.ad);
        if (this.status == 'opened') {
            this.setcategoryArray();
        }
        this.setTypeOfAd(this.ad);
        if (this.ad.category == '') {
            this.crudStatus = 'new';
        }
        else {
            this.crudStatus = 'edit';
            this.oldcategory = this.ad.category;
        }
        this.initialize();
        this.createform();
        this.dataform.controls.typeOfAd.valueChanges.subscribe(function (data) {
            _this.setTypeOfAd(_this.dataform.getRawValue());
        });
        this.dataform.controls.noOfAds.valueChanges.subscribe(function (data) {
            _this.isAdCountEqual();
        });
        this.dataform.controls.category.valueChanges.subscribe(function (data) {
            var array = _this.productArray[0][Object.keys(_this.productArray[0])[0]].filter(function (element) {
                return element.categoryName == data;
            });
            _this.subCategoryArray = array[0].subcategory;
            _this.dataform.controls.subAds.controls.forEach(function (subad) {
                subad.controls.params.controls.forEach(function (obj) {
                    obj.controls.category.setValue(data);
                });
            });
        });
    };
    AdscrudComponent.prototype.initialize = function () {
        var _this = this;
        if (this.ad != null) {
            var i_1 = 0;
            this.ad.subAds.forEach(function (element) {
                var j = 0;
                var arrays = [];
                element.params.forEach(function (object) {
                    arrays[j] = _this.createparameters(object.keyword, object.value, _this.ad.category);
                    j++;
                });
                _this.subads.push(_this.createSubAds(false, element, arrays));
                i_1++;
            });
        }
    };
    AdscrudComponent.prototype.formSubmit = function (form) {
        var _this = this;
        if (form != null) {
            console.log(form);
            this.adcrud.pushadd({ 'crud': this.crudStatus, 'data': form, 'oldref': this.oldcategory }).subscribe(function (data) {
                if (data.isAdded == true) {
                    _this.openSnackBar('Successfull Ad Upload', '');
                    _this.ad.category = form['category'];
                    _this.ad.layout = form['layout'];
                    window.location.reload();
                }
            }, function (err) {
                _this.openSnackBar(err, '');
            });
        }
    };
    AdscrudComponent.prototype.isAdCountEqual = function () {
        if (this.dataform.get('noOfAds').value == this.dataform.get('subAds').value.length) {
            this.errorMessage = '';
            return true;
        }
        else {
            this.errorMessage = 'No Of Sub ads in option not equal to sub ads present';
            return false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdscrudComponent.prototype, "status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdscrudComponent.prototype, "ad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdscrudComponent.prototype, "oldcategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdscrudComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdscrudComponent.prototype, "optionList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdscrudComponent.prototype, "ademit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AdscrudComponent.prototype, "categoryNameArray", void 0);
    AdscrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'adscrud',
            template: __webpack_require__(/*! ./adscrud.component.html */ "./src/app/modules/adminModule/adscrud/adscrud.component.html"),
            providers: [_services_adCrud__WEBPACK_IMPORTED_MODULE_4__["AdCrud"]],
            styles: [__webpack_require__(/*! ./adscrud.component.css */ "./src/app/modules/adminModule/adscrud/adscrud.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _globalServices_Validation__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"],
            _services_adCrud__WEBPACK_IMPORTED_MODULE_4__["AdCrud"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AdscrudComponent);
    return AdscrudComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/adscrud/services/adCrud.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/adminModule/adscrud/services/adCrud.ts ***!
  \****************************************************************/
/*! exports provided: AdCrud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdCrud", function() { return AdCrud; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../globalmodel/comments */ "./src/app/globalmodel/comments.ts");








var AdCrud = /** @class */ (function () {
    function AdCrud(http) {
        this.http = http;
        this.addorEditurl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].localpushAd;
        this.deleteUrl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].localadDelete;
        this.getAllAdsUrl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].getAllAds;
    }
    AdCrud.prototype.handleError = function (error) {
        console.log(error);
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else if (error.status != 0) {
            err = error.error;
        }
        else {
            err = _globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__["comments"].networkError;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
    };
    ;
    AdCrud.prototype.getListAds = function () {
        this.http.get(this.getAllAdsUrl, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    AdCrud.prototype.pushadd = function (object) {
        return this.http.post(this.addorEditurl, object, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    AdCrud.prototype.deleteAd = function (object) {
        return this.http.post(this.deleteUrl, object, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    AdCrud = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdCrud);
    return AdCrud;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/adscrud/services/norepeatvalidation.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/adminModule/adscrud/services/norepeatvalidation.ts ***!
  \****************************************************************************/
/*! exports provided: advalidations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advalidations", function() { return advalidations; });
var advalidations = {
    categoryNameArray: [],
    setcategoryNameArray: function (categoryArray) {
        advalidations.categoryNameArray = categoryArray;
    },
    categoryValidation: function (control) {
        var output = null;
        advalidations.categoryNameArray.forEach(function (categoryName) {
            if ((control.value).toLowerCase() == categoryName.toLowerCase()) {
                output = { "repeat": true };
                return;
            }
        });
        return output;
    }
};


/***/ }),

/***/ "./src/app/modules/adminModule/adspage/adspage.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/adspage/adspage.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#adSection ::ng-deep .mat-expansion-panel-body{\nbackground-color:#FAFAFA;\n}\n#button{\n    margin-top:1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9hZHNwYWdlL2Fkc3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQSx5QkFBeUI7Q0FDeEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvYWRzcGFnZS9hZHNwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNhZFNlY3Rpb24gOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHl7XG5iYWNrZ3JvdW5kLWNvbG9yOiNGQUZBRkE7XG59XG4jYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6MXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/adspage/adspage.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/adminModule/adspage/adspage.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='adSection'>\n  <mat-accordion>\n  <mat-expansion-panel *ngFor='let ad of adArray;let i = index' (opened)='openStatus(i)'>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n              <div *ngIf=\"ad.category!='' && ad.category!=null \">\n                {{ad.category}}\n                </div>\n                <div *ngIf=\"ad.category==null || ad.category==''\">\n           Category Name\n                </div>\n              </mat-panel-title>\n        \n          <mat-panel-description>\n              <div *ngIf=\"ad.category!='' && ad.category!=null \">\n                  {{ad.layout}}\n                  </div>\n                  <div *ngIf=\"ad.category==null || ad.category==''\">\n             Layout\n                  </div>\n          \n            </mat-panel-description>\n        </mat-expansion-panel-header>\n      \n        <ng-template matExpansionPanelContent>\n          <div class='adContainer'>\n        <adscrud [ad]='ad' [index]='i' [optionList]=\"completeList\" [categoryNameArray]='categoryNameArray' (ademit)='deleteAd($event)' [status]=\"(currentopened==i)?'opened':'closed'\" ></adscrud>\n        </div>\n        </ng-template>\n      </mat-expansion-panel>\n    </mat-accordion>\n      <div id='button'>\n        <button mat-raised-button (click)='addAd()' color='primary'>ADD NEW AD</button>\n\n      </div>\n      \n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/adspage/adspage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/adminModule/adspage/adspage.component.ts ***!
  \******************************************************************/
/*! exports provided: AdspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdspageComponent", function() { return AdspageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalmodel_ad_ads_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globalmodel/ad/ads.modal */ "./src/app/globalmodel/ad/ads.modal.ts");
/* harmony import */ var _services_adList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/adList */ "./src/app/modules/adminModule/adspage/services/adList.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var AdspageComponent = /** @class */ (function () {
    function AdspageComponent(getAdList, snackBar) {
        this.getAdList = getAdList;
        this.snackBar = snackBar;
        this.adArray = [];
        this.currentopened = 0;
        this.productArray = [];
        this.categoryNameArray = [];
        this.bankArray = [];
        this.completeList = [];
    }
    AdspageComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    AdspageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAdList.getListAds().subscribe(function (data) {
            //console.log(data);
            if (data != null && Array.isArray(data) == true && data.length != 0) {
                data.forEach(function (list) {
                    if (list.adalready != null && list.adalready.length != 0) {
                        _this.adArray = list.adalready;
                        _this.sendcategoryName(_this.adArray);
                    }
                    else if (list.productAd != null && list.productAd.length != 0) {
                        _this.completeList.push({ 'Product': list.productAd });
                        //  console.log(prodlist);
                    }
                    else if (list.bankAd != null && list.bankAd.length != 0) {
                        _this.completeList.push({ 'Bank': list.bankAd });
                    }
                });
            }
            else {
                _this.openSnackBar('No Product Data', '');
            }
        }, function (err) {
            _this.openSnackBar(err, '');
        });
    };
    AdspageComponent.prototype.sendcategoryName = function (array) {
        var _this = this;
        array.forEach(function (ad) {
            _this.categoryNameArray.push(ad.category);
        });
    };
    AdspageComponent.prototype.openStatus = function (i) {
        this.currentopened = i;
        // console.log(this.currentopened);
    };
    AdspageComponent.prototype.returnnewAdd = function () {
        var ad = new _globalmodel_ad_ads_modal__WEBPACK_IMPORTED_MODULE_2__["Ads"]();
        ad.categoryName = '';
        ad.layoutvalue = '';
        ad.noofads = '';
        ad.subadsarray = null;
        return ad;
    };
    AdspageComponent.prototype.addAd = function () {
        this.adArray.push(this.returnnewAdd());
    };
    AdspageComponent.prototype.deleteAd = function (object) {
        for (var _i = 0, _a = this.adArray; _i < _a.length; _i++) {
            var ad = _a[_i];
            if (ad.categoryName == object.category) {
                this.adArray.splice(object.index, 1);
            }
        }
    };
    AdspageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adspage',
            template: __webpack_require__(/*! ./adspage.component.html */ "./src/app/modules/adminModule/adspage/adspage.component.html"),
            providers: [_services_adList__WEBPACK_IMPORTED_MODULE_3__["AdList"]],
            styles: [__webpack_require__(/*! ./adspage.component.css */ "./src/app/modules/adminModule/adspage/adspage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_adList__WEBPACK_IMPORTED_MODULE_3__["AdList"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], AdspageComponent);
    return AdspageComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/adspage/services/adList.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/adminModule/adspage/services/adList.ts ***!
  \****************************************************************/
/*! exports provided: AdList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdList", function() { return AdList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/globalmodel/comments */ "./src/app/globalmodel/comments.ts");








var AdList = /** @class */ (function () {
    function AdList(http) {
        this.http = http;
        this.getAllAdsUrl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].getAllAds;
    }
    AdList.prototype.handleError = function (error) {
        console.log(error);
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else if (error.status != 0) {
            err = error.error;
        }
        else {
            err = src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__["comments"].networkError;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
    };
    ;
    AdList.prototype.getListAds = function () {
        return this.http.get(this.getAllAdsUrl, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    AdList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdList);
    return AdList;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/categoryCrud/categoryCrud.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/categoryCrud/categoryCrud.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide{\n    display: none;\n}\n\n.show{\n    display: show;\n}\n\n.data_section{\n    text-align: center !important;\n   \n\n\n\n}\n\n#infomess{\n    width:100%;\n    padding:15px;\n    color:red;\n}\n\n#category_container{\n    width: 60%;\n   height:300px;\nmargin:0rem 1rem;\n}\n\n.flexcontainer{\n    padding:1rem;\n display: flex;\n}\n\n#categorylist{\n    margin:1rem;\n   width:100%;\n    position: relative;\n   \n    \n\n}\n\n.table_content{\nwidth:38%;\n}\n\n.parentNode{\n    position: absolute;\n    left:-3%;\n    top:0%;\n    width:20%;\n}\n\n.final_data{\nfont-size:1rem;\nmargin:0.2rem 0px 0rem 2.5rem;\n}\n\n#category_container ::ng-deep .material-icons{\nfont-size: 1rem !important;\n    \n}\n\n::ng-deep #categorylist .mat-form-field-appearance-legacy .mat-form-field-underline{\ndisplay:none;}\n\n::ng-deep #categorylist .mat-form-field-appearance-legacy .mat-form-field-wrapper{\n    padding-bottom:0px !important;\n}\n\n.dataEntry{\n   \n    width:100%;\n}\n\n.firstNodeItem{\n\nposition: absolute;\n\nwidth:100%;\nleft:100%;\ntop:0%;\n\n}\n\n.secondNodeItem{\n   \n    position: absolute;\n   \n    width:100%;\n    left:120%;\n    top:0%;\n    margin-left:1rem;\n    }\n\n.thirdNodeItem{\n   \n        position: absolute;\n        width:100%;\n        left:120%;\n        top:0%;\n        margin-left:1rem;\n        \n        }\n\n.csssetting:hover{\n        background-color:lightskyblue;\n    }\n\n.csssetting{\n    font-size: 12px;\n    border-bottom:1px solid darkgrey;\n    border-radius:3%;\n    color:grey;\n    font-weight: 300;\n    \n  \n}\n\n.node_container{\n    height:200px;\n   width:180px;\n    overflow: scroll;\n}\n\n#heading{\n    color:white;\n    background-color: #3F51B5;\n        text-align: center;\n    \n}\n\n@media screen and (max-width:1337px){\n \n    .flexcontainer{\n        flex-shrink: 0;\n        flex-wrap: wrap;\n    }\n    #category_container{\n        width:100%;\n    }\n    .table_content{\n        width:100%;\n        }\n\n}    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9jYXRlZ29yeUNydWQvY2F0ZWdvcnlDcnVkLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUdEO0lBQ0ksOEJBQThCOzs7OztDQUtqQzs7QUFFRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtDQUNiOztBQUVEO0lBQ0ksV0FBVztHQUNaLGFBQWE7QUFDaEIsaUJBQWlCO0NBQ2hCOztBQUNEO0lBQ0ksYUFBYTtDQUNoQixjQUFjO0NBQ2Q7O0FBRUQ7SUFDSSxZQUFZO0dBQ2IsV0FBVztJQUNWLG1CQUFtQjs7OztDQUl0Qjs7QUFFRDtBQUNBLFVBQVU7Q0FDVDs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsT0FBTztJQUNQLFVBQVU7Q0FDYjs7QUFHRDtBQUNBLGVBQWU7QUFDZiw4QkFBOEI7Q0FDN0I7O0FBRUQ7QUFDQSwyQkFBMkI7O0NBRTFCOztBQUdEO0FBQ0EsYUFBYSxDQUFDOztBQUdkO0lBQ0ksOEJBQThCO0NBQ2pDOztBQUNEOztJQUVJLFdBQVc7Q0FDZDs7QUFHRDs7QUFFQSxtQkFBbUI7O0FBRW5CLFdBQVc7QUFDWCxVQUFVO0FBQ1YsT0FBTzs7Q0FFTjs7QUFHRDs7SUFFSSxtQkFBbUI7O0lBRW5CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsT0FBTztJQUNQLGlCQUFpQjtLQUNoQjs7QUFFRDs7UUFFSSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFVBQVU7UUFDVixPQUFPO1FBQ1AsaUJBQWlCOztTQUVoQjs7QUFHTDtRQUNJLDhCQUE4QjtLQUNqQzs7QUFDTDtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7OztDQUdwQjs7QUFDRDtJQUNJLGFBQWE7R0FDZCxZQUFZO0lBQ1gsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtRQUN0QixtQkFBbUI7O0NBRTFCOztBQUdEOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO1NBQ1Y7O0NBRVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluTW9kdWxlL2NhdGVnb3J5Q3J1ZC9jYXRlZ29yeUNydWQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3d7XG4gICAgZGlzcGxheTogc2hvdztcbn1cblxuXG4uZGF0YV9zZWN0aW9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgXG5cblxuXG59XG5cbiNpbmZvbWVzc3tcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBhZGRpbmc6MTVweDtcbiAgICBjb2xvcjpyZWQ7XG59XG5cbiNjYXRlZ29yeV9jb250YWluZXJ7XG4gICAgd2lkdGg6IDYwJTtcbiAgIGhlaWdodDozMDBweDtcbm1hcmdpbjowcmVtIDFyZW07XG59XG4uZmxleGNvbnRhaW5lcntcbiAgICBwYWRkaW5nOjFyZW07XG4gZGlzcGxheTogZmxleDtcbn1cblxuI2NhdGVnb3J5bGlzdHtcbiAgICBtYXJnaW46MXJlbTtcbiAgIHdpZHRoOjEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgXG4gICAgXG5cbn1cblxuLnRhYmxlX2NvbnRlbnR7XG53aWR0aDozOCU7XG59XG5cbi5wYXJlbnROb2Rle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0Oi0zJTtcbiAgICB0b3A6MCU7XG4gICAgd2lkdGg6MjAlO1xufVxuXG5cbi5maW5hbF9kYXRhe1xuZm9udC1zaXplOjFyZW07XG5tYXJnaW46MC4ycmVtIDBweCAwcmVtIDIuNXJlbTtcbn1cblxuI2NhdGVnb3J5X2NvbnRhaW5lciA6Om5nLWRlZXAgLm1hdGVyaWFsLWljb25ze1xuZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgXG59XG5cblxuOjpuZy1kZWVwICNjYXRlZ29yeWxpc3QgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7XG5kaXNwbGF5Om5vbmU7fVxuXG5cbjo6bmctZGVlcCAjY2F0ZWdvcnlsaXN0IC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcbiAgICBwYWRkaW5nLWJvdHRvbTowcHggIWltcG9ydGFudDtcbn1cbi5kYXRhRW50cnl7XG4gICBcbiAgICB3aWR0aDoxMDAlO1xufVxuXG5cbi5maXJzdE5vZGVJdGVte1xuXG5wb3NpdGlvbjogYWJzb2x1dGU7XG5cbndpZHRoOjEwMCU7XG5sZWZ0OjEwMCU7XG50b3A6MCU7XG5cbn1cblxuXG4uc2Vjb25kTm9kZUl0ZW17XG4gICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBcbiAgICB3aWR0aDoxMDAlO1xuICAgIGxlZnQ6MTIwJTtcbiAgICB0b3A6MCU7XG4gICAgbWFyZ2luLWxlZnQ6MXJlbTtcbiAgICB9XG5cbiAgICAudGhpcmROb2RlSXRlbXtcbiAgIFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGxlZnQ6MTIwJTtcbiAgICAgICAgdG9wOjAlO1xuICAgICAgICBtYXJnaW4tbGVmdDoxcmVtO1xuICAgICAgICBcbiAgICAgICAgfVxuXG5cbiAgICAuY3Nzc2V0dGluZzpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodHNreWJsdWU7XG4gICAgfVxuLmNzc3NldHRpbmd7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGRhcmtncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6MyU7XG4gICAgY29sb3I6Z3JleTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIFxuICBcbn1cbi5ub2RlX2NvbnRhaW5lcntcbiAgICBoZWlnaHQ6MjAwcHg7XG4gICB3aWR0aDoxODBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4jaGVhZGluZ3tcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG5cbiAgIFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMzM3cHgpe1xuIFxuICAgIC5mbGV4Y29udGFpbmVye1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgICAjY2F0ZWdvcnlfY29udGFpbmVye1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICAudGFibGVfY29udGVudHtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuXG59ICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/categoryCrud/categoryCrud.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/adminModule/categoryCrud/categoryCrud.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-align-tabs=\"center\">\n    <mat-tab label=\"SINGLE UPLOAD\"> \n\n<div *ngIf='category!=null'class=\"flexcontainer\">\n    <div  id ='infomess' *ngIf='category.length==0'>\n <div>\n     {{resMessage}}\n </div>\n    </div>\n    <div *ngIf='category.length!=0' id=\"category_container\">\n    <div id=\"heading\">CATEGORY LIST</div>  \n            <div id=\"categorylist\">\n<div class=\"parentNode\">\n                <div  *ngFor=\"let categorylist of category ; let i=index\">\n                        <div class=\"data_section\">\n                              \n                                <button mat-button class=\"csssetting\" (click)=editorAdd(category) blockShow>{{categorylist.categoryName}}</button>\n                         <div class=\"hide firstNodeItem\">\n                                <div class=\"node_container\" >\n                    <div  *ngFor=\"let subcategory of categorylist.subcategory\" >\n                 <div class=\"data_section\">\n                        \n                            <button mat-button class=\"dataEntry csssetting\" (click)=editorAdd(categorylist.subcategory) blockShow>{{subcategory.subcategoryName}}</button> \n                           \n                            <div class=\"hide secondNodeItem\" >\n                                <div class=\"node_container\">\n                  <div *ngFor=\"let products of subcategory.products\">\n                        <div class=\"data_section\">\n                               \n                            <button mat-button (click)=editorAdd(subcategory.products) class=\"dataEntry csssetting\" blockShow>{{products.productName}}</button>\n                            <div class=\"hide thirdNodeItem\" >\n                                    <div class=\"node_container\">\n                      <div *ngFor=\"let subproduct of products.subProducts\">\n                            <div class=\"data_section\">\n                                   \n                                <button mat-button (click)=editorAdd(products.subProducts) class=\"dataEntry csssetting\" toggle>{{subproduct.subproductName}}</button>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                        </div>\n                      </div>\n                    </div>\n                </div>\n               \n                </div>\n                </div>\n                </div>\n                </div>\n                </div>\n                </div>\n         \n        </div>\n        </div>\n    </div>\n\n        <div *ngIf='category.length!=0' class=\"table_content\">\n        <tablehere (PushChange)='pushChanges($event)'></tablehere>\n    </div>\n    </div>\n        </mat-tab>\n    <mat-tab  label=\"ADD BULK LIST\">\n        <app-excelupload></app-excelupload>\n          </mat-tab>\n           \n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/modules/adminModule/categoryCrud/categoryCrud.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/adminModule/categoryCrud/categoryCrud.ts ***!
  \******************************************************************/
/*! exports provided: categoryCrud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryCrud", function() { return categoryCrud; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moduleServices/categoryDatabase */ "./src/app/modules/adminModule/moduleServices/categoryDatabase.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globalmodel/listitem/category */ "./src/app/globalmodel/listitem/category.ts");
/* harmony import */ var _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../moduleServices/dataService */ "./src/app/modules/adminModule/moduleServices/dataService.ts");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pushobject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/pushobject */ "./src/app/modules/adminModule/categoryCrud/services/pushobject.ts");
/* harmony import */ var _globalmodel_comments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalmodel/comments */ "./src/app/globalmodel/comments.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../sharedModule/successSnackbar */ "./src/app/modules/sharedModule/successSnackbar.ts");












var categoryCrud = /** @class */ (function () {
    function categoryCrud(categoryDatabase, fb, dataSource, dialogData, router, pushobject, snackBar) {
        this.categoryDatabase = categoryDatabase;
        this.fb = fb;
        this.dataSource = dataSource;
        this.dialogData = dialogData;
        this.router = router;
        this.pushobject = pushobject;
        this.snackBar = snackBar;
        this.isDone = false;
        this.resMessage = null;
        this.checkkey = null;
        this.category = null;
        if (localStorage.getItem('id_token') == '-1' || localStorage.getItem('id_token') == null) {
            this.router.navigate(['/admin/login']);
        }
        else {
            this.newPushObject = new _globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_4__["category"]();
        }
    }
    categoryCrud.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_11__["SuccessComponent"], {
            duration: 3000,
        });
    };
    categoryCrud.prototype.pushChanges = function (data) {
        var _this = this;
        if (data == true) {
            console.log(this.category);
            this.pushobject.pushChanges(this.category).subscribe(function (data) {
                if (data.isPushed == true) {
                    _this.openSnackBar();
                    _this.categoryDatabase.backendCall();
                }
            }, function (err) {
                alert(err);
            });
        }
    };
    categoryCrud.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryDatabase.dataChange.subscribe(function (data) {
            //   console.log(data);
            if (data != null) {
                if (data.length != 0) {
                    _this.category = data;
                }
                else if (data.length == 0) {
                    _this.category = [];
                    _this.resMessage = _globalmodel_comments__WEBPACK_IMPORTED_MODULE_9__["comments"].null + ' ' +
                        'Use Bulk Listing For Initialization';
                }
            }
        }, function (err) {
            _this.category = [];
            _this.resMessage = _globalmodel_comments__WEBPACK_IMPORTED_MODULE_9__["comments"].null + ' ' +
                'Use Bulk Listing For Initialization';
        });
    };
    categoryCrud.prototype.editorAdd = function (object) {
        this.dataSource.updateDataSource(object);
    };
    categoryCrud = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'categoryCrud',
            template: __webpack_require__(/*! ./categoryCrud.html */ "./src/app/modules/adminModule/categoryCrud/categoryCrud.html"),
            providers: [_moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_2__["CategoryDatabase"]],
            styles: [__webpack_require__(/*! ./categoryCrud.css */ "./src/app/modules/adminModule/categoryCrud/categoryCrud.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_2__["CategoryDatabase"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_5__["DataService"], _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_6__["DialogDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_pushobject__WEBPACK_IMPORTED_MODULE_8__["PushChanges"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]])
    ], categoryCrud);
    return categoryCrud;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/categoryCrud/services/pushobject.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/categoryCrud/services/pushobject.ts ***!
  \*************************************************************************/
/*! exports provided: PushChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushChanges", function() { return PushChanges; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");
/* harmony import */ var src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/globalmodel/comments */ "./src/app/globalmodel/comments.ts");








var PushChanges = /** @class */ (function () {
    function PushChanges(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].localCategorylist;
    }
    PushChanges.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = 'FrontEnd Error';
        }
        else if (error.status != 0) {
            // server-side error
            errorMessage = error.error;
        }
        else {
            errorMessage = src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__["comments"].networkError;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    };
    ;
    PushChanges.prototype.pushChanges = function (details) {
        return this.http.post(this.url, { 'categorylist': details }, _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_6__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ;
    PushChanges = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PushChanges);
    return PushChanges;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/dashboardmodule/dashboard-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/adminModule/dashboardmodule/dashboard-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../productUpload/productUpload.component */ "./src/app/modules/adminModule/productUpload/productUpload.component.ts");
/* harmony import */ var _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../categoryCrud/categoryCrud */ "./src/app/modules/adminModule/categoryCrud/categoryCrud.ts");
/* harmony import */ var _adspage_adspage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../adspage/adspage.component */ "./src/app/modules/adminModule/adspage/adspage.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/adminModule/dashboardmodule/dashboard.component.ts");
/* harmony import */ var _maker_checker_maker_checker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../maker-checker/maker-checker.component */ "./src/app/modules/adminModule/maker-checker/maker-checker.component.ts");
/* harmony import */ var _footer_crud_footer_crud_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer-crud/footer-crud.component */ "./src/app/modules/adminModule/footer-crud/footer-crud.component.ts");
/* harmony import */ var _deliv_opt_page_deliv_opt_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../deliv-opt-page/deliv-opt-page.component */ "./src/app/modules/adminModule/deliv-opt-page/deliv-opt-page.component.ts");
/* harmony import */ var _delivery_options_order_options_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../delivery-options/order-options.component */ "./src/app/modules/adminModule/delivery-options/order-options.component.ts");
/* harmony import */ var _voucher_voucher_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../voucher/voucher.component */ "./src/app/modules/adminModule/voucher/voucher.component.ts");
/* harmony import */ var _AddressCrud_address_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../AddressCrud/address.component */ "./src/app/modules/adminModule/AddressCrud/address.component.ts");














var routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        children: [
            { path: 'categorycrud', component: _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_5__["categoryCrud"] },
            { path: 'productUpload', component: _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_4__["productUploadComponent"] },
            { path: 'makerChecker', component: _maker_checker_maker_checker_component__WEBPACK_IMPORTED_MODULE_8__["MakerCheckerComponent"] },
            { path: 'adsCrud', component: _adspage_adspage_component__WEBPACK_IMPORTED_MODULE_6__["AdspageComponent"] },
            { path: 'abtCrud', component: _footer_crud_footer_crud_component__WEBPACK_IMPORTED_MODULE_9__["FooterCrudComponent"] },
            { path: 'delivOptLevel', component: _deliv_opt_page_deliv_opt_page_component__WEBPACK_IMPORTED_MODULE_10__["DelivOptPageComponent"] },
            { path: 'currentOrders', component: _delivery_options_order_options_component__WEBPACK_IMPORTED_MODULE_11__["OrderOptionsComponent"] },
            { path: 'voucherCrud', component: _voucher_voucher_component__WEBPACK_IMPORTED_MODULE_12__["VoucherComponent"] },
            { path: 'addressCrud', component: _AddressCrud_address_component__WEBPACK_IMPORTED_MODULE_13__["AddressCrud"] }
        ] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/dashboardmodule/dashboard.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/dashboardmodule/dashboard.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.example-container {\n    position: fixed;\n  z-index: 3;\n  height:100%;\n    left: 0;\n    right: 0;\n  }\n  \n  .example-sidenav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 200px;\n    \n  }\n  \n  #adminheader{\n    position: fixed;\n    z-index:10;\n    width:100%;\n    top:0px;\n}\n  \n  #content{\n    padding-top:6rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9kYXNoYm9hcmRtb2R1bGUvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0lBQ1YsUUFBUTtJQUNSLFNBQVM7R0FDVjs7RUFFRDtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGFBQWE7O0dBRWQ7O0VBRUg7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7SUFDWCxRQUFRO0NBQ1g7O0VBRUQ7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluTW9kdWxlL2Rhc2hib2FyZG1vZHVsZS9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDM7XG4gIGhlaWdodDoxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNpZGVuYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgXG4gIH1cbiAgXG4jYWRtaW5oZWFkZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6MTA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICB0b3A6MHB4O1xufVxuXG4jY29udGVudHtcbiAgICBwYWRkaW5nLXRvcDo2cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/adminModule/dashboardmodule/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/adminModule/dashboardmodule/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='adminheader'>\n        <adminheader></adminheader>\n        </div>\n<div id='content'>\n        <mat-sidenav-container class=\"example-container\">\n                <mat-sidenav #sidenav mode=\"side\" opened class=\"example-sidenav\"\n                             [fixedInViewport]=\"fixed\">\n                            <adminsidenav></adminsidenav>\n                </mat-sidenav>\n                <mat-sidenav-content>\n                        <router-outlet></router-outlet>\n                 </mat-sidenav-content>\n                </mat-sidenav-container>\n        </div>\n        \n        "

/***/ }),

/***/ "./src/app/modules/adminModule/dashboardmodule/dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/adminModule/dashboardmodule/dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admindashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/modules/adminModule/dashboardmodule/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/modules/adminModule/dashboardmodule/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/dashboardmodule/dashboard.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/dashboardmodule/dashboard.module.ts ***!
  \*************************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AddressCrud_bulkAddUploading_bulkadd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AddressCrud/bulkAddUploading/bulkadd.component */ "./src/app/modules/adminModule/AddressCrud/bulkAddUploading/bulkadd.component.ts");
/* harmony import */ var _AddressCrud_Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AddressCrud/Dialogs/Add/add-dialog.component */ "./src/app/modules/adminModule/AddressCrud/Dialogs/Add/add-dialog.component.ts");
/* harmony import */ var _AddressCrud_Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AddressCrud/Dialogs/Delete/delete-dialog.component */ "./src/app/modules/adminModule/AddressCrud/Dialogs/Delete/delete-dialog.component.ts");
/* harmony import */ var _AddressCrud_Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AddressCrud/Dialogs/Edit/edit-dialog.component */ "./src/app/modules/adminModule/AddressCrud/Dialogs/Edit/edit-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Dialogs/Add/add-dialog.component */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts");
/* harmony import */ var _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Dialogs/Delete/delete-dialog.component */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts");
/* harmony import */ var _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Dialogs/Edit/edit-dialog.component */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../table/table.component */ "./src/app/modules/adminModule/table/table.component.ts");
/* harmony import */ var _moduleServices_imageCrud__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../moduleServices/imageCrud */ "./src/app/modules/adminModule/moduleServices/imageCrud.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _importMats_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../importMats.module */ "./src/app/importMats.module.ts");
/* harmony import */ var _globalServices_jsonretreiver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../globalServices/jsonretreiver */ "./src/app/globalServices/jsonretreiver.ts");
/* harmony import */ var _globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../globalServices/categorylistjson */ "./src/app/globalServices/categorylistjson.ts");
/* harmony import */ var _sharedModule_sharedModule__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../sharedModule/sharedModule */ "./src/app/modules/sharedModule/sharedModule.ts");
/* harmony import */ var _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../moduleServices/dataService */ "./src/app/modules/adminModule/moduleServices/dataService.ts");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../sharedModule/successSnackbar */ "./src/app/modules/sharedModule/successSnackbar.ts");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../categoryCrud/categoryCrud */ "./src/app/modules/adminModule/categoryCrud/categoryCrud.ts");
/* harmony import */ var _footernav_footernav_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../footernav/footernav.component */ "./src/app/modules/adminModule/footernav/footernav.component.ts");
/* harmony import */ var _moduleServices_AuthInterceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./../moduleServices/AuthInterceptor */ "./src/app/modules/adminModule/moduleServices/AuthInterceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_service_dologin__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../login/service/dologin */ "./src/app/modules/adminModule/login/service/dologin.ts");
/* harmony import */ var _subproducts_data_subproducts_data_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./../subproducts-data/subproducts-data.component */ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.ts");
/* harmony import */ var _subproducts_data_services_uploadform__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./../subproducts-data/services/uploadform */ "./src/app/modules/adminModule/subproducts-data/services/uploadform.ts");
/* harmony import */ var _categoryCrud_services_pushobject__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../categoryCrud/services/pushobject */ "./src/app/modules/adminModule/categoryCrud/services/pushobject.ts");
/* harmony import */ var _AboutCrud_abtcrud_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../AboutCrud/abtcrud.component */ "./src/app/modules/adminModule/AboutCrud/abtcrud.component.ts");
/* harmony import */ var _maker_checker_maker_checker_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../maker-checker/maker-checker.component */ "./src/app/modules/adminModule/maker-checker/maker-checker.component.ts");
/* harmony import */ var _employeeDAO_employeeData_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../employeeDAO/employeeData.component */ "./src/app/modules/adminModule/employeeDAO/employeeData.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/modules/adminModule/sidenav/sidenav.component.ts");
/* harmony import */ var _employeeDAO_imagedialog_imagedialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../employeeDAO/imagedialog/imagedialog.component */ "./src/app/modules/adminModule/employeeDAO/imagedialog/imagedialog.component.ts");
/* harmony import */ var _adscrud_adscrud_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../adscrud/adscrud.component */ "./src/app/modules/adminModule/adscrud/adscrud.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/adminModule/dashboardmodule/dashboard.component.ts");
/* harmony import */ var _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../productUpload/productUpload.component */ "./src/app/modules/adminModule/productUpload/productUpload.component.ts");
/* harmony import */ var _ad_image_crud_ad_image_crud_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../ad-image-crud/ad-image-crud.component */ "./src/app/modules/adminModule/ad-image-crud/ad-image-crud.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/adminModule/dashboardmodule/dashboard-routing.module.ts");
/* harmony import */ var _adspage_adspage_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../adspage/adspage.component */ "./src/app/modules/adminModule/adspage/adspage.component.ts");
/* harmony import */ var _globalServices_getads__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../globalServices/getads */ "./src/app/globalServices/getads.ts");
/* harmony import */ var _footer_crud_footer_crud_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../footer-crud/footer-crud.component */ "./src/app/modules/adminModule/footer-crud/footer-crud.component.ts");
/* harmony import */ var _delivery_options_order_options_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../delivery-options/order-options.component */ "./src/app/modules/adminModule/delivery-options/order-options.component.ts");
/* harmony import */ var _deliv_level_deliv_level_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../deliv-level/deliv-level.component */ "./src/app/modules/adminModule/deliv-level/deliv-level.component.ts");
/* harmony import */ var _deliv_opt_page_deliv_opt_page_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../deliv-opt-page/deliv-opt-page.component */ "./src/app/modules/adminModule/deliv-opt-page/deliv-opt-page.component.ts");
/* harmony import */ var _Dialogs_override_override_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../Dialogs/override/override.component */ "./src/app/modules/adminModule/Dialogs/override/override.component.ts");
/* harmony import */ var _order_data_order_data_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../order-data/order-data.component */ "./src/app/modules/adminModule/order-data/order-data.component.ts");
/* harmony import */ var _voucher_voucher_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../voucher/voucher.component */ "./src/app/modules/adminModule/voucher/voucher.component.ts");
/* harmony import */ var _AddressCrud_address_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../AddressCrud/address.component */ "./src/app/modules/adminModule/AddressCrud/address.component.ts");



















































var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_35__["DashboardComponent"],
                _employeeDAO_employeeData_component__WEBPACK_IMPORTED_MODULE_31__["EmployeeDataComponent"],
                _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_21__["categoryCrud"],
                _Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddDialogComponent"],
                _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteDialogComponent"],
                _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditDialogComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"],
                _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_36__["productUploadComponent"],
                _subproducts_data_subproducts_data_component__WEBPACK_IMPORTED_MODULE_26__["SubproductsDataComponent"],
                _maker_checker_maker_checker_component__WEBPACK_IMPORTED_MODULE_30__["MakerCheckerComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_32__["SidenavComponent"],
                _employeeDAO_imagedialog_imagedialog_component__WEBPACK_IMPORTED_MODULE_33__["ImagedialogComponent"],
                _adscrud_adscrud_component__WEBPACK_IMPORTED_MODULE_34__["AdscrudComponent"],
                _ad_image_crud_ad_image_crud_component__WEBPACK_IMPORTED_MODULE_37__["AdImageCrudComponent"],
                _adspage_adspage_component__WEBPACK_IMPORTED_MODULE_39__["AdspageComponent"],
                _AboutCrud_abtcrud_component__WEBPACK_IMPORTED_MODULE_29__["AboutCrudComponent"],
                _footernav_footernav_component__WEBPACK_IMPORTED_MODULE_22__["FooternavComponent"],
                _footer_crud_footer_crud_component__WEBPACK_IMPORTED_MODULE_41__["FooterCrudComponent"],
                _delivery_options_order_options_component__WEBPACK_IMPORTED_MODULE_42__["OrderOptionsComponent"],
                _deliv_level_deliv_level_component__WEBPACK_IMPORTED_MODULE_43__["DelivLevelComponent"],
                _deliv_opt_page_deliv_opt_page_component__WEBPACK_IMPORTED_MODULE_44__["DelivOptPageComponent"],
                _Dialogs_override_override_component__WEBPACK_IMPORTED_MODULE_45__["OverrideComponent"],
                _order_data_order_data_component__WEBPACK_IMPORTED_MODULE_46__["OrderDataComponent"],
                _voucher_voucher_component__WEBPACK_IMPORTED_MODULE_47__["VoucherComponent"], _AddressCrud_Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddressDeleteDialogComponent"],
                _AddressCrud_Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddressEditDialogComponent"],
                _AddressCrud_Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AddressAddDialogComponent"],
                _AddressCrud_address_component__WEBPACK_IMPORTED_MODULE_48__["AddressCrud"],
                _AddressCrud_bulkAddUploading_bulkadd_component__WEBPACK_IMPORTED_MODULE_1__["BulkAddUploading"]
            ],
            exports: [],
            providers: [_globalServices_jsonretreiver__WEBPACK_IMPORTED_MODULE_14__["Jsonretriever"], _globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_15__["CategoryJsonretriever"], _moduleServices_imageCrud__WEBPACK_IMPORTED_MODULE_11__["ImageCrud"], _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_17__["DataService"], _login_service_dologin__WEBPACK_IMPORTED_MODULE_25__["Dologin"], _globalServices_getads__WEBPACK_IMPORTED_MODULE_40__["getAds"],
                _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_18__["DialogDataService"], _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_20__["Data"], _subproducts_data_services_uploadform__WEBPACK_IMPORTED_MODULE_27__["UploadService"], _categoryCrud_services_pushobject__WEBPACK_IMPORTED_MODULE_28__["PushChanges"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"],
                    useClass: _moduleServices_AuthInterceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
                    multi: true
                }],
            imports: [
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_38__["DashboardRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _importMats_module__WEBPACK_IMPORTED_MODULE_13__["MyOwnCustomMaterialModule"],
                _sharedModule_sharedModule__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ],
            entryComponents: [_Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddDialogComponent"], _AddressCrud_Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddressDeleteDialogComponent"], _AddressCrud_Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddressEditDialogComponent"],
                _AddressCrud_Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AddressAddDialogComponent"],
                _employeeDAO_imagedialog_imagedialog_component__WEBPACK_IMPORTED_MODULE_33__["ImagedialogComponent"],
                _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteDialogComponent"],
                _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditDialogComponent"],
                _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_19__["SuccessComponent"], _Dialogs_override_override_component__WEBPACK_IMPORTED_MODULE_45__["OverrideComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/deliv-level/deliv-level.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/adminModule/deliv-level/deliv-level.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#form{\n    display:flex;\n    overflow:scroll;\n    background: lightgray;\n}\n\n.flexcontainer{\n    margin:5px;\n    display:flex;\n    overflow:scroll;\njustify-content: space-around;\n}\n\n#btncontainer{\n    margin-top:10px;\nmargin-right:auto;\ntext-align: left;\n}\n\n.fullwidth ::ng-deep .mat-form-field{\n    width:100%;\n\n}\n\n.fullwidth{\nwidth:100%;\n\n}\n\n.btncss{\nmargin:10px;\n}\n\n.levels{\n    padding:10px;\nbackground: whitesmoke;\n    margin:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9kZWxpdi1sZXZlbC9kZWxpdi1sZXZlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQiw4QkFBOEI7Q0FDN0I7O0FBQ0Q7SUFDSSxnQkFBZ0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtDQUNoQjs7QUFFRDtJQUNJLFdBQVc7O0NBRWQ7O0FBRUQ7QUFDQSxXQUFXOztDQUVWOztBQUVEO0FBQ0EsWUFBWTtDQUNYOztBQUVEO0lBQ0ksYUFBYTtBQUNqQix1QkFBdUI7SUFDbkIsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9kZWxpdi1sZXZlbC9kZWxpdi1sZXZlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvcm17XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIG92ZXJmbG93OnNjcm9sbDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5cbi5mbGV4Y29udGFpbmVye1xuICAgIG1hcmdpbjo1cHg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIG92ZXJmbG93OnNjcm9sbDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuI2J0bmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG5tYXJnaW4tcmlnaHQ6YXV0bztcbnRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5mdWxsd2lkdGggOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDoxMDAlO1xuXG59XG5cbi5mdWxsd2lkdGh7XG53aWR0aDoxMDAlO1xuXG59XG5cbi5idG5jc3N7XG5tYXJnaW46MTBweDtcbn1cblxuLmxldmVsc3tcbiAgICBwYWRkaW5nOjEwcHg7XG5iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgIG1hcmdpbjoxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/deliv-level/deliv-level.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/adminModule/deliv-level/deliv-level.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-card>\n    <form [formGroup]='levelForm' (ngSubmit)='onSubmit(levelForm.value)'>\n    <div class='fullwidth'>\n        <mat-form-field >\n  \n      <input matInput type=\"number\" placeholder='Enter the Maximum Index' formControlName='maxLevel'>\n      <mat-error *ngFor=\"let validation of error_messages.mandateField\">\n          <mat-error class=\"error-message\" *ngIf=\"levelForm.controls.maxLevel.hasError(validation.type) && \n              (levelForm.controls.maxLevel.dirty || levelForm.controls.maxLevel.touched)\">\n                  {{validation.message}}</mat-error>\n          </mat-error>  \n    </mat-form-field>\n    </div>\n    <div class='flexcontainer'>\n      <div *ngFor='let level of levelForm.controls.levels.controls;let i =index' formArrayName='levels' class='levels'>\n        <div [formGroupName]='i'>\n              <div>\n                  <mat-form-field >\n  \n                <input matInput placeholder='Enter the Index' type='number' formControlName='levelIndex'>\n                <mat-hint>Value Should be {{i}}</mat-hint>\n                <mat-error *ngFor=\"let validation of error_messages.mandateField\">\n                    <mat-error class=\"error-message\" *ngIf=\"level.controls.levelIndex.hasError(validation.type) && \n                        (level.controls.levelIndex.dirty || level.controls.levelIndex.touched)\">\n                            {{validation.message}}</mat-error>\n                    </mat-error> \n              </mat-form-field>\n              </div>          \n              <div>\n                <mat-form-field>\n                <input matInput placeholder='Enter the Message' formControlName='levelMessage' >\n                <mat-error *ngFor=\"let validation of error_messages.mandateField\">\n                    <mat-error class=\"error-message\" *ngIf=\"level.controls.levelMessage.hasError(validation.type) && \n                        (level.controls.levelMessage.dirty || level.controls.levelMessage.touched)\">\n                            {{validation.message}}</mat-error>\n                    </mat-error> \n              </mat-form-field>\n              </div>\n              <div>\n                <button mat-raised-button [disabled]='levelForm.controls.levels.controls.length==1' type='button' (click)='deleteLevel(i)' class='btncss' color='warn'>Delete</button>\n              </div>\n              \n           \n        </div>\n      </div>\n     \n    </div>\n    <div id='btncontainer'>\n        <button mat-raised-button (click)='addLevel()' type='button' class='btncss' color='primary'>Add Index</button>\n        <button mat-raised-button (click)='remove()' type='button' class='btncss' color='primary'>Remove </button>\n       \n        <button mat-raised-button [disabled]='levelForm.controls.levels.controls.length!=levelForm.controls.maxLevel.value || levelForm.invalid' type='submit' class='btncss' color='accent'>Submit</button>\n      </div>\n    </form>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/deliv-level/deliv-level.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/adminModule/deliv-level/deliv-level.component.ts ***!
  \**************************************************************************/
/*! exports provided: DelivLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelivLevelComponent", function() { return DelivLevelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_globalmodel_delivLevel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globalmodel/delivLevel */ "./src/app/globalmodel/delivLevel.ts");
/* harmony import */ var src_app_globalServices_Validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/globalServices/Validation */ "./src/app/globalServices/Validation.ts");
/* harmony import */ var _deliv_opt_page_services_delivStatusCrud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../deliv-opt-page/services/delivStatusCrud */ "./src/app/modules/adminModule/deliv-opt-page/services/delivStatusCrud.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Dialogs_override_override_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Dialogs/override/override.component */ "./src/app/modules/adminModule/Dialogs/override/override.component.ts");








var DelivLevelComponent = /** @class */ (function () {
    function DelivLevelComponent(fb, errorMessage, dellvlCrud, snackBar, dialog) {
        var _this = this;
        this.fb = fb;
        this.errorMessage = errorMessage;
        this.dellvlCrud = dellvlCrud;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.delivLevel = null;
        this.levelArray = [];
        this.initializelevels = function () {
            for (var _i = 0, _a = _this.delivLevel.Level; _i < _a.length; _i++) {
                var level = _a[_i];
                _this.levelArray.push(_this.createLvl(level));
            }
        };
    }
    DelivLevelComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 1000,
        });
    };
    DelivLevelComponent.prototype.createLvl = function (level) {
        if (level != null) {
            return this.fb.group({
                levelIndex: [level.LvlIndex, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                levelMessage: [level.LvlMsg, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
        else {
            return this.fb.group({
                levelIndex: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                levelMessage: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
    };
    DelivLevelComponent.prototype.ngOnInit = function () {
        console.log(this.delivLevel);
        this.initializelevels();
        this.error_messages = this.errorMessage.geterror();
        this.levelForm = this.fb.group({
            maxLevel: [this.delivLevel.MaxLvl, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            levels: this.fb.array(this.levelArray)
        });
    };
    DelivLevelComponent.prototype.addLevel = function () {
        this.levelForm.controls.levels.push(this.createLvl(null));
    };
    DelivLevelComponent.prototype.remove = function () {
        var _this = this;
        if (this.delivLevel.LvlId != null) {
            this.dellvlCrud.remove({ delivlevobj: this.delivLevel }).subscribe(function (data) {
                if (data.status == 'S' && data.isDeleted == true) {
                    _this.openSnackBar('Successfully Deleted', '');
                    window.location.reload();
                }
                else {
                    _this.openSnackBar('Error Occured', '');
                }
            }, function (err) {
                if (err.message != null) {
                    _this.openSnackBar(err.message, '');
                }
                else {
                    _this.openSnackBar(err, '');
                }
            });
        }
    };
    DelivLevelComponent.prototype.deleteLevel = function (index) {
        this.levelForm.controls.levels.removeAt(index);
    };
    DelivLevelComponent.prototype.backendCall = function (form) {
        var _this = this;
        if (this.delivLevel.LvlId == null) {
            this.dellvlCrud.addDelivOptData({ delivlevobj: form }).subscribe(function (data) {
                if (data.status == 'S' && data.isPushed == true) {
                    _this.openSnackBar('Successfully Added', '');
                    window.location.reload();
                }
                else {
                    _this.openSnackBar('Error Occured', '');
                }
            }, function (err) {
                if (err.status == 'OVRDE') {
                    _this.dialogRef = _this.dialog.open(_Dialogs_override_override_component__WEBPACK_IMPORTED_MODULE_7__["OverrideComponent"], {
                        width: '362px',
                        height: '200px'
                    });
                    _this.dialogRef.afterClosed().subscribe(function (data) {
                        if (data == true) {
                            _this.dellvlCrud.editDelivOptData({ delivlevobj: form }).subscribe(function (data) {
                                if (data.status == 'S' && data.isPushed == true) {
                                    _this.openSnackBar('Successfully Added', '');
                                    window.location.reload();
                                }
                                else {
                                    _this.openSnackBar('Error Occured', '');
                                }
                            }, function (err) {
                                if (err.message != null) {
                                    _this.openSnackBar(err.message, '');
                                }
                                else {
                                    _this.openSnackBar(err, '');
                                }
                            });
                        }
                    });
                }
                else {
                    if (err.message != null) {
                        _this.openSnackBar(err.message, '');
                    }
                    else {
                        _this.openSnackBar(err, '');
                    }
                }
            });
        }
        else {
            this.dellvlCrud.editDelivOptData({ delivlevobj: form }).subscribe(function (data) {
                if (data.status == 'S' && data.isPushed == true) {
                    _this.openSnackBar('Successfully Added', '');
                    window.location.reload();
                }
                else {
                    _this.openSnackBar('Error Occured', '');
                }
            }, function (err) {
                if (err.message != null) {
                    _this.openSnackBar(err.message, '');
                }
                else {
                    _this.openSnackBar(err, '');
                }
            });
        }
    };
    DelivLevelComponent.prototype.onSubmit = function (form) {
        this.backendCall(form);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_globalmodel_delivLevel__WEBPACK_IMPORTED_MODULE_3__["DelivLevel"])
    ], DelivLevelComponent.prototype, "delivLevel", void 0);
    DelivLevelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin-deliv-level',
            template: __webpack_require__(/*! ./deliv-level.component.html */ "./src/app/modules/adminModule/deliv-level/deliv-level.component.html"),
            styles: [__webpack_require__(/*! ./deliv-level.component.css */ "./src/app/modules/adminModule/deliv-level/deliv-level.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_globalServices_Validation__WEBPACK_IMPORTED_MODULE_4__["getErrorMessage"],
            _deliv_opt_page_services_delivStatusCrud__WEBPACK_IMPORTED_MODULE_5__["delOptDataService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], DelivLevelComponent);
    return DelivLevelComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/deliv-opt-page/deliv-opt-page.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/adminModule/deliv-opt-page/deliv-opt-page.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#coverbtn{\n    margin-top:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9kZWxpdi1vcHQtcGFnZS9kZWxpdi1vcHQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9kZWxpdi1vcHQtcGFnZS9kZWxpdi1vcHQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvdmVyYnRue1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/deliv-opt-page/deliv-opt-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/adminModule/deliv-opt-page/deliv-opt-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n   <mat-accordion multi=\"false\">\n      <mat-expansion-panel *ngFor='let delivlevel of delivLevels;let i=index'>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n          Level:{{delivlevel.maxLevel}}\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n            <admin-deliv-level [delivLevel]='delivlevel'></admin-deliv-level>\n\n        \n          </mat-expansion-panel>\n  </mat-accordion>\n  <div id=\"coverbtn\">\n    <button mat-raised-button (click)='addNew()'>Create New</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/deliv-opt-page/deliv-opt-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/adminModule/deliv-opt-page/deliv-opt-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: DelivOptPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelivOptPageComponent", function() { return DelivOptPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_delivStatusCrud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/delivStatusCrud */ "./src/app/modules/adminModule/deliv-opt-page/services/delivStatusCrud.ts");
/* harmony import */ var src_app_globalmodel_delivLevel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globalmodel/delivLevel */ "./src/app/globalmodel/delivLevel.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var DelivOptPageComponent = /** @class */ (function () {
    function DelivOptPageComponent(delopt, snackBar) {
        this.delopt = delopt;
        this.snackBar = snackBar;
        this.delivLevels = [];
    }
    DelivOptPageComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    DelivOptPageComponent.prototype.fillobject = function (objectArray) {
        for (var _i = 0, objectArray_1 = objectArray; _i < objectArray_1.length; _i++) {
            var dellvlopt = objectArray_1[_i];
            var pushopt = new src_app_globalmodel_delivLevel__WEBPACK_IMPORTED_MODULE_3__["DelivLevel"]();
            pushopt.LvlId = dellvlopt.levelId;
            pushopt.MaxLvl = dellvlopt.maxLevel;
            for (var _a = 0, _b = dellvlopt.levels; _a < _b.length; _a++) {
                var levelobj = _b[_a];
                var lvlobj = new src_app_globalmodel_delivLevel__WEBPACK_IMPORTED_MODULE_3__["Level"]();
                lvlobj.LvlIndex = levelobj.levelIndex;
                lvlobj.LvlMsg = levelobj.levelMessage;
                pushopt.Level.push(lvlobj);
            }
            this.delivLevels.push(pushopt);
        }
        console.log(this.delivLevels);
    };
    DelivOptPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.delopt.getDelivOptData().subscribe(function (data) {
            if (data.status == 'S') {
                _this.fillobject(data.dellevels);
            }
        }, function (err) {
            //console.log(err);
            if (err.message != null) {
                if (err.status == 'E' || err.status == 'EMP') {
                    _this.openSnackBar(err.message, '');
                }
            }
            else {
                _this.openSnackBar(err, '');
            }
        });
    };
    DelivOptPageComponent.prototype.addNew = function () {
        var level = new src_app_globalmodel_delivLevel__WEBPACK_IMPORTED_MODULE_3__["Level"]();
        var deliv = new src_app_globalmodel_delivLevel__WEBPACK_IMPORTED_MODULE_3__["DelivLevel"]();
        deliv.Level.push(level);
        this.delivLevels.push(deliv);
        console.log(this.delivLevels);
    };
    DelivOptPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deliv-opt-page',
            template: __webpack_require__(/*! ./deliv-opt-page.component.html */ "./src/app/modules/adminModule/deliv-opt-page/deliv-opt-page.component.html"),
            providers: [_services_delivStatusCrud__WEBPACK_IMPORTED_MODULE_2__["delOptDataService"]],
            styles: [__webpack_require__(/*! ./deliv-opt-page.component.css */ "./src/app/modules/adminModule/deliv-opt-page/deliv-opt-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_delivStatusCrud__WEBPACK_IMPORTED_MODULE_2__["delOptDataService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], DelivOptPageComponent);
    return DelivOptPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/deliv-opt-page/services/delivStatusCrud.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/adminModule/deliv-opt-page/services/delivStatusCrud.ts ***!
  \********************************************************************************/
/*! exports provided: delOptDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delOptDataService", function() { return delOptDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/globalmodel/comments */ "./src/app/globalmodel/comments.ts");







var delOptDataService = /** @class */ (function () {
    function delOptDataService(http) {
        this.http = http;
        this.geturl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].getDelivLevels;
        this.addUrl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].addDelivLevel;
        this.deleteUrl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].deleteDelivLevel;
        this.editUrl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].editDelivLevel;
    }
    delOptDataService.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else if (error.status != 0) {
            err = error.error;
        }
        else {
            err = src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_6__["comments"].networkError;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
    };
    ;
    delOptDataService.prototype.getDelivOptData = function () {
        return this.http.get(this.geturl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    delOptDataService.prototype.addDelivOptData = function (delivobj) {
        return this.http.post(this.addUrl, delivobj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    delOptDataService.prototype.editDelivOptData = function (delivobj) {
        return this.http.post(this.editUrl, delivobj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    delOptDataService.prototype.remove = function (delivobj) {
        return this.http.post(this.deleteUrl, delivobj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    delOptDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], delOptDataService);
    return delOptDataService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/delivery-options/models/intervalTime.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/delivery-options/models/intervalTime.ts ***!
  \*****************************************************************************/
/*! exports provided: time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
var time = {
    intervalTime: 1000 * 60
};


/***/ }),

/***/ "./src/app/modules/adminModule/delivery-options/order-options.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/adminModule/delivery-options/order-options.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexcontainer{\n    \n    display:flex;\n    justify-content:space-around;\n}\n\n#ordercontainer{\n    margin:1rem;\n\n}\n\n.btncss{\n    width:100%;\n    margin-top:0.5rem;\n    padding:5px;\n}\n\n#orderdata{\n    min-width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9kZWxpdmVyeS1vcHRpb25zL29yZGVyLW9wdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksWUFBWTs7Q0FFZjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvZGVsaXZlcnktb3B0aW9ucy9vcmRlci1vcHRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGNvbnRhaW5lcntcbiAgICBcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbn1cblxuI29yZGVyY29udGFpbmVye1xuICAgIG1hcmdpbjoxcmVtO1xuXG59XG5cbi5idG5jc3N7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tdG9wOjAuNXJlbTtcbiAgICBwYWRkaW5nOjVweDtcbn1cblxuI29yZGVyZGF0YXtcbiAgICBtaW4td2lkdGg6IDcwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/delivery-options/order-options.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/adminModule/delivery-options/order-options.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='ordercontainer'>\n  <div class='flexcontainer'>\n<div>\n\n    <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Start Date\" [(ngModel)]='startorderDate'>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n</div>\n<div>\n    <mat-form-field>\n        <input matInput [matDatepicker]=\"picker2\" placeholder=\"End Date\" [(ngModel)]='endorderDate'>\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2></mat-datepicker>\n      </mat-form-field>\n</div>\n<div>\n    <button mat-raised-button color='primary' (click)='backendGetOrders()'>Get Orders</button>\n  </div>\n  </div>\n\n<div>\n  <div class='flexcontainer'>\n<div *ngIf='selectedOrder!=null' id='orderdata'>\n    <admin-current-order-data [Order]='selectedOrder' [levels]='levels'></admin-current-order-data>\n      \n          \n</div>\n<div>\n  <div *ngFor='let order of orders;let i=index' (click)='selectOrder(order)'>\n    <button mat-raised-button color='primary' class='btncss'>\n   {{order.orderId}} &nbsp; {{order.placingdate | date:'dd/MM hh:mm'}}\n   </button>\n  </div>\n\n</div>\n  </div>\n    <!-- <mat-accordion multi=\"false\">\n        <mat-expansion-panel *ngFor='let order of orders;let i=index'>\n          \n            <mat-expansion-panel-header>\n              <mat-panel-title>\n           {{order.orderId}}\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n           \n            </mat-expansion-panel>\n    </mat-accordion> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/adminModule/delivery-options/order-options.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/adminModule/delivery-options/order-options.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OrderOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderOptionsComponent", function() { return OrderOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_orderStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/orderStream */ "./src/app/modules/adminModule/delivery-options/services/orderStream.ts");
/* harmony import */ var _models_intervalTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/intervalTime */ "./src/app/modules/adminModule/delivery-options/models/intervalTime.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _globalmodel_dateFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../globalmodel/dateFormat */ "./src/app/globalmodel/dateFormat.ts");
/* harmony import */ var _deliv_opt_page_services_delivStatusCrud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../deliv-opt-page/services/delivStatusCrud */ "./src/app/modules/adminModule/deliv-opt-page/services/delivStatusCrud.ts");







var OrderOptionsComponent = /** @class */ (function () {
    function OrderOptionsComponent(delivlevelCrud, orderStream, dateAdapter, snackBar) {
        this.delivlevelCrud = delivlevelCrud;
        this.orderStream = orderStream;
        this.dateAdapter = dateAdapter;
        this.snackBar = snackBar;
        this.levels = null;
        this.selectedOrder = null;
        dateAdapter.setLocale('en-in');
    }
    OrderOptionsComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    OrderOptionsComponent.prototype.selectOrder = function (order) {
        this.selectedOrder = order;
    };
    OrderOptionsComponent.prototype.getDelivLevels = function () {
        var _this = this;
        this.delivlevelCrud.getDelivOptData().subscribe(function (data) {
            if (data.status == 'S') {
                console.log(data);
                _this.levels = data.dellevels;
            }
        }, function (err) {
            //console.log(err);
            if (err.message != null) {
                if (err.status == 'E' || err.status == 'EMP') {
                    _this.openSnackBar(err.message, '');
                }
            }
            else {
                _this.openSnackBar(err, '');
            }
        });
    };
    OrderOptionsComponent.prototype.backendGetOrders = function () {
        var _this = this;
        this.orderStream.getOrder({ beginDate: this.startorderDate, endDate: this.endorderDate }).subscribe(function (data) {
            if (data.status == 'S') {
                _this.orders = data.orders;
            }
        }, function (err) {
            if (err.message != null) {
                _this.openSnackBar(err.message, '');
            }
            else {
                _this.openSnackBar(err, '');
            }
        });
    };
    OrderOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDelivLevels();
        var date = new Date();
        this.startorderDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        this.endorderDate = new Date(Date.now());
        this.backendGetOrders();
        this.intervalid = setInterval(function () {
            _this.backendGetOrders();
            console.log(' i m here');
        }, _models_intervalTime__WEBPACK_IMPORTED_MODULE_3__["time"].intervalTime);
    };
    OrderOptionsComponent.prototype.ngOnDestroy = function () {
        if (this.intervalid) {
            clearInterval(this.intervalid);
        }
    };
    OrderOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-options',
            template: __webpack_require__(/*! ./order-options.component.html */ "./src/app/modules/adminModule/delivery-options/order-options.component.html"),
            providers: [_services_orderStream__WEBPACK_IMPORTED_MODULE_2__["orderStream"], { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _globalmodel_dateFormat__WEBPACK_IMPORTED_MODULE_5__["DateFormat"] }, _deliv_opt_page_services_delivStatusCrud__WEBPACK_IMPORTED_MODULE_6__["delOptDataService"]],
            styles: [__webpack_require__(/*! ./order-options.component.css */ "./src/app/modules/adminModule/delivery-options/order-options.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_deliv_opt_page_services_delivStatusCrud__WEBPACK_IMPORTED_MODULE_6__["delOptDataService"], _services_orderStream__WEBPACK_IMPORTED_MODULE_2__["orderStream"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], OrderOptionsComponent);
    return OrderOptionsComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/delivery-options/services/orderStream.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/adminModule/delivery-options/services/orderStream.ts ***!
  \******************************************************************************/
/*! exports provided: orderStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderStream", function() { return orderStream; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");
/* harmony import */ var src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/globalmodel/comments */ "./src/app/globalmodel/comments.ts");








var orderStream = /** @class */ (function () {
    function orderStream(http) {
        this.http = http;
        this.streamurl = _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].streamUrl;
    }
    orderStream.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else if (error.status != 0) {
            err = error.error;
        }
        else {
            err = src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__["comments"].networkError;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
    };
    ;
    orderStream.prototype.getOrder = function (orderdateobj) {
        // return Observable.create((observer)=>{
        //     let eventSource = new EventSource(this.streamurl);
        //     eventSource.onmessage=(event)=>{
        //         this.zone.run(()=>{
        //             observer.next(event);
        //         })
        //         eventSource.onerror=(err)=>{
        //             this.zone.run(()=>{
        //                 observer.error(err);
        //             })
        //         }
        //     }
        // })
        return this.http.post(this.streamurl, { date: orderdateobj }, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_6__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    orderStream = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], orderStream);
    return orderStream;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/employeeDAO/employeeData.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/adminModule/employeeDAO/employeeData.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexcontainer{\n    display: flex;\n    justify-content: space-between;\n}\n\n.imagesection{\n    display: flex;\n    justify-content: space-between;\n}\n\n.imagesection img{\n  width:100%;\n}\n\n.approved{\n    color:green;\n    text-align: justify;\n}\n\n.imagesection .imagecontainer{\nmargin-right: 0.5rem;\n}\n\n.imagesection .imagecontainer .image{\nwidth:150px;\nheight: 100%;\noverflow:hidden;\n}\n\n.imagesection .imagecontainer .image img{\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 100%;\n}\n\n.unapproved{\n    color:red;\n    text-align: justify;\n}\n\n.userdetails{\ntext-align: left;\n}\n\n#buttons{\n    margin-top:1rem;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9lbXBsb3llZURBTy9lbXBsb3llZURhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7Q0FDbEM7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0NBQ2xDOztBQUNEO0VBQ0UsV0FBVztDQUNaOztBQUVEO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtDQUN2Qjs7QUFDRDtBQUNBLHFCQUFxQjtDQUNwQjs7QUFDRDtBQUNBLFlBQVk7QUFDWixhQUFhO0FBQ2IsZ0JBQWdCO0NBQ2Y7O0FBQ0Q7SUFDSSxxQkFBa0I7T0FBbEIsa0JBQWtCO0lBQ2xCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0NBQ3ZCOztBQUVEO0FBQ0EsaUJBQWlCO0NBQ2hCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9lbXBsb3llZURBTy9lbXBsb3llZURhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4Y29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaW1hZ2VzZWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmltYWdlc2VjdGlvbiBpbWd7XG4gIHdpZHRoOjEwMCU7XG59XG5cbi5hcHByb3ZlZHtcbiAgICBjb2xvcjpncmVlbjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLmltYWdlc2VjdGlvbiAuaW1hZ2Vjb250YWluZXJ7XG5tYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5pbWFnZXNlY3Rpb24gLmltYWdlY29udGFpbmVyIC5pbWFnZXtcbndpZHRoOjE1MHB4O1xuaGVpZ2h0OiAxMDAlO1xub3ZlcmZsb3c6aGlkZGVuO1xufVxuLmltYWdlc2VjdGlvbiAuaW1hZ2Vjb250YWluZXIgLmltYWdlIGltZ3tcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi51bmFwcHJvdmVke1xuICAgIGNvbG9yOnJlZDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udXNlcmRldGFpbHN7XG50ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jYnV0dG9uc3tcbiAgICBtYXJnaW4tdG9wOjFyZW07XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/employeeDAO/employeeData.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/employeeDAO/employeeData.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n        <mat-expansion-panel >\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n                <div >\n             {{index+1}}. {{ user.name}}\n             </div>\n            \n            </mat-panel-title>\n            <mat-panel-description>\n                <div>\n                    <span class='approved' *ngIf='user.isVerified==true'><mat-icon>done</mat-icon>  Verified Employee</span>\n                    <span class='unapproved' *ngIf='user.isVerified==false'><mat-icon>clear</mat-icon>  Verified Employee</span>\n                  </div>\n              </mat-panel-description>\n              </mat-expansion-panel-header>\n              <ng-template matExpansionPanelContent>\n          <div class='flexcontainer'>\n            <div class='userdetails'>\n              <div>Name: {{user.name |uppercase}}</div>\n              <div>Mobile No.: {{user.mobile_no}};</div>\n            <div>Date Of Birth: {{user.date_of_birth | uppercase}};</div>\n            <div>Email Address:{{user.email }}</div>\n            <div>Gender:{{user.gender | uppercase}}</div>\n            <div>Qualification:{{user.qualification |uppercase}}</div>\n            <div>Employee Type:{{user.typeEmployee | uppercase}}</div>\n            </div>\n                <div class='imagesection'>\n                  <div class=\"imagecontainer\" *ngFor='let keys of keyArray ;let i=index' >\n                    <div class='image' *ngIf='imagesArray[keys]!=null' (click)='openimagedialog(imagesArray[keys])' >\n             \n                <div>{{keys | uppercase}}</div>\n                <img [src]='imagesArray[keys]' alt='keys' >\n             \n              </div>\n            </div>\n                </div>\n          </div>\n          <div id='buttons'>\n              <button *ngIf='user.isVerified==false' mat-raised-button color='accent' (click)='verify(user)'>VERIFY</button>\n              <button *ngIf='user.isVerified==true' mat-raised-button color='accent' (click)='unverify(user)'>UNVERIFY</button>\n              </div>\n              </ng-template>\n              </mat-expansion-panel>\n            \n            </mat-accordion>"

/***/ }),

/***/ "./src/app/modules/adminModule/employeeDAO/employeeData.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/adminModule/employeeDAO/employeeData.component.ts ***!
  \***************************************************************************/
/*! exports provided: EmployeeDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDataComponent", function() { return EmployeeDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_getImagesUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/getImagesUrl */ "./src/app/modules/adminModule/employeeDAO/services/getImagesUrl.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _imagedialog_imagedialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imagedialog/imagedialog.component */ "./src/app/modules/adminModule/employeeDAO/imagedialog/imagedialog.component.ts");





var EmployeeDataComponent = /** @class */ (function () {
    function EmployeeDataComponent(dialog, getImagesUrl) {
        this.dialog = dialog;
        this.getImagesUrl = getImagesUrl;
        this.verification = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unverification = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imagesUrl = {};
    }
    EmployeeDataComponent.prototype.ngOnInit = function () {
        this.imagesArray = this.user.ImageUrls[0];
        this.keyArray = Object.keys(this.imagesArray).filter(function (arrayelement) { return arrayelement != '_id'; });
        this.getImageUrls();
    };
    EmployeeDataComponent.prototype.getImageUrls = function () {
        var _this = this;
        var obj = { 'mobile_no': this.user.mobile_no, 'keyArray': this.keyArray };
        this.getImagesUrl.getImagesUrl(obj).subscribe(function (data) {
            if (data != null) {
                _this.imagesUrl = data.Images;
            }
        }, function (err) {
            console.log(err);
        });
    };
    EmployeeDataComponent.prototype.verify = function (user) {
        // this.user.isVerified=true;
        this.verification.emit(user);
    };
    EmployeeDataComponent.prototype.unverify = function (user) {
        //this.user.isVerified=false;
        this.unverification.emit(user);
    };
    EmployeeDataComponent.prototype.openimagedialog = function (image) {
        var dialogRef = this.dialog.open(_imagedialog_imagedialog_component__WEBPACK_IMPORTED_MODULE_4__["ImagedialogComponent"], {
            width: '500px',
            data: image
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeeDataComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeeDataComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeeDataComponent.prototype, "verification", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeeDataComponent.prototype, "unverification", void 0);
    EmployeeDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employeeData',
            template: __webpack_require__(/*! ./employeeData.component.html */ "./src/app/modules/adminModule/employeeDAO/employeeData.component.html"),
            providers: [_services_getImagesUrl__WEBPACK_IMPORTED_MODULE_2__["getImagesUrl"]],
            styles: [__webpack_require__(/*! ./employeeData.component.css */ "./src/app/modules/adminModule/employeeDAO/employeeData.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _services_getImagesUrl__WEBPACK_IMPORTED_MODULE_2__["getImagesUrl"]])
    ], EmployeeDataComponent);
    return EmployeeDataComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/employeeDAO/imagedialog/imagedialog.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/adminModule/employeeDAO/imagedialog/imagedialog.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#imagecontainer{\n    margin:0.1rem;\n    width:100%;\noverflow: hidden;\n}\n\n#imagecontainer img{\nwidth:100%;\n-o-object-fit: cover;\n   object-fit: cover;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9lbXBsb3llZURBTy9pbWFnZWRpYWxvZy9pbWFnZWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZixpQkFBaUI7Q0FDaEI7O0FBRUQ7QUFDQSxXQUFXO0FBQ1gscUJBQWtCO0dBQWxCLGtCQUFrQjs7Q0FFakIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluTW9kdWxlL2VtcGxveWVlREFPL2ltYWdlZGlhbG9nL2ltYWdlZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1hZ2Vjb250YWluZXJ7XG4gICAgbWFyZ2luOjAuMXJlbTtcbiAgICB3aWR0aDoxMDAlO1xub3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2ltYWdlY29udGFpbmVyIGltZ3tcbndpZHRoOjEwMCU7XG5vYmplY3QtZml0OiBjb3ZlcjtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/employeeDAO/imagedialog/imagedialog.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/adminModule/employeeDAO/imagedialog/imagedialog.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id='imagecontainer'>\n    <img [src]='data'>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/adminModule/employeeDAO/imagedialog/imagedialog.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/adminModule/employeeDAO/imagedialog/imagedialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ImagedialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagedialogComponent", function() { return ImagedialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ImagedialogComponent = /** @class */ (function () {
    function ImagedialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ImagedialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ImagedialogComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    ImagedialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-imagedialog',
            template: __webpack_require__(/*! ./imagedialog.component.html */ "./src/app/modules/adminModule/employeeDAO/imagedialog/imagedialog.component.html"),
            styles: [__webpack_require__(/*! ./imagedialog.component.css */ "./src/app/modules/adminModule/employeeDAO/imagedialog/imagedialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ImagedialogComponent);
    return ImagedialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/employeeDAO/services/getImagesUrl.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/adminModule/employeeDAO/services/getImagesUrl.ts ***!
  \**************************************************************************/
/*! exports provided: getImagesUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImagesUrl", function() { return getImagesUrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var getImagesUrl = /** @class */ (function () {
    function getImagesUrl(http) {
        this.http = http;
        this.url = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].localgetImagesUrl;
    }
    getImagesUrl.prototype.handleError = function (error) {
        console.log(error);
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else {
            err = 'BackendError';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
    };
    ;
    getImagesUrl.prototype.getImagesUrl = function (object) {
        return this.http.post(this.url, object, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    getImagesUrl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], getImagesUrl);
    return getImagesUrl;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/footer-crud/footer-crud.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/adminModule/footer-crud/footer-crud.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvZm9vdGVyLWNydWQvZm9vdGVyLWNydWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/adminModule/footer-crud/footer-crud.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/adminModule/footer-crud/footer-crud.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-align-tabs=\"center\">\n    <mat-tab label=\"About Us\"> <abtCrud></abtCrud></mat-tab>\n    <mat-tab label=\"Footer Nav\"><footerNavCrud></footerNavCrud></mat-tab>\n   \n  </mat-tab-group>"

/***/ }),

/***/ "./src/app/modules/adminModule/footer-crud/footer-crud.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/adminModule/footer-crud/footer-crud.component.ts ***!
  \**************************************************************************/
/*! exports provided: FooterCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterCrudComponent", function() { return FooterCrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterCrudComponent = /** @class */ (function () {
    function FooterCrudComponent() {
    }
    FooterCrudComponent.prototype.ngOnInit = function () {
    };
    FooterCrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-crud',
            template: __webpack_require__(/*! ./footer-crud.component.html */ "./src/app/modules/adminModule/footer-crud/footer-crud.component.html"),
            styles: [__webpack_require__(/*! ./footer-crud.component.css */ "./src/app/modules/adminModule/footer-crud/footer-crud.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterCrudComponent);
    return FooterCrudComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/footernav/footernav.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/adminModule/footernav/footernav.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nform {\n    margin: 1rem;\n    background-color:#034f84;\n    overflow:hidden;\n    padding-bottom: 100px;\n}\nform h2 {\n    color:white;\n    /* margin:10px 15px; */\n    letter-spacing: 1px;\n    letter-spacing: 2.5px;\n    margin:25px 35px;\n    text-shadow:2px 4px black;\n}\ntextarea {\n    width:100%;\n    height:100px;\n    resize: none;\n    font-size:13.5px;\n    line-height: 25px;\n    letter-spacing: 0.2px;\n}\nmat-form-field {\n    width:80%;\n    margin-left:20px;\n    margin-bottom:20px;\n    margin-top:25px;\n    padding:15px 20px;\n    resize: none;\n    background-color:whitesmoke;\n    border:1px solid white;\n    border-radius :5px;\n}\n.titleMat {\n    width:93% !important;\n    /* margin:50px 10px; */\n    resize: none;\n    background-color:whitesmoke;\n    border:1px solid white;\n    border-radius :5px;\n}\n.addButton {\n    margin-left:2.3rem;\n}\nbutton {\n    margin:15px 35px;\n}\n.matField {\n    width:70%;\n}\n.buttonDiv {\n    display:flex;\n    align-items: center !important; \n    justify-content: center !important;\n    margin-top:55px;\n}\n.containerPara {\n    display:flex !important;\n    justify-content: space-around;\n}\n.submitButton {\n    background-color:whitesmoke;\n    color:black;\n    text-align: center;\n}\n.buttonInside {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9mb290ZXJuYXYvZm9vdGVybmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLFVBQVU7Q0FDYjtBQUNEO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSx3QkFBd0I7SUFDeEIsOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluTW9kdWxlL2Zvb3Rlcm5hdi9mb290ZXJuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZm9ybSB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAzNGY4NDtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuZm9ybSBoMiB7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgLyogbWFyZ2luOjEwcHggMTVweDsgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbiAgICBtYXJnaW46MjVweCAzNXB4O1xuICAgIHRleHQtc2hhZG93OjJweCA0cHggYmxhY2s7XG59XG50ZXh0YXJlYSB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwcHg7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGZvbnQtc2l6ZToxMy41cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOjgwJTtcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206MjBweDtcbiAgICBtYXJnaW4tdG9wOjI1cHg7XG4gICAgcGFkZGluZzoxNXB4IDIwcHg7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXMgOjVweDtcbn1cbi50aXRsZU1hdCB7XG4gICAgd2lkdGg6OTMlICFpbXBvcnRhbnQ7XG4gICAgLyogbWFyZ2luOjUwcHggMTBweDsgKi9cbiAgICByZXNpemU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1cyA6NXB4O1xufVxuLmFkZEJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6Mi4zcmVtO1xufVxuYnV0dG9uIHtcbiAgICBtYXJnaW46MTVweCAzNXB4O1xufVxuLm1hdEZpZWxkIHtcbiAgICB3aWR0aDo3MCU7XG59XG4uYnV0dG9uRGl2IHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6NTVweDtcbn1cbi5jb250YWluZXJQYXJhIHtcbiAgICBkaXNwbGF5OmZsZXggIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5zdWJtaXRCdXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcbiAgICBjb2xvcjpibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnV0dG9uSW5zaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/adminModule/footernav/footernav.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/adminModule/footernav/footernav.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='footerForm!=null'>\n<form [formGroup]=\"footerForm\" (ngSubmit)=\"onsubmit(footerForm.value)\">\n    <h2>Footer CRUD</h2>\n    <div formArrayName=\"titleFooter\" *ngFor=\"let listObject of footerForm.controls.titleFooter.controls; let i = index;\">\n        <div [formGroupName]=\"i\">\n          <div>\n            <mat-form-field class=\"example-full-width titleMat\">\n              <textarea matInput placeholder=\"Title Name\" formControlName=\"titleName\"></textarea>\n              </mat-form-field>\n          </div>\n          <div>\n            <div formArrayName='titleList' *ngFor='let listItem of listObject.controls.titleList.controls;let j=index'>\n             <div>\n               <div [formGroupName]='j' class=\"containerPara\">\n                 <div class=\"matField\">\n                    <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"List Name\" formControlName=\"listName\">\n                    </mat-form-field>\n                 </div>\n                 <div class=\"matField\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"List Link\" formControlName=\"listLink\">\n                        </mat-form-field>\n\n                 </div>\n                 <div>\n<button class=\"buttonDiv\" color='accent' (click)='deleteListItem(listObject,j)' mat-raised-button>Delete List Item</button>\n                 </div>\n\n               </div>\n             </div>                    \n            </div>\n            <div>\n              <button color=\"accent\" type=\"button\" (click)='addListItem(listObject)' mat-raised-button>Add List Item</button>\n            </div>\n          </div>\n          <div class=\"buttonDiv\">\n            <button mat-raised-button type=\"button\" color='accent' (click)='deleteTitle(i)'>Delete Title</button>\n          </div>\n        </div>\n    </div>\n    <div>\n      <button mat-raised-button type=\"button\" color='accent' (click)='addList()'>Add New Title</button>\n    </div>\n    <div class=\"buttonInside\">\n        <button mat-raised-button type=\"submit\" color='accent' [disabled]=\"footerForm.invalid\">Save</button>\n    </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/footernav/footernav.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/adminModule/footernav/footernav.component.ts ***!
  \**********************************************************************/
/*! exports provided: FooternavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooternavComponent", function() { return FooternavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_footerNavData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/footerNavData */ "./src/app/modules/adminModule/footernav/services/footerNavData.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


// import {FormGroup,FormControl} from '@angular/forms';



var FooternavComponent = /** @class */ (function () {
    function FooternavComponent(fb, footerNavService, snackBar) {
        this.fb = fb;
        this.footerNavService = footerNavService;
        this.snackBar = snackBar;
        this.listObjectArr = [];
        this.i = 0;
        this.listLink = [];
        this.aboutDataOfObject = {
            titleFooter: ['']
        };
    }
    // "titleFooter":[{
    //   "titleName":"bigbasket",
    //   "titleList":[{
    //     "listName":"About Us",
    //     "listLink":"https://www.bigbasket.com/about-us/?nc=bt"
    //   },{
    //     "listName":"In News",
    //     "listLink":"https://www.bigbasket.com/in-media/?nc=bt"
    //   },{
    //     "listName":"Green bigbasket",
    //     "listLink":"https://www.bigbasket.com/green-bigbasket/?nc=bt"
    //   },{
    //     "listName":"Privacy Policy",
    //     "listLink":"https://www.bigbasket.com/privacy-policy/?nc=bt"
    //   },{
    //     "listName":"Affiliate",
    //     "listLink":"https://www.bigbasket.com/affiliate-index/?nc=bt"
    //   },{
    //     "listName":"Terms and Conditions",
    //     "listLink":"https://www.bigbasket.com/terms-and-conditions/?nc=bt"
    //   },{
    //     "listName":"Careers At bigbasket",
    //     "listLink":"https://careers.bigbasket.com/?nc=bt"
    //   }]
    // },
    // {
    //   "titleName":"help",
    //   "titleList":[{
    //     "listName":"FAQs",
    //     "listLink":"https://www.bigbasket.com/faq/?nc=bt"
    //   },{
    //     "listName":"Contact Us",
    //     "listLink":"https://www.bigbasket.com/contact/?nc=bt"
    //   },{
    //     "listName":"bb Wallet FAQs",
    //     "listLink":"https://www.bigbasket.com/bb-Wallet-faq/"
    //   },{
    //     "listName":"bb Wallet T&Cs",
    //     "listLink":"https://www.bigbasket.com/bb-wallet-terms-and-conditions/"
    //   },{
    //     "listName":"Vendor Connect",
    //     "listLink":"https://docs.google.com/forms/d/e/1FAIpQLSd-zgSi9QcAO8zIUj8ottZINsqlkss_x-NkzXc7bI68furfdg/viewform"
    //   }]
    // }
    // ]
    FooternavComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    FooternavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.footerNavService.getData().subscribe(function (data) {
            if (data.status == 'S') {
                _this.aboutDataOfObject = data.data;
                _this.initializeArrayOfList();
                _this.createForm();
            }
            else {
                _this.initializeArrayOfList();
                _this.createForm();
            }
        }, function (err) {
            _this.initializeArrayOfList();
            _this.createForm();
        });
    };
    FooternavComponent.prototype.createForm = function () {
        this.footerForm = this.fb.group({
            titleFooter: this.fb.array(this.listObjectArr)
        });
    };
    FooternavComponent.prototype.initTitleObject = function (object, array) {
        if (object != '') {
            return this.fb.group({
                titleName: object.titleName,
                titleList: this.fb.array(array)
            });
        }
        else {
            // console.log('i m here')
            return this.fb.group({
                titleName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                titleList: this.fb.array(this.returnnewArray())
            });
        }
    };
    FooternavComponent.prototype.initializeArrayOfList = function () {
        var _this = this;
        if (this.aboutDataOfObject != null) {
            this.aboutDataOfObject.titleFooter.forEach(function (dataObject) {
                var j = 0;
                var arrays = [];
                if (dataObject != '') {
                    dataObject['titleList'].forEach(function (titledesp) {
                        arrays[j] = _this.initTitleList(titledesp);
                        j++;
                    });
                }
                _this.listObjectArr.push(_this.initTitleObject(dataObject, arrays));
            });
        }
        //console.log(this.listObjectArr);
    };
    FooternavComponent.prototype.returnnewArray = function () {
        var array = [];
        array.push(this.initTitleList(''));
        return array;
    };
    FooternavComponent.prototype.initTitleList = function (arrayOfObject) {
        if (arrayOfObject != '') {
            return this.fb.group({
                listName: [arrayOfObject.listName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                listLink: [arrayOfObject.listLink, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
        else {
            return this.fb.group({
                listName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                listLink: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
    };
    FooternavComponent.prototype.deleteTitle = function (index) {
        (this.footerForm.get('titleFooter')).removeAt(index);
    };
    FooternavComponent.prototype.deleteListItem = function (listObject, index) {
        (listObject.get('titleList')).removeAt(index);
    };
    FooternavComponent.prototype.addListItem = function (listobject) {
        (listobject.get('titleList')).push(this.initTitleList(''));
    };
    FooternavComponent.prototype.addList = function () {
        (this.footerForm.controls.titleFooter).push(this.initTitleObject('', ''));
    };
    FooternavComponent.prototype.onsubmit = function (form) {
        var _this = this;
        // console.log(form);
        this.footerNavService.uploadForm(form).subscribe(function (data) {
            if (data.isPushed == true) {
                _this.openSnackBar('Successfully Added', '');
            }
        });
    };
    FooternavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footerNavCrud',
            template: __webpack_require__(/*! ./footernav.component.html */ "./src/app/modules/adminModule/footernav/footernav.component.html"),
            providers: [_services_footerNavData__WEBPACK_IMPORTED_MODULE_3__["FooterNavService"]],
            styles: [__webpack_require__(/*! ./footernav.component.css */ "./src/app/modules/adminModule/footernav/footernav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_footerNavData__WEBPACK_IMPORTED_MODULE_3__["FooterNavService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], FooternavComponent);
    return FooternavComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/footernav/services/footerNavData.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/footernav/services/footerNavData.ts ***!
  \*************************************************************************/
/*! exports provided: FooterNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterNavService", function() { return FooterNavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");




//import { httpOptions } from "../../../../globalmodel/headerDetails";



var FooterNavService = /** @class */ (function () {
    function FooterNavService(http) {
        this.http = http;
        this.pushUrl = _globalmodel_url__WEBPACK_IMPORTED_MODULE_5__["url"].setFooterNav;
        this.getUrl = _globalmodel_url__WEBPACK_IMPORTED_MODULE_5__["url"].getFooterNav;
    }
    FooterNavService.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else {
            err = 'BackendError';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
    };
    ;
    FooterNavService.prototype.uploadForm = function (data) {
        return this.http.post(this.pushUrl, data, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_6__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ;
    FooterNavService.prototype.getData = function () {
        return this.http.get(this.getUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FooterNavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FooterNavService);
    return FooterNavService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/adminModule/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\n    display:block;\n}\n\n.signin{\n    margin:1rem;\n}\n\n.flexcontainer{\n    display:flex;\n    justify-content: center;\n    margin-top:1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XG4gICAgZGlzcGxheTpibG9jaztcbn1cblxuLnNpZ25pbntcbiAgICBtYXJnaW46MXJlbTtcbn1cblxuLmZsZXhjb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6MXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/adminModule/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"flexcontainer\">\n<mat-card id=\"login_container\">\n      <mat-card-header>Sign In</mat-card-header>\n    <mat-card-content>\n    <div>\n\n        <form [formGroup]=\"loginDetails\" (ngSubmit)=\"onLogin(loginDetails.value)\" class=\"signin\">\n                <mat-form-field appearance=\"outline\">\n                        <mat-label>Id</mat-label>\n                  <input matInput placeholder=\"Username\" formControlName=\"id\">\n                  <mat-error *ngFor=\"let validation of error_messages.id\">\n                        <mat-error class=\"error-message\" *ngIf=\"loginDetails.get('id').hasError(validation.type) && \n                        (loginDetails.get('id').dirty || \n                        loginDetails.get('id').touched)\">{{validation.message}}</mat-error>\n                         </mat-error>\n                </mat-form-field>\n           \n            <mat-form-field appearance=\"outline\">\n                     <mat-label>Name</mat-label>\n               <input matInput placeholder=\"Username\" formControlName=\"name\">\n               <mat-error *ngFor=\"let validation of error_messages.name\">\n                     <mat-error class=\"error-message\" *ngIf=\"loginDetails.get('name').hasError(validation.type) && \n                     (loginDetails.get('name').dirty || \n                     loginDetails.get('name').touched)\">{{validation.message}}</mat-error>\n                      </mat-error>\n             </mat-form-field>\n           \n             <mat-form-field appearance =\"outline\">\n                 <mat-label>Password</mat-label>\n               <input matInput placeholder=\"Password\" formControlName=\"password\">\n               <mat-error *ngFor=\"let validation of error_messages.pwd\">\n                     <mat-error class=\"error-message\" *ngIf=\"loginDetails.get('password').hasError(validation.type) && \n                     (loginDetails.get('password').dirty || \n                     loginDetails.get('password').touched)\">{{validation.message}}</mat-error>\n                      </mat-error>\n               \n             </mat-form-field>\n     \n             <button mat-raised-button [disabled]=\"loginDetails.invalid\" color=\"accent\">Sign In</button>\n         </form>\n             \n           </div>\n           </mat-card-content>\n           </mat-card>\n           </div>"

/***/ }),

/***/ "./src/app/modules/adminModule/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/adminModule/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: adminloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminloginComponent", function() { return adminloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _globalServices_Validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globalServices/Validation */ "./src/app/globalServices/Validation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_dologin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/dologin */ "./src/app/modules/adminModule/login/service/dologin.ts");






var adminloginComponent = /** @class */ (function () {
    function adminloginComponent(geterrormessage, router, dologin) {
        this.geterrormessage = geterrormessage;
        this.router = router;
        this.dologin = dologin;
        this.error_messages = this.geterrormessage.geterror();
    }
    adminloginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('id_token') != '-1' && localStorage.getItem('id_token') != null) {
            this.router.navigate(['admin/categorycrud']);
        }
        this.loginDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*[0-9])/)])
        });
    };
    adminloginComponent.prototype.onLogin = function (form) {
        var _this = this;
        this.dologin.login(form).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                if (data.token != null) {
                    localStorage.setItem('id_token', data.token);
                    _this.router.navigate(['admin/categorycrud']);
                }
            }
        }, function (err) {
            alert(err);
        });
    };
    adminloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'adminlogin',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/adminModule/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/adminModule/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globalServices_Validation__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_dologin__WEBPACK_IMPORTED_MODULE_5__["Dologin"]])
    ], adminloginComponent);
    return adminloginComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/login/service/dologin.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/adminModule/login/service/dologin.ts ***!
  \**************************************************************/
/*! exports provided: Dologin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dologin", function() { return Dologin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var Dologin = /** @class */ (function () {
    function Dologin(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].locallogin;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    Dologin.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = 'Front End Error';
        }
        else if (error.status != 0) {
            // server-side error
            errorMessage = error.error;
        }
        else {
            errorMessage = 'Network Error';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    };
    ;
    Dologin.prototype.login = function (details) {
        return this.http.post(this.url, details, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ;
    Dologin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Dologin);
    return Dologin;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/maker-checker/maker-checker.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/adminModule/maker-checker/maker-checker.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvbWFrZXItY2hlY2tlci9tYWtlci1jaGVja2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/maker-checker/maker-checker.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/adminModule/maker-checker/maker-checker.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-tab-group mat-align-tabs=\"center\">\n    <mat-tab label=\"Unverified Employees\"> \n        <div>\n        <div *ngFor='let user of unverifiedUserData;let i = index'>\n      <employeeData [user]='user' [index]='i' (verification)='verifyTheUser($event)' (unverification)='unverifyTheUser($event)'></employeeData>\n        </div>          \n      </div>\n      \n    </mat-tab>\n    <mat-tab label=\"Verified Employees\"> \n        <div>\n            <div *ngFor='let user of verifiedUserData;let i = index'>\n          <employeeData [user]='user' [index]='i' (verification)='verifyTheUser($event)' (unverification)='unverifyTheUser($event)'></employeeData>\n            </div>          \n          </div>\n           </mat-tab>\n    </mat-tab-group>\n"

/***/ }),

/***/ "./src/app/modules/adminModule/maker-checker/maker-checker.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/adminModule/maker-checker/maker-checker.component.ts ***!
  \******************************************************************************/
/*! exports provided: MakerCheckerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakerCheckerComponent", function() { return MakerCheckerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_getVerifiedEmployees__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/getVerifiedEmployees */ "./src/app/modules/adminModule/maker-checker/services/getVerifiedEmployees.ts");
/* harmony import */ var _services_getUnverifiedEmployees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/getUnverifiedEmployees */ "./src/app/modules/adminModule/maker-checker/services/getUnverifiedEmployees.ts");
/* harmony import */ var _services_Verification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/Verification */ "./src/app/modules/adminModule/maker-checker/services/Verification.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var MakerCheckerComponent = /** @class */ (function () {
    function MakerCheckerComponent(getUnverifiedUsers, getVerifiedUser, verification, snackBar, route) {
        this.getUnverifiedUsers = getUnverifiedUsers;
        this.getVerifiedUser = getVerifiedUser;
        this.verification = verification;
        this.snackBar = snackBar;
        this.route = route;
    }
    MakerCheckerComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    MakerCheckerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUnverifiedUsers.getUsersData().subscribe(function (data) {
            _this.unverifiedUserData = data.users;
        }, function (err) {
            _this.openSnackBar(err, '');
        });
        this.getVerifiedUser.getUsersData().subscribe(function (data) {
            _this.verifiedUserData = data.users;
        }, function (err) {
            _this.openSnackBar(err, '');
        });
    };
    MakerCheckerComponent.prototype.verifyTheUser = function (user) {
        var _this = this;
        this.verification.verifyUser({ 'id': user.id }).subscribe(function (data) {
            if (data != null) {
                if (data.isVerified == true) {
                    user.isVerified = true;
                    _this.openSnackBar('User Is Verified', '');
                    window.location.reload();
                }
                else {
                    _this.openSnackBar('Some Error Occured', '');
                }
            }
        }, function (err) {
            _this.openSnackBar(err, '');
        });
    };
    MakerCheckerComponent.prototype.unverifyTheUser = function (user) {
        var _this = this;
        this.verification.unverifyUser({ 'id': user.id }).subscribe(function (data) {
            if (data != null) {
                if (data.isVerified == false) {
                    _this.openSnackBar('User Is Unverified', '');
                    window.location.reload();
                }
                else {
                    _this.openSnackBar('Some Error Occured', '');
                }
            }
        }, function (err) {
            _this.openSnackBar(err, '');
        });
    };
    MakerCheckerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maker-checker',
            template: __webpack_require__(/*! ./maker-checker.component.html */ "./src/app/modules/adminModule/maker-checker/maker-checker.component.html"),
            providers: [_services_getUnverifiedEmployees__WEBPACK_IMPORTED_MODULE_3__["GetUnverifiedUsers"], _services_Verification__WEBPACK_IMPORTED_MODULE_4__["Verification"], _services_getVerifiedEmployees__WEBPACK_IMPORTED_MODULE_2__["GetVerifiedUsers"]],
            styles: [__webpack_require__(/*! ./maker-checker.component.css */ "./src/app/modules/adminModule/maker-checker/maker-checker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_getUnverifiedEmployees__WEBPACK_IMPORTED_MODULE_3__["GetUnverifiedUsers"],
            _services_getVerifiedEmployees__WEBPACK_IMPORTED_MODULE_2__["GetVerifiedUsers"], _services_Verification__WEBPACK_IMPORTED_MODULE_4__["Verification"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], MakerCheckerComponent);
    return MakerCheckerComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/maker-checker/services/Verification.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/adminModule/maker-checker/services/Verification.ts ***!
  \****************************************************************************/
/*! exports provided: Verification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verification", function() { return Verification; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var Verification = /** @class */ (function () {
    function Verification(http) {
        this.http = http;
        this.verifyUrl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].localverifyUser;
        this.unverifyUrl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].localUnverifyUser;
    }
    Verification.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else {
            err = 'BackendError';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
    };
    ;
    Verification.prototype.verifyUser = function (object) {
        return this.http.post(this.verifyUrl, object, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    Verification.prototype.unverifyUser = function (object) {
        return this.http.post(this.unverifyUrl, object, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    Verification = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Verification);
    return Verification;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/maker-checker/services/getUnverifiedEmployees.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/adminModule/maker-checker/services/getUnverifiedEmployees.ts ***!
  \**************************************************************************************/
/*! exports provided: GetUnverifiedUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUnverifiedUsers", function() { return GetUnverifiedUsers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/globalmodel/comments */ "./src/app/globalmodel/comments.ts");








var GetUnverifiedUsers = /** @class */ (function () {
    function GetUnverifiedUsers(http) {
        this.http = http;
        this.url = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].localgetUnverifiedEmployees;
    }
    GetUnverifiedUsers.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else if (error.status != 0) {
            err = error.error;
        }
        else {
            err = src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__["comments"].networkError;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
    };
    ;
    GetUnverifiedUsers.prototype.getUsersData = function () {
        return this.http.get(this.url, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    GetUnverifiedUsers = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetUnverifiedUsers);
    return GetUnverifiedUsers;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/maker-checker/services/getVerifiedEmployees.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/adminModule/maker-checker/services/getVerifiedEmployees.ts ***!
  \************************************************************************************/
/*! exports provided: GetVerifiedUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVerifiedUsers", function() { return GetVerifiedUsers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/globalmodel/comments */ "./src/app/globalmodel/comments.ts");








var GetVerifiedUsers = /** @class */ (function () {
    function GetVerifiedUsers(http) {
        this.http = http;
        this.url = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].localgetVerifiedEmployees;
    }
    GetVerifiedUsers.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else if (error.status != 0) {
            err = error.error;
        }
        else {
            err = src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__["comments"].networkError;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
    };
    ;
    GetVerifiedUsers.prototype.getUsersData = function () {
        return this.http.get(this.url, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    GetVerifiedUsers = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetVerifiedUsers);
    return GetVerifiedUsers;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/AuthInterceptor.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/AuthInterceptor.ts ***!
  \***********************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var idToken = localStorage.getItem('id_token');
        if (idToken != '-1' && idToken != null && typeof (idToken) != undefined) {
            var clonereq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + idToken)
            });
            return next.handle(clonereq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/categoryDatabase.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/categoryDatabase.ts ***!
  \************************************************************************/
/*! exports provided: CategoryDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDatabase", function() { return CategoryDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globalServices/categorylistjson */ "./src/app/globalServices/categorylistjson.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var CategoryDatabase = /** @class */ (function () {
    function CategoryDatabase(categoryjson) {
        this.categoryjson = categoryjson;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.backendCall();
    }
    CategoryDatabase.prototype.backendCall = function () {
        var _this = this;
        this.categoryjson.jsonretrieve().subscribe(function (data) {
            if (data != null && data.length != 0) {
                _this.dataChange.next(data);
            }
            else {
                _this.dataChange.next([]);
            }
        }, function (err) {
            _this.dataChange.next([]);
        });
    };
    CategoryDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_2__["CategoryJsonretriever"]])
    ], CategoryDatabase);
    return CategoryDatabase;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/dataService.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/dataService.ts ***!
  \*******************************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    DataService.prototype.updateDataSource = function (obj) {
        this.dataSource.next(obj);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/dataStorage.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/dataStorage.ts ***!
  \*******************************************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Data = /** @class */ (function () {
    function Data() {
    }
    Data = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Data);
    return Data;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/dialogDataService.ts ***!
  \*************************************************************************/
/*! exports provided: DialogDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataService", function() { return DialogDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DialogDataService = /** @class */ (function () {
    function DialogDataService() {
        this.dialogdataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.pushdata = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    DialogDataService.prototype.updateDataSource = function (obj) {
        console.log(obj);
        this.dialogdataSource.next(obj);
    };
    DialogDataService.prototype.updatePushObj = function (obj) {
        this.pushdata.next(obj);
    };
    DialogDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogDataService);
    return DialogDataService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/imageCrud.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/imageCrud.ts ***!
  \*****************************************************************/
/*! exports provided: ImageCrud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCrud", function() { return ImageCrud; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");






var ImageCrud = /** @class */ (function () {
    function ImageCrud(http) {
        this.http = http;
    }
    ImageCrud.prototype.handleError = function (error) {
        var errorMessage = 'Network Error';
        if (error.error instanceof ErrorEvent) {
            errorMessage = 'FrontEnd Error';
        }
        else if (error.status != 0) {
            errorMessage = error.error;
        }
        else {
            errorMessage = 'Network Error';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ;
    ImageCrud.prototype.uploadFile = function (url, details) {
        return this.http.post(url, details).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ;
    ImageCrud.prototype.deleteFile = function (url, object) {
        return this.http.post(url, object, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_5__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ImageCrud = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImageCrud);
    return ImageCrud;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/modulemodels/imageObject.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/adminModule/modulemodels/imageObject.ts ***!
  \*****************************************************************/
/*! exports provided: ImageObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageObj", function() { return ImageObj; });
var ImageObj = /** @class */ (function () {
    function ImageObj() {
    }
    return ImageObj;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/order-data/order-data.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/order-data/order-data.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexcontainer{\n    display: flex;\n    justify-content: space-around;\n    margin:10px;\n}\n\n.blockcss{\n    width: 49%;\n    text-align: left;\n}\n\n::ng-deep .mat-card{\nheight:100%;\n}\n\n.cardhead{\n    background-color:#0a4592;\n    color:white;\n}\n\n.orderstatuscontainer{\n    width:100%;\n    margin-bottom: 100px;\n}\n\n.productcontainer{\n    overflow:scroll;\n}\n\n.imagecontainer{\n    width:100%;\n}\n\n.datacontainer{\ndisplay:flex;\nfont-size: 13px;\njustify-content: space-between;\n}\n\n.imagecontainer img{\n    width:100%;\n}\n\n.data{\n    text-align: right;\n}\n\n.imagesection{\nwidth:40%;\n}\n\n.datasection{\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9vcmRlci1kYXRhL29yZGVyLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtDQUNwQjs7QUFFRDtBQUNBLFlBQVk7Q0FDWDs7QUFFRDtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0NBQ3hCOztBQUdEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUNEO0lBQ0ksV0FBVztDQUNkOztBQUVEO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQiwrQkFBK0I7Q0FDOUI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7QUFDQSxVQUFVO0NBQ1Q7O0FBRUQ7SUFDSSxXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluTW9kdWxlL29yZGVyLWRhdGEvb3JkZXItZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhjb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW46MTBweDtcbn1cblxuLmJsb2NrY3Nze1xuICAgIHdpZHRoOiA0OSU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2FyZHtcbmhlaWdodDoxMDAlO1xufVxuXG4uY2FyZGhlYWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGE0NTkyO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4ub3JkZXJzdGF0dXNjb250YWluZXJ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuXG4ucHJvZHVjdGNvbnRhaW5lcntcbiAgICBvdmVyZmxvdzpzY3JvbGw7XG59XG4uaW1hZ2Vjb250YWluZXJ7XG4gICAgd2lkdGg6MTAwJTtcbn1cblxuLmRhdGFjb250YWluZXJ7XG5kaXNwbGF5OmZsZXg7XG5mb250LXNpemU6IDEzcHg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbWFnZWNvbnRhaW5lciBpbWd7XG4gICAgd2lkdGg6MTAwJTtcbn1cblxuLmRhdGF7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pbWFnZXNlY3Rpb257XG53aWR0aDo0MCU7XG59XG5cbi5kYXRhc2VjdGlvbntcbiAgICB3aWR0aDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/order-data/order-data.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/adminModule/order-data/order-data.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class='flexcontainer'>\n<div class='blockcss' >\n  <mat-card>\n      <mat-card-header class='cardhead'>\n          <mat-card-title>Order Details</mat-card-title>\n         \n        </mat-card-header>\n        <div class='datacontainer'>\n  <div>Order Id:</div> <div class='data'>{{order.orderId}}</div>\n        </div>\n  <div class='datacontainer'><div> Customer Id:</div> <div class='data'>{{order.customerId}}</div></div>\n  <div class='datacontainer'> <div> Transaction Id:</div> <div class='data'>{{order.transactionId}}</div></div>\n  <div class='datacontainer'>  <div>Placing Date:</div> <div class='data'>{{order.placingdate | date:'medium'}}</div></div>\n  <div class='datacontainer'><div> Customer Name:</div> <div class='data'>{{customerName}}</div></div>\n  <div class='datacontainer'> <div> Payment: </div><div class='data'>{{order.payment}}</div></div>\n  <div class='datacontainer'> <div> Payment Method: </div><div class='data'>{{order.paymentMethod}}</div></div>\n   </mat-card>\n</div>\n<div class='blockcss'>\n<mat-card>\n    <mat-card-header class='cardhead'>\n        <mat-card-title>Delivery Address</mat-card-title>\n       \n      </mat-card-header>\n      <div class='datacontainer'> <div> Delivery Type: </div>\n      <div class='data'>{{order.delievAddress.type}}</div></div>\n  <div class='datacontainer'>\n<div>Address Id </div> <div class='data'>{{order.delievAddress.addId}}</div></div>\n<div class='datacontainer'><div> House No: </div><div class='data'>{{order.delievAddress.house_no}}</div></div>\n<div class='datacontainer'> <div> Full Address:</div> <div class='data'>{{order.delievAddress.fulladdress}}</div></div>\n    <div class='datacontainer'> <div> Area:</div> <div class='data'>{{order.delievAddress.area}}</div></div>\n    <div class='datacontainer'> <div> City:</div> <div class='data'>{{order.delievAddress.city}}</div></div>\n    <div class='datacontainer'> <div> PinCode:</div> <div class='data'>{{order.delievAddress.pincode}}</div></div>\n    <div class='datacontainer'> <div> Mobile No:</div> <div class='data'>{{order.delievAddress.mobile_no}}</div></div>\n  </mat-card>\n</div>\n\n\n</div>\n<div *ngIf='isBtnShow==true'>\n  <button mat-raised-button color='primary' (click)='getMoreData()'>..More Details</button>\n</div>\n<div *ngIf='isBtnShow==false' class='flexcontainer'>\n  <mat-card class='orderstatuscontainer' *ngIf='order.deliverystatus.standardStatus!=null && isStandardShow==true'>\n<div >\n    <div class='datacontainer'>\n  <div>\n   Pending Status:</div> <div class='data'>{{order.deliverystatus.standardStatus.pending.pendingStatus}}</div>\n   </div>\n   <div class='datacontainer'>\n   <div> Pending Message:</div> <div class='data'>{{order.deliverystatus.standardStatus.pending.pendingMessage}}</div>\n     </div>\n     <div class='datacontainer'>\n     <div>\n   Pending Level: </div><div class='data'>{{order.deliverystatus.standardStatus.pending.pendingLevel}}</div>\n   </div>\n   <div class='datacontainer'>\n   <div>\n    Pending MaxLevel:</div><div class='data'>\n        <mat-form-field>\n            <mat-label>Select an Level</mat-label>\n        <mat-select  [(value)]=\"order.deliverystatus.standardStatus.maxLevel\">\n            \n            <mat-option *ngFor=\"let level of levels\" [value]='level.maxLevel'>{{level.maxLevel}}</mat-option>\n          </mat-select>\n          </mat-form-field>\n    </div> \n  </div>\n  <div>\n    <button mat-raised-button color='accent'  (click)=\"changeLevel('standardStatus',order.deliverystatus.standardStatus)\">Change Max Level</button>\n   </div>\n   <div class='productcontainer'>\n<div *ngFor='let product of order.deliverystatus.standardStatus.orderProducts'>\n<mat-card>\n  <div class='flexcontainer'>\n    <div class='imagesection'>\n        <div class='imagecontainer'>\n          <img [src]='product.imageUrl.uri' alt=\"Product Image\">\n        </div>\n            </div>\n            \n  <div class='datasection'>\n    \n      <div class='datacontainer'>  <div >OPId:</div> <div class='data'>{{product.opId}}</div></div>\n      <div class='datacontainer'>  <div >Product Id: </div> <div class='data'>{{product.subproductId}}</div></div>\n      <div class='datacontainer'>   <div > Product Name: </div> <div class='data'>{{product.subproductName}}</div></div>\n      <div class='datacontainer'>  <div > Cost: </div> <div class='data'>Rs.{{product.subTotal}}</div></div>\n      <div class='datacontainer'>  <div > Amount:</div> <div class='data'>{{product.quantity}}{{product.suffix}}</div></div>\n      <div class='datacontainer'>  <div > Delivery Type:</div> <div class='data'>{{product.deliveryType}}</div></div>\n      <div class='datacontainer'>  <div > Start TimeSlot:</div> <div class='data'>{{product.timeSlot.startTimeSlot}}</div></div>\n      <div class='datacontainer'>   <div > \n             End Time Slot: </div> <div class='data'>{{product.timeSlot.endTimeSlot}}</div></div>\n      \n      \n     \n  </div>\n</div>\n</mat-card>\n</div>\n   </div>\n   </div>\n</mat-card>\n\n<mat-card class='orderstatuscontainer' *ngIf='order.deliverystatus.expressStatus!=null && isExpressShow==true'>\n<div >\n    <div class='datacontainer'>\n    <div>\n        Pending Status: </div> <div class='data'>{{order.deliverystatus.expressStatus.pending.pendingStatus}}</div>\n        </div>\n\n      <div class='datacontainer'>   <div> Pending Message:</div> <div class='data'>{{order.deliverystatus.expressStatus.pending.pendingMessage}}</div>\n          </div>\n          <div class='datacontainer'>   <div>\n        Pending Level:</div> <div class='data'>{{order.deliverystatus.expressStatus.pending.pendingLevel}}</div>\n        </div>\n        <div class='datacontainer'>\n        <div>\n         Pending MaxLevel:</div> <div class='data'>\n            <mat-form-field>\n                <mat-label>Select an Level</mat-label>\n            <mat-select  [(value)]=\"order.deliverystatus.expressStatus.maxLevel\">\n               \n                <mat-option *ngFor=\"let level of levels\" [value]='level.maxLevel'>{{level.maxLevel}}</mat-option>\n              </mat-select>\n              </mat-form-field>\n         </div> \n        </div>\n        <div>\n         <button mat-raised-button color='accent' (click)=\"changeLevel('expressStatus',order.deliverystatus.expressStatus)\">Change Max Level</button>\n        </div>\n   <div class='productcontainer'>\n<div *ngFor='let product of order.deliverystatus.expressStatus.orderProducts'>\n<mat-card>\n  <div class='flexcontainer'>\n    <div class='imagesection'>\n<div class='imagecontainer'>\n  <img [src]='product.imageUrl.uri' alt=\"Product Image\">\n</div>\n    </div>\n        <div class='datasection'>\n            <div class='datacontainer'>   <div >OPId:</div><div class='data'>{{product.opId}}</div></div>\n            <div class='datacontainer'>  <div >Product Id:</div> <div class='data'>{{product.subproductId}}</div></div>\n            <div class='datacontainer'>   <div > Product Name:</div><div class='data'>{{product.subproductName}}</div></div>\n            <div class='datacontainer'>   <div > Cost: Rs.</div><div class='data'>{{product.subTotal}}</div></div>\n            <div class='datacontainer'>  <div > Amount: </div><div class='data'>{{product.quantity}}{{product.suffix}}</div></div>\n            <div class='datacontainer'> <div > Delivery Type:</div> <div class='data'>{{product.deliveryType}}</div></div>\n            <div class='datacontainer'>  <div > Start TimeSlot:</div> <div class='data'>{{product.timeSlot.startTimeSlot}}</div></div>\n            <div class='datacontainer'>  <div > \n                 End Time Slot: </div><div class='data'>{{product.timeSlot.endTimeSlot}}</div></div>\n        </div>\n      \n     \n     \n  </div>\n</mat-card>\n</div>\n   </div>\n  </div>\n</mat-card>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/order-data/order-data.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/adminModule/order-data/order-data.component.ts ***!
  \************************************************************************/
/*! exports provided: OrderDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDataComponent", function() { return OrderDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delivery_options_services_orderStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delivery-options/services/orderStream */ "./src/app/modules/adminModule/delivery-options/services/orderStream.ts");
/* harmony import */ var _services_orderService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/orderService */ "./src/app/modules/adminModule/order-data/services/orderService.ts");




var OrderDataComponent = /** @class */ (function () {
    function OrderDataComponent(orderStream, orderService) {
        this.orderStream = orderStream;
        this.orderService = orderService;
        this.levels = null;
        this.order = null;
        this.isStandardShow = false;
        this.standLevel = null;
        this.isExpressShow = false;
        this.expressLevel = null;
        this.isBtnShow = true;
        this.customerName = null;
    }
    Object.defineProperty(OrderDataComponent.prototype, "Order", {
        set: function (value) {
            this.order = value;
            this.standLevel = null;
            this.isBtnShow = true;
            this.expressLevel = null;
            this.isStandardShow = false;
            this.isExpressShow = false;
            this.initialize();
        },
        enumerable: true,
        configurable: true
    });
    OrderDataComponent.prototype.initialize = function () {
        var _this = this;
        if (this.order.deliverystatus.standardStatus != null) {
            this.standLevel = this.order.deliverystatus.standardStatus;
        }
        if (this.order.deliverystatus.expressStatus != null) {
            this.expressLevel = this.order.deliverystatus.expressStatus;
        }
        console.log(this.standLevel, this.expressLevel);
        this.orderService.getCustomerData({ id: this.order.customerId }).subscribe(function (data) {
            _this.customerName = data.customer.firstName;
        });
    };
    OrderDataComponent.prototype.getMoreData = function () {
        var _this = this;
        if (this.standLevel != null) {
            this.orderService.getStandardDeliveryData({ id: this.standLevel }).subscribe(function (data) {
                if (data.status == 'S') {
                    _this.order.deliverystatus.standardStatus = data.STdelivery;
                    _this.isStandardShow = true;
                    _this.isBtnShow = false;
                }
                else {
                    alert('Error Occured');
                }
            }, function (err) {
                if (err.status != null) {
                    alert(err.message);
                }
                else {
                    alert(err);
                }
            });
        }
        if (this.expressLevel != null) {
            this.orderService.getExpressDeliveryData({ id: this.expressLevel }).subscribe(function (data) {
                if (data.status == 'S') {
                    _this.order.deliverystatus.expressStatus = data.EXPdelivery;
                    _this.isExpressShow = true;
                    _this.isBtnShow = false;
                }
                else {
                    alert('Error Occured');
                }
            }, function (err) {
                if (err.status != null) {
                    alert(err.message);
                }
                else {
                    alert(err);
                }
            });
        }
    };
    OrderDataComponent.prototype.ngOnInit = function () {
        this.initialize();
    };
    OrderDataComponent.prototype.changeLevel = function (statusType, delobj) {
        var levelobj = { deliveryId: delobj.deliveryId, delType: statusType, levelValue: delobj.maxLevel, placingdate: this.order.placingdate };
        console.log(levelobj);
        this.orderService.changeLevel(levelobj).subscribe(function (data) {
            if (data.status == 'S' && data.isPushed == true) {
                window.location.reload();
            }
            else {
                alert('Error Occured');
            }
        }, function (err) {
            if (err.status != null) {
                alert(err.message);
            }
            else {
                alert(err);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], OrderDataComponent.prototype, "Order", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrderDataComponent.prototype, "levels", void 0);
    OrderDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin-current-order-data',
            template: __webpack_require__(/*! ./order-data.component.html */ "./src/app/modules/adminModule/order-data/order-data.component.html"),
            providers: [_services_orderService__WEBPACK_IMPORTED_MODULE_3__["orderGetService"]],
            styles: [__webpack_require__(/*! ./order-data.component.css */ "./src/app/modules/adminModule/order-data/order-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delivery_options_services_orderStream__WEBPACK_IMPORTED_MODULE_2__["orderStream"], _services_orderService__WEBPACK_IMPORTED_MODULE_3__["orderGetService"]])
    ], OrderDataComponent);
    return OrderDataComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/order-data/services/orderService.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/order-data/services/orderService.ts ***!
  \*************************************************************************/
/*! exports provided: orderGetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderGetService", function() { return orderGetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/globalmodel/comments */ "./src/app/globalmodel/comments.ts");







var orderGetService = /** @class */ (function () {
    function orderGetService(http) {
        this.http = http;
        this.url = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].getAdminCustomerData;
        this.setUrl = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].setOrderDelLevel;
        this.getStandardDeliverydata = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].getSTDeliveryData;
        this.getExpressDeliverydata = src_app_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].getEXPDeliveryData;
    }
    orderGetService.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else if (error.status != 0) {
            err = error.error;
        }
        else {
            err = src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_6__["comments"].networkError;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
    };
    ;
    orderGetService.prototype.getCustomerData = function (customerId) {
        return this.http.post(this.url, customerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    orderGetService.prototype.getStandardDeliveryData = function (deliveryId) {
        return this.http.post(this.getStandardDeliverydata, deliveryId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    orderGetService.prototype.getExpressDeliveryData = function (deliveryId) {
        return this.http.post(this.getExpressDeliverydata, deliveryId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    orderGetService.prototype.changeLevel = function (leveldata) {
        return this.http.post(this.setUrl, leveldata).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    orderGetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], orderGetService);
    return orderGetService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/productUpload.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/productUpload.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexcontainer{\n    display: flex;\n    margin:1rem;\n\n}\n#image_container img{\n    width:100%;\n    height:100%;\n}\n#image_container{\n    height: 100%;\n}\n#imageSection{\n    width:100%;\n    height:100%;\n}\n.wholecontainer{\n \n    width:100%;\n    \n}\n.activeImageCard{\n    width:99%;\n}\n#upload_container\n{\n    width:95%;\n}\n.imageUploadSection .mat-card{\n    padding:0px !important;\n    height:100%;\n}\n.imageUploadSection .csssetting .mat-icon{\n    border-radius: 35px;\n\n    background-color:white ;\n}\n.imageUploadSection .csssetting .mat-card .material-icons{\n    font-size: 20px;\n}\n.card_title{\nbackground-color: #3F51B5;\ncolor:white;\n}\n.custom-file-upload {\n  \n    display: inline-block;\n    padding: 6px 12px;\n    text-align: center;\n    background-color:#FF007B;\n    border-radius: 5px;\n    cursor: pointer;\n    color:white;\n  }\ninput[type=\"file\"]{\n    display:none;\n}\n.csssetting{\n    min-width: 170px;\n    max-width: 1700px;\n    flex-basis: auto; /* default value */\nwidth: 170px;\nmargin: 1rem 2% 0px 0px;\nposition: relative;\n\n\n}\n.active{\n    background-color:lightblue;\n}\n#imageList{\n    width:100%;\n}\n#imagelist_container{\n    display:flex;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    overflow:scroll;\n}\n#imagelist_container img{\nwidth:100%;\nheight: 70px;\n-o-object-fit: cover;\n   object-fit: cover;\n\n}\n.image{\n    width:100%;\n    margin:0.3rem;\n\n\n}\n.clear{\n    position: absolute;\n    left: 76%;\n    top: 15%;\n    z-index: 2;\n    cursor: pointer;\n}\n.clear ::ng-deep .material-icons{\n    font-size: auto !important;\n}\n.image img{\n   \nwidth:100%;\n\n\n}\n#subproductData{\nmargin:0px auto;\n    width:95%;\n    overflow: scroll;\n    height:350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9wcm9kdWN0VXBsb2FkL3Byb2R1Y3RVcGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxZQUFZOztDQUVmO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBQ0Q7O0lBRUksV0FBVzs7Q0FFZDtBQUNEO0lBQ0ksVUFBVTtDQUNiO0FBQ0Q7O0lBRUksVUFBVTtDQUNiO0FBQ0Q7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtDQUNmO0FBRUQ7SUFDSSxvQkFBb0I7O0lBRXBCLHdCQUF3QjtDQUMzQjtBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBRUQ7QUFDQSwwQkFBMEI7QUFDMUIsWUFBWTtDQUNYO0FBQ0Q7O0lBRUksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQixDQUFDLG1CQUFtQjtBQUN6QyxhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLG1CQUFtQjs7O0NBR2xCO0FBQ0Q7SUFDSSwyQkFBMkI7Q0FDOUI7QUFFRDtJQUNJLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0NBQ25CO0FBRUQ7QUFDQSxXQUFXO0FBQ1gsYUFBYTtBQUNiLHFCQUFrQjtHQUFsQixrQkFBa0I7O0NBRWpCO0FBS0Q7SUFDSSxXQUFXO0lBQ1gsY0FBYzs7O0NBR2pCO0FBSUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25CO0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7QUFFRDs7QUFFQSxXQUFXOzs7Q0FHVjtBQUdEO0FBQ0EsZ0JBQWdCO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9wcm9kdWN0VXBsb2FkL3Byb2R1Y3RVcGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4Y29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOjFyZW07XG5cbn1cbiNpbWFnZV9jb250YWluZXIgaW1ne1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG4jaW1hZ2VfY29udGFpbmVye1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI2ltYWdlU2VjdGlvbntcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xufVxuLndob2xlY29udGFpbmVye1xuIFxuICAgIHdpZHRoOjEwMCU7XG4gICAgXG59XG4uYWN0aXZlSW1hZ2VDYXJke1xuICAgIHdpZHRoOjk5JTtcbn1cbiN1cGxvYWRfY29udGFpbmVyXG57XG4gICAgd2lkdGg6OTUlO1xufVxuLmltYWdlVXBsb2FkU2VjdGlvbiAubWF0LWNhcmR7XG4gICAgcGFkZGluZzowcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6MTAwJTtcbn1cblxuLmltYWdlVXBsb2FkU2VjdGlvbiAuY3Nzc2V0dGluZyAubWF0LWljb257XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGUgO1xufVxuXG4uaW1hZ2VVcGxvYWRTZWN0aW9uIC5jc3NzZXR0aW5nIC5tYXQtY2FyZCAubWF0ZXJpYWwtaWNvbnN7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2FyZF90aXRsZXtcbmJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XG5jb2xvcjp3aGl0ZTtcbn1cbi5jdXN0b20tZmlsZS11cGxvYWQge1xuICBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGMDA3QjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOndoaXRlO1xuICB9XG4gIGlucHV0W3R5cGU9XCJmaWxlXCJde1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cblxuLmNzc3NldHRpbmd7XG4gICAgbWluLXdpZHRoOiAxNzBweDtcbiAgICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgICBmbGV4LWJhc2lzOiBhdXRvOyAvKiBkZWZhdWx0IHZhbHVlICovXG53aWR0aDogMTcwcHg7XG5tYXJnaW46IDFyZW0gMiUgMHB4IDBweDtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG59XG4uYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRibHVlO1xufVxuXG4jaW1hZ2VMaXN0e1xuICAgIHdpZHRoOjEwMCU7XG59XG4jaW1hZ2VsaXN0X2NvbnRhaW5lcntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG92ZXJmbG93OnNjcm9sbDtcbn1cblxuI2ltYWdlbGlzdF9jb250YWluZXIgaW1ne1xud2lkdGg6MTAwJTtcbmhlaWdodDogNzBweDtcbm9iamVjdC1maXQ6IGNvdmVyO1xuXG59XG5cblxuXG5cbi5pbWFnZXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbjowLjNyZW07XG5cblxufVxuXG5cblxuLmNsZWFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA3NiU7XG4gICAgdG9wOiAxNSU7XG4gICAgei1pbmRleDogMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGVhciA6Om5nLWRlZXAgLm1hdGVyaWFsLWljb25ze1xuICAgIGZvbnQtc2l6ZTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2UgaW1ne1xuICAgXG53aWR0aDoxMDAlO1xuXG5cbn1cblxuXG4jc3VicHJvZHVjdERhdGF7XG5tYXJnaW46MHB4IGF1dG87XG4gICAgd2lkdGg6OTUlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgaGVpZ2h0OjM1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/productUpload.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/productUpload.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n      <div id='stackTrace'>\n        <span *ngFor='let id of parentTrace;let i =index;'>\n          {{id}}<span *ngIf=\"parentTrace[i+1]\">-></span>\n        </span>\n        </div>\n      \n      <div class=\"flexcontainer\">\n        <div class=\"wholecontainer\"> \n      <div class=\"imageUploadSection\">\n          <mat-grid-list cols=\"7\" rowHeight=\"2:1\">\n              <mat-grid-tile colspan='3' rowspan='5'>\n             \n                <mat-card *ngIf=\"  activeImageObj!=null && activeImageObj.uri!=null \" class=\"activeImageCard\">\n                    <mat-card-header>\n                        {{subproductFullData.subproductName | uppercase}}\n                      </mat-card-header>\n                  <div id=\"imageSection\">\n                  \n                   <div id=\"image_container\">\n                      <img *ngIf='activeImageObj.uri!=null' [src]=\"activeImageObj.uri\" >\n      \n                       </div>\n                </div>\n                </mat-card>\n              </mat-grid-tile>\n              <mat-grid-tile colspan ='4' rowspan='2'>\n                <div id=\"upload_container\">\n                <mat-card class=\"file_upload\">\n                      <mat-card-header class=\"card_title\">\n                      \n                        <mat-card-title >Upload Image</mat-card-title>\n                        \n                      </mat-card-header>\n                      <mat-card-actions>\n                          <label class=\"custom-file-upload\">\n                              Upload Image<input type=\"file\" name=\"uploadImage\" \n                              accept=\".jpg,.jpeg,.png\" (change)=\"imageUpload(uploadImage)\" #uploadImage ></label>\n                      </mat-card-actions>\n                    </mat-card>\n                  </div>\n        \n              </mat-grid-tile> \n              <mat-grid-tile colspan ='4' rowspan='5'>\n      \n                  <app-subproducts-data id=\"subproductData\"></app-subproducts-data>\n                        </mat-grid-tile> \n                    \n      \n      \n              <mat-grid-tile colspan='3' rowspan='1'> \n      <div id=\"imageList\">\n        \n        <div *ngIf=\"imageList!=null\"  id=\"imagelist_container\">\n         <div *ngFor='let imageObj of imageList;let i = index' class=\"csssetting\">\n           <button mat-button *ngIf='activeImageObj!=null' [ngClass]=\"{'active': activeImageObj.selected==true }\" class='image' (click)=\"selectImage(imageObj)\">\n        \n            <img *ngIf='imageObj.uri!=null' [src]='imageObj.uri' alt=\"Product List\">\n           \n           </button>\n           <span (click)=\"removeThisImage(i,imageObj.key)\" class=\"clear\"><mat-icon>clear</mat-icon></span> \n      \n         </div>\n        </div>\n        \n      </div>\n      \n              </mat-grid-tile>\n            \n            </mat-grid-list>\n      </div>\n      </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/productUpload.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/productUpload.component.ts ***!
  \******************************************************************************/
/*! exports provided: productUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productUploadComponent", function() { return productUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_imageDatabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/imageDatabase */ "./src/app/modules/adminModule/productUpload/services/imageDatabase.ts");
/* harmony import */ var _modulemodels_imageObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modulemodels/imageObject */ "./src/app/modules/adminModule/modulemodels/imageObject.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../globalmodel/comments */ "./src/app/globalmodel/comments.ts");








var productUploadComponent = /** @class */ (function () {
    function productUploadComponent(imageDatabase, snackBar, dataStorage, router) {
        this.imageDatabase = imageDatabase;
        this.snackBar = snackBar;
        this.dataStorage = dataStorage;
        this.router = router;
        this.parentTrace = [];
        this.index = 0;
        this.form = new FormData();
        this.imageList = [];
        this.activeImageObj = new _modulemodels_imageObject__WEBPACK_IMPORTED_MODULE_3__["ImageObj"]();
        if (localStorage.getItem('id_token') == '-1' || localStorage.getItem('id_token') == null || typeof (dataStorage.storage) == 'undefined') {
            this.router.navigate(['/admin/login']);
        }
        this.parentTrace = dataStorage.storage.stackTrace;
        this.subproductFullData = dataStorage.storage.otherInfo;
        if (dataStorage.storage.initialImage) {
            for (var _i = 0, _a = dataStorage.storage.initialImage; _i < _a.length; _i++) {
                var obj = _a[_i];
                this.index++;
                this.imageList.push(obj);
            }
            this.selectImage(this.imageList[0]);
        }
        // console.log(this.imageList[0])
    }
    productUploadComponent.prototype.newform = function () {
        var newform = {
            'categoryId': this.categoryId,
            'subcategoryId': this.subcategoryId,
            'productId': this.productId,
            'subproductId': this.subproductId
        };
        return newform;
    };
    productUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryId = this.parentTrace[0];
        this.subcategoryId = this.parentTrace[1];
        this.productId = this.parentTrace[2];
        this.subproductId = this.parentTrace[3];
        this.activeSrc = "";
        this.form.set('idToken', localStorage.getItem('id_token'));
        this.form.set('categoryId', this.categoryId);
        this.form.set('subcategoryId', this.subcategoryId);
        this.form.set('productId', this.productId);
        this.form.set('subproductId', this.subproductId);
        this.imageDatabase.getaddimageObj().subscribe(function (data) {
            if (data != null) {
                if (data.isPushed == true)
                    console.log(data);
                _this.openSnackBar(_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__["comments"].add, '');
                _this.index++;
                _this.imageList.push(data.result);
                _this.selectImage(data.result);
            }
        });
        this.imageDatabase.getdelimageObj().subscribe(function (data) {
            if (data != null) {
                if (data.isdelete == true) {
                    _this.deleteFromFrontEnd(data.index);
                    _this.openSnackBar(_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__["comments"].delete, '');
                    _this.index = 0;
                    _this.imageList.forEach(function (element) {
                        _this.index++;
                    });
                }
            }
        });
    };
    productUploadComponent.prototype.deleteFromFrontEnd = function (index) {
        this.imageList.splice(index, 1);
        if (this.imageList[index + 1] != null) {
            this.activeImageObj.uri = this.imageList[index + 1].uri;
        }
        else if (this.imageList[index - 1] != null) {
            this.activeImageObj.uri = this.imageList[index - 1].uri;
        }
        else {
            if (this.imageList[index] != null) {
                this.activeImageObj.uri = this.imageList[index].uri;
            }
            else {
                this.activeImageObj.uri = null;
            }
        }
    };
    productUploadComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    productUploadComponent.prototype.deleteFromBackend = function (index, key) {
        //  console.log(key)
        var form = this.newform();
        form.key = key;
        form.index = index;
        this.imageDatabase.deleteFile(form);
    };
    productUploadComponent.prototype.selectImage = function (imageObj) {
        this.imageList.forEach(function (obj) {
            if (obj != null) {
                obj.selected = false;
            }
        });
        if (imageObj) {
            imageObj.selected = true;
            this.activeImageObj.index = imageObj.index;
            this.activeImageObj.uri = imageObj.uri;
        }
        // console.log(imageObj);
    };
    productUploadComponent.prototype.uploadImage = function (form) {
        this.imageDatabase.uploadFile(form);
    };
    productUploadComponent.prototype.removeThisImage = function (index, key) {
        this.deleteFromBackend(index, key);
    };
    productUploadComponent.prototype.imageUpload = function (inputFile) {
        this.form.set('index', (this.index + 1).toString());
        if (inputFile.files.length != 0) {
            this.form.set('myImage', inputFile.files[0]);
            this.uploadImage(this.form);
        }
    };
    productUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'productUpload',
            template: __webpack_require__(/*! ./productUpload.component.html */ "./src/app/modules/adminModule/productUpload/productUpload.component.html"),
            providers: [_services_imageDatabase__WEBPACK_IMPORTED_MODULE_2__["ImageDatabase"]],
            styles: [__webpack_require__(/*! ./productUpload.component.css */ "./src/app/modules/adminModule/productUpload/productUpload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_imageDatabase__WEBPACK_IMPORTED_MODULE_2__["ImageDatabase"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_5__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], productUploadComponent);
    return productUploadComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/services/imageDatabase.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/services/imageDatabase.ts ***!
  \*****************************************************************************/
/*! exports provided: ImageDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDatabase", function() { return ImageDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _moduleServices_imageCrud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../moduleServices/imageCrud */ "./src/app/modules/adminModule/moduleServices/imageCrud.ts");





var ImageDatabase = /** @class */ (function () {
    function ImageDatabase(imageCrud) {
        this.imageCrud = imageCrud;
        this.isDone = false;
        this.imageChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.deletechange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    ImageDatabase.prototype.setimageObj = function () {
    };
    ImageDatabase.prototype.getdelimageObj = function () {
        return this.deletechange;
    };
    ImageDatabase.prototype.getaddimageObj = function () {
        return this.imageChange;
    };
    ImageDatabase.prototype.uploadFile = function (form) {
        var _this = this;
        this.imageCrud.uploadFile(_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].localaddImageuri, form).subscribe(function (data) {
            if (data != null) {
                _this.imageChange.next(data);
                _this.isDone = true;
            }
        }, function (err) {
            console.log(err);
            alert(err);
            _this.isDone = false;
        });
        return this.isDone;
    };
    ImageDatabase.prototype.deleteFile = function (form) {
        var _this = this;
        this.imageCrud.deleteFile(_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].localdeleteImageuri, form).subscribe(function (data) {
            if (data.isdelete == true) {
                _this.deletechange.next(data);
            }
        }, function (err) {
            alert(err);
            _this.isDone = false;
        });
    };
    ImageDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_moduleServices_imageCrud__WEBPACK_IMPORTED_MODULE_4__["ImageCrud"]])
    ], ImageDatabase);
    return ImageDatabase;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/sidenav/sidenav.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/sidenav/sidenav.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidenavheadercontainer{\n    color:white;\n    background-color:#154F85;\n    padding:0.5rem;\n}\n\n#sidenavheader{\n  font-size: 18px;\n  font-weight: 800;\n}\n\n#linksection button{\nwidth:100%\n}\n\n#sidenav{\n    background-color:#3F51B5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtDQUNsQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7O0FBRUQ7QUFDQSxVQUFVO0NBQ1Q7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluTW9kdWxlL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGVuYXZoZWFkZXJjb250YWluZXJ7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTU0Rjg1O1xuICAgIHBhZGRpbmc6MC41cmVtO1xufVxuXG4jc2lkZW5hdmhlYWRlcntcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4jbGlua3NlY3Rpb24gYnV0dG9ue1xud2lkdGg6MTAwJVxufVxuXG4jc2lkZW5hdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzRjUxQjU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/sidenav/sidenav.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/adminModule/sidenav/sidenav.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id='sidenav'>\n\n    <div id='sidenavheader'>\n      <div id='sidenavheadercontainer'>\n        CRUD\n      </div>\n    </div>\n<div id='linksection'>\n  <div class='links' >\n    <a [routerLink]=\"['/admin/categorycrud']\">\n      <button mat-raised-button color='accent' >\n CATEGORY CRUD\n </button>\n    </a>\n  </div>\n  <div class='links'>\n    <a [routerLink]=\"['/admin/makerChecker']\">\n      <button mat-raised-button color='accent'>\n    MAKER CHECKER\n      </button>\n    </a>\n  </div>\n  <div class='links'>\n      <a [routerLink]=\"['/admin/adsCrud']\">\n        <button mat-raised-button color='accent'>\n      ADS CRUD\n        </button>\n      </a>\n    </div>\n    <div class='links'>\n        <a [routerLink]=\"['/admin/abtCrud']\">\n          <button mat-raised-button color='accent'>\n        ABOUT CRUD\n          </button>\n        </a>\n      </div>\n      <div class='links'>\n          <a [routerLink]=\"['/admin/delivOptLevel']\">\n            <button mat-raised-button color='accent'>\n          DELIVERY LEVEL\n            </button>\n          </a>\n        </div> <div class='links'>\n            <a [routerLink]=\"['/admin/currentOrders']\">\n              <button mat-raised-button color='accent'>\n        CURRENT ORDERS\n              </button>\n            </a>\n          </div>\n          <div class='links'>\n            <a [routerLink]=\"['/admin/voucherCrud']\">\n              <button mat-raised-button color='accent'>\n       VOUCHER CRUD\n              </button>\n            </a>\n          </div>\n          <div class='links'>\n              <a [routerLink]=\"['/admin/addressCrud']\">\n                <button mat-raised-button color='accent'>\n         ADDRESS CRUD\n                </button>\n              </a>\n            </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/sidenav/sidenav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/adminModule/sidenav/sidenav.component.ts ***!
  \******************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'adminsidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/modules/adminModule/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/modules/adminModule/sidenav/sidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/services/uploadform.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/services/uploadform.ts ***!
  \*****************************************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/globalmodel/comments */ "./src/app/globalmodel/comments.ts");








var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].localEditProducts;
    }
    UploadService.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else if (error.status != 0) {
            err = error.error;
        }
        else {
            err = src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__["comments"].networkError;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
    };
    ;
    UploadService.prototype.uploadForm = function (details) {
        return this.http.post(this.url, details, _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_5__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    ;
    UploadService.prototype.register = function (form) {
        return this.http.post(this.url, form, _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_5__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/subproducts-data.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexcontainer{\n    display: flex;\n    justify-content: space-between;\n}\n.flexcontainer div{\n    margin:0.1rem;\n}\n.flexcontainer .mat-form-field{\n    width:100%;\n    \n}\n#dataEntry{\n    overflow:scroll;\n}\n#description{\n    margin-right:1rem;\n    width:40%;\n}\n#benefitsAndUses{\n    width:40%;\n    margin-right: 1rem;\n}\n#storageAndUses{\n    width:40%;\n}\n.amount{\n    width:15%;\n}\n.suffix{\n    width:15%;\n\n}\n.price{\n    width:15%;\n}\n.discount{\n     width:15%;\n }\n.stock{\nfont-size:14px;\n }\n.trueradio{\n     margin:5px;\n }\n.falseradio{\n     margin:1px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9zdWJwcm9kdWN0cy1kYXRhL3N1YnByb2R1Y3RzLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7Q0FDbEM7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFFRDtJQUNJLFdBQVc7O0NBRWQ7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7Q0FDYjtBQUVEO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksVUFBVTtDQUNiO0FBRUQ7SUFDSSxVQUFVO0NBQ2I7QUFFRDtJQUNJLFVBQVU7O0NBRWI7QUFFRDtJQUNJLFVBQVU7Q0FDYjtBQUNBO0tBQ0ksVUFBVTtFQUNiO0FBQ0Q7QUFDRCxlQUFlO0VBQ2I7QUFFRDtLQUNJLFdBQVc7RUFDZDtBQUNEO0tBQ0ksV0FBVztFQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9zdWJwcm9kdWN0cy1kYXRhL3N1YnByb2R1Y3RzLWRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4Y29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhjb250YWluZXIgZGl2e1xuICAgIG1hcmdpbjowLjFyZW07XG59XG5cbi5mbGV4Y29udGFpbmVyIC5tYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIFxufVxuXG4jZGF0YUVudHJ5e1xuICAgIG92ZXJmbG93OnNjcm9sbDtcbn1cblxuI2Rlc2NyaXB0aW9ue1xuICAgIG1hcmdpbi1yaWdodDoxcmVtO1xuICAgIHdpZHRoOjQwJTtcbn1cblxuI2JlbmVmaXRzQW5kVXNlc3tcbiAgICB3aWR0aDo0MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4jc3RvcmFnZUFuZFVzZXN7XG4gICAgd2lkdGg6NDAlO1xufVxuXG4uYW1vdW50e1xuICAgIHdpZHRoOjE1JTtcbn1cblxuLnN1ZmZpeHtcbiAgICB3aWR0aDoxNSU7XG5cbn1cblxuLnByaWNle1xuICAgIHdpZHRoOjE1JTtcbn1cbiAuZGlzY291bnR7XG4gICAgIHdpZHRoOjE1JTtcbiB9XG4gLnN0b2Nre1xuZm9udC1zaXplOjE0cHg7XG4gfVxuXG4gLnRydWVyYWRpb3tcbiAgICAgbWFyZ2luOjVweDtcbiB9XG4gLmZhbHNlcmFkaW97XG4gICAgIG1hcmdpbjoxcHg7XG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/subproducts-data.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id =\"dataEntry\">\n\n  <form [formGroup]=\"dataForm\" id=\"form\"  (ngSubmit)='onSubmit(dataForm.value)'>\n    <div>\n        <mat-form-field id =\"description\">\n            <mat-label>Brand</mat-label>\n             <textarea matInput formControlName='brand' ></textarea>\n           </mat-form-field>\n    <mat-form-field id =\"description\">\n       <mat-label>Description</mat-label>\n        <textarea matInput formControlName='description' ></textarea>\n      </mat-form-field>\n      <mat-form-field id =\"benefitsAndUses\">\n        <mat-label>Benefits And Uses</mat-label>\n          <textarea matInput formControlName='benefitsAndUses' ></textarea>\n        </mat-form-field>\n       \n            <mat-form-field id =\"storageAndUses\">\n                <mat-label>Storage And Uses</mat-label>\n                  <textarea matInput formControlName='storageAndUses' ></textarea>\n                </mat-form-field>\n       \n        <mat-checkbox formControlName='isExpress'>Express Available</mat-checkbox>\n    </div>\n    \n        <div formArrayName=\"priceAndAmount\" *ngFor =\"let priceObj of dataForm.controls.priceAndAmount.controls; let i = index;\">\n          <div class=\"flexcontainer\" formGroupName ='{{i}}'> \n         <div class=\"amount\">\n            <mat-form-field >\n              <mat-label>Amount</mat-label>\n            <input matInput type='number' formControlName='amount' >\n          \n          </mat-form-field>\n          </div>\n          <div class=\"suffix\">\n          <mat-form-field > \n            <mat-label>Suffix</mat-label>\n              <input matInput formControlName='suffix'>\n            \n            </mat-form-field>\n            </div>\n            <div class=\"price\">\n            <mat-form-field>\n              <mat-label>Price</mat-label>\n                <input matInput type='number' formControlName='price' >\n              \n              </mat-form-field>\n              </div>\n              <div class=\"discount\">\n              <mat-form-field>\n                <mat-label>Discount</mat-label>\n                  <input matInput formControlName='discount' >\n                \n                </mat-form-field>\n                </div>\n\n<div class=\"stock\">\n  <div>\n  <mat-label>In Stock</mat-label>\n  </div>\n  <mat-radio-group formControlName=\"instock\">\n    <mat-radio-button class='trueradio' value=\"true\">True</mat-radio-button>\n    <mat-radio-button class='falseradio' value=\"false\">False</mat-radio-button>\n  </mat-radio-group>\n</div>\n\n                <div>\n                  <button mat-raised-button type=\"button\" color='accent' (click)='deleteThisIndex(i)' [disabled]=\"isLast()\">Delete</button>\n                </div>\n              </div>\n        </div>\n\n        <button mat-raised-button color='accent' type='button' (click)='addOptions()'>Add</button>\n        \n        <button mat-raised-button color='primary' [disabled]='dataForm.invalid'>Submit</button>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/subproducts-data.component.ts ***!
  \************************************************************************************/
/*! exports provided: SubproductsDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubproductsDataComponent", function() { return SubproductsDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _services_uploadform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/uploadform */ "./src/app/modules/adminModule/subproducts-data/services/uploadform.ts");
/* harmony import */ var _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sharedModule/successSnackbar */ "./src/app/modules/sharedModule/successSnackbar.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var SubproductsDataComponent = /** @class */ (function () {
    function SubproductsDataComponent(fb, data, uploadform, snackBar) {
        this.fb = fb;
        this.data = data;
        this.uploadform = uploadform;
        this.snackBar = snackBar;
        this.arr = [];
        this.info = data.storage.otherInfo.info;
        // console.log(this.info);
        this.initialPriceAndAmount();
    }
    SubproductsDataComponent.prototype.initialPriceAndAmount = function () {
        for (var _i = 0, _a = this.info.priceAndAmount; _i < _a.length; _i++) {
            var obj = _a[_i];
            this.arr.push(this.createPriceAmount(obj));
        }
    };
    SubproductsDataComponent.prototype.deleteThisIndex = function (index) {
        (this.dataForm.controls.priceAndAmount).removeAt(index);
    };
    SubproductsDataComponent.prototype.addOptions = function () {
        (this.dataForm.controls.priceAndAmount).push(this.createPriceAmount('-1'));
    };
    SubproductsDataComponent.prototype.createPriceAmount = function (obj) {
        if (obj != '-1') {
            return this.fb.group({
                amount: [obj.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                suffix: [obj.suffix, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: [obj.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                discount: [obj.discount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                instock: [obj.instock, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
        else {
            return this.fb.group({
                amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                suffix: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                discount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                instock: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
    };
    SubproductsDataComponent.prototype.createForm = function () {
        var expressAvail = false;
        if (this.info.isExpress != null) {
            expressAvail = this.info.isExpress;
        }
        this.dataForm = this.fb.group({
            isExpress: [expressAvail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            brand: [this.info.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [this.info.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            storageAndUses: [this.info.storageAndUses, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            benefitsAndUses: [this.info.benefitsAndUses, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priceAndAmount: this.fb.array(this.arr)
        });
    };
    SubproductsDataComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    SubproductsDataComponent.prototype.isLast = function () {
        if ((this.dataForm.controls.priceAndAmount.value.length) <= 1) {
            return true;
        }
        else {
            return false;
        }
    };
    SubproductsDataComponent.prototype.onSubmit = function (form) {
        var _this = this;
        //console.log(form);
        form['stackTrace'] = this.data.storage.stackTrace;
        this.uploadform.uploadForm(form).subscribe(function (data) {
            if (data != null) {
                // console.log(data);
                if (data.isPushed == true) {
                    _this.snackBar.openFromComponent(_sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_5__["SuccessComponent"], {
                        duration: 2000
                    });
                }
            }
        }, function (err) {
            _this.openSnackBar(err, '');
        });
    };
    SubproductsDataComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SubproductsDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subproducts-data',
            template: __webpack_require__(/*! ./subproducts-data.component.html */ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.html"),
            styles: [__webpack_require__(/*! ./subproducts-data.component.css */ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_3__["Data"], _services_uploadform__WEBPACK_IMPORTED_MODULE_4__["UploadService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], SubproductsDataComponent);
    return SubproductsDataComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/table/table.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/adminModule/table/table.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#heading{\n    display: flex;\n    text-align: center;\n    \n}\n\n.headingData{\n    width:20%;\n    margin:0.5rem auto;\n\n}\n\n::ng-deep .mat-toolbar-single-row{\n    height:inherit !important;\n}\n\n.example-container {\n    overflow-x: scroll;\n  }\n\n.example-container {\n    height: 300px;\n    overflow: auto;\n  }\n\n.mat-cell, .mat-footer-cell, .mat-header-cell{\n    justify-content: center;\n  }\n\n.otherdata{\n    font-size: 12px;\n    width: 100%;\n    margin: 0.1rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjs7Q0FFdEI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsbUJBQW1COztDQUV0Qjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLG1CQUFtQjtHQUNwQjs7QUFFRDtJQUNFLGNBQWM7SUFDZCxlQUFlO0dBQ2hCOztBQUdEO0lBQ0Usd0JBQXdCO0dBQ3pCOztBQUVEO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0dBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRpbmd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG5cbi5oZWFkaW5nRGF0YXtcbiAgICB3aWR0aDoyMCU7XG4gICAgbWFyZ2luOjAuNXJlbSBhdXRvO1xuXG59XG5cbjo6bmctZGVlcCAubWF0LXRvb2xiYXItc2luZ2xlLXJvd3tcbiAgICBoZWlnaHQ6aW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgfVxuXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwsIC5tYXQtaGVhZGVyLWNlbGx7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAub3RoZXJkYXRhe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAuMXJlbTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/table/table.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/adminModule/table/table.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"heading\" color=\"primary\">\r\n  <span class='headingData'>DATA TABLE\r\n    </span>\r\n\r\n    <button  mat-raised-button type=\"button\" color='accent' (click)='pushChanges()'>Push Changes</button>\r\n\r\n  \r\n</mat-toolbar>\r\n\r\n\r\n\r\n<div style=\"width: 100\" class=\"example-container mat-elevation-z8\">\r\n\r\n\r\n  <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- ID Column -->\r\n    <ng-container *ngFor=\"let col of columns\" matColumnDef={{col}}>\r\n  \r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>{{col | lowercase | titlecase}}</mat-header-cell>\r\n      <mat-cell  *matCellDef=\"let row\" ><button class='otherdata' mat-raised-button (click)=\"redirectToImageUpload(row,row['imageUrls'])\" [color]=\"primary\" *ngIf=\"col=='Other Data'\">Manage Data</button> <p *ngIf=\"col!='Other Data'\">{{row[col]}}</p></mat-cell>\r\n    \r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew(dataSource)\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"accent\" (click)=\"startEdit(row,i,dataSource)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button [disabled]='dataSource.length==1' color=\"accent\" (click)=\"deleteItem(row,i,dataSource)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n  <div class=\"no-results\" [style.display]=\"(dataSource.length== 0 || dataSource==null) ? '' : 'none'\" >\r\n    No results\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/table/table.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/adminModule/table/table.component.ts ***!
  \**************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dialogs/Add/add-dialog.component */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts");
/* harmony import */ var _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Dialogs/Edit/edit-dialog.component */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts");
/* harmony import */ var _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Dialogs/Delete/delete-dialog.component */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts");
/* harmony import */ var _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moduleServices/dataService */ "./src/app/modules/adminModule/moduleServices/dataService.ts");
/* harmony import */ var src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/globalmodel/listitem/category */ "./src/app/globalmodel/listitem/category.ts");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var _moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../moduleServices/categoryDatabase */ "./src/app/modules/adminModule/moduleServices/categoryDatabase.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");












var TableComponent = /** @class */ (function () {
    function TableComponent(dataStorage, router, snackBar, dialog, dataObj, dialogData, categoryDatabase) {
        this.dataStorage = dataStorage;
        this.router = router;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.dataObj = dataObj;
        this.dialogData = dialogData;
        this.categoryDatabase = categoryDatabase;
        this.columns = [];
        this.PushChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stackArray = [];
        this.isNull = false;
        this.isCompleted = false;
        this.displayedColumns = [];
        this.checkArray = [];
        this.dataSource = null;
        this.noMore = false;
        this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"]();
        this.mainDataSource = null;
        this.dataSource = null;
    }
    TableComponent.prototype.pushChanges = function () {
        // console.log(this.mainDataSource);
        this.PushChange.emit(true);
    };
    TableComponent.prototype.deletethisObject = function (mainarray, object, index, currentobj) {
        mainarray.splice(index, 1);
        if (currentobj != null) {
            currentobj.childIds.splice(index, 1);
        }
    };
    TableComponent.prototype.editDataObject = function (mainarray, result, index, currentobj, id) {
        mainarray.splice(index, 1, result);
        //  console.log(currentobj);
        if (currentobj != null) {
            currentobj.childIds.splice(index, 1, id);
        }
    };
    TableComponent.prototype.pushObject = function (array, obj, index, currentobj, id) {
        array.push(obj);
        //this.dataSource.push(obj);
        //  console.log(currentobj,id);
        if (currentobj != null) {
            currentobj.childIds.push(id);
        }
    };
    TableComponent.prototype.trimPushObject = function (pushObj) {
        if (this.isNull == false) {
            for (var key in pushObj) {
                if (pushObj[key] != null && key != 'childIds') {
                    if (typeof (pushObj[key]) != 'object') {
                        this.newPushObject = pushObj;
                        this.isNull = true;
                        return;
                    }
                }
                if (pushObj[key] != null && typeof (pushObj[key]) == 'object' && key != 'childIds') {
                    this.trimPushObject(pushObj[key][0]);
                }
            }
        }
        else {
            this.isNull = false;
            return;
        }
    };
    TableComponent.prototype.recursiveFinder = function (mainarray, checkData, functionCall, pushData, index, currentobj) {
        var _this = this;
        if (!this.isCompleted) {
            if (mainarray != null) {
                mainarray.forEach(function (mainobj) {
                    if (typeof (checkData) != 'undefined') {
                        if (typeof (checkData[0]) == 'object' && typeof (mainobj) == 'object') {
                            if (Object.keys(mainobj)[0] == Object.keys(checkData[0])[0]) {
                                if (Object.values(mainobj)[0] == Object.values(checkData[0])[0]) {
                                    functionCall(mainarray, pushData, index, currentobj, Object.values(pushData)[0]);
                                    _this.isCompleted = true;
                                }
                            }
                            for (var mainkey in mainobj) {
                                if (typeof (mainobj[mainkey]) == 'object' && Array.isArray(mainobj[mainkey])) {
                                    _this.recursiveFinder(mainobj[mainkey], checkData, functionCall, pushData, index, mainobj);
                                }
                            }
                        }
                    }
                });
            }
        }
        else {
            return;
        }
    };
    TableComponent.prototype.setDataSource = function (nodeCheck, functionCall, data, index) {
        this.isCompleted = false;
        this.recursiveFinder(this.mainDataSource, nodeCheck, functionCall, data, index, null);
        this.categoryDatabase.dataChange.next(this.mainDataSource);
    };
    TableComponent.prototype.iscontainsobject = function (array) {
        if (Array.isArray(array)) {
            if (array.some(function (value) { return typeof value == "object"; }) == true) {
                return true;
            }
            else
                return false;
        }
    };
    TableComponent.prototype.iterativeDialogMaker = function (data) {
        var _this = this;
        // console.log(data);
        if (Object.keys(data)) {
            if (Object.keys(data)[0] != 'uri') {
                var dialogRef = this.dialog.open(_Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddDialogComponent"], {
                    height: '300px',
                    width: '400px',
                    data: data,
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    // console.log(result);
                    if (result != null) {
                        var newData = null;
                        newData = result[0];
                        // console.log(newData);
                        if (newData != null && Array.isArray(newData) && _this.iscontainsobject(newData) == true) {
                            _this.iterativeDialogMaker(newData[0]);
                        }
                    }
                });
            }
        }
    };
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dataObj.dataSource.subscribe(function (data) {
            if (data != null && data.length != 0) {
                _this.dataSource = data;
                if (_this.mainDataSource == null || _this.mainDataSource.length == 0) {
                    _this.mainDataSource = _this.dataSource.slice();
                }
                _this.makeColoumns();
            }
            else {
                _this.dataSource = [];
            }
        });
        this.dialogData.dialogdataSource.subscribe(function (data) {
            switch (Object.keys(data)[0]) {
                case 'category':
                    if (_this.newPushObject != null) {
                    }
                    else {
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"]();
                    }
                    for (var key in data) {
                        _this.newPushObject.categoryId = data[key].addarray[0];
                        _this.newPushObject.categoryName = data[key].addarray[1];
                    }
                    break;
                case 'subcategory':
                    if (_this.newPushObject != null && _this.newPushObject.subcategory != null) {
                    }
                    else {
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"]();
                    }
                    for (var key in data) {
                        _this.newPushObject.childIds.push(data[key].addarray[0]);
                        _this.newPushObject.subcategory[0].subcategoryId = data[key].addarray[0];
                        _this.newPushObject.subcategory[0].subcategoryName = data[key].addarray[1];
                    }
                    break;
                case 'products':
                    if (_this.newPushObject != null && _this.newPushObject.subcategory != null && _this.newPushObject.subcategory[0].products != null) {
                    }
                    else {
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"]();
                    }
                    for (var key in data) {
                        _this.newPushObject.subcategory[0].childIds.push(data[key].addarray[0]);
                        _this.newPushObject.subcategory[0].products[0].productId = data[key].addarray[0];
                        _this.newPushObject.subcategory[0].products[0].productName = data[key].addarray[1];
                    }
                    // code block
                    break;
                case 'subProducts':
                    if (_this.newPushObject.subcategory != null && _this.newPushObject.subcategory[0].products != null && _this.newPushObject.subcategory[0].products[0].subProducts != null) {
                    }
                    else {
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"]();
                    }
                    for (var key in data) {
                        //    console.log(data[key].addarray[0])
                        _this.newPushObject.subcategory[0].products[0].childIds.push(data[key].addarray[0]);
                        _this.newPushObject.subcategory[0].products[0].subProducts[0].subproductId = data[key].addarray[0];
                        _this.newPushObject.subcategory[0].products[0].subProducts[0].subproductName = data[key].addarray[1];
                        // console.log(this.newPushObject);
                    }
                    //   console.log(this.newPushObject);
                    _this.isNull = false;
                    _this.trimPushObject(_this.newPushObject);
                    _this.setDataSource(_this.parentCheckNode, _this.pushObject, _this.newPushObject, 0);
                    _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"]();
                    break;
                default:
                // code block
            }
        });
    };
    TableComponent.prototype.objCheck = function (value) {
        if (typeof (value) == "object") {
            return false;
        }
        else {
            return true;
        }
    };
    TableComponent.prototype.addNew = function (data) {
        this.parentCheckNode = data;
        this.iterativeDialogMaker(data[0]);
    };
    TableComponent.prototype.startEdit = function (row, index, dataSource) {
        var _this = this;
        var dialogRef = this.dialog.open(_Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditDialogComponent"], {
            height: '300px',
            width: '400px',
            data: row,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                _this.setDataSource(dataSource, _this.editDataObject, result, index);
            }
        });
    };
    TableComponent.prototype.deleteItem = function (row, index, dataSource) {
        var _this = this;
        var dialogRef = this.dialog.open(_Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteDialogComponent"], {
            height: '300px',
            width: '400px',
            data: row,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                //  console.log(index);
                var clone = _this.dataSource.slice();
                clone.splice(index, 1);
                _this.dataSource = clone;
                _this.setDataSource(dataSource, _this.deletethisObject, result, index);
            }
        });
    };
    TableComponent.prototype.makeColoumns = function () {
        this.columns.splice(0, this.columns.length); //used to draw columns of table
        var object = this.dataSource[0];
        // console.log(object)
        for (var key in object) {
            if (this.objCheck(object[key])) {
                //  console.log(key);
                this.columns.push(key);
            }
            if (key == "imageUrls") {
                this.columns.push("Other Data");
            }
        }
        this.displayedColumns = this.columns.concat(['actions']);
    };
    TableComponent.prototype.parentStackTrace = function (obj) {
        var noMore = false;
        var categoryid;
        var subcategoryid;
        var productid;
        for (var _i = 0, _a = this.mainDataSource; _i < _a.length; _i++) {
            var category_1 = _a[_i];
            if (!noMore) {
                categoryid = category_1.categoryId;
                for (var _b = 0, _c = category_1.subcategory; _b < _c.length; _b++) {
                    var subcategory = _c[_b];
                    if (!noMore) {
                        subcategoryid = subcategory.subcategoryId;
                        for (var _d = 0, _e = subcategory.products; _d < _e.length; _d++) {
                            var products = _e[_d];
                            if (!noMore) {
                                productid = products.productId;
                                for (var _f = 0, _g = products.subProducts; _f < _g.length; _f++) {
                                    var subProduct = _g[_f];
                                    if (!noMore) {
                                        if (subProduct.subproductId == obj.subproductId) {
                                            this.stackArray.push(categoryid, subcategoryid, productid, subProduct.subproductId);
                                            noMore = true;
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    TableComponent.prototype.redirectToImageUpload = function (data, initialData) {
        this.stackArray = [];
        // console.log(initialData);
        this.parentStackTrace(data);
        this.dataStorage.storage = {
            'stackTrace': this.stackArray,
            'initialImage': initialData,
            'otherInfo': data
        };
        this.router.navigate(['admin/productUpload']);
    };
    TableComponent.prototype.ngOnDestroy = function () {
        this.dataObj.dataSource.next([]);
        this.subscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "PushChange", void 0);
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tablehere',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/modules/adminModule/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/modules/adminModule/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_11__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_8__["DialogDataService"], _moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_9__["CategoryDatabase"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/voucher/services/voucherServices.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/voucher/services/voucherServices.ts ***!
  \*************************************************************************/
/*! exports provided: VoucherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherService", function() { return VoucherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");
/* harmony import */ var src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/globalmodel/comments */ "./src/app/globalmodel/comments.ts");








var VoucherService = /** @class */ (function () {
    function VoucherService(http) {
        this.http = http;
        this.getVouchersUrl = _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].getVouchers;
        this.getTemplatesUrl = _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].gettemplateData;
        this.pushVoucherUrl = _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].pushVoucher;
    }
    VoucherService.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else if (error.status != 0) {
            err = error.error;
        }
        else {
            err = src_app_globalmodel_comments__WEBPACK_IMPORTED_MODULE_7__["comments"].networkError;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
    };
    ;
    VoucherService.prototype.getVouchers = function () {
        return this.http.get(this.getVouchersUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    VoucherService.prototype.pushVoucher = function (voucherobj) {
        return this.http.post(this.pushVoucherUrl, voucherobj, src_app_globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_6__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    VoucherService.prototype.getTemplateData = function () {
        return this.http.get(this.getTemplatesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    VoucherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], VoucherService);
    return VoucherService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/voucher/voucher.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/voucher/voucher.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#formcontainer{\n    margin:1rem;\n    margin-bottom:100px;\n}\n\n.flexcontainer{\n    display:flex;\n    justify-content: space-around;\n}\n\nform {\n    background-color:#034f84;\n    overflow:hidden;\n}\n\n.custcss mat-form-field{\n    margin:0px !important;\n    margin-top:10px !important;\n    width: 100% !important;\n}\n\nform h2 {\n    color:white;\n    /* margin:10px 15px; */\n    letter-spacing: 1px;\n    letter-spacing: 2.5px;\n    margin:25px 35px;\n    text-shadow:2px 4px black;\n}\n\n.percent mat-radio-button{\n    margin-right: 5px !important;\n}\n\n.percent{\n    background-color:rgb(245, 245, 245);\n    border-radius:5px;\n    color:gray;\n    font-size: 14px;\n}\n\ntextarea {\n    width:100%;\n    height:60px;\n    resize: none !important;\n    font-size:13.5px;\n    line-height: 25px;\n    letter-spacing: 0.2px;\n}\n\nmat-label {\n    width:100%;\n    height:60px;\n    resize: none !important;\n    font-size:13.5px;\n    line-height: 25px;\n    letter-spacing: 0.2px;\n}\n\nmat-select {\n    width:100%;\n    height:60px;\n    resize: none !important;\n    font-size:13.5px;\n    line-height: 25px;\n    letter-spacing: 0.2px;\n}\n\nmat-form-field {\n    /* width:90%; */\n    margin-left:20px;\n    margin-bottom:20px;\n    margin-top:25px;\n    padding:15px 20px;\n    resize: none;\n    background-color:whitesmoke;\n    border:1px solid white;\n    border-radius :5px;\n}\n\n.titleMat {\n    width:93% !important;\n    /* margin:50px 10px; */\n    resize: none;\n    background-color:whitesmoke;\n    border:1px solid white;\n    border-radius :5px;\n}\n\n.addButton {\n    margin-left:2.3rem;\n}\n\nbutton {\n    margin:15px 35px;\n}\n\n.matField {\n    width:70%;\n}\n\n.buttonDiv {\n    display:flex;\n    align-items: center !important; \n    justify-content: center !important;\n    margin-top:55px;\n}\n\n.containerPara {\n    display:flex !important;\n    justify-content: space-around;\n}\n\n.submitButton {\n    background-color:whitesmoke;\n    color:black;\n    text-align: center;\n}\n\n.buttonInside {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS92b3VjaGVyL3ZvdWNoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtDQUNqQzs7QUFFRDtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtDQUMxQjs7QUFDRDtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksNkJBQTZCO0NBQ2hDOztBQUNEO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25COztBQUNEO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7Q0FDekI7O0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtDQUN6Qjs7QUFDRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0NBQ3pCOztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLFVBQVU7Q0FDYjs7QUFDRDtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLGdCQUFnQjtDQUNuQjs7QUFDRDtJQUNJLHdCQUF3QjtJQUN4Qiw4QkFBOEI7Q0FDakM7O0FBQ0Q7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS92b3VjaGVyL3ZvdWNoZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2Zvcm1jb250YWluZXJ7XG4gICAgbWFyZ2luOjFyZW07XG4gICAgbWFyZ2luLWJvdHRvbToxMDBweDtcbn1cblxuLmZsZXhjb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMzRmODQ7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xufVxuXG4uY3VzdGNzcyBtYXQtZm9ybS1maWVsZHtcbiAgICBtYXJnaW46MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDoxMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbmZvcm0gaDIge1xuICAgIGNvbG9yOndoaXRlO1xuICAgIC8qIG1hcmdpbjoxMHB4IDE1cHg7ICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gICAgbWFyZ2luOjI1cHggMzVweDtcbiAgICB0ZXh0LXNoYWRvdzoycHggNHB4IGJsYWNrO1xufVxuXG4ucGVyY2VudCBtYXQtcmFkaW8tYnV0dG9ue1xuICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG4ucGVyY2VudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDUsIDI0NSwgMjQ1KTtcbiAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICBjb2xvcjpncmF5O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbnRleHRhcmVhIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDo2MHB4O1xuICAgIHJlc2l6ZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZToxMy41cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxubWF0LWxhYmVsIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDo2MHB4O1xuICAgIHJlc2l6ZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZToxMy41cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxubWF0LXNlbGVjdCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6NjBweDtcbiAgICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6MTMuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICAvKiB3aWR0aDo5MCU7ICovXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICAgbWFyZ2luLXRvcDoyNXB4O1xuICAgIHBhZGRpbmc6MTVweCAyMHB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzIDo1cHg7XG59XG4udGl0bGVNYXQge1xuICAgIHdpZHRoOjkzJSAhaW1wb3J0YW50O1xuICAgIC8qIG1hcmdpbjo1MHB4IDEwcHg7ICovXG4gICAgcmVzaXplOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXMgOjVweDtcbn1cbi5hZGRCdXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OjIuM3JlbTtcbn1cbmJ1dHRvbiB7XG4gICAgbWFyZ2luOjE1cHggMzVweDtcbn1cbi5tYXRGaWVsZCB7XG4gICAgd2lkdGg6NzAlO1xufVxuLmJ1dHRvbkRpdiB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOjU1cHg7XG59XG4uY29udGFpbmVyUGFyYSB7XG4gICAgZGlzcGxheTpmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uc3VibWl0QnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ1dHRvbkluc2lkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/voucher/voucher.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/adminModule/voucher/voucher.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='formcontainer' *ngIf='voucherForm!=null'>\n<form [formGroup]=\"voucherForm\" (ngSubmit)=\"onsubmit(voucherForm.value)\" class=\"voucherForm\">\n    <h2>Voucher CRUD</h2>\n    <div formArrayName=\"voucherDetails\">\n      <div *ngFor=\"let voucher of voucherForm.controls.voucherDetails.controls; let i = index;\" [formGroupName]=\"i\">\n      \n        <div>\n          <mat-form-field class=\"example-full-width titleMat\">\n            <textarea matInput placeholder=\"Voucher Condition Statement \" \n            formControlName=\"voucherStatement\"></textarea>\n            </mat-form-field>\n        </div>\n       \n        \n        <div class='flexcontainer'>\n          <div>\n            <div class='percent'>\n            <div>Is Percentage Or Not ?</div>\n              <mat-radio-group aria-label=\"Select an option\" formControlName='isPercent'>\n                  <mat-radio-button value=\"true\">True</mat-radio-button>\n                  <mat-radio-button value=\"false\">False</mat-radio-button>\n                </mat-radio-group>\n            </div>\n         \n          <div class='custcss' *ngIf=\"voucher.controls.isPercent.value=='true'\">\n              <mat-form-field class=\"example-full-width titleMat\">\n                <input matInput placeholder=\"Voucher Discount(Specify % too)\"  \n                formControlName=\"voucherDiscount\">\n                </mat-form-field>\n            </div>\n            <div class='custcss' *ngIf=\"voucher.controls.isPercent.value=='false'\">\n                <mat-form-field class=\"example-full-width titleMat\">\n                  <input matInput placeholder=\"Voucher Discount(Specify % too)\" type='number' \n                  formControlName=\"voucherDiscount\">\n                  </mat-form-field>\n              </div></div>\n              <div>\n                  <!-- <mat-form-field class=\"example-full-width titleMat\">\n                    <textarea matInput placeholder=\"Specify the template ID\" formControlName=\"templateId\"></textarea>\n                    </mat-form-field> -->\n                    <mat-form-field>\n                      <mat-label>Specify the Template ID</mat-label>\n                      <mat-select formControlName=\"templateId\">\n                       <mat-option *ngFor=\"let obj of templateIdArray\" [value]=\"obj.templateId\">\n                          {{obj.templateId}}\n                        </mat-option> \n                      </mat-select>\n                    </mat-form-field>\n                </div>\n        <div>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput [matDatepicker]=\"dp3\" formControlName=\"expiryDate\" placeholder=\"Choose a date\">\n            <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n            <mat-datepicker touchUi #dp3 disabled=\"false\"></mat-datepicker>\n          </mat-form-field>\n        </div>\n     \n        </div>\n        <div class=\"buttonDiv\">\n          <button mat-raised-button type=\"button\" color='accent' [disabled]='voucherForm.controls.voucherDetails.controls.length==1' (click)='deleteVoucher(i)'>Delete Voucher</button>\n        </div>\n        </div>\n    </div>\n      <div class=\"buttonInside\">\n        <button mat-raised-button type=\"button\" color='accent' (click)='addVoucher()'>Add New Voucher</button>\n      </div>\n    <div class=\"buttonInside\">\n        <button mat-raised-button type=\"submit\" color='accent' [disabled]=\"voucherForm.invalid\">Save</button>\n    </div>\n  </form>\n\n  </div>"

/***/ }),

/***/ "./src/app/modules/adminModule/voucher/voucher.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/adminModule/voucher/voucher.component.ts ***!
  \******************************************************************/
/*! exports provided: VoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherComponent", function() { return VoucherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_voucherServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/voucherServices */ "./src/app/modules/adminModule/voucher/services/voucherServices.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var VoucherComponent = /** @class */ (function () {
    function VoucherComponent(fb, voucherService, snackBar) {
        this.fb = fb;
        this.voucherService = voucherService;
        this.snackBar = snackBar;
        this.templateIdArray = [];
        this.voucherDetailsArray = [];
    }
    VoucherComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    VoucherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.voucherService.getVouchers().subscribe(function (data) {
            console.log(data);
            if (data.status == 'S' && data.data.length != 0) {
                var dataArray = data.data[0].allVouchers;
                _this.templateIdArray = data.templates;
                _this.voucherDetailsArray = [];
                if (dataArray.length != 0) {
                    for (var _i = 0, dataArray_1 = dataArray; _i < dataArray_1.length; _i++) {
                        var obj = dataArray_1[_i];
                        _this.voucherDetailsArray.push(_this.createVoucher(obj));
                    }
                }
                else {
                    _this.templateIdArray = data.templates;
                    _this.voucherDetailsArray.push(_this.createVoucher(null));
                }
                _this.createForm();
            }
            else if (data.data.length == 0) {
                _this.voucherDetailsArray.push(_this.createVoucher(null));
                _this.templateIdArray = data.templates;
                _this.createForm();
            }
        }, function (err) {
            if (err.message != null) {
                _this.openSnackBar(err.message, '');
            }
            else {
                _this.openSnackBar(err, '');
            }
        });
    };
    VoucherComponent.prototype.createForm = function () {
        this.voucherForm = this.fb.group({
            voucherDetails: this.fb.array(this.voucherDetailsArray)
        });
    };
    Object.defineProperty(VoucherComponent.prototype, "voucherForms", {
        get: function () {
            return this.voucherForm.get('voucherDetails');
        },
        enumerable: true,
        configurable: true
    });
    VoucherComponent.prototype.createVoucher = function (obj) {
        var voucher = null;
        if (obj != null) {
            voucher = this.fb.group({
                voucherStatement: [obj.voucherStatement, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                expiryDate: [obj.expiryDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                isPercent: [obj.isPercent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                voucherDiscount: [obj.voucherDiscount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                templateId: [obj.templateId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
        else {
            voucher = this.fb.group({
                voucherStatement: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                expiryDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                isPercent: ['true', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                voucherDiscount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                templateId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
        return voucher;
    };
    VoucherComponent.prototype.addVoucher = function (value) {
        this.voucherForms.push(this.createVoucher(value));
    };
    VoucherComponent.prototype.deleteVoucher = function (i) {
        this.voucherForms.removeAt(i);
    };
    VoucherComponent.prototype.onsubmit = function (form) {
        var _this = this;
        console.log(form);
        this.voucherService.pushVoucher(form).subscribe(function (data) {
            if (data.status == 'S') {
                window.location.reload();
            }
        }, function (err) {
            if (err.message != null) {
                _this.openSnackBar(err.message, '');
            }
            else {
                _this.openSnackBar(err, '');
            }
        });
    };
    VoucherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin-voucher',
            template: __webpack_require__(/*! ./voucher.component.html */ "./src/app/modules/adminModule/voucher/voucher.component.html"),
            providers: [_services_voucherServices__WEBPACK_IMPORTED_MODULE_3__["VoucherService"]],
            styles: [__webpack_require__(/*! ./voucher.component.css */ "./src/app/modules/adminModule/voucher/voucher.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_voucherServices__WEBPACK_IMPORTED_MODULE_3__["VoucherService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], VoucherComponent);
    return VoucherComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-adminModule-admin-module.js.map
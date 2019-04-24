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
    function category(categoryId, categoryName, subcategoryId, subcategoryName, productId, productName, subproductId, subproductName, description, benfitsAndUses, amount, suffix, price, discount, imageurlarray) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.subcategory = [];
        this.childIds = [];
        this.subcategory.push(new _categorylist__WEBPACK_IMPORTED_MODULE_0__["Subcategorylist"](subcategoryId, subcategoryName, productId, productName, subproductId, subproductName, description, benfitsAndUses, amount, suffix, price, discount, imageurlarray));
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
    function Subcategorylist(subcategoryId, subcategoryName, productId, productName, subproductId, subproductName, description, benfitsAndUses, amount, suffix, price, discount, imageurlarray) {
        this.subcategoryId = subcategoryId;
        this.subcategoryName = subcategoryName;
        this.childIds = [];
        this.products = [];
        this.products.push(new _productList__WEBPACK_IMPORTED_MODULE_0__["Productlist"](productId, productName, subproductId, subproductName, description, benfitsAndUses, amount, suffix, price, discount, imageurlarray));
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
    function Productlist(productId, productName, subproductId, subproductName, description, benfitsAndUses, amount, suffix, price, discount, imageurlarray) {
        this.productId = productId;
        this.productName = productName;
        this.childIds = [];
        this.subProducts = [];
        this.subProducts.push(new _subProduct__WEBPACK_IMPORTED_MODULE_0__["SubProduct"](subproductId, subproductName, description, benfitsAndUses, amount, suffix, price, discount, imageurlarray));
    }
    return Productlist;
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

module.exports = "<div id=\"addDialogBox\">\n   \n<div class=\"heading\"><h1 >ADD NEW DATA</h1></div>\n<form id=\"form\" [formGroup]=\"demo\" (ngSubmit)=\"Add(demo.value)\">\n   <div>\n    <mat-form-field formArrayName=\"addarray\" *ngFor=\"let key of keyArray; let i=index\">\n        <mat-label>{{key}}</mat-label>\n        <input matInput placeholder=\"\" [formControlName]=\"i\" >\n    \n      \n      </mat-form-field></div>\n      <div>\n      <button mat-raised-button  class=\"csstoButton\" [disabled]=\"!demo.valid\">Submit</button>\n      <button mat-raised-button  type=\"button\" class=\"csstoButton\" (click)=\"Cancel()\">Cancel</button>\n    </div>\n</form>\n\n</div>\n\n"

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

module.exports = "<div id=\"addDialogBox\">\n<div class=\"heading\"><h1 >DELETE THE DATA</h1></div>\n<div id=\"form\">\n<h2>Are you sure you want to delete this Entry</h2>\n</div>\n<div>\n        <button mat-raised-button  class=\"csstoButton\" (click)=\"Delete()\">Delete</button>\n        <button mat-raised-button  type=\"button\" class=\"csstoButton\" (click)=\"Cancel()\">Cancel</button>\n</div>\n</div>"

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

module.exports = "<div id=\"addDialogBox\">\n   \n        <div class=\"heading\"><h1 >EDIT THE DATA</h1></div>\n<form id=\"form\" [formGroup]=\"demo\" (ngSubmit)=\"Edit(demo.value)\">\n   <div>\n    <mat-form-field formArrayName=\"addarray\" *ngFor=\"let key of keyArray; let i=index\">\n        <mat-label>{{key}}</mat-label>\n        <input matInput placeholder=\"\" [formControlName]=\"i\" [value]='inputArray[i]' >\n\n      </mat-form-field>\n      </div>\n      <div>\n      <button mat-raised-button class=\"csstoButton\" [disabled]='demo.invalid'>Submit</button>\n      <button mat-raised-button  class=\"csstoButton\" type=\"button\" (click)=\"Cancel()\">Cancel</button>\n    </div>\n    </form>\n</div>\n\n"

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
        this.inputArray = Object.values(this.object);
        this.demo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addarray: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        for (var key in this.object) {
            if (this.objCheck(this.object[key])) { //creation of formarray and reactive form,validations
                this.keyArray.push(key); //based on object recieved
                this.demo.get('addarray').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
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

module.exports = "<div>\n  <div>\n      <div class=\"imageUploadSection\">\n      <div id=\"upload_container\">\n          <mat-card class=\"file_upload\">\n                <mat-card-header class=\"card_title\">\n                \n                  <mat-card-title >Upload Image</mat-card-title>\n                  \n                </mat-card-header>\n                <mat-card-actions>\n                    <label *ngIf=\"categoryName!='' && activeImageObj.label!=''\" class=\"custom-file-upload\">\n                        Upload Image<input type=\"file\" name=\"uploadadImage\" \n                        accept=\".jpg,.jpeg,.png\" (change)=\"uploadImage(uploadadImage)\" #uploadadImage ></label>\n                        <button *ngIf=\"categoryName=='' || activeImageObj.label==''\" id=\"disabledbutton\" [disabled]='true' mat-raised-button >Upload Image</button>\n                </mat-card-actions>\n              </mat-card>\n            </div>\n           \n              <div>\n                   \n                      <mat-card *ngIf=\" activeImageObj!=null && (activeImageObj.imageobj).url!=null \" class=\"activeImageCard\">\n                          <mat-card-header>\n                              {{activeImageObj.label| uppercase}}\n                            </mat-card-header>\n                        <div id=\"imageSection\">\n                          \n                         <div id=\"image_container\">\n                            <img *ngIf='(activeImageObj.imageobj).url!=null' [src]=\"(activeImageObj.imageobj).url\" >\n            \n                             </div>\n                      </div>\n                      </mat-card>\n                      </div>\n                      </div>\n  </div>\n</div>"

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
        this.form = new FormData();
    }
    AdImageCrudComponent.prototype.openSnackBar = function (message, action) {
        this.snackbar.open(message, action, {
            duration: 2000,
        });
    };
    AdImageCrudComponent.prototype.ngOnInit = function () {
    };
    AdImageCrudComponent.prototype.imageEmit = function (obj) {
        this.imagecrudemit.emit(obj);
    };
    AdImageCrudComponent.prototype.uploadImage = function (inputFile) {
        var _this = this;
        this.form.set('category', this.categoryName);
        this.form.set('label', this.activeImageObj.label);
        if (inputFile.files.length != 0) {
            this.form.set('adImage', inputFile.files[0]);
            this.form.set('crud', 'add');
            this.imagecrud.uploadFile(_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].localAdImageAdd, this.form).subscribe(function (imageobj) {
                if (imageobj != null && imageobj.imageUrl != null) {
                    console.log(imageobj);
                    _this.activeImageObj.label = imageobj.label;
                    _this.activeImageObj.imageobj.url = imageobj.imageUrl;
                    console.log(_this.activeImageObj);
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
    ], AdImageCrudComponent.prototype, "activeImageObj", void 0);
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

module.exports = "\n\n  \n#adminheader{\n    position: fixed;\n    z-index:10;\n    width:100%;\n    top:0px;\n}\n\n#content{\n    padding-top:6rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsUUFBUTtDQUNYOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgXG4jYWRtaW5oZWFkZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6MTA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICB0b3A6MHB4O1xufVxuXG4jY29udGVudHtcbiAgICBwYWRkaW5nLXRvcDo2cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/adminModule/admin.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/adminModule/admin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='adminheader'>\n<adminheader></adminheader>\n</div>\n<div id='content' >\n        <router-outlet></router-outlet>\n</div>\n"

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
        })
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

module.exports = "<div>\n<div id='formcontainer'>\n  \n    <form [formGroup]='dataform' id='form' (ngSubmit)='formSubmit(dataform.value)'>\n  \n  <div class='divcss'>\n      <mat-form-field>\n          <mat-label>Type Of Ad</mat-label>\n          <mat-select formControlName='typeOfAd'>\n            <mat-option value='Product'>\n           Product\n            </mat-option>\n            <mat-option value='Bank'>\n                Bank\n                 </mat-option>\n          </mat-select>\n        </mat-form-field>\n  </div>\n      <div class='divcss'>\n    \n      <mat-form-field>\n          <mat-label>Category</mat-label>\n          <!-- <input matInput placeholder=\"Type Category\" formControlName=\"category\">\n                  <mat-error *ngFor=\"let validation of errors.adField\">\n                      <mat-error *ngIf=\"dataform.controls.category.hasError(validation.type) && \n                      (dataform.controls.category.dirty || dataform.controls.category.touched)\">\n                      {{validation.message}}</mat-error>\n                       \n                  </mat-error> -->\n               \n                      <mat-select formControlName='category'>\n                        <mat-option *ngFor=\"let categoryad of categoryArray\" [value]=\"categoryad.categoryName\">\n                          {{categoryad.categoryName}}\n                        </mat-option>\n                      </mat-select>\n                      <mat-error *ngFor=\"let validation of errors.adField\">\n                          <mat-error *ngIf=\"dataform.controls.category.hasError(validation.type) && \n                          (dataform.controls.category.dirty || dataform.controls.category.touched)\">\n                          {{validation.message}}</mat-error>\n                           \n                      </mat-error>\n                    </mat-form-field>\n       \n  </div>\n  \n  <div class='divcss'>\n        <mat-form-field>\n            <mat-label>No Of Ads</mat-label>\n            <input matInput placeholder=\"Type no of ads\" formControlName=\"noOfAds\">\n                  <mat-error *ngFor=\"let validation of errors.mandateField\">\n                      <mat-error *ngIf=\"dataform.controls.noOfAds.hasError(validation.type) && \n                      (dataform.controls.noOfAds.dirty || dataform.controls.noOfAds.touched)\">\n                      {{validation.message}}</mat-error>\n                       \n                  </mat-error>\n          \n          </mat-form-field>\n      \n  </div>\n  <div class='divcss'>\n      <mat-form-field>\n          <mat-label>Priority</mat-label>\n          <input matInput placeholder=\"Priority\" formControlName=\"priority\">\n                <mat-error *ngFor=\"let validation of errors.mandateField\">\n                    <mat-error *ngIf=\"dataform.controls.priority.hasError(validation.type) && \n                    (dataform.controls.priority.dirty || dataform.controls.priority.touched)\">\n                    {{validation.message}}</mat-error>\n                     \n                </mat-error>\n        \n        </mat-form-field>\n    \n</div>\n  <div class='divcss'>\n    <mat-form-field>\n        <mat-label>Layout</mat-label>\n        <mat-select formControlName=\"layout\">\n          <mat-option value=\"gridlayout\" >\n         Grid Layout\n          </mat-option>\n          <mat-option value=\"serieslayout\" >\n              Series Layout\n               </mat-option>\n               <mat-option value=\"carousellayout\" >\n                  CarouselLayout\n                   </mat-option>\n        </mat-select>\n      </mat-form-field>\n  \n</div>\n<div class='divcss'>\n  <div>  <mat-error *ngIf=\"minaderrorMessage!='' || minaderrorMessage!=null\" class=\"error_message_display\">{{minaderrorMessage | uppercase }}</mat-error>\n  </div>\n  <div>\n      <div>\n          <button (click)='customInput()' type='button' color='primary' mat-raised-button>Custom Input Toggle</button>\n        </div>\n    <div class='subads' formArrayName='subAds' *ngFor='let subad of dataform.controls.subAds.controls;let i = index'>\n      \n        <span (click)=\"deleteThisIndex(dataform.controls.subAds.controls,i)\" class=\"clear\"><mat-icon>clear</mat-icon></span> \n                     \n      <div formGroupName='{{i}}'>\n          <div class='flexcontainer'>\n        \n          <div id='subdata' >\n            <div>\n         <div *ngIf='isCustom==true'>\n            <mat-form-field>\n            <mat-label>Label</mat-label>\n            <input matInput placeholder=\"Type Label\" formControlName=\"label\">\n            <mat-error *ngFor=\"let validation of errors.mandateField\">\n                <mat-error *ngIf=\"subad.controls.label.hasError(validation.type) && \n                (subad.controls.label.dirty || subad.controls.label.touched)\">\n                {{validation.message}}</mat-error>\n                 \n            </mat-error>\n            </mat-form-field>\n            </div>\n           \n            <div *ngIf='isCustom==false'>\n                <mat-form-field>\n                    <mat-label>Label</mat-label>\n            <mat-select formControlName='label'>\n                <mat-option *ngFor=\"let subcategory of subCategoryArray\" [value]=\"subcategory.subcategoryName\">\n                  {{subcategory.subcategoryName}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngFor=\"let validation of errors.mandateField\">\n                  <mat-error *ngIf=\"subad.controls.label.hasError(validation.type) && \n                  (subad.controls.label.dirty || subad.controls.label.touched)\">\n                  {{validation.message}}</mat-error>\n                   \n              </mat-error>\n            </mat-form-field>\n          \n         </div>\n        \n            </div>\n        \n         <div>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Type Link \" formControlName=\"link\">\n                <mat-error *ngFor=\"let validation of errors.mandateField\">\n                    <mat-error *ngIf=\"subad.controls.link.hasError(validation.type) && \n                    (subad.controls.link.dirty || subad.controls.link.touched)\">\n                    {{validation.message}}</mat-error>\n                     \n                </mat-error>\n              </mat-form-field>\n          </div>\n          <div>\n              <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Type Priority \" formControlName=\"priority\">\n                  <mat-error *ngFor=\"let validation of errors.mandateField\">\n                      <mat-error *ngIf=\"subad.controls.priority.hasError(validation.type) && \n                      (subad.controls.priority.dirty || subad.controls.priority.touched)\">\n                      {{validation.message}}</mat-error>\n                       \n                  </mat-error>\n                </mat-form-field>\n            </div>\n          <div >\n              <mat-form-field>\n                  <mat-label>Status</mat-label>\n                  <mat-select formControlName=\"status\">\n                    <mat-option value=\"active\">active\n                    </mat-option>\n                    <mat-option value='inactive'>inactive</mat-option>\n                  </mat-select>\n                </mat-form-field>\n            </div>\n<div class='parameters'>\n  \n    \n        <mat-label>Parameters</mat-label>\n        <div formArrayName='params' *ngFor=\"let param of subad.controls.params.controls;let j = index\">\n         \n          <div class='flexcontainer'>\n              <div formGroupName='{{j}}'>\n        \n            <mat-form-field class=\"example-full-width\">\n                  \n              <mat-label>{{param.controls.keyword.value}}</mat-label> \n              <!-- <input class='inputtag' matInput placeholder='Type of parameter' formControlName='keyword'> -->\n              <mat-select formControlName='keyword'>\n                  <mat-option *ngFor=\"let param of paramArray\" [value]=\"param\">\n                    {{param}}\n                  </mat-option>\n                </mat-select>\n              <mat-error *ngFor=\"let validation of errors.mandateField\">\n                  <mat-error *ngIf=\"param.controls.keyword.hasError(validation.type) && \n                  (param.controls.keyword.dirty || param.controls.keyword.touched)\">\n                  {{validation.message}}</mat-error>\n                   \n              </mat-error>\n               \n              </mat-form-field> \n              <mat-form-field>\n                  <mat-label>Value</mat-label><input class='inputtag' matInput formControlName='value'>\n                  <mat-error *ngFor=\"let validation of errors.mandateField\">\n                      <mat-error *ngIf=\"param.controls.value.hasError(validation.type) && \n                      (param.controls.value.dirty || param.controls.value.touched)\">\n                      {{validation.message}}</mat-error>\n                       \n                  </mat-error>\n                </mat-form-field>  \n            </div>\n            <div class='buttonwrapper'>\n            <button  mat-raised-button color='warn' type='button' [disabled]='subad.controls.params.controls.length==1' (click)=\"deleteParameters(subad.controls,j)\">DELETE</button>\n          </div>\n</div>\n         </div>\n         <div>\n         <button mat-raised-button color='primary' type='button' (click)=\"addParameters(subad.controls,null,null,dataform.controls.category.value)\">ADD</button>\n</div>\n      \n</div>\n</div>\n\n\n  <div class='imageupload'>\n      <ad-image-crud  (imagecrudemit)='urlcrud($event)' [categoryName]='dataform.controls.category.value'  [activeImageObj]='subad.value'></ad-image-crud>\n  </div>\n</div>\n</div>\n</div>\n</div>\n<div>\n<mat-error *ngIf=\"errorMessage!='' || errorMessage!=null\" class=\"error_message_display\">{{errorMessage | uppercase }}</mat-error>\n</div>    \n<div>\n    \n    <button mat-raised-button class='buttonaction' color='accent' type='button' (click)='addNewSubAd(true,null)'>ADD SUB ADS</button>\n   \n</div>\n<div>\n    <button mat-raised-button class='buttonaction' color='warn' type='button' (click)='deleteThisAd(dataform.controls.category.value)'>REMOVE AD</button>\n    <button mat-raised-button class='buttonaction' color='primary' [disabled]='dataform.invalid || !isAdCountEqual()'>SUBMIT</button>\n</div>\n</div>\n\n</form>\n</div>\n</div>\n"

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
        this.isCustom = true;
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
        console.log(obj);
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
            console.log(_this.dataform.getRawValue());
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
                    obj.value.category = data;
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
    AdscrudComponent.prototype.customInput = function () {
        this.isCustom = !this.isCustom;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _globalServices_Validation__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"], _services_adCrud__WEBPACK_IMPORTED_MODULE_4__["AdCrud"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
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
        else if (error.status != 200) {
            err = error.error;
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




var AdspageComponent = /** @class */ (function () {
    function AdspageComponent(getAdList) {
        this.getAdList = getAdList;
        this.adArray = [];
        this.currentopened = 0;
        this.productArray = [];
        this.categoryNameArray = [];
        this.bankArray = [];
        this.completeList = [];
    }
    AdspageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAdList.getListAds().subscribe(function (data) {
            console.log(data);
            if (data != null && Array.isArray(data) == true && data.length != 0) {
                data.forEach(function (list) {
                    if (list.adalready != null && list.adalready.length != 0) {
                        _this.adArray = list.adalready;
                        _this.sendcategoryName(_this.adArray);
                    }
                    else if (list.productAd != null && list.productAd.length != 0) {
                        _this.completeList.push({ 'Product': list.productAd });
                    }
                    else if (list.bankAd != null && list.bankAd.length != 0) {
                        _this.completeList.push({ 'Bank': list.bankAd });
                    }
                });
            }
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
        console.log(this.currentopened);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_adList__WEBPACK_IMPORTED_MODULE_3__["AdList"]])
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
        else if (error.status != 200) {
            err = error.error;
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

module.exports = ".hide{\n    display: none;\n}\n\n.show{\n    display: show;\n}\n\n.data_section{\n    text-align: center !important;\n   \n\n\n\n}\n\n#category_container{\n    width: 60%;\n   height:300px;\nmargin:0rem 1rem;\n}\n\n.flexcontainer{\n    padding:1rem;\n display: flex;\n}\n\n#categorylist{\n    margin:1rem;\n   width:100%;\n    position: relative;\n   \n    \n\n}\n\n.table_content{\nwidth:38%;\n}\n\n.parentNode{\n    position: absolute;\n    left:-3%;\n    top:0%;\n    width:20%;\n}\n\n.final_data{\nfont-size:1rem;\nmargin:0.2rem 0px 0rem 2.5rem;\n}\n\n#category_container ::ng-deep .material-icons{\nfont-size: 1rem !important;\n    \n}\n\n::ng-deep #categorylist .mat-form-field-appearance-legacy .mat-form-field-underline{\ndisplay:none;}\n\n::ng-deep #categorylist .mat-form-field-appearance-legacy .mat-form-field-wrapper{\n    padding-bottom:0px !important;\n}\n\n.dataEntry{\n   \n    width:100%;\n}\n\n.firstNodeItem{\n\nposition: absolute;\n\nwidth:100%;\nleft:100%;\ntop:0%;\n\n}\n\n.secondNodeItem{\n   \n    position: absolute;\n   \n    width:100%;\n    left:120%;\n    top:0%;\n    margin-left:1rem;\n    }\n\n.thirdNodeItem{\n   \n        position: absolute;\n        width:100%;\n        left:120%;\n        top:0%;\n        margin-left:1rem;\n        \n        }\n\n.csssetting:hover{\n        background-color:lightskyblue;\n    }\n\n.csssetting{\n    font-size: 12px;\n    border-bottom:1px solid darkgrey;\n    border-radius:3%;\n    color:grey;\n    font-weight: 300;\n    \n  \n}\n\n.node_container{\n    height:200px;\n   width:180px;\n    overflow: scroll;\n}\n\n#heading{\n    color:white;\n    background-color: #3F51B5;\n        text-align: center;\n    \n}\n\n@media screen and (max-width:1337px){\n \n    .flexcontainer{\n        flex-shrink: 0;\n        flex-wrap: wrap;\n    }\n    #category_container{\n        width:100%;\n    }\n    .table_content{\n        width:100%;\n        }\n\n}    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9jYXRlZ29yeUNydWQvY2F0ZWdvcnlDcnVkLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUdEO0lBQ0ksOEJBQThCOzs7OztDQUtqQzs7QUFFRDtJQUNJLFdBQVc7R0FDWixhQUFhO0FBQ2hCLGlCQUFpQjtDQUNoQjs7QUFDRDtJQUNJLGFBQWE7Q0FDaEIsY0FBYztDQUNkOztBQUVEO0lBQ0ksWUFBWTtHQUNiLFdBQVc7SUFDVixtQkFBbUI7Ozs7Q0FJdEI7O0FBRUQ7QUFDQSxVQUFVO0NBQ1Q7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULE9BQU87SUFDUCxVQUFVO0NBQ2I7O0FBR0Q7QUFDQSxlQUFlO0FBQ2YsOEJBQThCO0NBQzdCOztBQUVEO0FBQ0EsMkJBQTJCOztDQUUxQjs7QUFHRDtBQUNBLGFBQWEsQ0FBQzs7QUFHZDtJQUNJLDhCQUE4QjtDQUNqQzs7QUFDRDs7SUFFSSxXQUFXO0NBQ2Q7O0FBR0Q7O0FBRUEsbUJBQW1COztBQUVuQixXQUFXO0FBQ1gsVUFBVTtBQUNWLE9BQU87O0NBRU47O0FBR0Q7O0lBRUksbUJBQW1COztJQUVuQixXQUFXO0lBQ1gsVUFBVTtJQUNWLE9BQU87SUFDUCxpQkFBaUI7S0FDaEI7O0FBRUQ7O1FBRUksbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxVQUFVO1FBQ1YsT0FBTztRQUNQLGlCQUFpQjs7U0FFaEI7O0FBR0w7UUFDSSw4QkFBOEI7S0FDakM7O0FBQ0w7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCOzs7Q0FHcEI7O0FBQ0Q7SUFDSSxhQUFhO0dBQ2QsWUFBWTtJQUNYLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7UUFDdEIsbUJBQW1COztDQUUxQjs7QUFHRDs7SUFFSTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksV0FBVztTQUNWOztDQUVSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9jYXRlZ29yeUNydWQvY2F0ZWdvcnlDcnVkLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93e1xuICAgIGRpc3BsYXk6IHNob3c7XG59XG5cblxuLmRhdGFfc2VjdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgIFxuXG5cblxufVxuXG4jY2F0ZWdvcnlfY29udGFpbmVye1xuICAgIHdpZHRoOiA2MCU7XG4gICBoZWlnaHQ6MzAwcHg7XG5tYXJnaW46MHJlbSAxcmVtO1xufVxuLmZsZXhjb250YWluZXJ7XG4gICAgcGFkZGluZzoxcmVtO1xuIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNjYXRlZ29yeWxpc3R7XG4gICAgbWFyZ2luOjFyZW07XG4gICB3aWR0aDoxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIFxuICAgIFxuXG59XG5cbi50YWJsZV9jb250ZW50e1xud2lkdGg6MzglO1xufVxuXG4ucGFyZW50Tm9kZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDotMyU7XG4gICAgdG9wOjAlO1xuICAgIHdpZHRoOjIwJTtcbn1cblxuXG4uZmluYWxfZGF0YXtcbmZvbnQtc2l6ZToxcmVtO1xubWFyZ2luOjAuMnJlbSAwcHggMHJlbSAyLjVyZW07XG59XG5cbiNjYXRlZ29yeV9jb250YWluZXIgOjpuZy1kZWVwIC5tYXRlcmlhbC1pY29uc3tcbmZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICAgIFxufVxuXG5cbjo6bmctZGVlcCAjY2F0ZWdvcnlsaXN0IC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le1xuZGlzcGxheTpub25lO31cblxuXG46Om5nLWRlZXAgI2NhdGVnb3J5bGlzdCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gICAgcGFkZGluZy1ib3R0b206MHB4ICFpbXBvcnRhbnQ7XG59XG4uZGF0YUVudHJ5e1xuICAgXG4gICAgd2lkdGg6MTAwJTtcbn1cblxuXG4uZmlyc3ROb2RlSXRlbXtcblxucG9zaXRpb246IGFic29sdXRlO1xuXG53aWR0aDoxMDAlO1xubGVmdDoxMDAlO1xudG9wOjAlO1xuXG59XG5cblxuLnNlY29uZE5vZGVJdGVte1xuICAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgXG4gICAgd2lkdGg6MTAwJTtcbiAgICBsZWZ0OjEyMCU7XG4gICAgdG9wOjAlO1xuICAgIG1hcmdpbi1sZWZ0OjFyZW07XG4gICAgfVxuXG4gICAgLnRoaXJkTm9kZUl0ZW17XG4gICBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBsZWZ0OjEyMCU7XG4gICAgICAgIHRvcDowJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MXJlbTtcbiAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgLmNzc3NldHRpbmc6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRza3libHVlO1xuICAgIH1cbi5jc3NzZXR0aW5ne1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBkYXJrZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOjMlO1xuICAgIGNvbG9yOmdyZXk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBcbiAgXG59XG4ubm9kZV9jb250YWluZXJ7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgd2lkdGg6MTgwcHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuI2hlYWRpbmd7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufVxuXG4gICBcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTMzN3B4KXtcbiBcbiAgICAuZmxleGNvbnRhaW5lcntcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG4gICAgI2NhdGVnb3J5X2NvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG4gICAgLnRhYmxlX2NvbnRlbnR7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIH1cblxufSAgICAiXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/categoryCrud/categoryCrud.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/adminModule/categoryCrud/categoryCrud.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"flexcontainer\">\n    <div id=\"category_container\">\n    <div id=\"heading\">CATEGORY LIST</div>  \n            <div id=\"categorylist\">\n<div class=\"parentNode\">\n                <div  *ngFor=\"let categorylist of category ; let i=index\">\n                        <div class=\"data_section\">\n                              \n                                <button mat-button class=\"csssetting\" (click)=editorAdd(category) blockShow>{{categorylist.categoryName}}</button>\n                         <div class=\"hide firstNodeItem\">\n                                <div class=\"node_container\" >\n                    <div  *ngFor=\"let subcategory of categorylist.subcategory\" >\n                 <div class=\"data_section\">\n                        \n                            <button mat-button class=\"dataEntry csssetting\" (click)=editorAdd(categorylist.subcategory) blockShow>{{subcategory.subcategoryName}}</button> \n                           \n                            <div class=\"hide secondNodeItem\" >\n                                <div class=\"node_container\">\n                  <div *ngFor=\"let products of subcategory.products\">\n                        <div class=\"data_section\">\n                               \n                            <button mat-button (click)=editorAdd(subcategory.products) class=\"dataEntry csssetting\" blockShow>{{products.productName}}</button>\n                            <div class=\"hide thirdNodeItem\" >\n                                    <div class=\"node_container\">\n                      <div *ngFor=\"let subproduct of products.subProducts\">\n                            <div class=\"data_section\">\n                                   \n                                <button mat-button (click)=editorAdd(products.subProducts) class=\"dataEntry csssetting\" toggle>{{subproduct.subproductName}}</button>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                        </div>\n                      </div>\n                    </div>\n                </div>\n               \n                </div>\n                </div>\n                </div>\n                </div>\n                </div>\n                </div>\n         \n        </div>\n        </div>\n    </div>\n\n        <div class=\"table_content\">\n        <tablehere></tablehere>\n    </div>\n    </div>\n        \n\n"

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








var categoryCrud = /** @class */ (function () {
    function categoryCrud(categoryDatabase, fb, dataSource, dialogData, router) {
        this.categoryDatabase = categoryDatabase;
        this.fb = fb;
        this.dataSource = dataSource;
        this.dialogData = dialogData;
        this.router = router;
        this.isDone = false;
        this.checkkey = null;
        if (localStorage.getItem('id_token') == '-1' || localStorage.getItem('id_token') == null) {
            this.router.navigate(['/admin/login']);
        }
        else {
            this.newPushObject = new _globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_4__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
        }
    }
    categoryCrud.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryDatabase.dataChange.subscribe(function (data) {
            if (data != null) {
                _this.category = data;
            }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_2__["CategoryDatabase"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_5__["DataService"], _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_6__["DialogDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], categoryCrud);
    return categoryCrud;
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









var routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        children: [
            { path: 'categorycrud', component: _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_5__["categoryCrud"] },
            { path: 'productUpload', component: _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_4__["productUploadComponent"] },
            { path: 'makerChecker', component: _maker_checker_maker_checker_component__WEBPACK_IMPORTED_MODULE_8__["MakerCheckerComponent"] },
            { path: 'adsCrud', component: _adspage_adspage_component__WEBPACK_IMPORTED_MODULE_6__["AdspageComponent"] }
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


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admindashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/modules/adminModule/dashboardmodule/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/modules/adminModule/dashboardmodule/dashboard.component.css")]
        })
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dialogs/Add/add-dialog.component */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts");
/* harmony import */ var _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Dialogs/Delete/delete-dialog.component */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts");
/* harmony import */ var _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Dialogs/Edit/edit-dialog.component */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table/table.component */ "./src/app/modules/adminModule/table/table.component.ts");
/* harmony import */ var _moduleServices_imageCrud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../moduleServices/imageCrud */ "./src/app/modules/adminModule/moduleServices/imageCrud.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _importMats_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../importMats.module */ "./src/app/importMats.module.ts");
/* harmony import */ var _globalServices_jsonretreiver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../globalServices/jsonretreiver */ "./src/app/globalServices/jsonretreiver.ts");
/* harmony import */ var _globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../globalServices/categorylistjson */ "./src/app/globalServices/categorylistjson.ts");
/* harmony import */ var _sharedModule_sharedModule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../sharedModule/sharedModule */ "./src/app/modules/sharedModule/sharedModule.ts");
/* harmony import */ var _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../moduleServices/dataService */ "./src/app/modules/adminModule/moduleServices/dataService.ts");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../sharedModule/successSnackbar */ "./src/app/modules/sharedModule/successSnackbar.ts");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../categoryCrud/categoryCrud */ "./src/app/modules/adminModule/categoryCrud/categoryCrud.ts");
/* harmony import */ var _moduleServices_AuthInterceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../moduleServices/AuthInterceptor */ "./src/app/modules/adminModule/moduleServices/AuthInterceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_service_dologin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../login/service/dologin */ "./src/app/modules/adminModule/login/service/dologin.ts");
/* harmony import */ var _subproducts_data_subproducts_data_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../subproducts-data/subproducts-data.component */ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.ts");
/* harmony import */ var _subproducts_data_services_uploadform__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./../subproducts-data/services/uploadform */ "./src/app/modules/adminModule/subproducts-data/services/uploadform.ts");
/* harmony import */ var _table_services_pushobject__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../table/services/pushobject */ "./src/app/modules/adminModule/table/services/pushobject.ts");
/* harmony import */ var _productUpload_services_excelUpload__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../productUpload/services/excelUpload */ "./src/app/modules/adminModule/productUpload/services/excelUpload.ts");
/* harmony import */ var _maker_checker_maker_checker_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../maker-checker/maker-checker.component */ "./src/app/modules/adminModule/maker-checker/maker-checker.component.ts");
/* harmony import */ var _employeeDAO_employeeData_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../employeeDAO/employeeData.component */ "./src/app/modules/adminModule/employeeDAO/employeeData.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/modules/adminModule/sidenav/sidenav.component.ts");
/* harmony import */ var _employeeDAO_imagedialog_imagedialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../employeeDAO/imagedialog/imagedialog.component */ "./src/app/modules/adminModule/employeeDAO/imagedialog/imagedialog.component.ts");
/* harmony import */ var _adscrud_adscrud_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../adscrud/adscrud.component */ "./src/app/modules/adminModule/adscrud/adscrud.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/adminModule/dashboardmodule/dashboard.component.ts");
/* harmony import */ var _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../productUpload/productUpload.component */ "./src/app/modules/adminModule/productUpload/productUpload.component.ts");
/* harmony import */ var _ad_image_crud_ad_image_crud_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../ad-image-crud/ad-image-crud.component */ "./src/app/modules/adminModule/ad-image-crud/ad-image-crud.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/adminModule/dashboardmodule/dashboard-routing.module.ts");
/* harmony import */ var _adspage_adspage_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../adspage/adspage.component */ "./src/app/modules/adminModule/adspage/adspage.component.ts");
/* harmony import */ var _globalServices_getads__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../globalServices/getads */ "./src/app/globalServices/getads.ts");






































var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"],
                _employeeDAO_employeeData_component__WEBPACK_IMPORTED_MODULE_26__["EmployeeDataComponent"],
                _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_17__["categoryCrud"],
                _Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddDialogComponent"],
                _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteDialogComponent"],
                _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditDialogComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"],
                _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_31__["productUploadComponent"],
                _subproducts_data_subproducts_data_component__WEBPACK_IMPORTED_MODULE_21__["SubproductsDataComponent"],
                _maker_checker_maker_checker_component__WEBPACK_IMPORTED_MODULE_25__["MakerCheckerComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_27__["SidenavComponent"],
                _employeeDAO_imagedialog_imagedialog_component__WEBPACK_IMPORTED_MODULE_28__["ImagedialogComponent"],
                _adscrud_adscrud_component__WEBPACK_IMPORTED_MODULE_29__["AdscrudComponent"],
                _ad_image_crud_ad_image_crud_component__WEBPACK_IMPORTED_MODULE_32__["AdImageCrudComponent"],
                _adspage_adspage_component__WEBPACK_IMPORTED_MODULE_34__["AdspageComponent"],
            ],
            exports: [],
            providers: [_globalServices_jsonretreiver__WEBPACK_IMPORTED_MODULE_10__["Jsonretriever"], _globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_11__["CategoryJsonretriever"], _moduleServices_imageCrud__WEBPACK_IMPORTED_MODULE_7__["ImageCrud"], _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_13__["DataService"], _login_service_dologin__WEBPACK_IMPORTED_MODULE_20__["Dologin"], _globalServices_getads__WEBPACK_IMPORTED_MODULE_35__["getAds"],
                _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_14__["DialogDataService"], _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_16__["Data"], _subproducts_data_services_uploadform__WEBPACK_IMPORTED_MODULE_22__["UploadService"], _table_services_pushobject__WEBPACK_IMPORTED_MODULE_23__["PushChanges"], _productUpload_services_excelUpload__WEBPACK_IMPORTED_MODULE_24__["excelUpload"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"],
                    useClass: _moduleServices_AuthInterceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
                    multi: true
                }],
            imports: [
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_33__["DashboardRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _importMats_module__WEBPACK_IMPORTED_MODULE_9__["MyOwnCustomMaterialModule"],
                _sharedModule_sharedModule__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ],
            entryComponents: [_Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddDialogComponent"],
                _employeeDAO_imagedialog_imagedialog_component__WEBPACK_IMPORTED_MODULE_28__["ImagedialogComponent"],
                _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteDialogComponent"],
                _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditDialogComponent"],
                _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_15__["SuccessComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
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
        this.user.isVerified = true;
        this.verification.emit(user);
    };
    EmployeeDataComponent.prototype.unverify = function (user) {
        this.user.isVerified = false;
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
        else if (error.status == 401) {
            // server-side error
            errorMessage = error.error;
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
            duration: 5000,
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_getUnverifiedEmployees__WEBPACK_IMPORTED_MODULE_3__["GetUnverifiedUsers"], _services_getVerifiedEmployees__WEBPACK_IMPORTED_MODULE_2__["GetVerifiedUsers"], _services_Verification__WEBPACK_IMPORTED_MODULE_4__["Verification"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
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
        else {
            err = error.error;
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
        else {
            err = error.error;
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
        var _this = this;
        this.categoryjson = categoryjson;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.categoryjson.jsonretrieve().subscribe(function (data) {
            _this.dataChange.next(data);
        });
    }
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
        else if (error.status == 401) {
            errorMessage = error.error;
        }
        else if (error.status == 403) {
            errorMessage = error.error;
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

/***/ "./src/app/modules/adminModule/productUpload/model/maxExcelFile.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/model/maxExcelFile.ts ***!
  \*************************************************************************/
/*! exports provided: maxexcelfiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxexcelfiles", function() { return maxexcelfiles; });
var maxexcelfiles = 5;


/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/productUpload.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/productUpload.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexcontainer{\n    display: flex;\n\n}\n#image_container img{\n    width:100%;\n    height:100%;\n}\n#image_container{\n    height: 290px;\n}\n#imageSection{\n    width:100%;\n}\n.container{\n    margin:2rem auto;\n    width:80%;\n}\n.activeImageCard{\n    width:99%;\n}\n#upload_container\n{\n    width:95%;\n}\n.imageUploadSection .mat-card{\n    padding:0px !important;\n}\n.imageUploadSection .csssetting .mat-icon{\n    border-radius: 35px;\n\n    background-color:white ;\n}\n.imageUploadSection .csssetting .mat-card .material-icons{\n    font-size: 20px;\n}\n.card_title{\nbackground-color: #3F51B5;\ncolor:white;\n}\n.custom-file-upload {\n  \n    display: inline-block;\n    padding: 6px 12px;\n    text-align: center;\n    background-color:#FF007B;\n    border-radius: 5px;\n    cursor: pointer;\n    color:white;\n  }\ninput[type=\"file\"]{\n    display:none;\n}\n.csssetting{\n    min-width: 170px;\n    max-width: 1700px;\n    flex-basis: auto; /* default value */\nwidth: 170px;\nmargin: 1rem 2% 0px 0px;\nposition: relative;\n\n\n}\n.active{\n    background-color:lightblue;\n}\n#imageList{\n    width:100%;\n}\n#imagelist_container{\n    display:flex;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    overflow:scroll;\n}\n#imagelist_container img{\nwidth:100%;\nheight: 70px;\n-o-object-fit: cover;\n   object-fit: cover;\n\n}\n#exceluploadSection .custom-file-upload{\nwidth:20%;\n}\n.image{\n    width:100%;\n    margin:0.3rem;\n\n\n}\n.clear{\n    position: absolute;\n    left: 76%;\n    top: 15%;\n    z-index: 2;\n    cursor: pointer;\n}\n.clear ::ng-deep .material-icons{\n    font-size: auto !important;\n}\n.image img{\n   \nwidth:100%;\n\n\n}\n#subproductData{\nmargin:0px auto;\n    width:95%;\n    overflow: scroll;\n    height:350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9wcm9kdWN0VXBsb2FkL3Byb2R1Y3RVcGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7O0NBRWpCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0NBQ2I7QUFDRDtJQUNJLFVBQVU7Q0FDYjtBQUNEOztJQUVJLFVBQVU7Q0FDYjtBQUNEO0lBQ0ksdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSxvQkFBb0I7O0lBRXBCLHdCQUF3QjtDQUMzQjtBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBRUQ7QUFDQSwwQkFBMEI7QUFDMUIsWUFBWTtDQUNYO0FBQ0Q7O0lBRUksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQixDQUFDLG1CQUFtQjtBQUN6QyxhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLG1CQUFtQjs7O0NBR2xCO0FBQ0Q7SUFDSSwyQkFBMkI7Q0FDOUI7QUFFRDtJQUNJLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0NBQ25CO0FBRUQ7QUFDQSxXQUFXO0FBQ1gsYUFBYTtBQUNiLHFCQUFrQjtHQUFsQixrQkFBa0I7O0NBRWpCO0FBRUQ7QUFDQSxVQUFVO0NBQ1Q7QUFHRDtJQUNJLFdBQVc7SUFDWCxjQUFjOzs7Q0FHakI7QUFJRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7Q0FDbkI7QUFFRDtJQUNJLDJCQUEyQjtDQUM5QjtBQUVEOztBQUVBLFdBQVc7OztDQUdWO0FBR0Q7QUFDQSxnQkFBZ0I7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluTW9kdWxlL3Byb2R1Y3RVcGxvYWQvcHJvZHVjdFVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhjb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcblxufVxuI2ltYWdlX2NvbnRhaW5lciBpbWd7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbn1cbiNpbWFnZV9jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAyOTBweDtcbn1cblxuI2ltYWdlU2VjdGlvbntcbiAgICB3aWR0aDoxMDAlO1xufVxuLmNvbnRhaW5lcntcbiAgICBtYXJnaW46MnJlbSBhdXRvO1xuICAgIHdpZHRoOjgwJTtcbn1cbi5hY3RpdmVJbWFnZUNhcmR7XG4gICAgd2lkdGg6OTklO1xufVxuI3VwbG9hZF9jb250YWluZXJcbntcbiAgICB3aWR0aDo5NSU7XG59XG4uaW1hZ2VVcGxvYWRTZWN0aW9uIC5tYXQtY2FyZHtcbiAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2VVcGxvYWRTZWN0aW9uIC5jc3NzZXR0aW5nIC5tYXQtaWNvbntcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZSA7XG59XG5cbi5pbWFnZVVwbG9hZFNlY3Rpb24gLmNzc3NldHRpbmcgLm1hdC1jYXJkIC5tYXRlcmlhbC1pY29uc3tcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jYXJkX3RpdGxle1xuYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcbmNvbG9yOndoaXRlO1xufVxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gIFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkYwMDdCO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImZpbGVcIl17XG4gICAgZGlzcGxheTpub25lO1xufVxuXG4uY3Nzc2V0dGluZ3tcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgIG1heC13aWR0aDogMTcwMHB4O1xuICAgIGZsZXgtYmFzaXM6IGF1dG87IC8qIGRlZmF1bHQgdmFsdWUgKi9cbndpZHRoOiAxNzBweDtcbm1hcmdpbjogMXJlbSAyJSAwcHggMHB4O1xucG9zaXRpb246IHJlbGF0aXZlO1xuXG5cbn1cbi5hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGJsdWU7XG59XG5cbiNpbWFnZUxpc3R7XG4gICAgd2lkdGg6MTAwJTtcbn1cbiNpbWFnZWxpc3RfY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xufVxuXG4jaW1hZ2VsaXN0X2NvbnRhaW5lciBpbWd7XG53aWR0aDoxMDAlO1xuaGVpZ2h0OiA3MHB4O1xub2JqZWN0LWZpdDogY292ZXI7XG5cbn1cblxuI2V4Y2VsdXBsb2FkU2VjdGlvbiAuY3VzdG9tLWZpbGUtdXBsb2Fke1xud2lkdGg6MjAlO1xufVxuXG5cbi5pbWFnZXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbjowLjNyZW07XG5cblxufVxuXG5cblxuLmNsZWFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA3NiU7XG4gICAgdG9wOiAxNSU7XG4gICAgei1pbmRleDogMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGVhciA6Om5nLWRlZXAgLm1hdGVyaWFsLWljb25ze1xuICAgIGZvbnQtc2l6ZTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2UgaW1ne1xuICAgXG53aWR0aDoxMDAlO1xuXG5cbn1cblxuXG4jc3VicHJvZHVjdERhdGF7XG5tYXJnaW46MHB4IGF1dG87XG4gICAgd2lkdGg6OTUlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgaGVpZ2h0OjM1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/productUpload.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/productUpload.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-tab-group mat-align-tabs=\"center\">\n    <mat-tab label=\"SINGLE UPLOAD\"> \n      <div id='stackTrace'>\n        <span *ngFor='let id of parentTrace;let i =index;'>\n          {{id}}<span *ngIf=\"parentTrace[i+1]\">-></span>\n        </span>\n        </div>\n      \n      <div class=\"flexcontainer\">\n        <div class=\"container\"> \n      <div class=\"imageUploadSection\">\n          <mat-grid-list cols=\"8\" rowHeight=\"2:1\">\n              <mat-grid-tile colspan='4' rowspan='6'>\n             \n                <mat-card *ngIf=\"  activeImageObj!=null && activeImageObj.uri!=null \" class=\"activeImageCard\">\n                    <mat-card-header>\n                        {{subproductFullData.subproductName | uppercase}}\n                      </mat-card-header>\n                  <div id=\"imageSection\">\n                  <span *ngIf='activeImageObj!=null'>{{activeImageObj.index}}</span>\n                   <div id=\"image_container\">\n                      <img *ngIf='activeImageObj.uri!=null' [src]=\"activeImageObj.uri\" >\n      \n                       </div>\n                </div>\n                </mat-card>\n              </mat-grid-tile>\n              <mat-grid-tile colspan ='4' rowspan='2'>\n                <div id=\"upload_container\">\n                <mat-card class=\"file_upload\">\n                      <mat-card-header class=\"card_title\">\n                      \n                        <mat-card-title >Upload Image</mat-card-title>\n                        \n                      </mat-card-header>\n                      <mat-card-actions>\n                          <label class=\"custom-file-upload\">\n                              Upload Image<input type=\"file\" name=\"uploadImage\" \n                              accept=\".jpg,.jpeg,.png\" (change)=\"imageUpload(uploadImage)\" #uploadImage ></label>\n                      </mat-card-actions>\n                    </mat-card>\n                  </div>\n        \n              </mat-grid-tile> \n              <mat-grid-tile colspan ='4' rowspan='6'>\n      \n                  <app-subproducts-data id=\"subproductData\"></app-subproducts-data>\n                        </mat-grid-tile> \n                    \n      \n      \n              <mat-grid-tile colspan='4' rowspan='1'> \n      <div id=\"imageList\">\n        \n        <div *ngIf=\"imageList!=null\"  id=\"imagelist_container\">\n         <div *ngFor='let imageObj of imageList' class=\"csssetting\">\n           <button mat-button *ngIf='activeImageObj!=null' [ngClass]=\"{'active': activeImageObj.selected==true }\" class='image' (click)=\"selectImage(imageObj)\">\n        \n            <img *ngIf='imageObj.uri!=null' [src]='imageObj.uri' alt=\"Product List\">\n           \n           </button>\n           <span (click)=\"removeThisImage(imageObj.index)\" class=\"clear\"><mat-icon>clear</mat-icon></span> \n      \n         </div>\n        </div>\n        \n      </div>\n      \n              </mat-grid-tile>\n            \n            </mat-grid-list>\n      </div>\n      </div>\n      </div></mat-tab>\n      <mat-tab  label=\"ADD BULK LIST\">\n<div id='exceluploadSection'>\n          <div>\n                  <label class=\"custom-file-upload dropdown\">\n                Categories File<input type=\"file\" name=\"categories\" accept=\".xlsx, .xls, .csv\" (change)=\"OnChange(categories)\" #categories >\n                  </label> \n                  </div> \n                  <div>\n                      <label class=\"custom-file-upload dropdown\">\n                    SubCategories File<input type=\"file\" name=\"subcategories\" accept=\".xlsx, .xls, .csv\" (change)=\"OnChange(subcategories)\" #subcategories >\n                      </label> \n                      </div> \n                      <div>\n                          <label class=\"custom-file-upload dropdown\">\n                        Product File<input type=\"file\" name=\"products\" accept=\".xlsx, .xls, .csv\" (change)=\"OnChange(products)\" #products >\n                          </label> \n                          </div> \n                          <div>\n                              <label class=\"custom-file-upload dropdown\">\n                          Subproduct File<input type=\"file\" name=\"subproducts\" accept=\".xlsx, .xls, .csv\" (change)=\"OnChange(subproducts)\" #subproducts >\n                              </label> \n                              </div> \n                              <div>\n                                  <label class=\"custom-file-upload dropdown\">\n                               Price and Amount File<input type=\"file\" name=\"priceAndAmount\" accept=\".xlsx, .xls, .csv\" (change)=\"OnChange(priceAndAmount)\" #priceAndAmount >\n                                  </label> \n                                  </div> \n                  <button mat-raised-button class=\"uploadButton\" [color]='primary' [disabled]=\"!isUploadTrue() || isSelected!=true\" \n                  (click)=\"uploadExcel()\">Upload All</button>\n                           \n  \n      \n  </div>\n  </mat-tab>\n   \n  </mat-tab-group>\n"

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
/* harmony import */ var _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sharedModule/successSnackbar */ "./src/app/modules/sharedModule/successSnackbar.ts");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_excelUpload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/excelUpload */ "./src/app/modules/adminModule/productUpload/services/excelUpload.ts");
/* harmony import */ var _model_maxExcelFile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/maxExcelFile */ "./src/app/modules/adminModule/productUpload/model/maxExcelFile.ts");










var productUploadComponent = /** @class */ (function () {
    function productUploadComponent(excelUpload, imageDatabase, snackBar, dataStorage, router) {
        this.excelUpload = excelUpload;
        this.imageDatabase = imageDatabase;
        this.snackBar = snackBar;
        this.dataStorage = dataStorage;
        this.router = router;
        this.formcount = 0;
        this.isSelected = false;
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
                obj.index = this.index;
                this.imageList.push(obj);
            }
            this.selectImage(this.imageList[0]);
        }
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
        this.formdata = new FormData();
        this.formdata.set('idToken', localStorage.getItem('id_token'));
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
        this.imageDatabase.deletechange.subscribe(function (data) {
            if (data != null) {
                var newindex_1 = 1;
                _this.imageList.forEach(function (element) {
                    element.index = newindex_1;
                    newindex_1++;
                });
            }
        });
        this.imageDatabase.getimageObj().subscribe(function (data) {
            if (data != null) {
                _this.openSnackBar();
                _this.index++;
                data.index = _this.index;
                _this.imageList.push(data);
                _this.selectImage(data);
            }
        });
    };
    productUploadComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_5__["SuccessComponent"], {
            duration: 3000,
        });
    };
    productUploadComponent.prototype.deleteFromBackend = function (element, index) {
        var form = this.newform();
        form.index = index - 1;
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
    };
    productUploadComponent.prototype.uploadImage = function (form) {
        this.imageDatabase.uploadFile(form);
    };
    productUploadComponent.prototype.removeThisImage = function (index) {
        var i;
        for (i = 0; i < this.imageList.length; i++) {
            var element = this.imageList[i];
            if (element.index == index) {
                this.deleteFromBackend(element, element.index);
                this.imageList.splice(i, 1);
                if (this.imageList[i + 1] != null) {
                    this.activeImageObj = this.imageList[i + 1];
                }
                else if (this.imageList[i - 1] != null) {
                    this.activeImageObj = this.imageList[i - 1];
                }
                else {
                    this.activeImageObj.uri = null;
                    this.activeImageObj.index = null;
                }
            }
        }
        ;
    };
    productUploadComponent.prototype.imageUpload = function (inputFile) {
        this.form.set('index', (this.index + 1).toString());
        if (inputFile.files.length != 0) {
            this.form.set('myImage', inputFile.files[0]);
            this.uploadImage(this.form);
        }
    };
    productUploadComponent.prototype.OnChange = function (inputParam) {
        if (inputParam.files.length != 0) {
            this.formdata.set(inputParam.getAttribute("name"), inputParam.files[0]);
        }
    };
    productUploadComponent.prototype.isUploadTrue = function () {
        var _this = this;
        this.formcount = 0;
        this.formdata.forEach(function (element) {
            _this.formcount++;
            // console.log(this.formcount);
        });
        if ((this.formcount - 1) == _model_maxExcelFile__WEBPACK_IMPORTED_MODULE_9__["maxexcelfiles"]) {
            this.isSelected = true;
        }
        return this.isSelected;
    };
    productUploadComponent.prototype.uploadExcel = function () {
        var _this = this;
        this.excelUpload.exceluploader(this.formdata).subscribe(function (res) {
            if (res) {
                _this.openSnackBar();
            }
        }, function (err) {
            alert(err);
        });
    };
    productUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'productUpload',
            template: __webpack_require__(/*! ./productUpload.component.html */ "./src/app/modules/adminModule/productUpload/productUpload.component.html"),
            providers: [_services_imageDatabase__WEBPACK_IMPORTED_MODULE_2__["ImageDatabase"]],
            styles: [__webpack_require__(/*! ./productUpload.component.css */ "./src/app/modules/adminModule/productUpload/productUpload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_excelUpload__WEBPACK_IMPORTED_MODULE_8__["excelUpload"], _services_imageDatabase__WEBPACK_IMPORTED_MODULE_2__["ImageDatabase"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_6__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], productUploadComponent);
    return productUploadComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/services/excelUpload.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/services/excelUpload.ts ***!
  \***************************************************************************/
/*! exports provided: excelUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excelUpload", function() { return excelUpload; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");






var excelUpload = /** @class */ (function () {
    function excelUpload(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_5__["url"].localExceluri;
    }
    excelUpload.prototype.handleError = function (error) {
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
    excelUpload.prototype.exceluploader = function (form) {
        console.log(' i m here');
        console.log(form);
        return this.http.post(this.url, form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ;
    excelUpload = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], excelUpload);
    return excelUpload;
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
    ImageDatabase.prototype.getimageObj = function () {
        return this.imageChange;
    };
    ImageDatabase.prototype.uploadFile = function (form) {
        var _this = this;
        this.imageCrud.uploadFile(_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].localaddImageuri, form).subscribe(function (data) {
            _this.imageChange.next(data);
            _this.isDone = true;
        }, function (err) {
            alert(err);
            _this.isDone = false;
        });
        return this.isDone;
    };
    ImageDatabase.prototype.deleteFile = function (form) {
        var _this = this;
        this.imageCrud.deleteFile(_globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].localdeleteImageuri, form).subscribe(function (data) {
            _this.deletechange.next(data);
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

module.exports = "#sidenavheadercontainer{\n    color:white;\n    background-color:#154F85;\n    padding:0.5rem;\n}\n\n#sidenavheader{\n  font-size: 18px;\n  font-weight: 800;\n}\n\n#linksection button{\nwidth:100%\n}\n\n#sidenav{\n    background-color:#3F51B5;\n}\n\n.links{\n    margin:0.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtDQUNsQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7O0FBRUQ7QUFDQSxVQUFVO0NBQ1Q7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlbmF2aGVhZGVyY29udGFpbmVye1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzE1NEY4NTtcbiAgICBwYWRkaW5nOjAuNXJlbTtcbn1cblxuI3NpZGVuYXZoZWFkZXJ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuI2xpbmtzZWN0aW9uIGJ1dHRvbntcbndpZHRoOjEwMCVcbn1cblxuI3NpZGVuYXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojM0Y1MUI1O1xufVxuLmxpbmtze1xuICAgIG1hcmdpbjowLjFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/adminModule/sidenav/sidenav.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/adminModule/sidenav/sidenav.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id='sidenav'>\n\n    <div id='sidenavheader'>\n      <div id='sidenavheadercontainer'>\n        CRUD\n      </div>\n    </div>\n<div id='linksection'>\n  <div class='links' >\n    <a [routerLink]=\"['/admin/categorycrud']\">\n      <button mat-raised-button color='accent' >\n CATEGORY CRUD\n </button>\n    </a>\n  </div>\n  <div class='links'>\n    <a [routerLink]=\"['/admin/makerChecker']\">\n      <button mat-raised-button color='accent'>\n    MAKER CHECKER\n      </button>\n    </a>\n  </div>\n  <div class='links'>\n      <a [routerLink]=\"['/admin/adsCrud']\">\n        <button mat-raised-button color='accent'>\n      ADS CRUD\n        </button>\n      </a>\n    </div>\n  </div>\n</div>"

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
        else if (error.status != 200) {
            err = error.error;
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

module.exports = ".flexcontainer{\n    display: flex;\n    justify-content: space-between;\n}\n.flexcontainer div{\n    margin:0.1rem;\n}\n.flexcontainer .mat-form-field{\n    width:100%;\n    \n}\n#dataEntry{\n    overflow:scroll;\n}\n#description{\n    margin-right:1rem;\n    width:40%;\n}\n#benefitsAndUses{\n    width:40%;\n    margin-right: 1rem;\n}\n.amount{\n    width:23%;\n}\n.suffix{\n    width:20%;\n\n}\n.price{\n    width:18%;\n}\n.discount{\n     width:18%;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9zdWJwcm9kdWN0cy1kYXRhL3N1YnByb2R1Y3RzLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7Q0FDbEM7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFFRDtJQUNJLFdBQVc7O0NBRWQ7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7Q0FDYjtBQUVEO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtDQUN0QjtBQUlEO0lBQ0ksVUFBVTtDQUNiO0FBRUQ7SUFDSSxVQUFVOztDQUViO0FBRUQ7SUFDSSxVQUFVO0NBQ2I7QUFDQTtLQUNJLFVBQVU7RUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvc3VicHJvZHVjdHMtZGF0YS9zdWJwcm9kdWN0cy1kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4Y29udGFpbmVyIGRpdntcbiAgICBtYXJnaW46MC4xcmVtO1xufVxuXG4uZmxleGNvbnRhaW5lciAubWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBcbn1cblxuI2RhdGFFbnRyeXtcbiAgICBvdmVyZmxvdzpzY3JvbGw7XG59XG5cbiNkZXNjcmlwdGlvbntcbiAgICBtYXJnaW4tcmlnaHQ6MXJlbTtcbiAgICB3aWR0aDo0MCU7XG59XG5cbiNiZW5lZml0c0FuZFVzZXN7XG4gICAgd2lkdGg6NDAlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuXG5cbi5hbW91bnR7XG4gICAgd2lkdGg6MjMlO1xufVxuXG4uc3VmZml4e1xuICAgIHdpZHRoOjIwJTtcblxufVxuXG4ucHJpY2V7XG4gICAgd2lkdGg6MTglO1xufVxuIC5kaXNjb3VudHtcbiAgICAgd2lkdGg6MTglO1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/subproducts-data.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id =\"dataEntry\">\n\n  <form [formGroup]=\"dataForm\" id=\"form\"  (ngSubmit)='onSubmit(dataForm.value)'>\n    <div>\n    <mat-form-field id =\"description\">\n       <mat-label>Description</mat-label>\n        <textarea matInput formControlName='description' ></textarea>\n      </mat-form-field>\n      <mat-form-field id =\"benefitsAndUses\">\n        <mat-label>Benefits And Uses</mat-label>\n          <textarea matInput formControlName='benefitsAndUses' ></textarea>\n        </mat-form-field>\n    </div>\n        <div formArrayName=\"priceAndAmount\" *ngFor =\"let priceObj of dataForm.controls.priceAndAmount.controls; let i = index;\">\n          <div class=\"flexcontainer\" formGroupName ='{{i}}'> \n         <div class=\"amount\">\n            <mat-form-field >\n              <mat-label>Amount</mat-label>\n            <input matInput formControlName='amount' >\n          \n          </mat-form-field>\n          </div>\n          <div class=\"suffix\">\n          <mat-form-field > \n            <mat-label>Suffix</mat-label>\n              <input matInput formControlName='suffix'>\n            \n            </mat-form-field>\n            </div>\n            <div class=\"price\">\n            <mat-form-field>\n              <mat-label>Price</mat-label>\n                <input matInput formControlName='price' >\n              \n              </mat-form-field>\n              </div>\n              <div class=\"discount\">\n              <mat-form-field>\n                <mat-label>Discount</mat-label>\n                  <input matInput formControlName='discount' >\n                \n                </mat-form-field>\n                </div>\n                <div>\n                  <button mat-raised-button type=\"button\" color='accent' (click)='deleteThisIndex(i)'>Delete</button>\n                </div>\n              </div>\n        </div>\n\n        <button mat-raised-button color='accent' type='button' (click)='addOptions()'>Add</button>\n        \n        <button mat-raised-button color='primary' [disabled]='dataForm.invalid'>Submit</button>\n</form>\n</div>\n"

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
        //  console.log(this.info);
        this.initialPriceAndAmount();
    }
    SubproductsDataComponent.prototype.initialPriceAndAmount = function () {
        for (var _i = 0, _a = this.info.priceAndAmount; _i < _a.length; _i++) {
            var obj = _a[_i];
            this.arr.push(this.createPriceAmount(obj));
        }
    };
    SubproductsDataComponent.prototype.deleteThisIndex = function (index) {
        this.arr.splice(index, 1);
        this.createForm();
    };
    SubproductsDataComponent.prototype.addOptions = function () {
        this.arr.push(this.createPriceAmount('-1'));
        // console.log(this.arr)
        this.createForm();
    };
    SubproductsDataComponent.prototype.createPriceAmount = function (obj) {
        if (obj != '-1') {
            return this.fb.group({
                amount: [obj.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                suffix: [obj.suffix, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: [obj.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                discount: [obj.discount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
        else {
            return this.fb.group({
                amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                suffix: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                discount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
    };
    SubproductsDataComponent.prototype.createForm = function () {
        this.dataForm = this.fb.group({
            description: [this.info.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            benefitsAndUses: [this.info.benefitsAndUses, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priceAndAmount: this.fb.array(this.arr)
        });
    };
    SubproductsDataComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    SubproductsDataComponent.prototype.onSubmit = function (form) {
        var _this = this;
        form['stackTrace'] = this.data.storage.stackTrace;
        this.uploadform.uploadForm(form).subscribe(function (data) {
            _this.snackBar.openFromComponent(_sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_5__["SuccessComponent"], {
                duration: 2000
            });
        }, function (err) {
            alert(err);
        });
    };
    SubproductsDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subproducts-data',
            template: __webpack_require__(/*! ./subproducts-data.component.html */ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.html"),
            styles: [__webpack_require__(/*! ./subproducts-data.component.css */ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_3__["Data"], _services_uploadform__WEBPACK_IMPORTED_MODULE_4__["UploadService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], SubproductsDataComponent);
    return SubproductsDataComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/table/services/pushobject.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/adminModule/table/services/pushobject.ts ***!
  \******************************************************************/
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
        else if (error.status == 304) {
            // server-side error
            errorMessage = error.error;
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

module.exports = "<mat-toolbar id=\"heading\" color=\"primary\">\n  <span class='headingData'>DATA TABLE\n    </span>\n\n    <button  mat-raised-button type=\"button\" color='accent' (click)='pushChanges()'>Push Changes</button>\n\n  \n</mat-toolbar>\n\n\n\n<div style=\"width: 100\" class=\"example-container mat-elevation-z8\">\n\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- ID Column -->\n    <ng-container *ngFor=\"let col of columns\" matColumnDef={{col}}>\n  \n      <mat-header-cell *matHeaderCellDef mat-sort-header>{{col | lowercase | titlecase}}</mat-header-cell>\n      <mat-cell  *matCellDef=\"let row\" ><button class='otherdata' mat-raised-button (click)=\"redirectToImageUpload(row,row['imageUrls'])\" [color]=\"primary\" *ngIf=\"col=='Other Data'\">Manage Data</button> <p *ngIf=\"col!='Other Data'\">{{row[col]}}</p></mat-cell>\n    \n    </ng-container>\n    \n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef>\n        <button mat-icon-button color=\"primary\" (click)=\"addNew(dataSource)\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n        </button>\n      </mat-header-cell>\n\n      <mat-cell *matCellDef=\"let row; let i=index;\">\n        <button mat-icon-button color=\"accent\" (click)=\"startEdit(row,i,dataSource)\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"accent\" (click)=\"deleteItem(row,i,dataSource)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <div class=\"no-results\" [style.display]=\"(dataSource.length== 0 || dataSource==null) ? '' : 'none'\" >\n    No results\n  </div>\n\n</div>"

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
/* harmony import */ var _services_pushobject__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/pushobject */ "./src/app/modules/adminModule/table/services/pushobject.ts");
/* harmony import */ var _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../sharedModule/successSnackbar */ "./src/app/modules/sharedModule/successSnackbar.ts");














var TableComponent = /** @class */ (function () {
    function TableComponent(pushobject, dataStorage, router, snackBar, dialog, dataObj, dialogData, categoryDatabase) {
        this.pushobject = pushobject;
        this.dataStorage = dataStorage;
        this.router = router;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.dataObj = dataObj;
        this.dialogData = dialogData;
        this.categoryDatabase = categoryDatabase;
        this.columns = [];
        this.stackArray = [];
        this.isNull = false;
        this.isCompleted = false;
        this.displayedColumns = [];
        this.checkArray = [];
        this.dataSource = null;
        this.noMore = false;
        this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
        this.mainDataSource = null;
        this.dataSource = null;
    }
    TableComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_13__["SuccessComponent"], {
            duration: 3000,
        });
    };
    TableComponent.prototype.pushChanges = function () {
        // console.log(this.mainDataSource);
        var _this = this;
        this.pushobject.pushChanges(this.mainDataSource).subscribe(function (data) {
            if (data.isPushed == true) {
                _this.openSnackBar();
            }
        }, function (err) {
            alert('Error Ocurred');
        });
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
                    if (typeof (checkData[0]) == 'object' && typeof (mainobj) == 'object' && typeof (checkData) != 'undefined') {
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
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
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
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
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
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
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
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
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
                    _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
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
                console.log(index);
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
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tablehere',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/modules/adminModule/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/modules/adminModule/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pushobject__WEBPACK_IMPORTED_MODULE_12__["PushChanges"], _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_11__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_8__["DialogDataService"], _moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_9__["CategoryDatabase"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-adminModule-admin-module.js.map
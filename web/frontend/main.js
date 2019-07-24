(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-task/add-task.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-task/add-task.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>Новая задача</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <form [formGroup]=\"form\" (submit)=\"submit()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Название</label>\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            [ngClass]=\"{\n              'is-valid': isValidField('name'),\n              'is-invalid': !isValidField('name') && isTouchedField('name')\n            }\"\n            formControlName=\"name\"\n            id=\"name\"\n            placeholder=\"Название задачи\"\n          >\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('name', 'required')\">\n            поле обязательно для заполнения\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"priority\">Приоритет</label>\n          <select\n            class=\"form-control\"\n            [ngClass]=\"{\n              'is-valid': isValidField('priorityId'),\n              'is-invalid': !isValidField('priorityId') && isTouchedField('priorityId')\n            }\"\n            formControlName=\"priorityId\"\n            id=\"priority\"\n            placeholder=\"Приоритет задачи\"\n          >\n              <option *ngFor=\"let priority of priorities | async\" value=\"{{ priority.id }}\">\n                {{ priority.name }}\n              </option>\n            </select>\n            <div class=\"invalid-feedback\" *ngIf=\"fieldError('priorityId', 'required')\">\n              поле обязательно для заполнения\n            </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"status\">Статус</label>\n          <select\n            class=\"form-control\"\n            [ngClass]=\"{\n              'is-valid': isValidField('statusId'),\n              'is-invalid': !isValidField('statusId') && isTouchedField('statusId')\n            }\"\n            formControlName=\"statusId\"\n            id=\"status\"\n            placeholder=\"Статус задачи\"\n          >\n            <option *ngFor=\"let status of statuses | async\" value=\"{{ status.id }}\">\n              {{ status.name }}\n            </option>\n          </select>\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('statusId', 'required')\">\n            поле обязательно для заполнения\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label >Теги</label>\n          <div formArrayName=\"tags\" class=\"tags-list\">\n              <ng-container *ngFor=\"let tag of binded.controls; let i=index\">\n                  <input type=\"hidden\" [formControlName]=\"i\">\n              </ng-container>\n\n              <button\n                type=\"button\"\n                class=\"btn btn-secondary\"\n                *ngFor=\"let tag of binded.tags; let i=index\"\n                (click)=\"binded.delete(i)\"\n              >\n                {{ tag.name }}\n              </button>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">Сохранить</button>\n        <button type=\"botton\" class=\"btn btn btn-light\" (click)=\"cancel()\">Отмена</button>\n      </form>\n    </div>\n    <div class=\"col-md-4\">\n      <form [formGroup]=\"binded.tagsForm\">\n        <ng-template #rt let-r=\"result\" let-t=\"term\">\n          <ngb-highlight [result]=\"r.name\" [term]=\"t\"></ngb-highlight>\n        </ng-template>\n\n        <div class=\"form-group\">\n          <label for=\"typeahead-http\">Добавить тег</label>\n          <input\n            id=\"typeahead-http\"\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"tag\"\n            [ngbTypeahead]=\"binded.search\"\n            [resultTemplate]=\"rt\"\n            [inputFormatter]=\"formatter\"\n            [editable]=\"false\"\n            autocomplete=\"false\"\n            placeholder=\"Тегм\"\n          />\n          <span *ngIf=\"binded.searching\">searching...</span>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-task/edit-task.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-task/edit-task.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>Редактирование задачи</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <form [formGroup]=\"form\" (submit)=\"submit()\">\n        <input type=\"hidden\" formControlName=\"id\">\n        <div class=\"form-group\">\n          <label for=\"name\">Название</label>\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            [ngClass]=\"{\n              'is-valid': isValidField('name'),\n              'is-invalid': !isValidField('name') && isTouchedField('name')\n            }\"\n            formControlName=\"name\"\n            id=\"name\"\n            placeholder=\"Название задачи\"\n          >\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('name', 'required')\">\n            поле обязательно для заполнения\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"priority\">Приоритет</label>\n          <select\n            class=\"form-control\"\n            [ngClass]=\"{\n              'is-valid': isValidField('priorityId'),\n              'is-invalid': !isValidField('priorityId') && isTouchedField('priorityId')\n            }\"\n            formControlName=\"priorityId\"\n            id=\"priority\"\n            placeholder=\"Приоритет задачи\"\n          >\n            <option *ngFor=\"let priority of priorities | async\" value=\"{{ priority.id }}\">\n              {{ priority.name }}\n            </option>\n          </select>\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('priorityId', 'required')\">\n            поле обязательно для заполнения\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"status\">Статус</label>\n          <select\n            class=\"form-control\"\n            [ngClass]=\"{\n              'is-valid': isValidField('statusId'),\n              'is-invalid': !isValidField('statusId') && isTouchedField('statusId')\n            }\"\n            formControlName=\"statusId\"\n            id=\"status\"\n            placeholder=\"Статус задачи\"\n          >\n            <option *ngFor=\"let status of statuses | async\" value=\"{{ status.id }}\">\n              {{ status.name }}\n            </option>\n          </select>\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('statusId', 'required')\">\n            поле обязательно для заполнения\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label >Теги</label>\n          <div formArrayName=\"tags\" class=\"tags-list\">\n            <ng-container *ngFor=\"let tag of binded.controls; let i=index\">\n                <input type=\"hidden\" [formControlName]=\"i\">\n            </ng-container>\n\n            <button\n              type=\"button\"\n              class=\"btn btn-secondary\"\n              *ngFor=\"let tag of binded.tags; let i=index\"\n              (click)=\"binded.delete(i)\"\n            >\n              {{ tag.name }}\n            </button>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">Сохранить</button>\n        <button type=\"botton\" class=\"btn btn btn-light\" (click)=\"cancel()\">Отмена</button>\n      </form>\n    </div>\n    <div class=\"col-md-4\">\n      <form [formGroup]=\"binded.tagsForm\">\n        <ng-template #rt let-r=\"result\" let-t=\"term\">\n          <ngb-highlight [result]=\"r.name\" [term]=\"t\"></ngb-highlight>\n        </ng-template>\n\n        <div class=\"form-group\">\n          <label for=\"typeahead-http\">Добавить тег</label>\n          <input\n            id=\"typeahead-http\"\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"tag\"\n            [ngbTypeahead]=\"binded.search\"\n            [resultTemplate]=\"rt\"\n            [inputFormatter]=\"formatter\"\n            [editable]=\"false\"\n            autocomplete=\"false\"\n            placeholder=\"Тегм\"\n\n          />\n          <span *ngIf=\"binded.searching\">searching...</span>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <h1>Вход</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <form [formGroup]=\"form\" (submit)=\"submit()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            [ngClass]=\"{\n              'is-valid': isValidField('email'),\n              'is-invalid': !isValidField('email') && isTouchedField('email')\n            }\"\n            formControlName=\"email\"\n            id=\"email\"\n            placeholder=\"email\"\n          >\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('email', 'required')\">\n            поле обязательно для заполнения\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Пароль</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            [ngClass]=\"{\n              'is-valid': isValidField('password'),\n              'is-invalid': !isValidField('password') && isTouchedField('password')\n            }\"\n            formControlName=\"password\"\n            id=\"password\"\n            placeholder=\"Пароль\"\n          >\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('password', 'required')\">\n            поле обязательно для заполнения\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('password', 'minlength')\">\n            минимальная длинна 6 символов\n          </div>\n        </div>\n\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"userNotExist\">\n          пользователь не существует\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">Войти</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Task master</a>\n    <ul class=\"nav justify-content-end\">\n      <li class=\"nav-item\" *ngIf=\"!(authStateChange$ | async)\">\n        <a class=\"nav-link\" routerLink=\"/registration\">Регистрация</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!(authStateChange$ | async)\">\n        <a class=\"nav-link\" routerLink=\"/login\">Вход</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authStateChange$ | async\">\n        <button class=\"btn btn-link nav-link\" (click)=\"logout()\">\n          Выход\n        </button>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/registration/registration.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registration/registration.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n        <h1>Регистрация</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <form [formGroup]=\"form\" (submit)=\"submit()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            [ngClass]=\"{\n              'is-valid': isValidField('email'),\n              'is-invalid': !isValidField('email') && isTouchedField('email')\n            }\"\n            formControlName=\"email\"\n            id=\"email\"\n            placeholder=\"email\"\n          >\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('email', 'required')\">\n            поле обязательно для заполнения\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('email', 'email')\">\n            не корректный адрес электронной почты\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('email', 'UserUniqueEmail')\">\n            ползователь уже существует\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Пароль</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            [ngClass]=\"{\n              'is-valid': isValidField('password'),\n              'is-invalid': !isValidField('password') && isTouchedField('password')\n            }\"\n            formControlName=\"password\"\n            id=\"password\"\n            placeholder=\"Пароль\"\n          >\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('password', 'required')\">\n            поле обязательно для заполнения\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('password', 'minlength')\">\n            минимальная длинна 6 символов\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"confirmPassword\">Пароль ещё раз</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            [ngClass]=\"{\n              'is-valid': isValidField('confirmPassword'),\n              'is-invalid': !isValidField('confirmPassword') && isTouchedField('confirmPassword')\n            }\"\n            formControlName=\"confirmPassword\"\n            id=\"confirmPassword\"\n            placeholder=\"Пароль\"\n          >\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('confirmPassword', 'required')\">\n            поле обязательно для заполнения\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"fieldError('confirmPassword', 'minlength')\">\n            минимальная длинна 6 символов\n          </div>\n        </div>\n        <button type=\"botton\" class=\"btn btn btn-light\" (click)=\"cancel()\">Отмена</button>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">Зарегистрироваться</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task-list/task-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task-list/task-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!(authStateChange$ | async)\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      Вы не авторизованы. Для работы с задачами нужно\n      <a routerLink=\"/login\">авторизоваться</a>.\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" *ngIf=\"authStateChange$ | async\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>Задачи</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <form [formGroup]=\"form\" class=\"task-filter sticky-top\">\n        <div class=\"form-group\">\n          <label>Приоритет</label>\n          <select class=\"form-control\" formControlName=\"priority\" placeholder=\"Приоритет задачи\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let priority of priorities | async\" value=\"{{ priority.id }}\">\n              {{ priority.name }}\n            </option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Статус</label>\n          <select class=\"form-control\" formControlName=\"status\" placeholder=\"Статус задачи\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let status of statuses | async\" value=\"{{ status.id }}\">\n              {{ status.name }}\n            </option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Сортировка</label>\n          <select class=\"form-control\" formControlName=\"sort\" placeholder=\"Сортировка\">\n            <option *ngFor=\"let sortMode of sortModes\" [ngValue]=\"sortMode.value\">\n              {{ sortMode.name }}\n            </option>\n          </select>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-8\">\n      <a routerLink=\"/add\" class=\"btn btn-primary\">Новая</a>\n\n      <div class=\"card task\" *ngFor=\"let task of tasks | async\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{ task.name }}</h5>\n          <div class=\"card-text\">\n            {{ task.priority }}\n            {{ task.status }}\n            <ul class=\"tags\" *ngIf=\"task.tags.length > 0\">\n              <li class=\"badge badge-secondary\" *ngFor=\"let tag of task.tags\">{{ tag.name }}</li>\n            </ul>\n            <div class=\"buttons\">\n              <a routerLink=\"/edit/{{ task.id }}\" class=\"btn btn-primary\">\n                Редактировать\n              </a>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"delete(task)\">\n                Удалить\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <ngb-pagination\n        *ngIf=\"taskCount > 0 && taskCount > itemPerPage\"\n        [collectionSize]=\"taskCount\"\n        [maxSize]=\"10\"\n        [pageSize]=\"itemPerPage\"\n        [rotate]=\"true\"\n        [boundaryLinks]=\"true\"\n        (pageChange)=\"pageChange($event)\"\n      ></ngb-pagination>\n    </div>\n  </div>\n</div>\n"

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-task/add-task.component.styl":
/*!**************************************************!*\
  !*** ./src/app/add-task/add-task.component.styl ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/add-task/add-task.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFIiwiZmlsZSI6InNyYy9hcHAvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LnN0eWwifQ== */"

/***/ }),

/***/ "./src/app/add-task/add-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-task/add-task.component.ts ***!
  \************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _priority_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../priority.service */ "./src/app/priority.service.ts");
/* harmony import */ var _status_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../status.service */ "./src/app/status.service.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../base-form-component */ "./src/app/base-form-component.ts");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var _tag_collection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tag-collection */ "./src/app/tag-collection.ts");












let AddTaskComponent = class AddTaskComponent extends _base_form_component__WEBPACK_IMPORTED_MODULE_9__["BaseFormComponent"] {
    constructor(_formBuilder, _router, _taskService, _priorityService, _statusService, _tagService) {
        super();
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._taskService = _taskService;
        this._priorityService = _priorityService;
        this._statusService = _statusService;
        this._tagService = _tagService;
        this.priorities = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        this.statuses = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formatter = (x) => x.name;
        this.form = this._formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priorityId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            statusId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tags: this._formBuilder.array([])
        });
        this.binded = new _tag_collection__WEBPACK_IMPORTED_MODULE_11__["TagCollection"](this.form.get('tags'), this._formBuilder, this._tagService);
    }
    ngOnInit() {
        this.priorities = this._priorityService.list();
        this.statuses = this._statusService.list();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    submit() {
        if (this.form.valid) {
            this._taskService
                .create(this.form.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
                .subscribe((val) => { this._router.navigate(['']); });
        }
    }
    cancel() {
        this._router.navigate(['']);
    }
};
AddTaskComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"] },
    { type: _priority_service__WEBPACK_IMPORTED_MODULE_7__["PriorityService"] },
    { type: _status_service__WEBPACK_IMPORTED_MODULE_8__["StatusService"] },
    { type: _tag_service__WEBPACK_IMPORTED_MODULE_10__["TagService"] }
];
AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-task',
        template: __webpack_require__(/*! raw-loader!./add-task.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-task/add-task.component.html"),
        styles: [__webpack_require__(/*! ./add-task.component.styl */ "./src/app/add-task/add-task.component.styl")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"],
        _priority_service__WEBPACK_IMPORTED_MODULE_7__["PriorityService"],
        _status_service__WEBPACK_IMPORTED_MODULE_8__["StatusService"],
        _tag_service__WEBPACK_IMPORTED_MODULE_10__["TagService"]])
], AddTaskComponent);



/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'si';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task-list/task-list.component.ts");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-task/edit-task.component */ "./src/app/edit-task/edit-task.component.ts");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth-interceptor */ "./src/app/auth-interceptor.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _is_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./is-auth.guard */ "./src/app/is-auth.guard.ts");
/* harmony import */ var _is_not_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./is-not-auth.guard */ "./src/app/is-not-auth.guard.ts");



















const routes = [
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"], canActivate: [_is_not_auth_guard__WEBPACK_IMPORTED_MODULE_17__["IsNotAuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], canActivate: [_is_not_auth_guard__WEBPACK_IMPORTED_MODULE_17__["IsNotAuthGuard"]] },
    { path: 'add', component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_11__["AddTaskComponent"], canActivate: [_is_auth_guard__WEBPACK_IMPORTED_MODULE_16__["IsAuthGuard"]] },
    { path: 'edit/:id', component: _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_12__["EditTaskComponent"], canActivate: [_is_auth_guard__WEBPACK_IMPORTED_MODULE_16__["IsAuthGuard"]] },
    { path: '', component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_10__["TaskListComponent"], canActivate: [_is_auth_guard__WEBPACK_IMPORTED_MODULE_16__["IsAuthGuard"]] },
];
const AuthSetviceFactory = (store, http) => {
    const storageKey = 'access_token';
    const service = new _auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"](http, store, storageKey);
    service.loadToken();
    return service;
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"],
            _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_10__["TaskListComponent"],
            _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_11__["AddTaskComponent"],
            _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_12__["EditTaskComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
                multi: true
            },
            { provide: _auth_service__WEBPACK_IMPORTED_MODULE_14__["TOKEN_STORE"], useValue: window.sessionStorage },
            {
                provide: _auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                useFactory: AuthSetviceFactory,
                deps: [_auth_service__WEBPACK_IMPORTED_MODULE_14__["TOKEN_STORE"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth-interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/auth-interceptor.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



let AuthInterceptor = class AuthInterceptor {
    constructor(_auth) {
        this._auth = _auth;
    }
    intercept(req, next) {
        if (!this._auth.isAuth) {
            return next.handle(req);
        }
        const modified = req.clone({
            setHeaders: {
                'X-AUTH-TOKEN': `Bearer ${this._auth.token}`
            }
        });
        return next.handle(modified);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AuthInterceptor);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: TOKEN_STORE, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_STORE", function() { return TOKEN_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const TOKEN_STORE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('TOKEN_STORE');
let AuthService = class AuthService {
    constructor(_http, _store, _tokenKeyInStore) {
        this._http = _http;
        this._store = _store;
        this._tokenKeyInStore = _tokenKeyInStore;
        this.authStateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    get token() {
        return this._token && this._token.access_token || '';
    }
    login(email, password) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', email)
            .set('password', password);
        return this._http
            .get('/api/login', { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('response'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((token) => {
            this.setToken({ access_token: token });
        }));
    }
    logout() {
        this.resetToken();
    }
    createUser(email, password, confirmPassword) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', email)
            .set('password', password)
            .set('confirmPassword', confirmPassword);
        return this._http.post('/api/registration', '', { params });
    }
    isUniqueUserEmail(email) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', email);
        return this._http.get('/api/is-unique-email', { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('response'));
    }
    UniqueUserEmailValidator() {
        return (control) => {
            return this
                .isUniqueUserEmail(control.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result ? null : { UserUniqueEmail: true }));
        };
    }
    isAuth() {
        return Boolean(this._token
            && this._token.access_token);
    }
    setToken(token) {
        this._token = token;
        this.saveToken();
    }
    resetToken() {
        this._token = undefined;
        this.removeTokenFromStore(this._tokenKeyInStore);
    }
    saveToken() {
        this.saveTokenToStore(this._tokenKeyInStore);
    }
    loadToken() {
        this.loadTokenFromStore(this._tokenKeyInStore);
    }
    saveTokenToStore(key) {
        this._store.setItem(key, JSON.stringify(this._token));
        if (this.isAuth()) {
            this.authStateChange$.next(true);
        }
    }
    loadTokenFromStore(key) {
        this._token = JSON.parse(this._store.getItem(key));
        if (this.isAuth()) {
            this.authStateChange$.next(true);
        }
    }
    removeTokenFromStore(key) {
        this._store.removeItem(key);
        this.authStateChange$.next(false);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: undefined },
    { type: String }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Object, String])
], AuthService);



/***/ }),

/***/ "./src/app/base-form-component.ts":
/*!****************************************!*\
  !*** ./src/app/base-form-component.ts ***!
  \****************************************/
/*! exports provided: BaseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFormComponent", function() { return BaseFormComponent; });
class BaseFormComponent {
    isValidField(name) {
        const control = this.form.controls[name];
        return control.valid;
    }
    isTouchedField(name) {
        const control = this.form.controls[name];
        return control.touched;
    }
    fieldError(name, error) {
        const control = this.form.controls[name];
        return control.errors && control.errors[error];
    }
}


/***/ }),

/***/ "./src/app/edit-task/edit-task.component.styl":
/*!****************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.styl ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/edit-task/edit-task.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC10YXNrL2VkaXQtdGFzay5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRUFBb0UiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXRhc2svZWRpdC10YXNrLmNvbXBvbmVudC5zdHlsIn0= */"

/***/ }),

/***/ "./src/app/edit-task/edit-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.ts ***!
  \**************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _priority_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../priority.service */ "./src/app/priority.service.ts");
/* harmony import */ var _status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../status.service */ "./src/app/status.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../base-form-component */ "./src/app/base-form-component.ts");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var _tag_collection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tag-collection */ "./src/app/tag-collection.ts");












let EditTaskComponent = class EditTaskComponent extends _base_form_component__WEBPACK_IMPORTED_MODULE_9__["BaseFormComponent"] {
    constructor(_formBuilder, _taskService, _priorityService, _statusService, _router, _route, _tagService) {
        super();
        this._formBuilder = _formBuilder;
        this._taskService = _taskService;
        this._priorityService = _priorityService;
        this._statusService = _statusService;
        this._router = _router;
        this._route = _route;
        this._tagService = _tagService;
        this.priorities = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        this.statuses = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formatter = (x) => x.name;
        this.form = this._formBuilder.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priorityId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            statusId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tags: this._formBuilder.array([])
        });
        this.binded = new _tag_collection__WEBPACK_IMPORTED_MODULE_11__["TagCollection"](this.form.get('tags'), this._formBuilder, this._tagService);
    }
    ngOnInit() {
        this.priorities = this._priorityService.list();
        this.statuses = this._statusService.list();
        this._taskService.get(this._route.snapshot.params['id'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$))
            .subscribe((task) => {
            const tags = task.tags;
            task.tags = [];
            this.form.patchValue(task);
            tags.forEach((tag) => this.binded.add(tag));
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    submit() {
        if (this.form.valid) {
            this._taskService.update(this.form.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$))
                .subscribe((val) => { this._router.navigate(['']); });
        }
    }
    cancel() {
        this._router.navigate(['']);
    }
};
EditTaskComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] },
    { type: _priority_service__WEBPACK_IMPORTED_MODULE_6__["PriorityService"] },
    { type: _status_service__WEBPACK_IMPORTED_MODULE_7__["StatusService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _tag_service__WEBPACK_IMPORTED_MODULE_10__["TagService"] }
];
EditTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-task',
        template: __webpack_require__(/*! raw-loader!./edit-task.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-task/edit-task.component.html"),
        styles: [__webpack_require__(/*! ./edit-task.component.styl */ "./src/app/edit-task/edit-task.component.styl")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"],
        _priority_service__WEBPACK_IMPORTED_MODULE_6__["PriorityService"],
        _status_service__WEBPACK_IMPORTED_MODULE_7__["StatusService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _tag_service__WEBPACK_IMPORTED_MODULE_10__["TagService"]])
], EditTaskComponent);



/***/ }),

/***/ "./src/app/is-auth.guard.ts":
/*!**********************************!*\
  !*** ./src/app/is-auth.guard.ts ***!
  \**********************************/
/*! exports provided: IsAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthGuard", function() { return IsAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




let IsAuthGuard = class IsAuthGuard {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    canActivate() {
        return this._auth.isAuth()
            ? true
            : this._router.parseUrl('/login');
    }
};
IsAuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IsAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], IsAuthGuard);



/***/ }),

/***/ "./src/app/is-not-auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/is-not-auth.guard.ts ***!
  \**************************************/
/*! exports provided: IsNotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotAuthGuard", function() { return IsNotAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




let IsNotAuthGuard = class IsNotAuthGuard {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    canActivate() {
        return this._auth.isAuth()
            ? this._router.parseUrl('')
            : true;
    }
};
IsNotAuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IsNotAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], IsNotAuthGuard);



/***/ }),

/***/ "./src/app/login/login.component.styl":
/*!********************************************!*\
  !*** ./src/app/login/login.component.styl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/login/login.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNERBQTREIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base-form-component */ "./src/app/base-form-component.ts");








let LoginComponent = class LoginComponent extends _base_form_component__WEBPACK_IMPORTED_MODULE_7__["BaseFormComponent"] {
    constructor(_formBuilder, _router, _auth) {
        super();
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._auth = _auth;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userNotExist = false;
        this.form = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    submit() {
        this.userNotExist = false;
        if (this.form.valid) {
            const registration = this.form.value;
            this._auth
                .login(registration.email, registration.password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => {
                this.userNotExist = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
            }))
                .subscribe((state) => {
                if (state) {
                    this._router.navigate(['']);
                }
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.styl */ "./src/app/login/login.component.styl")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.styl":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.styl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/navbar/navbar.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4REFBOEQiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zdHlsIn0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




let NavbarComponent = class NavbarComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    get authStateChange$() {
        return this._auth.authStateChange$;
    }
    ngOnInit() {
    }
    logout() {
        this._auth.logout();
        this._router.navigate(['login']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.styl */ "./src/app/navbar/navbar.component.styl")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/priority.service.ts":
/*!*************************************!*\
  !*** ./src/app/priority.service.ts ***!
  \*************************************/
/*! exports provided: Priority, PriorityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Priority", function() { return Priority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityService", function() { return PriorityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class Priority {
    constructor() {
        this.id = '';
        this.name = '';
    }
}
let PriorityService = class PriorityService {
    constructor(_http) {
        this._http = _http;
    }
    list() {
        return this._http.get('/api/priorities').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('response'));
    }
};
PriorityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PriorityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PriorityService);



/***/ }),

/***/ "./src/app/registration/registration.component.styl":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.styl ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/registration/registration.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBMEUiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zdHlsIn0= */"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base-form-component */ "./src/app/base-form-component.ts");








let RegistrationComponent = class RegistrationComponent extends _base_form_component__WEBPACK_IMPORTED_MODULE_7__["BaseFormComponent"] {
    constructor(_formBuilder, _router, _auth) {
        super();
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._auth = _auth;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.form = this._formBuilder.group({
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
                [this._auth.UniqueUserEmailValidator()]
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        }, { updateOn: 'blur' });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    submit() {
        if (this.form.valid) {
            const registration = this.form.value;
            this._auth
                .createUser(registration.email, registration.password, registration.confirmPassword)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
                .subscribe((val) => { this._router.navigate(['login']); });
        }
    }
    cancel() {
        this._router.navigate(['']);
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/registration/registration.component.html"),
        styles: [__webpack_require__(/*! ./registration.component.styl */ "./src/app/registration/registration.component.styl")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], RegistrationComponent);



/***/ }),

/***/ "./src/app/status.service.ts":
/*!***********************************!*\
  !*** ./src/app/status.service.ts ***!
  \***********************************/
/*! exports provided: Status, StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class Status {
    constructor() {
        this.id = '';
        this.name = '';
    }
}
let StatusService = class StatusService {
    constructor(_http) {
        this._http = _http;
    }
    list() {
        return this._http.get('/api/statuses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('response'));
    }
};
StatusService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StatusService);



/***/ }),

/***/ "./src/app/tag-collection.ts":
/*!***********************************!*\
  !*** ./src/app/tag-collection.ts ***!
  \***********************************/
/*! exports provided: TagCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagCollection", function() { return TagCollection; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag.service */ "./src/app/tag.service.ts");




class TagCollection {
    constructor(tagsFormArray, builder, tagService) {
        this._tagsObject = [];
        this.searching = false;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((term) => term.length > 2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.searching = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((term) => this._tagService.lookup(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((tags) => {
            return tags.filter((tag) => {
                return !this._tagsObject
                    .map((t) => t.id)
                    .includes(tag.id);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([])))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.searching = false));
        this._tags = tagsFormArray;
        this._builder = builder;
        this._tagService = tagService;
        this.tagsForm = this._builder.group({ tag: [''] });
        this.tagsForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('tag'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((tag) => tag !== undefined))
            .subscribe((tag) => this.add(tag));
    }
    get tags() {
        return this._tagsObject;
    }
    get controls() {
        return this._tags.controls;
    }
    add(tag) {
        this._tags.push(this._builder.control(tag.id));
        this._tagsObject.push(tag);
    }
    delete(index) {
        this._tags.removeAt(index);
        this._tagsObject.splice(index, 1);
    }
}
TagCollection.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] },
    { type: _tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"] }
];


/***/ }),

/***/ "./src/app/tag.service.ts":
/*!********************************!*\
  !*** ./src/app/tag.service.ts ***!
  \********************************/
/*! exports provided: Tag, TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class Tag {
    constructor() {
        this.id = '';
        this.name = '';
    }
}
let TagService = class TagService {
    constructor(_http) {
        this._http = _http;
    }
    lookup(text) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('name', text);
        return this._http.get('/api/lookup', { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('response'));
    }
};
TagService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TagService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TagService);



/***/ }),

/***/ "./src/app/task-list/task-list.component.styl":
/*!****************************************************!*\
  !*** ./src/app/task-list/task-list.component.styl ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.tags {\n  padding: 0;\n  margin: 10px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\nul.tags > li {\n  list-style: none;\n  margin-right: 10px;\n}\nul.tags > li:last-child {\n  margin-right: 0;\n}\n.buttons {\n  margin-top: 10px;\n}\n.buttons > .btn {\n  margin-right: 5px;\n}\n.buttons > .btn:last-child {\n  margin-right: 0;\n}\n.card.task {\n  margin-top: 10px;\n}\n.task-filter.sticky-top {\n  top: 60px;\n}\n/*# sourceMappingURL=src/app/task-list/task-list.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1saXN0L3NyYy9hcHAvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVM7RUFDVCxjQUFRO0VBQ1Isb0JBQVM7RUFBVCxhQUFTO0VBQ1QseUJBQWE7VUFBYixtQkFBYTtBQ0NmO0FEQ0U7RUFDRSxnQkFBWTtFQUNaLGtCQUFjO0FDQ2xCO0FEQ0k7RUFDRSxlQUFjO0FDQ3BCO0FERUE7RUFDRSxnQkFBWTtBQ0FkO0FERUU7RUFDRSxpQkFBYztBQ0FsQjtBREVJO0VBQ0UsZUFBYztBQ0FwQjtBREVBO0VBQ0UsZ0JBQVk7QUNBZDtBREVBO0VBQ0UsU0FBSztBQ0FQO0FBQ0Esb0VBQW9FIiwiZmlsZSI6InNyYy9hcHAvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbInVsLnRhZ3NcclxuICBwYWRkaW5nOiAwXHJcbiAgbWFyZ2luOiAxMHB4IDBcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG5cclxuICA+IGxpXHJcbiAgICBsaXN0LXN0eWxlOiBub25lXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuXHJcbiAgICAmOmxhc3QtY2hpbGRcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwXHJcblxyXG5cclxuLmJ1dHRvbnNcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICA+IC5idG5cclxuICAgIG1hcmdpbi1yaWdodDogNXB4XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkXHJcbiAgICAgIG1hcmdpbi1yaWdodDogMFxyXG5cclxuLmNhcmQudGFza1xyXG4gIG1hcmdpbi10b3A6IDEwcHhcclxuXHJcbi50YXNrLWZpbHRlci5zdGlja3ktdG9wXHJcbiAgdG9wOiA2MHB4XHJcbiIsInVsLnRhZ3Mge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnVsLnRhZ3MgPiBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbnVsLnRhZ3MgPiBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJ1dHRvbnMgPiAuYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uYnV0dG9ucyA+IC5idG46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5jYXJkLnRhc2sge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRhc2stZmlsdGVyLnN0aWNreS10b3Age1xuICB0b3A6IDYwcHg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3Rhc2stbGlzdC90YXNrLWxpc3QuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/task-list/task-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-list/task-list.component.ts ***!
  \**************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _priority_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../priority.service */ "./src/app/priority.service.ts");
/* harmony import */ var _status_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../status.service */ "./src/app/status.service.ts");









let TaskListComponent = class TaskListComponent {
    constructor(_formBuilder, _auth, _taskService, _priorityService, _statusService) {
        this._formBuilder = _formBuilder;
        this._auth = _auth;
        this._taskService = _taskService;
        this._priorityService = _priorityService;
        this._statusService = _statusService;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.priorities = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        this.statuses = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        this.tasks = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        this.taskCount = 0;
        this.itemPerPage = 10;
        this.page = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](1);
        this.sortModes = [
            {
                name: 'Приоритет по возрастанию',
                value: {
                    field: 'priority',
                    mode: 'asc'
                }
            },
            {
                name: 'Приоритет по убыванию',
                value: {
                    field: 'priority',
                    mode: 'desc'
                }
            },
            {
                name: 'Статс по возрастанию',
                value: {
                    field: 'status',
                    mode: 'asc'
                }
            },
            {
                name: 'Статс по убыванию',
                value: {
                    field: 'status',
                    mode: 'desc'
                }
            },
            {
                name: 'Название по возрастанию',
                value: {
                    field: 'name',
                    mode: 'asc'
                }
            },
            {
                name: 'Название по убыванию',
                value: {
                    field: 'name',
                    mode: 'desc'
                }
            },
        ];
        this.form = this._formBuilder.group({
            priority: [''],
            status: [''],
            sort: [{
                    field: 'priority',
                    mode: 'asc'
                }]
        });
    }
    get authStateChange$() {
        return this._auth.authStateChange$;
    }
    ngOnInit() {
        this.priorities = this._priorityService.list();
        this.statuses = this._statusService.list();
        this.tasks = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this._auth.authStateChange$, Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.form.value), this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000))), this.page, this.refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([authState, filter, page]) => authState
            ? this._taskService
                .list(filter.priority, filter.status, (page - 1) * this.itemPerPage, this.itemPerPage, filter.sort).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(tasks => this.taskCount = tasks.count), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('tasks'))
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchAll"])());
    }
    pageChange(page) {
        this.page.next(page);
    }
    delete(task) {
        if (confirm('Удалить задачу?')) {
            this._taskService
                .delete(task.id)
                .subscribe((val) => this.refresh.next(true));
        }
    }
};
TaskListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] },
    { type: _priority_service__WEBPACK_IMPORTED_MODULE_7__["PriorityService"] },
    { type: _status_service__WEBPACK_IMPORTED_MODULE_8__["StatusService"] }
];
TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-list',
        template: __webpack_require__(/*! raw-loader!./task-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/task-list/task-list.component.html"),
        styles: [__webpack_require__(/*! ./task-list.component.styl */ "./src/app/task-list/task-list.component.styl")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"],
        _priority_service__WEBPACK_IMPORTED_MODULE_7__["PriorityService"],
        _status_service__WEBPACK_IMPORTED_MODULE_8__["StatusService"]])
], TaskListComponent);



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: Task, TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class Task {
    constructor() {
        this.id = '';
        this.userId = '';
        this.user = '';
        this.statusId = '';
        this.status = '';
        this.priorityId = '';
        this.priority = '';
        this.name = '';
        this.tags = [];
    }
}
let TaskService = class TaskService {
    constructor(_http) {
        this._http = _http;
    }
    list(priorityId = '', statusId = '', offset = 0, limit = 0, sort = {
        field: '',
        mode: 'asc'
    }) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('priority_id', priorityId)
            .set('status_id', statusId)
            .set('offset', offset.toString())
            .set('limit', limit.toString())
            .set('sort_field', sort.field)
            .set('sort_mode', sort.mode);
        return this._http.get('/api/task', {
            params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('response'));
    }
    get(id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        return this._http.get(`/api/task/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('response'));
    }
    create(task) {
        const params = this.httpParansFromTask(task);
        return this._http.post(`/api/task`, '', { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((response) => {
            // this._errors.flashError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(response.error.errors);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('response'));
    }
    update(task) {
        const params = this.httpParansFromTask(task);
        return this._http.put(`/api/task/${task.id}`, '', { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((response) => {
            // this._errors.flashError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(response.error.errors);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('response'));
    }
    delete(id) {
        return this._http.delete(`/api/task/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('response'));
    }
    httpParansFromTask(task) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('status_id', task.statusId)
            .set('priority_id', task.priorityId)
            .set('name', task.name);
        task.tags.forEach((tag, index) => {
            params = params.set(`tags[${index}]`, tag);
        });
        return params;
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TaskService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\OpenServer\domains\silex\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
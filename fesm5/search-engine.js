import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchEngineService = /** @class */ (function () {
    function SearchEngineService() {
    }
    SearchEngineService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SearchEngineService.ctorParameters = function () { return []; };
    /** @nocollapse */ SearchEngineService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SearchEngineService_Factory() { return new SearchEngineService(); }, token: SearchEngineService, providedIn: "root" });
    return SearchEngineService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchEngineComponent = /** @class */ (function () {
    function SearchEngineComponent() {
    }
    /**
     * @return {?}
     */
    SearchEngineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SearchEngineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-SearchEngine',
                    template: "\n    <p>\n      search-engine works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    SearchEngineComponent.ctorParameters = function () { return []; };
    return SearchEngineComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchEngineModule = /** @class */ (function () {
    function SearchEngineModule() {
    }
    SearchEngineModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SearchEngineComponent],
                    imports: [],
                    exports: [SearchEngineComponent]
                },] }
    ];
    return SearchEngineModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SearchEngineComponent, SearchEngineModule, SearchEngineService };
//# sourceMappingURL=search-engine.js.map

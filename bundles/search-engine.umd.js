(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('search-engine', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['search-engine'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchEngineService = /** @class */ (function () {
        function SearchEngineService() {
        }
        SearchEngineService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SearchEngineService.ctorParameters = function () { return []; };
        /** @nocollapse */ SearchEngineService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SearchEngineService_Factory() { return new SearchEngineService(); }, token: SearchEngineService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [SearchEngineComponent],
                        imports: [],
                        exports: [SearchEngineComponent]
                    },] }
        ];
        return SearchEngineModule;
    }());

    exports.SearchEngineComponent = SearchEngineComponent;
    exports.SearchEngineModule = SearchEngineModule;
    exports.SearchEngineService = SearchEngineService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=search-engine.umd.js.map

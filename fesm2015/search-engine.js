import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchEngineService {
    constructor() { }
}
SearchEngineService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SearchEngineService.ctorParameters = () => [];
/** @nocollapse */ SearchEngineService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SearchEngineService_Factory() { return new SearchEngineService(); }, token: SearchEngineService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchEngineComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SearchEngineComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-SearchEngine',
                template: `
    <p>
      search-engine works!
    </p>
  `
            }] }
];
/** @nocollapse */
SearchEngineComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchEngineModule {
}
SearchEngineModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SearchEngineComponent],
                imports: [],
                exports: [SearchEngineComponent]
            },] }
];

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

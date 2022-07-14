(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('format-code', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["format-code"] = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var FormatCodeService = /** @class */ (function () {
        function FormatCodeService() {
        }
        return FormatCodeService;
    }());
    FormatCodeService.ɵfac = function FormatCodeService_Factory(t) { return new (t || FormatCodeService)(); };
    FormatCodeService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: FormatCodeService, factory: FormatCodeService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(FormatCodeService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var _c0 = ["*"];
    var FormatCodeComponent = /** @class */ (function () {
        function FormatCodeComponent(renderer, el) {
            this.renderer = renderer;
            this.el = el;
            this.color = 'rgb(42,100,250)';
            this.bgColor = 'rgb(0,0,30,0.9)';
            this.font = 'consolas, monospace';
        }
        FormatCodeComponent.prototype.ngOnInit = function () {
            this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'color', this.color);
            this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'backgruondColor', this.bgColor);
            this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'font-family', this.font);
        };
        return FormatCodeComponent;
    }());
    FormatCodeComponent.ɵfac = function FormatCodeComponent_Factory(t) { return new (t || FormatCodeComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    FormatCodeComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: FormatCodeComponent, selectors: [["lib-format-code"]], inputs: { color: "color", bgColor: "bgColor", font: "font" }, ngContentSelectors: _c0, decls: 2, vars: 0, template: function FormatCodeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div");
                i0__namespace.ɵɵprojection(1);
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: ["div[_ngcontent-%COMP%] {\n        padding: 20px;\n        margin: 10px auto;\n        border-radius: 7px;\n      }"] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(FormatCodeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-format-code',
                        template: "\n    <div>\n      <ng-content> </ng-content>\n    </div>\n  ",
                        styles: [
                            "\n      div {\n        padding: 20px;\n        margin: 10px auto;\n        border-radius: 7px;\n      }\n    ",
                        ],
                    }]
            }], function () { return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }]; }, { color: [{
                    type: i0.Input
                }], bgColor: [{
                    type: i0.Input
                }], font: [{
                    type: i0.Input
                }] });
    })();

    var FormatCodeModule = /** @class */ (function () {
        function FormatCodeModule() {
        }
        return FormatCodeModule;
    }());
    FormatCodeModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: FormatCodeModule });
    FormatCodeModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function FormatCodeModule_Factory(t) { return new (t || FormatCodeModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FormatCodeModule, { declarations: [FormatCodeComponent], exports: [FormatCodeComponent] }); })();
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(FormatCodeModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [FormatCodeComponent],
                        imports: [],
                        exports: [FormatCodeComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of format-code
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FormatCodeComponent = FormatCodeComponent;
    exports.FormatCodeModule = FormatCodeModule;
    exports.FormatCodeService = FormatCodeService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=format-code.umd.js.map

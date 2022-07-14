import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';

class FormatCodeService {
    constructor() { }
}
FormatCodeService.ɵfac = function FormatCodeService_Factory(t) { return new (t || FormatCodeService)(); };
FormatCodeService.ɵprov = i0.ɵɵdefineInjectable({ token: FormatCodeService, factory: FormatCodeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormatCodeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const _c0 = ["*"];
class FormatCodeComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.color = 'rgb(42,100,250)';
        this.bgColor = 'rgb(0,0,30,0.9)';
        this.font = 'consolas, monospace';
    }
    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'color', this.color);
        this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'backgruondColor', this.bgColor);
        this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'font-family', this.font);
    }
}
FormatCodeComponent.ɵfac = function FormatCodeComponent_Factory(t) { return new (t || FormatCodeComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
FormatCodeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormatCodeComponent, selectors: [["lib-format-code"]], inputs: { color: "color", bgColor: "bgColor", font: "font" }, ngContentSelectors: _c0, decls: 2, vars: 0, template: function FormatCodeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } }, styles: ["div[_ngcontent-%COMP%] {\n        padding: 20px;\n        margin: 10px auto;\n        border-radius: 7px;\n      }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormatCodeComponent, [{
        type: Component,
        args: [{
                selector: 'lib-format-code',
                template: `
    <div>
      <ng-content> </ng-content>
    </div>
  `,
                styles: [
                    `
      div {
        padding: 20px;
        margin: 10px auto;
        border-radius: 7px;
      }
    `,
                ],
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { color: [{
            type: Input
        }], bgColor: [{
            type: Input
        }], font: [{
            type: Input
        }] }); })();

class FormatCodeModule {
}
FormatCodeModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormatCodeModule });
FormatCodeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FormatCodeModule_Factory(t) { return new (t || FormatCodeModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormatCodeModule, { declarations: [FormatCodeComponent], exports: [FormatCodeComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormatCodeModule, [{
        type: NgModule,
        args: [{
                declarations: [FormatCodeComponent],
                imports: [],
                exports: [FormatCodeComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of format-code
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FormatCodeComponent, FormatCodeModule, FormatCodeService };
//# sourceMappingURL=format-code.js.map

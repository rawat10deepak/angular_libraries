import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class FormatCodeComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWNvZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZm9ybWF0LWNvZGUvc3JjL2xpYi9mb3JtYXQtY29kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7QUFtQmhGLE1BQU0sT0FBTyxtQkFBbUI7SUFLOUIsWUFBb0IsUUFBbUIsRUFBVSxFQUFjO1FBQTNDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBSnRELFVBQUssR0FBVyxpQkFBaUIsQ0FBQztRQUNsQyxZQUFPLEdBQVcsaUJBQWlCLENBQUM7UUFDcEMsU0FBSSxHQUFXLHFCQUFxQixDQUFDO0lBRW9CLENBQUM7SUFFbkUsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFDdkMsT0FBTyxFQUNQLElBQUksQ0FBQyxLQUFLLENBQ1gsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFDdkMsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFDdkMsYUFBYSxFQUNiLElBQUksQ0FBQyxJQUFJLENBQ1YsQ0FBQztJQUNKLENBQUM7O3NGQXpCVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjs7UUFkNUIsMkJBQ0U7UUFBQSxrQkFBMEI7UUFDNUIsaUJBQU07O2tEQVlHLG1CQUFtQjtjQWpCL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRTtvQkFDTjs7Ozs7O0tBTUM7aUJBQ0Y7YUFDRjtxRkFFVSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZm9ybWF0LWNvZGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgICA8bmctY29udGVudD4gPC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBkaXYge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdENvZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJ3JnYig0MiwxMDAsMjUwKSc7XG4gIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZyA9ICdyZ2IoMCwwLDMwLDAuOSknO1xuICBASW5wdXQoKSBmb250OiBzdHJpbmcgPSAnY29uc29sYXMsIG1vbm9zcGFjZSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQsXG4gICAgICAnY29sb3InLFxuICAgICAgdGhpcy5jb2xvclxuICAgICk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLFxuICAgICAgJ2JhY2tncnVvbmRDb2xvcicsXG4gICAgICB0aGlzLmJnQ29sb3JcbiAgICApO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCxcbiAgICAgICdmb250LWZhbWlseScsXG4gICAgICB0aGlzLmZvbnRcbiAgICApO1xuICB9XG59XG4iXX0=
import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FormatCodeComponent implements OnInit {
    private renderer;
    private el;
    color: string;
    bgColor: string;
    font: string;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<FormatCodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormatCodeComponent, "lib-format-code", never, { "color": "color"; "bgColor": "bgColor"; "font": "font"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=format-code.component.d.ts.map
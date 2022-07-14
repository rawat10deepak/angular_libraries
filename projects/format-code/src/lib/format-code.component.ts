import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
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
})
export class FormatCodeComponent implements OnInit {
  @Input() color: string = 'rgb(42,100,250)';
  @Input() bgColor: string = 'rgb(0,0,30,0.9)';
  @Input() font: string = 'consolas, monospace';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.el.nativeElement.firstElementChild,
      'color',
      this.color
    );

    this.renderer.setStyle(
      this.el.nativeElement.firstElementChild,
      'backgruondColor',
      this.bgColor
    );

    this.renderer.setStyle(
      this.el.nativeElement.firstElementChild,
      'font-family',
      this.font
    );
  }
}

import {ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnInit, Optional} from '@angular/core';
import {BiitIconService} from "./biit-icon.service";
import {DOCUMENT} from "@angular/common";
import {biitIcon} from "biit-icons-collection";

@Component({
  selector: 'biit-icon',
  template: `
    <ng-content></ng-content>
  `,
  styles: [':host::ng-deep svg{width: 50px; height: 50px; display: block}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiitIconComponent implements OnInit {
  private svgIcon: SVGElement | undefined = undefined;

  @Input('name') set nameUpdater(name: biitIcon | undefined) {
    this.name = name;
    this.draw();
  }
  @Input('svgStyle') set styleUpdater(style: any) {
    this.style = style;
    this.draw();
  }
  @Input('pathStyle') set stylePathUpdater(style: any) {
    this.pathStyle = style;
    this.draw();
  }

  private name: biitIcon | undefined;
  private style: any;
  private pathStyle: any;
  private initialized: boolean = true; //avoids draw for each input while initializing.
  public constructor(private element: ElementRef, private biitIconService: BiitIconService, @Optional() @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    this.initialized = false;
    this.draw();
  }

  private draw(): void {
    if(this.initialized) {
      return;
    }
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    if (!this.name) {
      return;
    }
    const svgData: string | undefined = this.biitIconService.getIcon(this.name);
    if (svgData) {
      this.svgIcon = this.svgElementFromString(svgData);
      if (!this.svgIcon) {
        return;
      }
      this.svgIcon.style.width = '100%';
      this.svgIcon.style.height = '100%';
      if (this.style) {
        Object.keys(this.style).forEach(styleKey => {
          if (this.svgIcon) {
            (this.svgIcon.style as any)[styleKey] = (this.style as any)[styleKey]
          }
        });
      }
      if (this.pathStyle) {
        Array.from(this.svgIcon.getElementsByTagName('path')).forEach(path => {
          Object.keys(this.pathStyle).forEach(styleKey => (path.style as any)[styleKey] = (this.pathStyle as any)[styleKey] );
        })
      }
      this.element.nativeElement.appendChild(this.svgIcon);
    }
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div: HTMLDivElement = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
  }
}

import {
  ComponentRef,
  Directive,
  HostListener,
  Input,
  ViewContainerRef
} from '@angular/core';
import {BiitTooltipComponent} from './biit-tooltip.component';

@Directive({
  selector: '[tooltip]'
})
export class BiitTooltipDirective {
  @Input() tooltip = '';
  @Input() ignorePadding: boolean = false;

  constructor(private hostContainerRef: ViewContainerRef) { }

  public createTooltip(): ComponentRef<BiitTooltipComponent> {
    return this.hostContainerRef.createComponent(BiitTooltipComponent);
  }

  public destroyTooltip(): void {
    this.hostContainerRef.clear();
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    if (!this.tooltip || !this.tooltip.length) {
      return;
    }

    let component: ComponentRef<BiitTooltipComponent> = this.createTooltip();
    let instance = component.instance

    // Sets text
    instance.text = this.tooltip;
    // Refreshes metadata in ComponentRef
    component.changeDetectorRef.detectChanges();

    // HTMLElements of both tooltip and target elements
    let tooltipElement = instance.tooltip.nativeElement;
    let parentElement = this.hostContainerRef.element.nativeElement;

    this.setTooltipComponentProperties(instance, tooltipElement, parentElement);
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.destroyTooltip();
  }

  private setTooltipComponentProperties(instance: BiitTooltipComponent, tooltipElement: HTMLElement, parentElement: HTMLElement) {

    const tooltipCoords = tooltipElement.getBoundingClientRect();
    const parentCoords = parentElement.getBoundingClientRect();
    const bodyStyle = getComputedStyle(document.body);

    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Checking available screen space
    const fitsTop = topCheck(this.ignorePadding);
    const fitsLeft = leftCheck(this.ignorePadding);
    const fitsRight = rightCheck(this.ignorePadding);

    if (fitsTop) {
      tooltipElement.classList.add('onwards');
      instance.top = parentCoords.top - (rem/2) - tooltipElement.offsetHeight + "px";
    } else {
      tooltipElement.classList.add('downwards');
      instance.top = parentCoords.bottom + (rem/2) + "px";
    }

    if (!fitsLeft) {
      instance.left = this.ignorePadding ? "0px" : document.body.style.paddingLeft;
    } else if (!fitsRight) {
      instance.left = this.ignorePadding ? window.innerWidth - tooltipElement.offsetWidth + "px"
                      : window.innerWidth - parseFloat(bodyStyle.paddingRight) - tooltipElement.offsetWidth + "px";
    } else {
      instance.left = parentCoords.left + parentCoords.width/2 - tooltipCoords.width/2 + "px";
    }

    // Support inner functions
    function topCheck(ignorePadding: boolean): boolean {
      if (ignorePadding) {
        return parentCoords.top - rem - tooltipElement.offsetHeight >= 0;
      } else {
        return parentCoords.top - rem - tooltipElement.offsetHeight - parseFloat(bodyStyle.paddingTop) >= 0;
      }
    }

    function leftCheck(ignorePadding: boolean): boolean {
      if (ignorePadding) {
        return parentCoords.left + parentElement.offsetWidth/2 - tooltipElement.offsetWidth/2 >= 0;
      } else {
        return parentCoords.left + parentElement.offsetWidth/2 - tooltipElement.offsetWidth/2 - parseFloat(bodyStyle.paddingLeft) >= 0;
      }
    }

    function rightCheck(ignorePadding: boolean): boolean {
      if (ignorePadding) {
        return parentCoords.right - parentElement.offsetWidth/2 + tooltipElement.offsetWidth/2 <= window.innerWidth;
      } else {
        return parentCoords.right - parentElement.offsetWidth/2 + tooltipElement.offsetWidth/2 + parseFloat(bodyStyle.paddingRight) <= window.innerWidth;
      }
    }
  }
}

import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{
  @Input('highlight') highlightColor: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.highlightColor || 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = null;
  }



}

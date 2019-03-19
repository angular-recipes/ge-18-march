import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{
  @Input('highlight') highlightColor: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    console.log(this.el.nativeElement, this.highlightColor);
    this.el.nativeElement.style.color = this.highlightColor || 'yellow';
  }

}

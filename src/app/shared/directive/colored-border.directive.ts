import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

@Directive({
  selector: '[appColoredBorder]',
  standalone: true,
})
export default class ColoredBorderDirective implements OnInit {
  @Input({ alias: 'appColoredBorder', required: true }) publishedAt!: string;

  constructor(private hostElement: ElementRef) {
  }

  setBorderClass(): void {
    const now = new Date();
    const timeDiff = (now.getTime() - new Date(this.publishedAt).getTime()) / (1000 * 60 * 60 * 24);

    if (timeDiff > 180) {
      this.hostElement.nativeElement.style.borderBottom = '3px solid red';
    } else if (timeDiff > 30) {
      this.hostElement.nativeElement.style.borderBottom = '3px solid yellow';
    } else if (timeDiff > 7) {
      this.hostElement.nativeElement.style.borderBottom = '3px solid green';
    } else {
      this.hostElement.nativeElement.style.borderBottom = '3px solid blue';
    }
  }

  ngOnInit() {
    this.setBorderClass();
  }
}

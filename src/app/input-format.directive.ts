import { Directive, HostListener, ElementRef, Input } from "@angular/core";
import { format } from "util";

@Directive({
  selector: "[appInputFormat]"
})
export class InputFormatDirective {
  @Input("appInputFormat") format;
  constructor(private el: ElementRef) {}

  @HostListener("blur") onblur() {
    let value: string = this.el.nativeElement.value;
    if (this.format === "lowercase") {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}

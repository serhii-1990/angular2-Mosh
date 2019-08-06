import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <button class="btn btn-primary" [class.active]="isActive">
      Save
    </button>
    <button
      class="btn btn-primary"
      [style.backgroundColor]="isActive ? 'blue' : 'white'"
    >
      Save
    </button>
  `
})
export class Courses {
  isActive = false;
}

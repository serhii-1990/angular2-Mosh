import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <div (click)="onDivClicked()">
      <button class="btn btn-primary" (click)="onSave($event)">
        Save
      </button>
    </div>
  `
})
export class Courses {
  isActive = false;
  onDivClicked() {
    console.log("Div was clicked");
  }

  onSave($event) {
    $event.stopPropagation();
    console.log("Save", $event);
  }
}

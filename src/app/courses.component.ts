import { Component } from "@angular/core";
import { CoursesService } from "./courses.servise";

@Component({
  selector: "courses",
  template: `
    <h1>
      {{ mainHeader }}
    </h1>

    <button class="btn btn-primary" (click)="onSave($event)">
      Save
    </button>
    <input (keyup)="onKeyUp($event)" />
  `
})
export class Courses {
  mainHeader = "Angular courses";
  imageUrl = "https://picsum.photos/200/300";
  courses;
  isActive = true;
  constructor(servise: CoursesService) {
    this.courses = servise.getCourses();
  }
  getTitle() {
    return this.mainHeader;
  }
  onSave($event) {
    $event.stopPropagation();
    console.log("button clicked", $event);
  }
  onKeyUp($event) {
    console.log("button hit");
  }
}

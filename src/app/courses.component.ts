import { Component } from "@angular/core";
import { CoursesService } from "./courses.servise";

@Component({
  selector: "courses",
  template: `
    <h1>
      {{ mainHeader }}
    </h1>
    <img [src]="imageUrl" />
    <br />
    <button
      class="btn btn-primary"
      [class.active]="isActive"
      [style.backgroundColor]="isActive ? 'green' : 'red'"
    >
      Save
    </button>
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
}
